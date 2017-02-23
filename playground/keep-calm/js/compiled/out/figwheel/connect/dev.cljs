(ns figwheel.connect.dev (:require [figwheel.client] [figwheel.client.utils] [reagent-components-playgroud.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/reagent-components-playgroud.core.on-js-reload (apply js/reagent-components-playgroud.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'reagent-components-playgroud.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

