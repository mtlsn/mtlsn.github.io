(ns reagent-components-playgroud.core
  (:require [reagent.core :as r :refer [atom render]]
            [components.keep-calm :as kc]
            [components.keyboard :as keyboard]
            [reagent-components-playground.data :as data 
             :refer [app-state set-dispatch dispatch]]))


(enable-console-print!)
(println "Figwheel is running...")



;; this is the main rendering function
(defn main []
  (fn []
    (let [is-edit? (:edit @app-state)]
      [:div
        [kc/poster (if is-edit? {:state "background"})]
        (if is-edit? [kc/editor] )])))


(defn init []
  (do
    (println "starting...")
    (set-dispatch :edit #(swap! app-state assoc :edit true))
    (set-dispatch :cancel-edit #(swap! app-state assoc :edit false))))
    (set-dispatch :set-text #(println "set text"))
     


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


(do
  (init)
  (render [main] (.getElementById js/document "app")))
