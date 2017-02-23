(ns components.keep-calm
  (:require [reagent-components-playground.data :as d :refer [app-state]]
            ;[re-frame.core :as rf]
            [reagent.core :as r :refer [atom render]]
            [cljsjs.react]
            [components.keyboard :as keyboard]
            [cljs.core.async :refer [chan >! <!]]
            [kioo.reagent :as k]
            [cljs.core :refer [clj->js js->clj]])

  (:require-macros [cljs.core.async.macros :refer [go]]
                   [kioo.reagent :refer [defsnippet deftemplate]]))




( def local (atom {:active nil}))


 
; helpers

(defn dump-content []
  (fn [node]
    (.log js/console (clj->js (str "-> " (:content node))))
    node))


(defn get-content-from-db []
  (fn [node]
      (assoc node :content
        (->> node 
             :attrs 
             :data-contentid 
             keyword 
             (get (:data @app-state))))))



;; components
;;
(defsnippet poster "keep-calm.templ.html" [:.component-keep-calm ]
  [props]
  {
   ;transforms
   [:.component-keep-calm]
   (k/add-class 
     (if (contains? props :state)
         (str "state-" (:state props))))
   
   [:* (attr? :data-contentid)]
   (get-content-from-db)

   [:#edit-button]
   (k/listen :on-click #(d/dispatch :edit))})


(go
  (while true
    (let [ch (<! keyboard/out)]
      (case ch
        "_" (swap! local update (:active @local) #(str % " " ))
        "#" (swap! local update (:active @local) #(apply str (drop-last %))) 
            (swap! local update (:active @local) #(str % ch ))))))



(defn update-local-data [e]
  (let [local-id (-> e .-target .-dataset .-inputid keyword)
         new-value (-> e .-target .-value)]
    (swap! local assoc local-id new-value)))  



(defn set-active [e]
  (let [local-id (-> e .-target .-dataset .-inputid keyword)]
    (swap! local assoc :active local-id)))



(defn set-content []
  (fn [node]
    (let [local-id ( keyword (get-in node [:attrs :data-inputid]))]
      (do
        (-> node 
            ((k/add-class (if (= (:active @local) local-id) 
                            "state-focused"
                            "state-normal")))
            (assoc-in [:attrs :value] (get @local local-id)))))))



(defsnippet editor "keep-calm.templ.html" [:.component-my-edit]
  []
  {
   ;transforms
   
   [:.use-component-keyboard]
   (k/content [keyboard/keyboard])

   [:#close-button]
   (k/listen :on-click #(d/dispatch :cancel-edit))
 
   [:#set-button]
   (k/listen 
     :on-click 
     #(do
        (swap! app-state assoc :edit false)
        (swap! app-state assoc-in [:data :text-after] (:after @local))
        (swap! app-state assoc-in [:data :text-before] (:before @local))))

   
   [:input]
   (k/do->
    (set-content) 
    (k/listen :on-focus set-active)
    (k/listen :on-change update-local-data)) 
   }) 

