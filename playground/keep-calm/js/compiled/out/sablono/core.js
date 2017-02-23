// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__83397__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__83394 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__83395 = cljs.core.seq.call(null,vec__83394);
var first__83396 = cljs.core.first.call(null,seq__83395);
var seq__83395__$1 = cljs.core.next.call(null,seq__83395);
var tag = first__83396;
var body = seq__83395__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__83397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83398__i = 0, G__83398__a = new Array(arguments.length -  0);
while (G__83398__i < G__83398__a.length) {G__83398__a[G__83398__i] = arguments[G__83398__i + 0]; ++G__83398__i;}
  args = new cljs.core.IndexedSeq(G__83398__a,0);
} 
return G__83397__delegate.call(this,args);};
G__83397.cljs$lang$maxFixedArity = 0;
G__83397.cljs$lang$applyTo = (function (arglist__83399){
var args = cljs.core.seq(arglist__83399);
return G__83397__delegate(args);
});
G__83397.cljs$core$IFn$_invoke$arity$variadic = G__83397__delegate;
return G__83397;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25652__auto__ = (function sablono$core$update_arglists_$_iter__83404(s__83405){
return (new cljs.core.LazySeq(null,(function (){
var s__83405__$1 = s__83405;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83405__$1);
if(temp__4657__auto__){
var s__83405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83405__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83405__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83407 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83406 = (0);
while(true){
if((i__83406 < size__25651__auto__)){
var args = cljs.core._nth.call(null,c__25650__auto__,i__83406);
cljs.core.chunk_append.call(null,b__83407,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__83408 = (i__83406 + (1));
i__83406 = G__83408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83407),sablono$core$update_arglists_$_iter__83404.call(null,cljs.core.chunk_rest.call(null,s__83405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83407),null);
}
} else {
var args = cljs.core.first.call(null,s__83405__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__83404.call(null,cljs.core.rest.call(null,s__83405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83414 = arguments.length;
var i__25948__auto___83415 = (0);
while(true){
if((i__25948__auto___83415 < len__25947__auto___83414)){
args__25954__auto__.push((arguments[i__25948__auto___83415]));

var G__83416 = (i__25948__auto___83415 + (1));
i__25948__auto___83415 = G__83416;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25652__auto__ = (function sablono$core$iter__83410(s__83411){
return (new cljs.core.LazySeq(null,(function (){
var s__83411__$1 = s__83411;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83411__$1);
if(temp__4657__auto__){
var s__83411__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83411__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83411__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83413 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83412 = (0);
while(true){
if((i__83412 < size__25651__auto__)){
var style = cljs.core._nth.call(null,c__25650__auto__,i__83412);
cljs.core.chunk_append.call(null,b__83413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__83417 = (i__83412 + (1));
i__83412 = G__83417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83413),sablono$core$iter__83410.call(null,cljs.core.chunk_rest.call(null,s__83411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83413),null);
}
} else {
var style = cljs.core.first.call(null,s__83411__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__83410.call(null,cljs.core.rest.call(null,s__83411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq83409){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83409));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to83418 = (function sablono$core$link_to83418(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83421 = arguments.length;
var i__25948__auto___83422 = (0);
while(true){
if((i__25948__auto___83422 < len__25947__auto___83421)){
args__25954__auto__.push((arguments[i__25948__auto___83422]));

var G__83423 = (i__25948__auto___83422 + (1));
i__25948__auto___83422 = G__83423;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to83418.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

sablono.core.link_to83418.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to83418.cljs$lang$maxFixedArity = (1);

sablono.core.link_to83418.cljs$lang$applyTo = (function (seq83419){
var G__83420 = cljs.core.first.call(null,seq83419);
var seq83419__$1 = cljs.core.next.call(null,seq83419);
return sablono.core.link_to83418.cljs$core$IFn$_invoke$arity$variadic(G__83420,seq83419__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to83418);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to83424 = (function sablono$core$mail_to83424(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83431 = arguments.length;
var i__25948__auto___83432 = (0);
while(true){
if((i__25948__auto___83432 < len__25947__auto___83431)){
args__25954__auto__.push((arguments[i__25948__auto___83432]));

var G__83433 = (i__25948__auto___83432 + (1));
i__25948__auto___83432 = G__83433;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to83424.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

sablono.core.mail_to83424.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__83427){
var vec__83428 = p__83427;
var content = cljs.core.nth.call(null,vec__83428,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24872__auto__ = content;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to83424.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to83424.cljs$lang$applyTo = (function (seq83425){
var G__83426 = cljs.core.first.call(null,seq83425);
var seq83425__$1 = cljs.core.next.call(null,seq83425);
return sablono.core.mail_to83424.cljs$core$IFn$_invoke$arity$variadic(G__83426,seq83425__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to83424);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list83434 = (function sablono$core$unordered_list83434(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25652__auto__ = (function sablono$core$unordered_list83434_$_iter__83439(s__83440){
return (new cljs.core.LazySeq(null,(function (){
var s__83440__$1 = s__83440;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83440__$1);
if(temp__4657__auto__){
var s__83440__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83440__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83440__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83442 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83441 = (0);
while(true){
if((i__83441 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__83441);
cljs.core.chunk_append.call(null,b__83442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__83443 = (i__83441 + (1));
i__83441 = G__83443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83442),sablono$core$unordered_list83434_$_iter__83439.call(null,cljs.core.chunk_rest.call(null,s__83440__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83442),null);
}
} else {
var x = cljs.core.first.call(null,s__83440__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list83434_$_iter__83439.call(null,cljs.core.rest.call(null,s__83440__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list83434);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list83444 = (function sablono$core$ordered_list83444(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25652__auto__ = (function sablono$core$ordered_list83444_$_iter__83449(s__83450){
return (new cljs.core.LazySeq(null,(function (){
var s__83450__$1 = s__83450;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83450__$1);
if(temp__4657__auto__){
var s__83450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83450__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83450__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83452 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83451 = (0);
while(true){
if((i__83451 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__83451);
cljs.core.chunk_append.call(null,b__83452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__83453 = (i__83451 + (1));
i__83451 = G__83453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83452),sablono$core$ordered_list83444_$_iter__83449.call(null,cljs.core.chunk_rest.call(null,s__83450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83452),null);
}
} else {
var x = cljs.core.first.call(null,s__83450__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list83444_$_iter__83449.call(null,cljs.core.rest.call(null,s__83450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list83444);
/**
 * Create an image element.
 */
sablono.core.image83454 = (function sablono$core$image83454(var_args){
var args83455 = [];
var len__25947__auto___83458 = arguments.length;
var i__25948__auto___83459 = (0);
while(true){
if((i__25948__auto___83459 < len__25947__auto___83458)){
args83455.push((arguments[i__25948__auto___83459]));

var G__83460 = (i__25948__auto___83459 + (1));
i__25948__auto___83459 = G__83460;
continue;
} else {
}
break;
}

var G__83457 = args83455.length;
switch (G__83457) {
case 1:
return sablono.core.image83454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image83454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83455.length)].join('')));

}
});

sablono.core.image83454.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image83454.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image83454.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image83454);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__83462_SHARP_,p2__83463_SHARP_){
return [cljs.core.str(p1__83462_SHARP_),cljs.core.str("["),cljs.core.str(p2__83463_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__83464_SHARP_,p2__83465_SHARP_){
return [cljs.core.str(p1__83464_SHARP_),cljs.core.str("-"),cljs.core.str(p2__83465_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field83466 = (function sablono$core$color_field83466(var_args){
var args83467 = [];
var len__25947__auto___83534 = arguments.length;
var i__25948__auto___83535 = (0);
while(true){
if((i__25948__auto___83535 < len__25947__auto___83534)){
args83467.push((arguments[i__25948__auto___83535]));

var G__83536 = (i__25948__auto___83535 + (1));
i__25948__auto___83535 = G__83536;
continue;
} else {
}
break;
}

var G__83469 = args83467.length;
switch (G__83469) {
case 1:
return sablono.core.color_field83466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field83466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83467.length)].join('')));

}
});

sablono.core.color_field83466.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.color_field83466.call(null,name__27987__auto__,null);
});

sablono.core.color_field83466.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.color_field83466.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field83466);

/**
 * Creates a date input field.
 */
sablono.core.date_field83470 = (function sablono$core$date_field83470(var_args){
var args83471 = [];
var len__25947__auto___83538 = arguments.length;
var i__25948__auto___83539 = (0);
while(true){
if((i__25948__auto___83539 < len__25947__auto___83538)){
args83471.push((arguments[i__25948__auto___83539]));

var G__83540 = (i__25948__auto___83539 + (1));
i__25948__auto___83539 = G__83540;
continue;
} else {
}
break;
}

var G__83473 = args83471.length;
switch (G__83473) {
case 1:
return sablono.core.date_field83470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field83470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83471.length)].join('')));

}
});

sablono.core.date_field83470.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.date_field83470.call(null,name__27987__auto__,null);
});

sablono.core.date_field83470.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.date_field83470.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field83470);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field83474 = (function sablono$core$datetime_field83474(var_args){
var args83475 = [];
var len__25947__auto___83542 = arguments.length;
var i__25948__auto___83543 = (0);
while(true){
if((i__25948__auto___83543 < len__25947__auto___83542)){
args83475.push((arguments[i__25948__auto___83543]));

var G__83544 = (i__25948__auto___83543 + (1));
i__25948__auto___83543 = G__83544;
continue;
} else {
}
break;
}

var G__83477 = args83475.length;
switch (G__83477) {
case 1:
return sablono.core.datetime_field83474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field83474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83475.length)].join('')));

}
});

sablono.core.datetime_field83474.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.datetime_field83474.call(null,name__27987__auto__,null);
});

sablono.core.datetime_field83474.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.datetime_field83474.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field83474);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field83478 = (function sablono$core$datetime_local_field83478(var_args){
var args83479 = [];
var len__25947__auto___83546 = arguments.length;
var i__25948__auto___83547 = (0);
while(true){
if((i__25948__auto___83547 < len__25947__auto___83546)){
args83479.push((arguments[i__25948__auto___83547]));

var G__83548 = (i__25948__auto___83547 + (1));
i__25948__auto___83547 = G__83548;
continue;
} else {
}
break;
}

var G__83481 = args83479.length;
switch (G__83481) {
case 1:
return sablono.core.datetime_local_field83478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field83478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83479.length)].join('')));

}
});

sablono.core.datetime_local_field83478.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.datetime_local_field83478.call(null,name__27987__auto__,null);
});

sablono.core.datetime_local_field83478.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.datetime_local_field83478.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field83478);

/**
 * Creates a email input field.
 */
sablono.core.email_field83482 = (function sablono$core$email_field83482(var_args){
var args83483 = [];
var len__25947__auto___83550 = arguments.length;
var i__25948__auto___83551 = (0);
while(true){
if((i__25948__auto___83551 < len__25947__auto___83550)){
args83483.push((arguments[i__25948__auto___83551]));

var G__83552 = (i__25948__auto___83551 + (1));
i__25948__auto___83551 = G__83552;
continue;
} else {
}
break;
}

var G__83485 = args83483.length;
switch (G__83485) {
case 1:
return sablono.core.email_field83482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field83482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83483.length)].join('')));

}
});

sablono.core.email_field83482.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.email_field83482.call(null,name__27987__auto__,null);
});

sablono.core.email_field83482.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.email_field83482.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field83482);

/**
 * Creates a file input field.
 */
sablono.core.file_field83486 = (function sablono$core$file_field83486(var_args){
var args83487 = [];
var len__25947__auto___83554 = arguments.length;
var i__25948__auto___83555 = (0);
while(true){
if((i__25948__auto___83555 < len__25947__auto___83554)){
args83487.push((arguments[i__25948__auto___83555]));

var G__83556 = (i__25948__auto___83555 + (1));
i__25948__auto___83555 = G__83556;
continue;
} else {
}
break;
}

var G__83489 = args83487.length;
switch (G__83489) {
case 1:
return sablono.core.file_field83486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field83486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83487.length)].join('')));

}
});

sablono.core.file_field83486.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.file_field83486.call(null,name__27987__auto__,null);
});

sablono.core.file_field83486.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.file_field83486.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field83486);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field83490 = (function sablono$core$hidden_field83490(var_args){
var args83491 = [];
var len__25947__auto___83558 = arguments.length;
var i__25948__auto___83559 = (0);
while(true){
if((i__25948__auto___83559 < len__25947__auto___83558)){
args83491.push((arguments[i__25948__auto___83559]));

var G__83560 = (i__25948__auto___83559 + (1));
i__25948__auto___83559 = G__83560;
continue;
} else {
}
break;
}

var G__83493 = args83491.length;
switch (G__83493) {
case 1:
return sablono.core.hidden_field83490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field83490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83491.length)].join('')));

}
});

sablono.core.hidden_field83490.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.hidden_field83490.call(null,name__27987__auto__,null);
});

sablono.core.hidden_field83490.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.hidden_field83490.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field83490);

/**
 * Creates a month input field.
 */
sablono.core.month_field83494 = (function sablono$core$month_field83494(var_args){
var args83495 = [];
var len__25947__auto___83562 = arguments.length;
var i__25948__auto___83563 = (0);
while(true){
if((i__25948__auto___83563 < len__25947__auto___83562)){
args83495.push((arguments[i__25948__auto___83563]));

var G__83564 = (i__25948__auto___83563 + (1));
i__25948__auto___83563 = G__83564;
continue;
} else {
}
break;
}

var G__83497 = args83495.length;
switch (G__83497) {
case 1:
return sablono.core.month_field83494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field83494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83495.length)].join('')));

}
});

sablono.core.month_field83494.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.month_field83494.call(null,name__27987__auto__,null);
});

