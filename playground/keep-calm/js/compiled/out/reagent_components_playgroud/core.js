// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent_components_playgroud.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('components.keep_calm');
goog.require('components.keyboard');
goog.require('reagent_components_playground.data');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Figwheel is running...");
reagent_components_playgroud.core.main = (function reagent_components_playgroud$core$main(){
return (function (){
var is_edit_QMARK_ = new cljs.core.Keyword(null,"edit","edit",-1641834166).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_components_playground.data.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.keep_calm.poster,(cljs.core.truth_(is_edit_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),"background"], null):null)], null),(cljs.core.truth_(is_edit_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.keep_calm.editor], null):null)], null);
});
});
reagent_components_playgroud.core.init = (function reagent_components_playgroud$core$init(){
cljs.core.println.call(null,"starting...");

reagent_components_playground.data.set_dispatch.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),(function (){
return cljs.core.swap_BANG_.call(null,reagent_components_playground.data.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"edit","edit",-1641834166),true);
}));

return reagent_components_playground.data.set_dispatch.call(null,new cljs.core.Keyword(null,"cancel-edit","cancel-edit",-1598330442),(function (){
return cljs.core.swap_BANG_.call(null,reagent_components_playground.data.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"edit","edit",-1641834166),false);
}));
});
reagent_components_playground.data.set_dispatch.call(null,new cljs.core.Keyword(null,"set-text","set-text",1346789745),(function (){
return cljs.core.println.call(null,"set text");
}));
reagent_components_playgroud.core.on_js_reload = (function reagent_components_playgroud$core$on_js_reload(){
return null;
});
reagent_components_playgroud.core.init.call(null);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_components_playgroud.core.main], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1487768493685