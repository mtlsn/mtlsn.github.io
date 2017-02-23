// Compiled by ClojureScript 1.9.229 {}
goog.provide('kioo.core');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('hickory.core');
goog.require('sablono.core');
goog.require('kioo.common');
kioo.core.value_component = (function kioo$core$value_component(renderer){
var react_component = React.createClass(({"shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
}), "render": (function (){
var this$ = this;
var _STAR_component_STAR_83909 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_83909;
}})}));
var factory = React.createFactory(react_component);
return ((function (react_component,factory){
return (function() { 
var G__83910__delegate = function (value,static_args){
return factory.call(null,({"value": value, "statics": static_args}));
};
var G__83910 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__83911__i = 0, G__83911__a = new Array(arguments.length -  1);
while (G__83911__i < G__83911__a.length) {G__83911__a[G__83911__i] = arguments[G__83911__i + 1]; ++G__83911__i;}
  static_args = new cljs.core.IndexedSeq(G__83911__a,0);
} 
return G__83910__delegate.call(this,value,static_args);};
G__83910.cljs$lang$maxFixedArity = 1;
G__83910.cljs$lang$applyTo = (function (arglist__83912){
var value = cljs.core.first(arglist__83912);
var static_args = cljs.core.rest(arglist__83912);
return G__83910__delegate(value,static_args);
});
G__83910.cljs$core$IFn$_invoke$arity$variadic = G__83910__delegate;
return G__83910;
})()
;
;})(react_component,factory))
});
kioo.core.make_dom = (function kioo$core$make_dom(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
});
kioo.core.to_list = (function kioo$core$to_list(vals){
if(cljs.core.seq_QMARK_.call(null,vals)){
return vals;
} else {
var x__25706__auto__ = vals;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
}
});
kioo.core.handle_wrapper = (function kioo$core$handle_wrapper(dom_fn){
return (function() { 
var kioo$core$handle_wrapper_$_hw__delegate = function (node,body){
var rnode = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.apply.call(null,kioo$core$handle_wrapper_$_hw,node):(((cljs.core.map_QMARK_.call(null,node)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node)))))?(function (){var revents = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node);
var props = (function (){var G__83916 = cljs.core.clj__GT_js.call(null,revents);
(G__83916["dom-fn"] = dom_fn);

(G__83916["node"] = node);

return G__83916;
})();
return kioo.util.WrapComponent.call(null,props);
})():dom_fn.call(null,node)
));
if(cljs.core.empty_QMARK_.call(null,body)){
return rnode;
} else {
return cljs.core.cons.call(null,rnode,kioo.core.to_list.call(null,cljs.core.apply.call(null,kioo$core$handle_wrapper_$_hw,body)));
}
};
var kioo$core$handle_wrapper_$_hw = function (node,var_args){
var body = null;
if (arguments.length > 1) {
var G__83917__i = 0, G__83917__a = new Array(arguments.length -  1);
while (G__83917__i < G__83917__a.length) {G__83917__a[G__83917__i] = arguments[G__83917__i + 1]; ++G__83917__i;}
  body = new cljs.core.IndexedSeq(G__83917__a,0);
} 
return kioo$core$handle_wrapper_$_hw__delegate.call(this,node,body);};
kioo$core$handle_wrapper_$_hw.cljs$lang$maxFixedArity = 1;
kioo$core$handle_wrapper_$_hw.cljs$lang$applyTo = (function (arglist__83918){
var node = cljs.core.first(arglist__83918);
var body = cljs.core.rest(arglist__83918);
return kioo$core$handle_wrapper_$_hw__delegate(node,body);
});
kioo$core$handle_wrapper_$_hw.cljs$core$IFn$_invoke$arity$variadic = kioo$core$handle_wrapper_$_hw__delegate;
return kioo$core$handle_wrapper_$_hw;
})()
;
});
kioo.core.content = kioo.common.content;
kioo.core.append = kioo.common.append;
kioo.core.prepend = kioo.common.prepend;
kioo.core.after = (function kioo$core$after(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83920 = arguments.length;
var i__25948__auto___83921 = (0);
while(true){
if((i__25948__auto___83921 < len__25947__auto___83920)){
args__25954__auto__.push((arguments[i__25948__auto___83921]));

var G__83922 = (i__25948__auto___83921 + (1));
i__25948__auto___83921 = G__83922;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,node,body);
} else {
return cljs.core.cons.call(null,kioo.core.make_dom.call(null,node),body);
}
});
});

kioo.core.after.cljs$lang$maxFixedArity = (0);

kioo.core.after.cljs$lang$applyTo = (function (seq83919){
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83919));
});

kioo.core.before = (function kioo$core$before(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83924 = arguments.length;
var i__25948__auto___83925 = (0);
while(true){
if((i__25948__auto___83925 < len__25947__auto___83924)){
args__25954__auto__.push((arguments[i__25948__auto___83925]));

var G__83926 = (i__25948__auto___83925 + (1));
i__25948__auto___83925 = G__83926;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,body,node);
} else {
return cljs.core.concat.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null));
}
});
});

kioo.core.before.cljs$lang$maxFixedArity = (0);

kioo.core.before.cljs$lang$applyTo = (function (seq83923){
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83923));
});