sablono.core.month_field83494.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.month_field83494.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field83494);

/**
 * Creates a number input field.
 */
sablono.core.number_field83498 = (function sablono$core$number_field83498(var_args){
var args83499 = [];
var len__25947__auto___83566 = arguments.length;
var i__25948__auto___83567 = (0);
while(true){
if((i__25948__auto___83567 < len__25947__auto___83566)){
args83499.push((arguments[i__25948__auto___83567]));

var G__83568 = (i__25948__auto___83567 + (1));
i__25948__auto___83567 = G__83568;
continue;
} else {
}
break;
}

var G__83501 = args83499.length;
switch (G__83501) {
case 1:
return sablono.core.number_field83498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field83498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83499.length)].join('')));

}
});

sablono.core.number_field83498.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.number_field83498.call(null,name__27987__auto__,null);
});

sablono.core.number_field83498.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.number_field83498.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field83498);

/**
 * Creates a password input field.
 */
sablono.core.password_field83502 = (function sablono$core$password_field83502(var_args){
var args83503 = [];
var len__25947__auto___83570 = arguments.length;
var i__25948__auto___83571 = (0);
while(true){
if((i__25948__auto___83571 < len__25947__auto___83570)){
args83503.push((arguments[i__25948__auto___83571]));

var G__83572 = (i__25948__auto___83571 + (1));
i__25948__auto___83571 = G__83572;
continue;
} else {
}
break;
}

var G__83505 = args83503.length;
switch (G__83505) {
case 1:
return sablono.core.password_field83502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field83502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83503.length)].join('')));

}
});

