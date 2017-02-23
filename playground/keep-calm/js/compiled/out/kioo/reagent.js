// Compiled by ClojureScript 1.9.229 {}
goog.provide('kioo.reagent');
goog.require('cljs.core');
goog.require('kioo.core');
goog.require('kioo.util');
goog.require('reagent.core');
kioo.reagent.make_dom = (function kioo$reagent$make_dom(node){
var rnode = ((cljs.core.map_QMARK_.call(null,node))?(function (){var c = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.vector_QMARK_.call(null,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),reagent.core.as_component.call(null,c)], null);
} else {
if(cljs.core.seq_QMARK_.call(null,c)){
return cljs.core.reduce.call(null,((function (c){
return (function (p1__83982_SHARP_,p2__83983_SHARP_){
return cljs.core.conj.call(null,p1__83982_SHARP_,reagent.core.as_component.call(null,p2__83983_SHARP_));
});})(c))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)], null),c);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),c], null);

}
}
})():node);
return reagent.core.as_component.call(null,rnode);
});
kioo.reagent.content = kioo.core.content;
kioo.reagent.append = kioo.core.append;
kioo.reagent.prepend = kioo.core.prepend;
kioo.reagent.after = (function kioo$reagent$after(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83985 = arguments.length;
var i__25948__auto___83986 = (0);
while(true){
if((i__25948__auto___83986 < len__25947__auto___83985)){
args__25954__auto__.push((arguments[i__25948__auto___83986]));

var G__83987 = (i__25948__auto___83986 + (1));
i__25948__auto___83986 = G__83987;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,node,body);
} else {
return cljs.core.conj.call(null,body,node);
}
});
});

kioo.reagent.after.cljs$lang$maxFixedArity = (0);

kioo.reagent.after.cljs$lang$applyTo = (function (seq83984){
return kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83984));
});

kioo.reagent.before = (function kioo$reagent$before(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83989 = arguments.length;
var i__25948__auto___83990 = (0);
while(true){
if((i__25948__auto___83990 < len__25947__auto___83989)){
args__25954__auto__.push((arguments[i__25948__auto___83990]));

var G__83991 = (i__25948__auto___83990 + (1));
i__25948__auto___83990 = G__83991;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,body,node);
} else {
return cljs.core.concat.call(null,body,(function (){var x__25706__auto__ = node;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})());
}
});
});

kioo.reagent.before.cljs$lang$maxFixedArity = (0);

kioo.reagent.before.cljs$lang$applyTo = (function (seq83988){
return kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83988));
});

kioo.reagent.substitute = kioo.core.substitute;
kioo.reagent.set_attr = kioo.core.set_attr;
kioo.reagent.remove_attr = kioo.core.remove_attr;
kioo.reagent.do__GT_ = kioo.core.do__GT_;
kioo.reagent.set_style = kioo.core.set_style;
kioo.reagent.remove_style = kioo.core.remove_style;
kioo.reagent.set_class = kioo.core.set_class;
kioo.reagent.add_class = kioo.core.add_class;
kioo.reagent.remove_class = kioo.core.remove_class;
kioo.reagent.wrap = (function kioo$reagent$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"content","content",15833224),kioo.reagent.make_dom.call(null,node)], null);
});
});
kioo.reagent.unwrap = kioo.core.unwrap;
kioo.reagent.html = kioo.core.html;
kioo.reagent.html_content = kioo.core.html_content;
kioo.reagent.listen = kioo.core.listen;
kioo.reagent.lifecycle = kioo.core.lifecycle;

//# sourceMappingURL=reagent.js.map?rel=1487768187587