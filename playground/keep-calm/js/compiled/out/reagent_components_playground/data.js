// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent_components_playground.data');
goog.require('cljs.core');
goog.require('reagent.core');
reagent_components_playground.data.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit","edit",-1641834166),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-before","text-before",1093985884),"Keep calm",new cljs.core.Keyword(null,"text-after","text-after",-1882964597),"carry on"], null)], null));
reagent_components_playground.data.dispatch_table = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent_components_playground.data.set_dispatch = (function reagent_components_playground$data$set_dispatch(name,fx){
cljs.core.println.call(null,[cljs.core.str("Registered "),cljs.core.str(name)].join(''));

return cljs.core.swap_BANG_.call(null,reagent_components_playground.data.dispatch_table,cljs.core.assoc,name,fx);
});
reagent_components_playground.data.dispatch = (function reagent_components_playground$data$dispatch(name){
cljs.core.println.call(null,[cljs.core.str("Dispatching "),cljs.core.str(name)].join(''));

return cljs.core.get.call(null,cljs.core.deref.call(null,reagent_components_playground.data.dispatch_table),name).call(null);
});

//# sourceMappingURL=data.js.map?rel=1487768186350