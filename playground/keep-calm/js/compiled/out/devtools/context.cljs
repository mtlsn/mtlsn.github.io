(ns devtools.context)

; default root javascript context, typically js/window in browser, or the root javascript object in node.js
(defn ^:dynamic get-root []
  (if (exists? js/goog)
    js/goog.global))
