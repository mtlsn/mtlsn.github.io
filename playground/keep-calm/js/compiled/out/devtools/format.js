// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._header[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._header["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._has_body[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25535__auto__ = (((value == null))?null:value);
var m__25536__auto__ = (devtools.format._body[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,value);
} else {
var m__25536__auto____$1 = (devtools.format._body["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38388__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38388__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38388__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38388__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38387__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38387__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88870 = arguments.length;
var i__25948__auto___88871 = (0);
while(true){
if((i__25948__auto___88871 < len__25947__auto___88870)){
args__25954__auto__.push((arguments[i__25948__auto___88871]));

var G__88872 = (i__25948__auto___88871 + (1));
i__25948__auto___88871 = G__88872;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq88869){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88869));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88874 = arguments.length;
var i__25948__auto___88875 = (0);
while(true){
if((i__25948__auto___88875 < len__25947__auto___88874)){
args__25954__auto__.push((arguments[i__25948__auto___88875]));

var G__88876 = (i__25948__auto___88875 + (1));
i__25948__auto___88875 = G__88876;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq88873){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88873));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88878 = arguments.length;
var i__25948__auto___88879 = (0);
while(true){
if((i__25948__auto___88879 < len__25947__auto___88878)){
args__25954__auto__.push((arguments[i__25948__auto___88879]));

var G__88880 = (i__25948__auto___88879 + (1));
i__25948__auto___88879 = G__88880;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq88877){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88877));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88882 = arguments.length;
var i__25948__auto___88883 = (0);
while(true){
if((i__25948__auto___88883 < len__25947__auto___88882)){
args__25954__auto__.push((arguments[i__25948__auto___88883]));

var G__88884 = (i__25948__auto___88883 + (1));
i__25948__auto___88883 = G__88884;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq88881){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88881));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88886 = arguments.length;
var i__25948__auto___88887 = (0);
while(true){
if((i__25948__auto___88887 < len__25947__auto___88886)){
args__25954__auto__.push((arguments[i__25948__auto___88887]));

var G__88888 = (i__25948__auto___88887 + (1));
i__25948__auto___88887 = G__88888;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq88885){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88885));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88890 = arguments.length;
var i__25948__auto___88891 = (0);
while(true){
if((i__25948__auto___88891 < len__25947__auto___88890)){
args__25954__auto__.push((arguments[i__25948__auto___88891]));

var G__88892 = (i__25948__auto___88891 + (1));
i__25948__auto___88891 = G__88892;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq88889){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88889));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88894 = arguments.length;
var i__25948__auto___88895 = (0);
while(true){
if((i__25948__auto___88895 < len__25947__auto___88894)){
args__25954__auto__.push((arguments[i__25948__auto___88895]));

var G__88896 = (i__25948__auto___88895 + (1));
i__25948__auto___88895 = G__88896;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq88893){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88893));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88904 = arguments.length;
var i__25948__auto___88905 = (0);
while(true){
if((i__25948__auto___88905 < len__25947__auto___88904)){
args__25954__auto__.push((arguments[i__25948__auto___88905]));

var G__88906 = (i__25948__auto___88905 + (1));
i__25948__auto___88905 = G__88906;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__88900){
var vec__88901 = p__88900;
var state_override = cljs.core.nth.call(null,vec__88901,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__88901,state_override){
return (function (p1__88897_SHARP_){
return cljs.core.merge.call(null,p1__88897_SHARP_,state_override);
});})(vec__88901,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq88898){
var G__88899 = cljs.core.first.call(null,seq88898);
var seq88898__$1 = cljs.core.next.call(null,seq88898);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__88899,seq88898__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88908 = arguments.length;
var i__25948__auto___88909 = (0);
while(true){
if((i__25948__auto___88909 < len__25947__auto___88908)){
args__25954__auto__.push((arguments[i__25948__auto___88909]));

var G__88910 = (i__25948__auto___88909 + (1));
i__25948__auto___88909 = G__88910;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq88907){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88907));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88913 = arguments.length;
var i__25948__auto___88914 = (0);
while(true){
if((i__25948__auto___88914 < len__25947__auto___88913)){
args__25954__auto__.push((arguments[i__25948__auto___88914]));

var G__88915 = (i__25948__auto___88914 + (1));
i__25948__auto___88914 = G__88915;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq88911){
var G__88912 = cljs.core.first.call(null,seq88911);
var seq88911__$1 = cljs.core.next.call(null,seq88911);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__88912,seq88911__$1);
});


//# sourceMappingURL=format.js.map?rel=1487768194317