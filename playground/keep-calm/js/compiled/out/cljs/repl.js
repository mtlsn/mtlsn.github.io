// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__87505){
var map__87530 = p__87505;
var map__87530__$1 = ((((!((map__87530 == null)))?((((map__87530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87530):map__87530);
var m = map__87530__$1;
var n = cljs.core.get.call(null,map__87530__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__87530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87532_87554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87533_87555 = null;
var count__87534_87556 = (0);
var i__87535_87557 = (0);
while(true){
if((i__87535_87557 < count__87534_87556)){
var f_87558 = cljs.core._nth.call(null,chunk__87533_87555,i__87535_87557);
cljs.core.println.call(null,"  ",f_87558);

var G__87559 = seq__87532_87554;
var G__87560 = chunk__87533_87555;
var G__87561 = count__87534_87556;
var G__87562 = (i__87535_87557 + (1));
seq__87532_87554 = G__87559;
chunk__87533_87555 = G__87560;
count__87534_87556 = G__87561;
i__87535_87557 = G__87562;
continue;
} else {
var temp__4657__auto___87563 = cljs.core.seq.call(null,seq__87532_87554);
if(temp__4657__auto___87563){
var seq__87532_87564__$1 = temp__4657__auto___87563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87532_87564__$1)){
var c__25683__auto___87565 = cljs.core.chunk_first.call(null,seq__87532_87564__$1);
var G__87566 = cljs.core.chunk_rest.call(null,seq__87532_87564__$1);
var G__87567 = c__25683__auto___87565;
var G__87568 = cljs.core.count.call(null,c__25683__auto___87565);
var G__87569 = (0);
seq__87532_87554 = G__87566;
chunk__87533_87555 = G__87567;
count__87534_87556 = G__87568;
i__87535_87557 = G__87569;
continue;
} else {
var f_87570 = cljs.core.first.call(null,seq__87532_87564__$1);
cljs.core.println.call(null,"  ",f_87570);

var G__87571 = cljs.core.next.call(null,seq__87532_87564__$1);
var G__87572 = null;
var G__87573 = (0);
var G__87574 = (0);
seq__87532_87554 = G__87571;
chunk__87533_87555 = G__87572;
count__87534_87556 = G__87573;
i__87535_87557 = G__87574;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_87575 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_87575);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_87575)))?cljs.core.second.call(null,arglists_87575):arglists_87575));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87536_87576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87537_87577 = null;
var count__87538_87578 = (0);
var i__87539_87579 = (0);
while(true){
if((i__87539_87579 < count__87538_87578)){
var vec__87540_87580 = cljs.core._nth.call(null,chunk__87537_87577,i__87539_87579);
var name_87581 = cljs.core.nth.call(null,vec__87540_87580,(0),null);
var map__87543_87582 = cljs.core.nth.call(null,vec__87540_87580,(1),null);
var map__87543_87583__$1 = ((((!((map__87543_87582 == null)))?((((map__87543_87582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87543_87582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87543_87582):map__87543_87582);
var doc_87584 = cljs.core.get.call(null,map__87543_87583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_87585 = cljs.core.get.call(null,map__87543_87583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_87581);

cljs.core.println.call(null," ",arglists_87585);

if(cljs.core.truth_(doc_87584)){
cljs.core.println.call(null," ",doc_87584);
} else {
}

var G__87586 = seq__87536_87576;
var G__87587 = chunk__87537_87577;
var G__87588 = count__87538_87578;
var G__87589 = (i__87539_87579 + (1));
seq__87536_87576 = G__87586;
chunk__87537_87577 = G__87587;
count__87538_87578 = G__87588;
i__87539_87579 = G__87589;
continue;
} else {
var temp__4657__auto___87590 = cljs.core.seq.call(null,seq__87536_87576);
if(temp__4657__auto___87590){
var seq__87536_87591__$1 = temp__4657__auto___87590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87536_87591__$1)){
var c__25683__auto___87592 = cljs.core.chunk_first.call(null,seq__87536_87591__$1);
var G__87593 = cljs.core.chunk_rest.call(null,seq__87536_87591__$1);
var G__87594 = c__25683__auto___87592;
var G__87595 = cljs.core.count.call(null,c__25683__auto___87592);
var G__87596 = (0);
seq__87536_87576 = G__87593;
chunk__87537_87577 = G__87594;
count__87538_87578 = G__87595;
i__87539_87579 = G__87596;
continue;
} else {
var vec__87545_87597 = cljs.core.first.call(null,seq__87536_87591__$1);
var name_87598 = cljs.core.nth.call(null,vec__87545_87597,(0),null);
var map__87548_87599 = cljs.core.nth.call(null,vec__87545_87597,(1),null);
var map__87548_87600__$1 = ((((!((map__87548_87599 == null)))?((((map__87548_87599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87548_87599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87548_87599):map__87548_87599);
var doc_87601 = cljs.core.get.call(null,map__87548_87600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_87602 = cljs.core.get.call(null,map__87548_87600__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_87598);

cljs.core.println.call(null," ",arglists_87602);

if(cljs.core.truth_(doc_87601)){
cljs.core.println.call(null," ",doc_87601);
} else {
}

var G__87603 = cljs.core.next.call(null,seq__87536_87591__$1);
var G__87604 = null;
var G__87605 = (0);
var G__87606 = (0);
seq__87536_87576 = G__87603;
chunk__87537_87577 = G__87604;
count__87538_87578 = G__87605;
i__87539_87579 = G__87606;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__87550 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__87551 = null;
var count__87552 = (0);
var i__87553 = (0);
while(true){
if((i__87553 < count__87552)){
var role = cljs.core._nth.call(null,chunk__87551,i__87553);
var temp__4657__auto___87607__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___87607__$1)){
var spec_87608 = temp__4657__auto___87607__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_87608));
} else {
}

var G__87609 = seq__87550;
var G__87610 = chunk__87551;
var G__87611 = count__87552;
var G__87612 = (i__87553 + (1));
seq__87550 = G__87609;
chunk__87551 = G__87610;
count__87552 = G__87611;
i__87553 = G__87612;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__87550);
if(temp__4657__auto____$1){
var seq__87550__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87550__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__87550__$1);
var G__87613 = cljs.core.chunk_rest.call(null,seq__87550__$1);
var G__87614 = c__25683__auto__;
var G__87615 = cljs.core.count.call(null,c__25683__auto__);
var G__87616 = (0);
seq__87550 = G__87613;
chunk__87551 = G__87614;
count__87552 = G__87615;
i__87553 = G__87616;
continue;
} else {
var role = cljs.core.first.call(null,seq__87550__$1);
var temp__4657__auto___87617__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___87617__$2)){
var spec_87618 = temp__4657__auto___87617__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_87618));
} else {
}

var G__87619 = cljs.core.next.call(null,seq__87550__$1);
var G__87620 = null;
var G__87621 = (0);
var G__87622 = (0);
seq__87550 = G__87619;
chunk__87551 = G__87620;
count__87552 = G__87621;
i__87553 = G__87622;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1487768192984