sablono.core.password_field83502.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.password_field83502.call(null,name__27987__auto__,null);
});

sablono.core.password_field83502.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.password_field83502.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field83502);

/**
 * Creates a range input field.
 */
sablono.core.range_field83506 = (function sablono$core$range_field83506(var_args){
var args83507 = [];
var len__25947__auto___83574 = arguments.length;
var i__25948__auto___83575 = (0);
while(true){
if((i__25948__auto___83575 < len__25947__auto___83574)){
args83507.push((arguments[i__25948__auto___83575]));

var G__83576 = (i__25948__auto___83575 + (1));
i__25948__auto___83575 = G__83576;
continue;
} else {
}
break;
}

var G__83509 = args83507.length;
switch (G__83509) {
case 1:
return sablono.core.range_field83506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field83506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83507.length)].join('')));

}
});

sablono.core.range_field83506.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.range_field83506.call(null,name__27987__auto__,null);
});

sablono.core.range_field83506.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.range_field83506.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field83506);

/**
 * Creates a search input field.
 */
sablono.core.search_field83510 = (function sablono$core$search_field83510(var_args){
var args83511 = [];
var len__25947__auto___83578 = arguments.length;
var i__25948__auto___83579 = (0);
while(true){
if((i__25948__auto___83579 < len__25947__auto___83578)){
args83511.push((arguments[i__25948__auto___83579]));

var G__83580 = (i__25948__auto___83579 + (1));
i__25948__auto___83579 = G__83580;
continue;
} else {
}
break;
}

var G__83513 = args83511.length;
switch (G__83513) {
case 1:
return sablono.core.search_field83510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field83510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83511.length)].join('')));

}
});

