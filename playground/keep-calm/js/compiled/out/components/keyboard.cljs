(ns components.keyboard
  (:require [reagent-components-playground.data :as d :refer [app-state]]
            ;[re-frame.core :as rf]
            [reagent.core :as r :refer [atom render]]
            [cljsjs.react]
            [cljs.core.async :refer [chan >! <!]]
            [kioo.reagent :as k]
            [cljs.core :refer [clj->js js->clj]])

  (:require-macros [cljs.core.async.macros :refer [go]]
                   [kioo.reagent :refer [defsnippet deftemplate]]))


(def out (chan))

(defn get-ch [e]
  (let [ch (last (-> e .-target .-id))]
    (go (>! out ch))))

(defsnippet keyboard "keyboard.templ.html" [:.component-keyboard]
  [props]
  {[:.key]
   (k/listen :on-click get-ch)
   })

