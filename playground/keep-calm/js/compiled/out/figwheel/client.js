// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args87944 = [];
var len__25947__auto___87947 = arguments.length;
var i__25948__auto___87948 = (0);
while(true){
if((i__25948__auto___87948 < len__25947__auto___87947)){
args87944.push((arguments[i__25948__auto___87948]));

var G__87949 = (i__25948__auto___87948 + (1));
i__25948__auto___87948 = G__87949;
continue;
} else {
}
break;
}

var G__87946 = args87944.length;
switch (G__87946) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87944.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___87952 = arguments.length;
var i__25948__auto___87953 = (0);
while(true){
if((i__25948__auto___87953 < len__25947__auto___87952)){
args__25954__auto__.push((arguments[i__25948__auto___87953]));

var G__87954 = (i__25948__auto___87953 + (1));
i__25948__auto___87953 = G__87954;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq87951){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87951));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___87956 = arguments.length;
var i__25948__auto___87957 = (0);
while(true){
if((i__25948__auto___87957 < len__25947__auto___87956)){
args__25954__auto__.push((arguments[i__25948__auto___87957]));

var G__87958 = (i__25948__auto___87957 + (1));
i__25948__auto___87957 = G__87958;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq87955){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87955));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__87959){
var map__87962 = p__87959;
var map__87962__$1 = ((((!((map__87962 == null)))?((((map__87962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87962):map__87962);
var message = cljs.core.get.call(null,map__87962__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__87962__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24872__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24860__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24860__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24860__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26902__auto___88124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___88124,ch){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___88124,ch){
return (function (state_88093){
var state_val_88094 = (state_88093[(1)]);
if((state_val_88094 === (7))){
var inst_88089 = (state_88093[(2)]);
var state_88093__$1 = state_88093;
var statearr_88095_88125 = state_88093__$1;
(statearr_88095_88125[(2)] = inst_88089);

(statearr_88095_88125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (1))){
var state_88093__$1 = state_88093;
var statearr_88096_88126 = state_88093__$1;
(statearr_88096_88126[(2)] = null);

(statearr_88096_88126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (4))){
var inst_88046 = (state_88093[(7)]);
var inst_88046__$1 = (state_88093[(2)]);
var state_88093__$1 = (function (){var statearr_88097 = state_88093;
(statearr_88097[(7)] = inst_88046__$1);

return statearr_88097;
})();
if(cljs.core.truth_(inst_88046__$1)){
var statearr_88098_88127 = state_88093__$1;
(statearr_88098_88127[(1)] = (5));

} else {
var statearr_88099_88128 = state_88093__$1;
(statearr_88099_88128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (15))){
var inst_88053 = (state_88093[(8)]);
var inst_88068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_88053);
var inst_88069 = cljs.core.first.call(null,inst_88068);
var inst_88070 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_88069);
var inst_88071 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_88070)].join('');
var inst_88072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_88071);
var state_88093__$1 = state_88093;
var statearr_88100_88129 = state_88093__$1;
(statearr_88100_88129[(2)] = inst_88072);

(statearr_88100_88129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (13))){
var inst_88077 = (state_88093[(2)]);
var state_88093__$1 = state_88093;
var statearr_88101_88130 = state_88093__$1;
(statearr_88101_88130[(2)] = inst_88077);

(statearr_88101_88130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (6))){
var state_88093__$1 = state_88093;
var statearr_88102_88131 = state_88093__$1;
(statearr_88102_88131[(2)] = null);

(statearr_88102_88131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (17))){
var inst_88075 = (state_88093[(2)]);
var state_88093__$1 = state_88093;
var statearr_88103_88132 = state_88093__$1;
(statearr_88103_88132[(2)] = inst_88075);

(statearr_88103_88132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (3))){
var inst_88091 = (state_88093[(2)]);
var state_88093__$1 = state_88093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88093__$1,inst_88091);
} else {
if((state_val_88094 === (12))){
var inst_88052 = (state_88093[(9)]);
var inst_88066 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_88052,opts);
var state_88093__$1 = state_88093;
if(cljs.core.truth_(inst_88066)){
var statearr_88104_88133 = state_88093__$1;
(statearr_88104_88133[(1)] = (15));

} else {
var statearr_88105_88134 = state_88093__$1;
(statearr_88105_88134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (2))){
var state_88093__$1 = state_88093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88093__$1,(4),ch);
} else {
if((state_val_88094 === (11))){
var inst_88053 = (state_88093[(8)]);
var inst_88058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88059 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_88053);
var inst_88060 = cljs.core.async.timeout.call(null,(1000));
var inst_88061 = [inst_88059,inst_88060];
var inst_88062 = (new cljs.core.PersistentVector(null,2,(5),inst_88058,inst_88061,null));
var state_88093__$1 = state_88093;
return cljs.core.async.ioc_alts_BANG_.call(null,state_88093__$1,(14),inst_88062);
} else {
if((state_val_88094 === (9))){
var inst_88053 = (state_88093[(8)]);
var inst_88079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_88080 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_88053);
var inst_88081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_88080);
var inst_88082 = [cljs.core.str("Not loading: "),cljs.core.str(inst_88081)].join('');
var inst_88083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_88082);
var state_88093__$1 = (function (){var statearr_88106 = state_88093;
(statearr_88106[(10)] = inst_88079);

return statearr_88106;
})();
var statearr_88107_88135 = state_88093__$1;
(statearr_88107_88135[(2)] = inst_88083);

(statearr_88107_88135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (5))){
var inst_88046 = (state_88093[(7)]);
var inst_88048 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_88049 = (new cljs.core.PersistentArrayMap(null,2,inst_88048,null));
var inst_88050 = (new cljs.core.PersistentHashSet(null,inst_88049,null));
var inst_88051 = figwheel.client.focus_msgs.call(null,inst_88050,inst_88046);
var inst_88052 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_88051);
var inst_88053 = cljs.core.first.call(null,inst_88051);
var inst_88054 = figwheel.client.autoload_QMARK_.call(null);
var state_88093__$1 = (function (){var statearr_88108 = state_88093;
(statearr_88108[(9)] = inst_88052);

(statearr_88108[(8)] = inst_88053);

return statearr_88108;
})();
if(cljs.core.truth_(inst_88054)){
var statearr_88109_88136 = state_88093__$1;
(statearr_88109_88136[(1)] = (8));

} else {
var statearr_88110_88137 = state_88093__$1;
(statearr_88110_88137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (14))){
var inst_88064 = (state_88093[(2)]);
var state_88093__$1 = state_88093;
var statearr_88111_88138 = state_88093__$1;
(statearr_88111_88138[(2)] = inst_88064);

(statearr_88111_88138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (16))){
var state_88093__$1 = state_88093;
var statearr_88112_88139 = state_88093__$1;
(statearr_88112_88139[(2)] = null);

(statearr_88112_88139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (10))){
var inst_88085 = (state_88093[(2)]);
var state_88093__$1 = (function (){var statearr_88113 = state_88093;
(statearr_88113[(11)] = inst_88085);

return statearr_88113;
})();
var statearr_88114_88140 = state_88093__$1;
(statearr_88114_88140[(2)] = null);

(statearr_88114_88140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88094 === (8))){
var inst_88052 = (state_88093[(9)]);
var inst_88056 = figwheel.client.reload_file_state_QMARK_.call(null,inst_88052,opts);
var state_88093__$1 = state_88093;
if(cljs.core.truth_(inst_88056)){
var statearr_88115_88141 = state_88093__$1;
(statearr_88115_88141[(1)] = (11));

} else {
var statearr_88116_88142 = state_88093__$1;
(statearr_88116_88142[(1)] = (12));

}

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
}
}
}
}
}
}
});})(c__26902__auto___88124,ch))
;
return ((function (switch__26881__auto__,c__26902__auto___88124,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____0 = (function (){
var statearr_88120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88120[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__);

(statearr_88120[(1)] = (1));

return statearr_88120;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____1 = (function (state_88093){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_88093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e88121){if((e88121 instanceof Object)){
var ex__26885__auto__ = e88121;
var statearr_88122_88143 = state_88093;
(statearr_88122_88143[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88144 = state_88093;
state_88093 = G__88144;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__ = function(state_88093){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____1.call(this,state_88093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___88124,ch))
})();
var state__26904__auto__ = (function (){var statearr_88123 = f__26903__auto__.call(null);
(statearr_88123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___88124);

return statearr_88123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___88124,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__88145_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__88145_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_88148 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_88148){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e88147){if((e88147 instanceof Error)){
var e = e88147;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_88148], null));
} else {
var e = e88147;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_88148))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__88149){
var map__88158 = p__88149;
var map__88158__$1 = ((((!((map__88158 == null)))?((((map__88158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88158):map__88158);
var opts = map__88158__$1;
var build_id = cljs.core.get.call(null,map__88158__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__88158,map__88158__$1,opts,build_id){
return (function (p__88160){
var vec__88161 = p__88160;
var seq__88162 = cljs.core.seq.call(null,vec__88161);
var first__88163 = cljs.core.first.call(null,seq__88162);
var seq__88162__$1 = cljs.core.next.call(null,seq__88162);
var map__88164 = first__88163;
var map__88164__$1 = ((((!((map__88164 == null)))?((((map__88164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88164):map__88164);
var msg = map__88164__$1;
var msg_name = cljs.core.get.call(null,map__88164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88162__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__88161,seq__88162,first__88163,seq__88162__$1,map__88164,map__88164__$1,msg,msg_name,_,map__88158,map__88158__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__88161,seq__88162,first__88163,seq__88162__$1,map__88164,map__88164__$1,msg,msg_name,_,map__88158,map__88158__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__88158,map__88158__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__88172){
var vec__88173 = p__88172;
var seq__88174 = cljs.core.seq.call(null,vec__88173);
var first__88175 = cljs.core.first.call(null,seq__88174);
var seq__88174__$1 = cljs.core.next.call(null,seq__88174);
var map__88176 = first__88175;
var map__88176__$1 = ((((!((map__88176 == null)))?((((map__88176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88176):map__88176);
var msg = map__88176__$1;
var msg_name = cljs.core.get.call(null,map__88176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88174__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__88178){
var map__88190 = p__88178;
var map__88190__$1 = ((((!((map__88190 == null)))?((((map__88190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88190):map__88190);
var on_compile_warning = cljs.core.get.call(null,map__88190__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__88190__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__88190,map__88190__$1,on_compile_warning,on_compile_fail){
return (function (p__88192){
var vec__88193 = p__88192;
var seq__88194 = cljs.core.seq.call(null,vec__88193);
var first__88195 = cljs.core.first.call(null,seq__88194);
var seq__88194__$1 = cljs.core.next.call(null,seq__88194);
var map__88196 = first__88195;
var map__88196__$1 = ((((!((map__88196 == null)))?((((map__88196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88196):map__88196);
var msg = map__88196__$1;
var msg_name = cljs.core.get.call(null,map__88196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88194__$1;
var pred__88198 = cljs.core._EQ_;
var expr__88199 = msg_name;
if(cljs.core.truth_(pred__88198.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__88199))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__88198.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__88199))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__88190,map__88190__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__,msg_hist,msg_names,msg){
return (function (state_88427){
var state_val_88428 = (state_88427[(1)]);
if((state_val_88428 === (7))){
var inst_88347 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88347)){
var statearr_88429_88479 = state_88427__$1;
(statearr_88429_88479[(1)] = (8));

} else {
var statearr_88430_88480 = state_88427__$1;
(statearr_88430_88480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (20))){
var inst_88421 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88431_88481 = state_88427__$1;
(statearr_88431_88481[(2)] = inst_88421);

(statearr_88431_88481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (27))){
var inst_88417 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88432_88482 = state_88427__$1;
(statearr_88432_88482[(2)] = inst_88417);

(statearr_88432_88482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (1))){
var inst_88340 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88340)){
var statearr_88433_88483 = state_88427__$1;
(statearr_88433_88483[(1)] = (2));

} else {
var statearr_88434_88484 = state_88427__$1;
(statearr_88434_88484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (24))){
var inst_88419 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88435_88485 = state_88427__$1;
(statearr_88435_88485[(2)] = inst_88419);

(statearr_88435_88485[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (4))){
var inst_88425 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88427__$1,inst_88425);
} else {
if((state_val_88428 === (15))){
var inst_88423 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88436_88486 = state_88427__$1;
(statearr_88436_88486[(2)] = inst_88423);

(statearr_88436_88486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (21))){
var inst_88376 = (state_88427[(2)]);
var inst_88377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88378 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88377);
var state_88427__$1 = (function (){var statearr_88437 = state_88427;
(statearr_88437[(7)] = inst_88376);

return statearr_88437;
})();
var statearr_88438_88487 = state_88427__$1;
(statearr_88438_88487[(2)] = inst_88378);

(statearr_88438_88487[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (31))){
var inst_88406 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88406)){
var statearr_88439_88488 = state_88427__$1;
(statearr_88439_88488[(1)] = (34));

} else {
var statearr_88440_88489 = state_88427__$1;
(statearr_88440_88489[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (32))){
var inst_88415 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88441_88490 = state_88427__$1;
(statearr_88441_88490[(2)] = inst_88415);

(statearr_88441_88490[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (33))){
var inst_88402 = (state_88427[(2)]);
var inst_88403 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88404 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88403);
var state_88427__$1 = (function (){var statearr_88442 = state_88427;
(statearr_88442[(8)] = inst_88402);

return statearr_88442;
})();
var statearr_88443_88491 = state_88427__$1;
(statearr_88443_88491[(2)] = inst_88404);

(statearr_88443_88491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (13))){
var inst_88361 = figwheel.client.heads_up.clear.call(null);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(16),inst_88361);
} else {
if((state_val_88428 === (22))){
var inst_88382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88383 = figwheel.client.heads_up.append_warning_message.call(null,inst_88382);
var state_88427__$1 = state_88427;
var statearr_88444_88492 = state_88427__$1;
(statearr_88444_88492[(2)] = inst_88383);

(statearr_88444_88492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (36))){
var inst_88413 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88445_88493 = state_88427__$1;
(statearr_88445_88493[(2)] = inst_88413);

(statearr_88445_88493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (29))){
var inst_88393 = (state_88427[(2)]);
var inst_88394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88395 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88394);
var state_88427__$1 = (function (){var statearr_88446 = state_88427;
(statearr_88446[(9)] = inst_88393);

return statearr_88446;
})();
var statearr_88447_88494 = state_88427__$1;
(statearr_88447_88494[(2)] = inst_88395);

(statearr_88447_88494[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (6))){
var inst_88342 = (state_88427[(10)]);
var state_88427__$1 = state_88427;
var statearr_88448_88495 = state_88427__$1;
(statearr_88448_88495[(2)] = inst_88342);

(statearr_88448_88495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (28))){
var inst_88389 = (state_88427[(2)]);
var inst_88390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88391 = figwheel.client.heads_up.display_warning.call(null,inst_88390);
var state_88427__$1 = (function (){var statearr_88449 = state_88427;
(statearr_88449[(11)] = inst_88389);

return statearr_88449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(29),inst_88391);
} else {
if((state_val_88428 === (25))){
var inst_88387 = figwheel.client.heads_up.clear.call(null);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(28),inst_88387);
} else {
if((state_val_88428 === (34))){
var inst_88408 = figwheel.client.heads_up.flash_loaded.call(null);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(37),inst_88408);
} else {
if((state_val_88428 === (17))){
var inst_88367 = (state_88427[(2)]);
var inst_88368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88369 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88368);
var state_88427__$1 = (function (){var statearr_88450 = state_88427;
(statearr_88450[(12)] = inst_88367);

return statearr_88450;
})();
var statearr_88451_88496 = state_88427__$1;
(statearr_88451_88496[(2)] = inst_88369);

(statearr_88451_88496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (3))){
var inst_88359 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88359)){
var statearr_88452_88497 = state_88427__$1;
(statearr_88452_88497[(1)] = (13));

} else {
var statearr_88453_88498 = state_88427__$1;
(statearr_88453_88498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (12))){
var inst_88355 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88454_88499 = state_88427__$1;
(statearr_88454_88499[(2)] = inst_88355);

(statearr_88454_88499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (2))){
var inst_88342 = (state_88427[(10)]);
var inst_88342__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_88427__$1 = (function (){var statearr_88455 = state_88427;
(statearr_88455[(10)] = inst_88342__$1);

return statearr_88455;
})();
if(cljs.core.truth_(inst_88342__$1)){
var statearr_88456_88500 = state_88427__$1;
(statearr_88456_88500[(1)] = (5));

} else {
var statearr_88457_88501 = state_88427__$1;
(statearr_88457_88501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (23))){
var inst_88385 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88385)){
var statearr_88458_88502 = state_88427__$1;
(statearr_88458_88502[(1)] = (25));

} else {
var statearr_88459_88503 = state_88427__$1;
(statearr_88459_88503[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (35))){
var state_88427__$1 = state_88427;
var statearr_88460_88504 = state_88427__$1;
(statearr_88460_88504[(2)] = null);

(statearr_88460_88504[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (19))){
var inst_88380 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88380)){
var statearr_88461_88505 = state_88427__$1;
(statearr_88461_88505[(1)] = (22));

} else {
var statearr_88462_88506 = state_88427__$1;
(statearr_88462_88506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (11))){
var inst_88351 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88463_88507 = state_88427__$1;
(statearr_88463_88507[(2)] = inst_88351);

(statearr_88463_88507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (9))){
var inst_88353 = figwheel.client.heads_up.clear.call(null);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(12),inst_88353);
} else {
if((state_val_88428 === (5))){
var inst_88344 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_88427__$1 = state_88427;
var statearr_88464_88508 = state_88427__$1;
(statearr_88464_88508[(2)] = inst_88344);

(statearr_88464_88508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (14))){
var inst_88371 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88371)){
var statearr_88465_88509 = state_88427__$1;
(statearr_88465_88509[(1)] = (18));

} else {
var statearr_88466_88510 = state_88427__$1;
(statearr_88466_88510[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (26))){
var inst_88397 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_88427__$1 = state_88427;
if(cljs.core.truth_(inst_88397)){
var statearr_88467_88511 = state_88427__$1;
(statearr_88467_88511[(1)] = (30));

} else {
var statearr_88468_88512 = state_88427__$1;
(statearr_88468_88512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (16))){
var inst_88363 = (state_88427[(2)]);
var inst_88364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88365 = figwheel.client.heads_up.display_exception.call(null,inst_88364);
var state_88427__$1 = (function (){var statearr_88469 = state_88427;
(statearr_88469[(13)] = inst_88363);

return statearr_88469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(17),inst_88365);
} else {
if((state_val_88428 === (30))){
var inst_88399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88400 = figwheel.client.heads_up.display_warning.call(null,inst_88399);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(33),inst_88400);
} else {
if((state_val_88428 === (10))){
var inst_88357 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88470_88513 = state_88427__$1;
(statearr_88470_88513[(2)] = inst_88357);

(statearr_88470_88513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (18))){
var inst_88373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88374 = figwheel.client.heads_up.display_exception.call(null,inst_88373);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(21),inst_88374);
} else {
if((state_val_88428 === (37))){
var inst_88410 = (state_88427[(2)]);
var state_88427__$1 = state_88427;
var statearr_88471_88514 = state_88427__$1;
(statearr_88471_88514[(2)] = inst_88410);

(statearr_88471_88514[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88428 === (8))){
var inst_88349 = figwheel.client.heads_up.flash_loaded.call(null);
var state_88427__$1 = state_88427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88427__$1,(11),inst_88349);
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
}
}
}
}
});})(c__26902__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26881__auto__,c__26902__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____0 = (function (){
var statearr_88475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88475[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__);

(statearr_88475[(1)] = (1));

return statearr_88475;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____1 = (function (state_88427){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_88427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e88476){if((e88476 instanceof Object)){
var ex__26885__auto__ = e88476;
var statearr_88477_88515 = state_88427;
(statearr_88477_88515[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88516 = state_88427;
state_88427 = G__88516;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__ = function(state_88427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____1.call(this,state_88427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__,msg_hist,msg_names,msg))
})();
var state__26904__auto__ = (function (){var statearr_88478 = f__26903__auto__.call(null);
(statearr_88478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_88478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__,msg_hist,msg_names,msg))
);

return c__26902__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26902__auto___88579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___88579,ch){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___88579,ch){
return (function (state_88562){
var state_val_88563 = (state_88562[(1)]);
if((state_val_88563 === (1))){
var state_88562__$1 = state_88562;
var statearr_88564_88580 = state_88562__$1;
(statearr_88564_88580[(2)] = null);

(statearr_88564_88580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88563 === (2))){
var state_88562__$1 = state_88562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88562__$1,(4),ch);
} else {
if((state_val_88563 === (3))){
var inst_88560 = (state_88562[(2)]);
var state_88562__$1 = state_88562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88562__$1,inst_88560);
} else {
if((state_val_88563 === (4))){
var inst_88550 = (state_88562[(7)]);
var inst_88550__$1 = (state_88562[(2)]);
var state_88562__$1 = (function (){var statearr_88565 = state_88562;
(statearr_88565[(7)] = inst_88550__$1);

return statearr_88565;
})();
if(cljs.core.truth_(inst_88550__$1)){
var statearr_88566_88581 = state_88562__$1;
(statearr_88566_88581[(1)] = (5));

} else {
var statearr_88567_88582 = state_88562__$1;
(statearr_88567_88582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88563 === (5))){
var inst_88550 = (state_88562[(7)]);
var inst_88552 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_88550);
var state_88562__$1 = state_88562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88562__$1,(8),inst_88552);
} else {
if((state_val_88563 === (6))){
var state_88562__$1 = state_88562;
var statearr_88568_88583 = state_88562__$1;
(statearr_88568_88583[(2)] = null);

(statearr_88568_88583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88563 === (7))){
var inst_88558 = (state_88562[(2)]);
var state_88562__$1 = state_88562;
var statearr_88569_88584 = state_88562__$1;
(statearr_88569_88584[(2)] = inst_88558);

(statearr_88569_88584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88563 === (8))){
var inst_88554 = (state_88562[(2)]);
var state_88562__$1 = (function (){var statearr_88570 = state_88562;
(statearr_88570[(8)] = inst_88554);

return statearr_88570;
})();
var statearr_88571_88585 = state_88562__$1;
(statearr_88571_88585[(2)] = null);

(statearr_88571_88585[(1)] = (2));


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
});})(c__26902__auto___88579,ch))
;
return ((function (switch__26881__auto__,c__26902__auto___88579,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26882__auto____0 = (function (){
var statearr_88575 = [null,null,null,null,null,null,null,null,null];
(statearr_88575[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26882__auto__);

(statearr_88575[(1)] = (1));

return statearr_88575;
});
var figwheel$client$heads_up_plugin_$_state_machine__26882__auto____1 = (function (state_88562){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_88562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e88576){if((e88576 instanceof Object)){
var ex__26885__auto__ = e88576;
var statearr_88577_88586 = state_88562;
(statearr_88577_88586[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88587 = state_88562;
state_88562 = G__88587;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26882__auto__ = function(state_88562){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26882__auto____1.call(this,state_88562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___88579,ch))
})();
var state__26904__auto__ = (function (){var statearr_88578 = f__26903__auto__.call(null);
(statearr_88578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___88579);

return statearr_88578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___88579,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__){
return (function (state_88608){
var state_val_88609 = (state_88608[(1)]);
if((state_val_88609 === (1))){
var inst_88603 = cljs.core.async.timeout.call(null,(3000));
var state_88608__$1 = state_88608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88608__$1,(2),inst_88603);
} else {
if((state_val_88609 === (2))){
var inst_88605 = (state_88608[(2)]);
var inst_88606 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_88608__$1 = (function (){var statearr_88610 = state_88608;
(statearr_88610[(7)] = inst_88605);

return statearr_88610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88608__$1,inst_88606);
} else {
return null;
}
}
});})(c__26902__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____0 = (function (){
var statearr_88614 = [null,null,null,null,null,null,null,null];
(statearr_88614[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__);

(statearr_88614[(1)] = (1));

return statearr_88614;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____1 = (function (state_88608){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_88608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e88615){if((e88615 instanceof Object)){
var ex__26885__auto__ = e88615;
var statearr_88616_88618 = state_88608;
(statearr_88616_88618[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88619 = state_88608;
state_88608 = G__88619;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__ = function(state_88608){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____1.call(this,state_88608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__))
})();
var state__26904__auto__ = (function (){var statearr_88617 = f__26903__auto__.call(null);
(statearr_88617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_88617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__))
);

return c__26902__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__,figwheel_version,temp__4657__auto__){
return (function (state_88642){
var state_val_88643 = (state_88642[(1)]);
if((state_val_88643 === (1))){
var inst_88636 = cljs.core.async.timeout.call(null,(2000));
var state_88642__$1 = state_88642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88642__$1,(2),inst_88636);
} else {
if((state_val_88643 === (2))){
var inst_88638 = (state_88642[(2)]);
var inst_88639 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_88640 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_88639);
var state_88642__$1 = (function (){var statearr_88644 = state_88642;
(statearr_88644[(7)] = inst_88638);

return statearr_88644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88642__$1,inst_88640);
} else {
return null;
}
}
});})(c__26902__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____0 = (function (){
var statearr_88648 = [null,null,null,null,null,null,null,null];
(statearr_88648[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__);

(statearr_88648[(1)] = (1));

return statearr_88648;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____1 = (function (state_88642){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_88642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e88649){if((e88649 instanceof Object)){
var ex__26885__auto__ = e88649;
var statearr_88650_88652 = state_88642;
(statearr_88650_88652[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88653 = state_88642;
state_88642 = G__88653;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__ = function(state_88642){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____1.call(this,state_88642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26904__auto__ = (function (){var statearr_88651 = f__26903__auto__.call(null);
(statearr_88651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_88651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__,figwheel_version,temp__4657__auto__))
);

return c__26902__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__88654){
var map__88658 = p__88654;
var map__88658__$1 = ((((!((map__88658 == null)))?((((map__88658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88658):map__88658);
var file = cljs.core.get.call(null,map__88658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__88658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__88658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__88660 = "";
var G__88660__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__88660),cljs.core.str("file "),cljs.core.str(file)].join(''):G__88660);
var G__88660__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__88660__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__88660__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = line;
if(cljs.core.truth_(and__24860__auto__)){
return column;
} else {
return and__24860__auto__;
}
})())){
return [cljs.core.str(G__88660__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__88660__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__88661){
var map__88668 = p__88661;
var map__88668__$1 = ((((!((map__88668 == null)))?((((map__88668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88668):map__88668);
var ed = map__88668__$1;
var formatted_exception = cljs.core.get.call(null,map__88668__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__88668__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__88668__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__88670_88674 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__88671_88675 = null;
var count__88672_88676 = (0);
var i__88673_88677 = (0);
while(true){
if((i__88673_88677 < count__88672_88676)){
var msg_88678 = cljs.core._nth.call(null,chunk__88671_88675,i__88673_88677);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_88678);

var G__88679 = seq__88670_88674;
var G__88680 = chunk__88671_88675;
var G__88681 = count__88672_88676;
var G__88682 = (i__88673_88677 + (1));
seq__88670_88674 = G__88679;
chunk__88671_88675 = G__88680;
count__88672_88676 = G__88681;
i__88673_88677 = G__88682;
continue;
} else {
var temp__4657__auto___88683 = cljs.core.seq.call(null,seq__88670_88674);
if(temp__4657__auto___88683){
var seq__88670_88684__$1 = temp__4657__auto___88683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88670_88684__$1)){
var c__25683__auto___88685 = cljs.core.chunk_first.call(null,seq__88670_88684__$1);
var G__88686 = cljs.core.chunk_rest.call(null,seq__88670_88684__$1);
var G__88687 = c__25683__auto___88685;
var G__88688 = cljs.core.count.call(null,c__25683__auto___88685);
var G__88689 = (0);
seq__88670_88674 = G__88686;
chunk__88671_88675 = G__88687;
count__88672_88676 = G__88688;
i__88673_88677 = G__88689;
continue;
} else {
var msg_88690 = cljs.core.first.call(null,seq__88670_88684__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_88690);

var G__88691 = cljs.core.next.call(null,seq__88670_88684__$1);
var G__88692 = null;
var G__88693 = (0);
var G__88694 = (0);
seq__88670_88674 = G__88691;
chunk__88671_88675 = G__88692;
count__88672_88676 = G__88693;
i__88673_88677 = G__88694;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__88695){
var map__88698 = p__88695;
var map__88698__$1 = ((((!((map__88698 == null)))?((((map__88698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88698):map__88698);
var w = map__88698__$1;
var message = cljs.core.get.call(null,map__88698__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24860__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__88710 = cljs.core.seq.call(null,plugins);
var chunk__88711 = null;
var count__88712 = (0);
var i__88713 = (0);
while(true){
if((i__88713 < count__88712)){
var vec__88714 = cljs.core._nth.call(null,chunk__88711,i__88713);
var k = cljs.core.nth.call(null,vec__88714,(0),null);
var plugin = cljs.core.nth.call(null,vec__88714,(1),null);
if(cljs.core.truth_(plugin)){
var pl_88720 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__88710,chunk__88711,count__88712,i__88713,pl_88720,vec__88714,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_88720.call(null,msg_hist);
});})(seq__88710,chunk__88711,count__88712,i__88713,pl_88720,vec__88714,k,plugin))
);
} else {
}

var G__88721 = seq__88710;
var G__88722 = chunk__88711;
var G__88723 = count__88712;
var G__88724 = (i__88713 + (1));
seq__88710 = G__88721;
chunk__88711 = G__88722;
count__88712 = G__88723;
i__88713 = G__88724;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__88710);
if(temp__4657__auto__){
var seq__88710__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88710__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__88710__$1);
var G__88725 = cljs.core.chunk_rest.call(null,seq__88710__$1);
var G__88726 = c__25683__auto__;
var G__88727 = cljs.core.count.call(null,c__25683__auto__);
var G__88728 = (0);
seq__88710 = G__88725;
chunk__88711 = G__88726;
count__88712 = G__88727;
i__88713 = G__88728;
continue;
} else {
var vec__88717 = cljs.core.first.call(null,seq__88710__$1);
var k = cljs.core.nth.call(null,vec__88717,(0),null);
var plugin = cljs.core.nth.call(null,vec__88717,(1),null);
if(cljs.core.truth_(plugin)){
var pl_88729 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__88710,chunk__88711,count__88712,i__88713,pl_88729,vec__88717,k,plugin,seq__88710__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_88729.call(null,msg_hist);
});})(seq__88710,chunk__88711,count__88712,i__88713,pl_88729,vec__88717,k,plugin,seq__88710__$1,temp__4657__auto__))
);
} else {
}

var G__88730 = cljs.core.next.call(null,seq__88710__$1);
var G__88731 = null;
var G__88732 = (0);
var G__88733 = (0);
seq__88710 = G__88730;
chunk__88711 = G__88731;
count__88712 = G__88732;
i__88713 = G__88733;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args88734 = [];
var len__25947__auto___88741 = arguments.length;
var i__25948__auto___88742 = (0);
while(true){
if((i__25948__auto___88742 < len__25947__auto___88741)){
args88734.push((arguments[i__25948__auto___88742]));

var G__88743 = (i__25948__auto___88742 + (1));
i__25948__auto___88742 = G__88743;
continue;
} else {
}
break;
}

var G__88736 = args88734.length;
switch (G__88736) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88734.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__88737_88745 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__88738_88746 = null;
var count__88739_88747 = (0);
var i__88740_88748 = (0);
while(true){
if((i__88740_88748 < count__88739_88747)){
var msg_88749 = cljs.core._nth.call(null,chunk__88738_88746,i__88740_88748);
figwheel.client.socket.handle_incoming_message.call(null,msg_88749);

var G__88750 = seq__88737_88745;
var G__88751 = chunk__88738_88746;
var G__88752 = count__88739_88747;
var G__88753 = (i__88740_88748 + (1));
seq__88737_88745 = G__88750;
chunk__88738_88746 = G__88751;
count__88739_88747 = G__88752;
i__88740_88748 = G__88753;
continue;
} else {
var temp__4657__auto___88754 = cljs.core.seq.call(null,seq__88737_88745);
if(temp__4657__auto___88754){
var seq__88737_88755__$1 = temp__4657__auto___88754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88737_88755__$1)){
var c__25683__auto___88756 = cljs.core.chunk_first.call(null,seq__88737_88755__$1);
var G__88757 = cljs.core.chunk_rest.call(null,seq__88737_88755__$1);
var G__88758 = c__25683__auto___88756;
var G__88759 = cljs.core.count.call(null,c__25683__auto___88756);
var G__88760 = (0);
seq__88737_88745 = G__88757;
chunk__88738_88746 = G__88758;
count__88739_88747 = G__88759;
i__88740_88748 = G__88760;
continue;
} else {
var msg_88761 = cljs.core.first.call(null,seq__88737_88755__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_88761);

var G__88762 = cljs.core.next.call(null,seq__88737_88755__$1);
var G__88763 = null;
var G__88764 = (0);
var G__88765 = (0);
seq__88737_88745 = G__88762;
chunk__88738_88746 = G__88763;
count__88739_88747 = G__88764;
i__88740_88748 = G__88765;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25954__auto__ = [];
var len__25947__auto___88770 = arguments.length;
var i__25948__auto___88771 = (0);
while(true){
if((i__25948__auto___88771 < len__25947__auto___88770)){
args__25954__auto__.push((arguments[i__25948__auto___88771]));

var G__88772 = (i__25948__auto___88771 + (1));
i__25948__auto___88771 = G__88772;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__88767){
var map__88768 = p__88767;
var map__88768__$1 = ((((!((map__88768 == null)))?((((map__88768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88768):map__88768);
var opts = map__88768__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq88766){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88766));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e88774){if((e88774 instanceof Error)){
var e = e88774;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e88774;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__88778){
var map__88779 = p__88778;
var map__88779__$1 = ((((!((map__88779 == null)))?((((map__88779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88779):map__88779);
var msg_name = cljs.core.get.call(null,map__88779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1487768193880