sablono.core.search_field83510.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.search_field83510.call(null,name__27987__auto__,null);
});

sablono.core.search_field83510.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.search_field83510.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field83510);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field83514 = (function sablono$core$tel_field83514(var_args){
var args83515 = [];
var len__25947__auto___83582 = arguments.length;
var i__25948__auto___83583 = (0);
while(true){
if((i__25948__auto___83583 < len__25947__auto___83582)){
args83515.push((arguments[i__25948__auto___83583]));

var G__83584 = (i__25948__auto___83583 + (1));
i__25948__auto___83583 = G__83584;
continue;
} else {
}
break;
}

var G__83517 = args83515.length;
switch (G__83517) {
case 1:
return sablono.core.tel_field83514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field83514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83515.length)].join('')));

}
});

sablono.core.tel_field83514.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.tel_field83514.call(null,name__27987__auto__,null);
});

sablono.core.tel_field83514.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.tel_field83514.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field83514);

/**
 * Creates a text input field.
 */
sablono.core.text_field83518 = (function sablono$core$text_field83518(var_args){
var args83519 = [];
var len__25947__auto___83586 = arguments.length;
var i__25948__auto___83587 = (0);
while(true){
if((i__25948__auto___83587 < len__25947__auto___83586)){
args83519.push((arguments[i__25948__auto___83587]));

var G__83588 = (i__25948__auto___83587 + (1));
i__25948__auto___83587 = G__83588;
continue;
} else {
}
break;
}

var G__83521 = args83519.length;
switch (G__83521) {
case 1:
return sablono.core.text_field83518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field83518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83519.length)].join('')));

}
});

