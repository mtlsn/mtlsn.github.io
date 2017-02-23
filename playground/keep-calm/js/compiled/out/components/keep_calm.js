// Compiled by ClojureScript 1.9.229 {}
goog.provide('components.keep_calm');
goog.require('cljs.core');
goog.require('components.keyboard');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljs.core.async');
goog.require('kioo.reagent');
goog.require('reagent_components_playground.data');
components.keep_calm.local = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),null], null));
components.keep_calm.dump_content = (function components$keep_calm$dump_content(){
return (function (node){
console.log(cljs.core.clj__GT_js.call(null,[cljs.core.str("-> "),cljs.core.str(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node))].join('')));

return node;
});
});
components.keep_calm.get_content_from_db = (function components$keep_calm$get_content_from_db(){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_components_playground.data.app_state)),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"data-contentid","data-contentid",-12233258).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)))));
});
});
components.keep_calm.poster = (function components$keep_calm$poster(props){
var ch92149 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.add_class.call(null,((cljs.core.contains_QMARK_.call(null,props,new cljs.core.Keyword(null,"state","state",-1988618099)))?[cljs.core.str("state-"),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(props))].join(''):null)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"component-keep-calm fillscreen",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.img,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"crown",new cljs.core.Keyword(null,"src","src",-1651076051),"img/crown.svg",new cljs.core.Keyword(null,"width","width",-384071477),"125",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))),cljs.core.apply.call(null,React.DOM.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"text",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.ul,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,components.keep_calm.get_content_from_db.call(null).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-contentid","data-contentid",-12233258),"text-before",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" Keep CAlm "], null))], null))),cljs.core.apply.call(null,React.DOM.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["and"], null))))], null)))),kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,components.keep_calm.get_content_from_db.call(null).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-contentid","data-contentid",-12233258),"text-after",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" Carry On"], null))], null)))], null))))], null)))),kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent_components_playground.data.dispatch.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166));
})).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"component-button",new cljs.core.Keyword(null,"id","id",-1388402092),"edit-button",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["edit"], null))], null)))], null))], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch92149))){
return cljs.core.first.call(null,ch92149);
} else {
return cljs.core.apply.call(null,React.DOM.span,null,ch92149);
}
});
var c__26902__auto___92205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___92205){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___92205){
return (function (state_92181){
var state_val_92182 = (state_92181[(1)]);
if((state_val_92182 === (7))){
var inst_92156 = (state_92181[(7)]);
var inst_92156__$1 = (state_92181[(2)]);
var state_92181__$1 = (function (){var statearr_92183 = state_92181;
(statearr_92183[(7)] = inst_92156__$1);

return statearr_92183;
})();
var G__92184_92206 = inst_92156__$1;
switch (G__92184_92206) {
case "_":
var statearr_92185_92208 = state_92181__$1;
(statearr_92185_92208[(1)] = (9));


break;
case "#":
var statearr_92186_92209 = state_92181__$1;
(statearr_92186_92209[(1)] = (10));


break;
default:
var statearr_92187_92210 = state_92181__$1;
(statearr_92187_92210[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (1))){
var state_92181__$1 = state_92181;
var statearr_92188_92211 = state_92181__$1;
(statearr_92188_92211[(2)] = null);

(statearr_92188_92211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (4))){
var state_92181__$1 = state_92181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92181__$1,(7),components.keyboard.out);
} else {
if((state_val_92182 === (6))){
var inst_92177 = (state_92181[(2)]);
var state_92181__$1 = state_92181;
var statearr_92189_92212 = state_92181__$1;
(statearr_92189_92212[(2)] = inst_92177);

(statearr_92189_92212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (3))){
var inst_92179 = (state_92181[(2)]);
var state_92181__$1 = state_92181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92181__$1,inst_92179);
} else {
if((state_val_92182 === (2))){
var state_92181__$1 = state_92181;
var statearr_92190_92213 = state_92181__$1;
(statearr_92190_92213[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (11))){
var inst_92156 = (state_92181[(7)]);
var inst_92167 = cljs.core.deref.call(null,components.keep_calm.local);
var inst_92168 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_92167);
var inst_92169 = (function (){var ch = inst_92156;
return ((function (ch,inst_92156,inst_92167,inst_92168,state_val_92182,c__26902__auto___92205){
return (function (p1__92152_SHARP_){
return [cljs.core.str(p1__92152_SHARP_),cljs.core.str(ch)].join('');
});
;})(ch,inst_92156,inst_92167,inst_92168,state_val_92182,c__26902__auto___92205))
})();
var inst_92170 = cljs.core.swap_BANG_.call(null,components.keep_calm.local,cljs.core.update,inst_92168,inst_92169);
var state_92181__$1 = state_92181;
var statearr_92192_92214 = state_92181__$1;
(statearr_92192_92214[(2)] = inst_92170);

(statearr_92192_92214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (9))){
var inst_92156 = (state_92181[(7)]);
var inst_92157 = cljs.core.deref.call(null,components.keep_calm.local);
var inst_92158 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_92157);
var inst_92159 = (function (){var ch = inst_92156;
return ((function (ch,inst_92156,inst_92157,inst_92158,state_val_92182,c__26902__auto___92205){
return (function (p1__92150_SHARP_){
return [cljs.core.str(p1__92150_SHARP_),cljs.core.str(" ")].join('');
});
;})(ch,inst_92156,inst_92157,inst_92158,state_val_92182,c__26902__auto___92205))
})();
var inst_92160 = cljs.core.swap_BANG_.call(null,components.keep_calm.local,cljs.core.update,inst_92158,inst_92159);
var state_92181__$1 = state_92181;
var statearr_92193_92215 = state_92181__$1;
(statearr_92193_92215[(2)] = inst_92160);

(statearr_92193_92215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (5))){
var state_92181__$1 = state_92181;
var statearr_92194_92216 = state_92181__$1;
(statearr_92194_92216[(2)] = null);

(statearr_92194_92216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (10))){
var inst_92156 = (state_92181[(7)]);
var inst_92162 = cljs.core.deref.call(null,components.keep_calm.local);
var inst_92163 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_92162);
var inst_92164 = (function (){var ch = inst_92156;
return ((function (ch,inst_92156,inst_92162,inst_92163,state_val_92182,c__26902__auto___92205){
return (function (p1__92151_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,p1__92151_SHARP_));
});
;})(ch,inst_92156,inst_92162,inst_92163,state_val_92182,c__26902__auto___92205))
})();
var inst_92165 = cljs.core.swap_BANG_.call(null,components.keep_calm.local,cljs.core.update,inst_92163,inst_92164);
var state_92181__$1 = state_92181;
var statearr_92195_92217 = state_92181__$1;
(statearr_92195_92217[(2)] = inst_92165);

(statearr_92195_92217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92182 === (8))){
var inst_92173 = (state_92181[(2)]);
var state_92181__$1 = (function (){var statearr_92196 = state_92181;
(statearr_92196[(8)] = inst_92173);

return statearr_92196;
})();
var statearr_92197_92218 = state_92181__$1;
(statearr_92197_92218[(2)] = null);

(statearr_92197_92218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26902__auto___92205))
;
return ((function (switch__26881__auto__,c__26902__auto___92205){
return (function() {
var components$keep_calm$state_machine__26882__auto__ = null;
var components$keep_calm$state_machine__26882__auto____0 = (function (){
var statearr_92201 = [null,null,null,null,null,null,null,null,null];
(statearr_92201[(0)] = components$keep_calm$state_machine__26882__auto__);

(statearr_92201[(1)] = (1));

return statearr_92201;
});
var components$keep_calm$state_machine__26882__auto____1 = (function (state_92181){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_92181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e92202){if((e92202 instanceof Object)){
var ex__26885__auto__ = e92202;
var statearr_92203_92219 = state_92181;
(statearr_92203_92219[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92220 = state_92181;
state_92181 = G__92220;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
components$keep_calm$state_machine__26882__auto__ = function(state_92181){
switch(arguments.length){
case 0:
return components$keep_calm$state_machine__26882__auto____0.call(this);
case 1:
return components$keep_calm$state_machine__26882__auto____1.call(this,state_92181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
components$keep_calm$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = components$keep_calm$state_machine__26882__auto____0;
components$keep_calm$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = components$keep_calm$state_machine__26882__auto____1;
return components$keep_calm$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___92205))
})();
var state__26904__auto__ = (function (){var statearr_92204 = f__26903__auto__.call(null);
(statearr_92204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___92205);

return statearr_92204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___92205))
);

components.keep_calm.update_local_data = (function components$keep_calm$update_local_data(e){
var local_id = cljs.core.keyword.call(null,e.target.dataset.inputid);
var new_value = e.target.value;
return cljs.core.swap_BANG_.call(null,components.keep_calm.local,cljs.core.assoc,local_id,new_value);
});
components.keep_calm.set_active = (function components$keep_calm$set_active(e){
var local_id = cljs.core.keyword.call(null,e.target.dataset.inputid);
return cljs.core.swap_BANG_.call(null,components.keep_calm.local,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),local_id);
});
components.keep_calm.set_content = (function components$keep_calm$set_content(){
return (function (node){
var local_id = cljs.core.keyword.call(null,cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"data-inputid","data-inputid",947458262)], null)));
return cljs.core.assoc_in.call(null,kioo.reagent.add_class.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.keep_calm.local)),local_id))?"state-focused":"state-normal")).call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.get.call(null,cljs.core.deref.call(null,components.keep_calm.local),local_id));
});
});
components.keep_calm.editor = (function components$keep_calm$editor(){
var ch92221 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"component-my-edit",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent_components_playground.data.dispatch.call(null,new cljs.core.Keyword(null,"cancel-edit","cancel-edit",-1598330442));
})).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"component-button",new cljs.core.Keyword(null,"id","id",-1388402092),"close-button",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" X "], null))], null))),cljs.core.apply.call(null,React.DOM.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"wrapper",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.label,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text before AND "], null)))),cljs.core.apply.call(null,React.DOM.br,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))),kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.do__GT_.call(null,components.keep_calm.set_content.call(null),kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),components.keep_calm.set_active),kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-change","on-change",-732046149),components.keep_calm.update_local_data)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"state-normal",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"data-inputid","data-inputid",947458262),"before",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)], null))),cljs.core.apply.call(null,React.DOM.br,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))),cljs.core.apply.call(null,React.DOM.label,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text after AND "], null)))),cljs.core.apply.call(null,React.DOM.br,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))),kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.do__GT_.call(null,components.keep_calm.set_content.call(null),kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),components.keep_calm.set_active),kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-change","on-change",-732046149),components.keep_calm.update_local_data)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"state-normal",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"data-inputid","data-inputid",947458262),"after",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)], null))),cljs.core.apply.call(null,React.DOM.br,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))),cljs.core.apply.call(null,React.DOM.br,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)))], null)))),cljs.core.apply.call(null,React.DOM.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["text-align","center","width","85%"], null)], null)),kioo.util.flatten_nodes.call(null,kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.listen.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,reagent_components_playground.data.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"edit","edit",-1641834166),false);

cljs.core.swap_BANG_.call(null,reagent_components_playground.data.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"text-after","text-after",-1882964597)], null),new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.keep_calm.local)));

return cljs.core.swap_BANG_.call(null,reagent_components_playground.data.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"text-before","text-before",1093985884)], null),new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,components.keep_calm.local)));
})).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"component-button",new cljs.core.Keyword(null,"id","id",-1388402092),"set-button",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" set "], null))], null)))], null)))),kioo.core.handle_wrapper.call(null,kioo.reagent.make_dom).call(null,kioo.reagent.content.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.keyboard.keyboard], null)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"use-component-keyboard",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" *the whole outerHTML will be replaced by the app-engine* "], null))], null)))], null))))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch92221))){
return cljs.core.first.call(null,ch92221);
} else {
return cljs.core.apply.call(null,React.DOM.span,null,ch92221);
}
});

//# sourceMappingURL=keep_calm.js.map?rel=1487768493654