kioo.core.substitute = kioo.common.substitute;
kioo.core.set_attr = kioo.common.set_attr;
kioo.core.remove_attr = kioo.common.remove_attr;
kioo.core.do__GT_ = kioo.common.do__GT_;
kioo.core.set_style = kioo.common.set_style;
kioo.core.remove_style = kioo.common.remove_style;
kioo.core.set_class = kioo.common.set_class;
kioo.core.add_class = kioo.common.add_class;
kioo.core.remove_class = kioo.common.remove_class;
kioo.core.wrap = (function kioo$core$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"sym","sym",-1444860305),(React.DOM[cljs.core.name.call(null,tag)]),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kioo.util.convert_attrs.call(null,attrs),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null)], null);
});
});
kioo.core.unwrap = kioo.common.unwrap;
kioo.core.html = (function kioo$core$html(content){
return sablono.interpreter.interpret.call(null,content);
});
kioo.core.html_content = (function kioo$core$html_content(content){
return (function (node){
var children = cljs.core.map.call(null,(function (p1__83927_SHARP_){
return sablono.interpreter.interpret.call(null,hickory.core.as_hiccup.call(null,p1__83927_SHARP_));
}),hickory.core.parse_fragment.call(null,content));
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),children);
});
});
kioo.core.listen_react_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["onRender",null,"onUpdate",null,"onWillMount",null,"onMount",null,"onWillUpdate",null,"onWillReceiveProps",null], null), null);
kioo.core.listen = (function kioo$core$listen(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83944 = arguments.length;
var i__25948__auto___83945 = (0);
while(true){
if((i__25948__auto___83945 < len__25947__auto___83944)){
args__25954__auto__.push((arguments[i__25948__auto___83945]));

var G__83946 = (i__25948__auto___83945 + (1));
i__25948__auto___83945 = G__83946;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (events_PLUS_fns){
var pairs = cljs.core.map.call(null,(function (p__83932){
var vec__83933 = p__83932;
var k = cljs.core.nth.call(null,vec__83933,(0),null);
var v = cljs.core.nth.call(null,vec__83933,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null);
}),cljs.core.partition.call(null,(2),events_PLUS_fns));
var vec__83929 = cljs.core.reduce.call(null,((function (pairs){
return (function (p__83936,p__83937){
var vec__83938 = p__83936;
var r = cljs.core.nth.call(null,vec__83938,(0),null);
var s = cljs.core.nth.call(null,vec__83938,(1),null);
var vec__83941 = p__83937;
var k = cljs.core.nth.call(null,vec__83941,(0),null);
var v = cljs.core.nth.call(null,vec__83941,(1),null);
if(cljs.core.truth_(kioo.core.listen_react_events.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,r,k,v),s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,s,k,v)], null);
}
});})(pairs))
,cljs.core.PersistentVector.EMPTY,pairs);
var rev = cljs.core.nth.call(null,vec__83929,(0),null);
var sev = cljs.core.nth.call(null,vec__83929,(1),null);
return ((function (pairs,vec__83929,rev,sev){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),sev),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.merge.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node),rev));
});
;})(pairs,vec__83929,rev,sev))
});

kioo.core.listen.cljs$lang$maxFixedArity = (0);

kioo.core.listen.cljs$lang$applyTo = (function (seq83928){
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83928));
});

kioo.core.lifecycle_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["willMount",null,"willUpdate",null,"willReceiveProps",null,"initState",null,"willUnmount",null,"defaultProps",null,"shouldUpdate",null,"didMount",null,"didUpdate",null], null), null);
/**
 * this transform allows you to wrap the componet in react lifecycle methods.
 * the methods are passed in as a map of key functions pairs.
 * {:init-state (fn [this] ...)
 *  :default-props (fn [this] ...)
 *  :should-update (fn [this next-props next-state] ...)
 *  :will-mount (fn [this] ...)
 *  :did-mount (fn [this] ...)
 *  :will-unmount (fn [this] ...)
 *  :will-receive-props (fn [this next-props] ...)
 *  :will-update (fn [this next-props next-state] ...)
 *  :did-update (fn [this prev-props prev-state] ...)}
 */
kioo.core.lifecycle = (function kioo$core$lifecycle(events_fns){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.merge.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function kioo$core$lifecycle_$_iter__83963(s__83964){
return (new cljs.core.LazySeq(null,(function (){
var s__83964__$1 = s__83964;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83964__$1);
if(temp__4657__auto__){
var s__83964__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83964__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83964__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83966 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83965 = (0);
while(true){
if((i__83965 < size__25651__auto__)){
var vec__83973 = cljs.core._nth.call(null,c__25650__auto__,i__83965);
var k = cljs.core.nth.call(null,vec__83973,(0),null);
var v = cljs.core.nth.call(null,vec__83973,(1),null);
cljs.core.chunk_append.call(null,b__83966,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null));

var G__83979 = (i__83965 + (1));
i__83965 = G__83979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83966),kioo$core$lifecycle_$_iter__83963.call(null,cljs.core.chunk_rest.call(null,s__83964__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83966),null);
}
} else {
var vec__83976 = cljs.core.first.call(null,s__83964__$2);
var k = cljs.core.nth.call(null,vec__83976,(0),null);
var v = cljs.core.nth.call(null,vec__83976,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null),kioo$core$lifecycle_$_iter__83963.call(null,cljs.core.rest.call(null,s__83964__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,events_fns);
})())));
});
});
kioo.core.render = (function kioo$core$render(component,node){
return React.render(component,node);
});

//# sourceMappingURL=core.js.map?rel=1487768187544