sablono.core.text_field83518.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.text_field83518.call(null,name__27987__auto__,null);
});

sablono.core.text_field83518.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.text_field83518.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field83518);

/**
 * Creates a time input field.
 */
sablono.core.time_field83522 = (function sablono$core$time_field83522(var_args){
var args83523 = [];
var len__25947__auto___83590 = arguments.length;
var i__25948__auto___83591 = (0);
while(true){
if((i__25948__auto___83591 < len__25947__auto___83590)){
args83523.push((arguments[i__25948__auto___83591]));

var G__83592 = (i__25948__auto___83591 + (1));
i__25948__auto___83591 = G__83592;
continue;
} else {
}
break;
}

var G__83525 = args83523.length;
switch (G__83525) {
case 1:
return sablono.core.time_field83522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field83522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83523.length)].join('')));

}
});

sablono.core.time_field83522.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.time_field83522.call(null,name__27987__auto__,null);
});

sablono.core.time_field83522.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.time_field83522.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field83522);

/**
 * Creates a url input field.
 */
sablono.core.url_field83526 = (function sablono$core$url_field83526(var_args){
var args83527 = [];
var len__25947__auto___83594 = arguments.length;
var i__25948__auto___83595 = (0);
while(true){
if((i__25948__auto___83595 < len__25947__auto___83594)){
args83527.push((arguments[i__25948__auto___83595]));

var G__83596 = (i__25948__auto___83595 + (1));
i__25948__auto___83595 = G__83596;
continue;
} else {
}
break;
}

var G__83529 = args83527.length;
switch (G__83529) {
case 1:
return sablono.core.url_field83526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field83526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83527.length)].join('')));

}
});

