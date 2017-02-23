// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('reagent_components_playgroud.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__92226__delegate = function (x){
if(cljs.core.truth_(reagent_components_playgroud.core.on_js_reload)){
return cljs.core.apply.call(null,reagent_components_playgroud.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'reagent-components-playgroud.core/on-js-reload' is missing");
}
};
var G__92226 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__92227__i = 0, G__92227__a = new Array(arguments.length -  0);
while (G__92227__i < G__92227__a.length) {G__92227__a[G__92227__i] = arguments[G__92227__i + 0]; ++G__92227__i;}
  x = new cljs.core.IndexedSeq(G__92227__a,0);
} 
return G__92226__delegate.call(this,x);};
G__92226.cljs$lang$maxFixedArity = 0;
G__92226.cljs$lang$applyTo = (function (arglist__92228){
var x = cljs.core.seq(arglist__92228);
return G__92226__delegate(x);
});
G__92226.cljs$core$IFn$_invoke$arity$variadic = G__92226__delegate;
return G__92226;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1487768493695