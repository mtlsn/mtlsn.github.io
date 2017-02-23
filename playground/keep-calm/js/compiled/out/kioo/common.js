// Compiled by ClojureScript 1.9.229 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83711 = arguments.length;
var i__25948__auto___83712 = (0);
while(true){
if((i__25948__auto___83712 < len__25947__auto___83711)){
args__25954__auto__.push((arguments[i__25948__auto___83712]));

var G__83713 = (i__25948__auto___83712 + (1));
i__25948__auto___83712 = G__83713;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.content.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),body);
});
});

kioo.common.content.cljs$lang$maxFixedArity = (0);

kioo.common.content.cljs$lang$applyTo = (function (seq83710){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83710));
});

kioo.common.append = (function kioo$common$append(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83715 = arguments.length;
var i__25948__auto___83716 = (0);
while(true){
if((i__25948__auto___83716 < len__25947__auto___83715)){
args__25954__auto__.push((arguments[i__25948__auto___83716]));

var G__83717 = (i__25948__auto___83716 + (1));
i__25948__auto___83716 = G__83717;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.append.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.append.cljs$lang$maxFixedArity = (0);

kioo.common.append.cljs$lang$applyTo = (function (seq83714){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83714));
});

kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83719 = arguments.length;
var i__25948__auto___83720 = (0);
while(true){
if((i__25948__auto___83720 < len__25947__auto___83719)){
args__25954__auto__.push((arguments[i__25948__auto___83720]));

var G__83721 = (i__25948__auto___83720 + (1));
i__25948__auto___83720 = G__83721;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,body,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
});
});

kioo.common.prepend.cljs$lang$maxFixedArity = (0);

kioo.common.prepend.cljs$lang$applyTo = (function (seq83718){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83718));
});

kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83723 = arguments.length;
var i__25948__auto___83724 = (0);
while(true){
if((i__25948__auto___83724 < len__25947__auto___83723)){
args__25954__auto__.push((arguments[i__25948__auto___83724]));

var G__83725 = (i__25948__auto___83724 + (1));
i__25948__auto___83724 = G__83725;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return body;
});
});

kioo.common.substitute.cljs$lang$maxFixedArity = (0);

kioo.common.substitute.cljs$lang$applyTo = (function (seq83722){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83722));
});

kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83731 = arguments.length;
var i__25948__auto___83732 = (0);
while(true){
if((i__25948__auto___83732 < len__25947__auto___83731)){
args__25954__auto__.push((arguments[i__25948__auto___83732]));

var G__83733 = (i__25948__auto___83732 + (1));
i__25948__auto___83732 = G__83733;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,((function (els){
return (function (n,p__83727){
var vec__83728 = p__83727;
var k = cljs.core.nth.call(null,vec__83728,(0),null);
var v = cljs.core.nth.call(null,vec__83728,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq83726){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83726));
});

kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83735 = arguments.length;
var i__25948__auto___83736 = (0);
while(true){
if((i__25948__auto___83736 < len__25947__auto___83735)){
args__25954__auto__.push((arguments[i__25948__auto___83736]));

var G__83737 = (i__25948__auto___83736 + (1));
i__25948__auto___83736 = G__83737;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,(function (n,k){
return cljs.core.dissoc.call(null,n,k);
}),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.remove_attr.cljs$lang$maxFixedArity = (0);

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq83734){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83734));
});

kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83741 = arguments.length;
var i__25948__auto___83742 = (0);
while(true){
if((i__25948__auto___83742 < len__25947__auto___83741)){
args__25954__auto__.push((arguments[i__25948__auto___83742]));

var G__83743 = (i__25948__auto___83742 + (1));
i__25948__auto___83742 = G__83743;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.reduce.call(null,(function (p1__83739_SHARP_,p2__83738_SHARP_){
return p2__83738_SHARP_.call(null,p1__83739_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq83740){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83740));
});

kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83750 = arguments.length;
var i__25948__auto___83751 = (0);
while(true){
if((i__25948__auto___83751 < len__25947__auto___83750)){
args__25954__auto__.push((arguments[i__25948__auto___83751]));

var G__83752 = (i__25948__auto___83751 + (1));
i__25948__auto___83751 = G__83752;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
var mp = cljs.core.reduce.call(null,((function (els){
return (function (m,p__83746){
var vec__83747 = p__83746;
var k = cljs.core.nth.call(null,vec__83747,(0),null);
var v = cljs.core.nth.call(null,vec__83747,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__83744_SHARP_){
return cljs.core.merge.call(null,p1__83744_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq83745){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83745));
});

kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83756 = arguments.length;
var i__25948__auto___83757 = (0);
while(true){
if((i__25948__auto___83757 < len__25947__auto___83756)){
args__25954__auto__.push((arguments[i__25948__auto___83757]));

var G__83758 = (i__25948__auto___83757 + (1));
i__25948__auto___83757 = G__83758;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
var style = cljs.core.reduce.call(null,(function (p1__83753_SHARP_,p2__83754_SHARP_){
return cljs.core.dissoc.call(null,p1__83753_SHARP_,cljs.core.name.call(null,p2__83754_SHARP_),p2__83754_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq83755){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83755));
});

kioo.common.get_class_regex = (function kioo$common$get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function kioo$common$has_class_QMARK_(cur_cls,cls){
var and__24860__auto__ = cur_cls;
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.re_find.call(null,kioo.common.get_class_regex.call(null,cls),cur_cls);
} else {
return and__24860__auto__;
}
});
kioo.common.set_class = (function kioo$common$set_class(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83762 = arguments.length;
var i__25948__auto___83763 = (0);
while(true){
if((i__25948__auto___83763 < len__25947__auto___83762)){
args__25954__auto__.push((arguments[i__25948__auto___83763]));

var G__83764 = (i__25948__auto___83763 + (1));
i__25948__auto___83763 = G__83764;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__83759_SHARP_,p2__83760_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__83759_SHARP_,p2__83760_SHARP_))){
return p1__83759_SHARP_;
} else {
return [cljs.core.str(p1__83759_SHARP_),cljs.core.str(" "),cljs.core.str(p2__83760_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq83761){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83761));
});

kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83768 = arguments.length;
var i__25948__auto___83769 = (0);
while(true){
if((i__25948__auto___83769 < len__25947__auto___83768)){
args__25954__auto__.push((arguments[i__25948__auto___83769]));

var G__83770 = (i__25948__auto___83769 + (1));
i__25948__auto___83769 = G__83770;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__83765_SHARP_,p2__83766_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__83765_SHARP_,p2__83766_SHARP_))){
return p1__83765_SHARP_;
} else {
return [cljs.core.str(p1__83765_SHARP_),cljs.core.str(" "),cljs.core.str(p2__83766_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq83767){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83767));
});

kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83774 = arguments.length;
var i__25948__auto___83775 = (0);
while(true){
if((i__25948__auto___83775 < len__25947__auto___83774)){
args__25954__auto__.push((arguments[i__25948__auto___83775]));

var G__83776 = (i__25948__auto___83775 + (1));
i__25948__auto___83775 = G__83776;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__83771_SHARP_,p2__83772_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__83771_SHARP_,p2__83772_SHARP_))){
return clojure.string.replace.call(null,p1__83771_SHARP_,kioo.common.get_class_regex.call(null,p2__83772_SHARP_)," ");
} else {
return p1__83771_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq83773){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83773));
});

kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});

//# sourceMappingURL=common.js.map?rel=1487768187204