sablono.core.url_field83526.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.url_field83526.call(null,name__27987__auto__,null);
});

sablono.core.url_field83526.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.url_field83526.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field83526);

/**
 * Creates a week input field.
 */
sablono.core.week_field83530 = (function sablono$core$week_field83530(var_args){
var args83531 = [];
var len__25947__auto___83598 = arguments.length;
var i__25948__auto___83599 = (0);
while(true){
if((i__25948__auto___83599 < len__25947__auto___83598)){
args83531.push((arguments[i__25948__auto___83599]));

var G__83600 = (i__25948__auto___83599 + (1));
i__25948__auto___83599 = G__83600;
continue;
} else {
}
break;
}

var G__83533 = args83531.length;
switch (G__83533) {
case 1:
return sablono.core.week_field83530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field83530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83531.length)].join('')));

}
});

sablono.core.week_field83530.cljs$core$IFn$_invoke$arity$1 = (function (name__27987__auto__){
return sablono.core.week_field83530.call(null,name__27987__auto__,null);
});

sablono.core.week_field83530.cljs$core$IFn$_invoke$arity$2 = (function (name__27987__auto__,value__27988__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27987__auto__,value__27988__auto__);
});

sablono.core.week_field83530.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field83530);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box83602 = (function sablono$core$check_box83602(var_args){
var args83603 = [];
var len__25947__auto___83606 = arguments.length;
var i__25948__auto___83607 = (0);
while(true){
if((i__25948__auto___83607 < len__25947__auto___83606)){
args83603.push((arguments[i__25948__auto___83607]));

var G__83608 = (i__25948__auto___83607 + (1));
i__25948__auto___83607 = G__83608;
continue;
} else {
}
break;
}

var G__83605 = args83603.length;
switch (G__83605) {
case 1:
return sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83603.length)].join('')));

}
});

sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box83602.call(null,name,null);
});

sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box83602.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box83602.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box83602.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box83602);
/**
 * Creates a radio button.
 */
sablono.core.radio_button83610 = (function sablono$core$radio_button83610(var_args){
var args83611 = [];
var len__25947__auto___83614 = arguments.length;
var i__25948__auto___83615 = (0);
while(true){
if((i__25948__auto___83615 < len__25947__auto___83614)){
args83611.push((arguments[i__25948__auto___83615]));

var G__83616 = (i__25948__auto___83615 + (1));
i__25948__auto___83615 = G__83616;
continue;
} else {
}
break;
}

var G__83613 = args83611.length;
switch (G__83613) {
case 1:
return sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83611.length)].join('')));

}
});

sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button83610.call(null,group,null);
});

sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button83610.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button83610.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button83610.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button83610);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options83618 = (function sablono$core$select_options83618(var_args){
var args83619 = [];
var len__25947__auto___83638 = arguments.length;
var i__25948__auto___83639 = (0);
while(true){
if((i__25948__auto___83639 < len__25947__auto___83638)){
args83619.push((arguments[i__25948__auto___83639]));

var G__83640 = (i__25948__auto___83639 + (1));
i__25948__auto___83639 = G__83640;
continue;
} else {
}
break;
}

var G__83621 = args83619.length;
switch (G__83621) {
case 1:
return sablono.core.select_options83618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options83618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83619.length)].join('')));

}
});

sablono.core.select_options83618.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options83618.call(null,coll,null);
});

sablono.core.select_options83618.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__25652__auto__ = (function sablono$core$iter__83622(s__83623){
return (new cljs.core.LazySeq(null,(function (){
var s__83623__$1 = s__83623;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83623__$1);
if(temp__4657__auto__){
var s__83623__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83623__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__83623__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__83625 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__83624 = (0);
while(true){
if((i__83624 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__83624);
cljs.core.chunk_append.call(null,b__83625,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__83632 = x;
var text = cljs.core.nth.call(null,vec__83632,(0),null);
var val = cljs.core.nth.call(null,vec__83632,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__83632,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options83618.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__83642 = (i__83624 + (1));
i__83624 = G__83642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83625),sablono$core$iter__83622.call(null,cljs.core.chunk_rest.call(null,s__83623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83625),null);
}
} else {
var x = cljs.core.first.call(null,s__83623__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__83635 = x;
var text = cljs.core.nth.call(null,vec__83635,(0),null);
var val = cljs.core.nth.call(null,vec__83635,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__83635,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options83618.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__83622.call(null,cljs.core.rest.call(null,s__83623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,coll);
});

sablono.core.select_options83618.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options83618);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down83643 = (function sablono$core$drop_down83643(var_args){
var args83644 = [];
var len__25947__auto___83647 = arguments.length;
var i__25948__auto___83648 = (0);
while(true){
if((i__25948__auto___83648 < len__25947__auto___83647)){
args83644.push((arguments[i__25948__auto___83648]));

var G__83649 = (i__25948__auto___83648 + (1));
i__25948__auto___83648 = G__83649;
continue;
} else {
}
break;
}

var G__83646 = args83644.length;
switch (G__83646) {
case 2:
return sablono.core.drop_down83643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down83643.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83644.length)].join('')));

}
});

sablono.core.drop_down83643.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down83643.call(null,name,options,null);
});

sablono.core.drop_down83643.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down83643.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down83643);
/**
 * Creates a text area element.
 */
sablono.core.text_area83651 = (function sablono$core$text_area83651(var_args){
var args83652 = [];
var len__25947__auto___83655 = arguments.length;
var i__25948__auto___83656 = (0);
while(true){
if((i__25948__auto___83656 < len__25947__auto___83655)){
args83652.push((arguments[i__25948__auto___83656]));

var G__83657 = (i__25948__auto___83656 + (1));
i__25948__auto___83656 = G__83657;
continue;
} else {
}
break;
}

var G__83654 = args83652.length;
switch (G__83654) {
case 1:
return sablono.core.text_area83651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area83651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83652.length)].join('')));

}
});

sablono.core.text_area83651.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area83651.call(null,name,null);
});

sablono.core.text_area83651.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area83651.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area83651);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label83659 = (function sablono$core$label83659(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label83659);
/**
 * Creates a submit button.
 */
sablono.core.submit_button83660 = (function sablono$core$submit_button83660(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button83660);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button83661 = (function sablono$core$reset_button83661(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button83661);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to83662 = (function sablono$core$form_to83662(var_args){
var args__25954__auto__ = [];
var len__25947__auto___83669 = arguments.length;
var i__25948__auto___83670 = (0);
while(true){
if((i__25948__auto___83670 < len__25947__auto___83669)){
args__25954__auto__.push((arguments[i__25948__auto___83670]));

var G__83671 = (i__25948__auto___83670 + (1));
i__25948__auto___83670 = G__83671;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to83662.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

sablono.core.form_to83662.cljs$core$IFn$_invoke$arity$variadic = (function (p__83665,body){
var vec__83666 = p__83665;
var method = cljs.core.nth.call(null,vec__83666,(0),null);
var action = cljs.core.nth.call(null,vec__83666,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to83662.cljs$lang$maxFixedArity = (1);

sablono.core.form_to83662.cljs$lang$applyTo = (function (seq83663){
var G__83664 = cljs.core.first.call(null,seq83663);
var seq83663__$1 = cljs.core.next.call(null,seq83663);
return sablono.core.form_to83662.cljs$core$IFn$_invoke$arity$variadic(G__83664,seq83663__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to83662);

//# sourceMappingURL=core.js.map?rel=1487768186967