// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args80463 = [];
var len__25947__auto___80469 = arguments.length;
var i__25948__auto___80470 = (0);
while(true){
if((i__25948__auto___80470 < len__25947__auto___80469)){
args80463.push((arguments[i__25948__auto___80470]));

var G__80471 = (i__25948__auto___80470 + (1));
i__25948__auto___80470 = G__80471;
continue;
} else {
}
break;
}

var G__80465 = args80463.length;
switch (G__80465) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80463.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async80466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80466 = (function (f,blockable,meta80467){
this.f = f;
this.blockable = blockable;
this.meta80467 = meta80467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80468,meta80467__$1){
var self__ = this;
var _80468__$1 = this;
return (new cljs.core.async.t_cljs$core$async80466(self__.f,self__.blockable,meta80467__$1));
});

cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80468){
var self__ = this;
var _80468__$1 = this;
return self__.meta80467;
});

cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async80466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async80466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta80467","meta80467",402360134,null)], null);
});

cljs.core.async.t_cljs$core$async80466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80466";

cljs.core.async.t_cljs$core$async80466.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async80466");
});

cljs.core.async.__GT_t_cljs$core$async80466 = (function cljs$core$async$__GT_t_cljs$core$async80466(f__$1,blockable__$1,meta80467){
return (new cljs.core.async.t_cljs$core$async80466(f__$1,blockable__$1,meta80467));
});

}

return (new cljs.core.async.t_cljs$core$async80466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args80475 = [];
var len__25947__auto___80478 = arguments.length;
var i__25948__auto___80479 = (0);
while(true){
if((i__25948__auto___80479 < len__25947__auto___80478)){
args80475.push((arguments[i__25948__auto___80479]));

var G__80480 = (i__25948__auto___80479 + (1));
i__25948__auto___80479 = G__80480;
continue;
} else {
}
break;
}

var G__80477 = args80475.length;
switch (G__80477) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80475.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args80482 = [];
var len__25947__auto___80485 = arguments.length;
var i__25948__auto___80486 = (0);
while(true){
if((i__25948__auto___80486 < len__25947__auto___80485)){
args80482.push((arguments[i__25948__auto___80486]));

var G__80487 = (i__25948__auto___80486 + (1));
i__25948__auto___80486 = G__80487;
continue;
} else {
}
break;
}

var G__80484 = args80482.length;
switch (G__80484) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80482.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args80489 = [];
var len__25947__auto___80492 = arguments.length;
var i__25948__auto___80493 = (0);
while(true){
if((i__25948__auto___80493 < len__25947__auto___80492)){
args80489.push((arguments[i__25948__auto___80493]));

var G__80494 = (i__25948__auto___80493 + (1));
i__25948__auto___80493 = G__80494;
continue;
} else {
}
break;
}

var G__80491 = args80489.length;
switch (G__80491) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80489.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_80496 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_80496);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_80496,ret){
return (function (){
return fn1.call(null,val_80496);
});})(val_80496,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args80497 = [];
var len__25947__auto___80500 = arguments.length;
var i__25948__auto___80501 = (0);
while(true){
if((i__25948__auto___80501 < len__25947__auto___80500)){
args80497.push((arguments[i__25948__auto___80501]));

var G__80502 = (i__25948__auto___80501 + (1));
i__25948__auto___80501 = G__80502;
continue;
} else {
}
break;
}

var G__80499 = args80497.length;
switch (G__80499) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80497.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25787__auto___80504 = n;
var x_80505 = (0);
while(true){
if((x_80505 < n__25787__auto___80504)){
(a[x_80505] = (0));

var G__80506 = (x_80505 + (1));
x_80505 = G__80506;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__80507 = (i + (1));
i = G__80507;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async80511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80511 = (function (alt_flag,flag,meta80512){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta80512 = meta80512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_80513,meta80512__$1){
var self__ = this;
var _80513__$1 = this;
return (new cljs.core.async.t_cljs$core$async80511(self__.alt_flag,self__.flag,meta80512__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_80513){
var self__ = this;
var _80513__$1 = this;
return self__.meta80512;
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta80512","meta80512",1517230983,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async80511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80511";

cljs.core.async.t_cljs$core$async80511.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async80511");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async80511 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async80511(alt_flag__$1,flag__$1,meta80512){
return (new cljs.core.async.t_cljs$core$async80511(alt_flag__$1,flag__$1,meta80512));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async80511(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async80517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80517 = (function (alt_handler,flag,cb,meta80518){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta80518 = meta80518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80519,meta80518__$1){
var self__ = this;
var _80519__$1 = this;
return (new cljs.core.async.t_cljs$core$async80517(self__.alt_handler,self__.flag,self__.cb,meta80518__$1));
});

cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80519){
var self__ = this;
var _80519__$1 = this;
return self__.meta80518;
});

cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async80517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async80517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta80518","meta80518",-367792846,null)], null);
});

cljs.core.async.t_cljs$core$async80517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80517";

cljs.core.async.t_cljs$core$async80517.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async80517");
});

cljs.core.async.__GT_t_cljs$core$async80517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async80517(alt_handler__$1,flag__$1,cb__$1,meta80518){
return (new cljs.core.async.t_cljs$core$async80517(alt_handler__$1,flag__$1,cb__$1,meta80518));
});

}

return (new cljs.core.async.t_cljs$core$async80517(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__80520_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__80520_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__80521_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__80521_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24872__auto__ = wport;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__80522 = (i + (1));
i = G__80522;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24872__auto__ = ret;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___80528 = arguments.length;
var i__25948__auto___80529 = (0);
while(true){
if((i__25948__auto___80529 < len__25947__auto___80528)){
args__25954__auto__.push((arguments[i__25948__auto___80529]));

var G__80530 = (i__25948__auto___80529 + (1));
i__25948__auto___80529 = G__80530;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__80525){
var map__80526 = p__80525;
var map__80526__$1 = ((((!((map__80526 == null)))?((((map__80526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80526):map__80526);
var opts = map__80526__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq80523){
var G__80524 = cljs.core.first.call(null,seq80523);
var seq80523__$1 = cljs.core.next.call(null,seq80523);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__80524,seq80523__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args80531 = [];
var len__25947__auto___80581 = arguments.length;
var i__25948__auto___80582 = (0);
while(true){
if((i__25948__auto___80582 < len__25947__auto___80581)){
args80531.push((arguments[i__25948__auto___80582]));

var G__80583 = (i__25948__auto___80582 + (1));
i__25948__auto___80582 = G__80583;
continue;
} else {
}
break;
}

var G__80533 = args80531.length;
switch (G__80533) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80531.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26902__auto___80585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___80585){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___80585){
return (function (state_80557){
var state_val_80558 = (state_80557[(1)]);
if((state_val_80558 === (7))){
var inst_80553 = (state_80557[(2)]);
var state_80557__$1 = state_80557;
var statearr_80559_80586 = state_80557__$1;
(statearr_80559_80586[(2)] = inst_80553);

(statearr_80559_80586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (1))){
var state_80557__$1 = state_80557;
var statearr_80560_80587 = state_80557__$1;
(statearr_80560_80587[(2)] = null);

(statearr_80560_80587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (4))){
var inst_80536 = (state_80557[(7)]);
var inst_80536__$1 = (state_80557[(2)]);
var inst_80537 = (inst_80536__$1 == null);
var state_80557__$1 = (function (){var statearr_80561 = state_80557;
(statearr_80561[(7)] = inst_80536__$1);

return statearr_80561;
})();
if(cljs.core.truth_(inst_80537)){
var statearr_80562_80588 = state_80557__$1;
(statearr_80562_80588[(1)] = (5));

} else {
var statearr_80563_80589 = state_80557__$1;
(statearr_80563_80589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (13))){
var state_80557__$1 = state_80557;
var statearr_80564_80590 = state_80557__$1;
(statearr_80564_80590[(2)] = null);

(statearr_80564_80590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (6))){
var inst_80536 = (state_80557[(7)]);
var state_80557__$1 = state_80557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80557__$1,(11),to,inst_80536);
} else {
if((state_val_80558 === (3))){
var inst_80555 = (state_80557[(2)]);
var state_80557__$1 = state_80557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80557__$1,inst_80555);
} else {
if((state_val_80558 === (12))){
var state_80557__$1 = state_80557;
var statearr_80565_80591 = state_80557__$1;
(statearr_80565_80591[(2)] = null);

(statearr_80565_80591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (2))){
var state_80557__$1 = state_80557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80557__$1,(4),from);
} else {
if((state_val_80558 === (11))){
var inst_80546 = (state_80557[(2)]);
var state_80557__$1 = state_80557;
if(cljs.core.truth_(inst_80546)){
var statearr_80566_80592 = state_80557__$1;
(statearr_80566_80592[(1)] = (12));

} else {
var statearr_80567_80593 = state_80557__$1;
(statearr_80567_80593[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (9))){
var state_80557__$1 = state_80557;
var statearr_80568_80594 = state_80557__$1;
(statearr_80568_80594[(2)] = null);

(statearr_80568_80594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (5))){
var state_80557__$1 = state_80557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80569_80595 = state_80557__$1;
(statearr_80569_80595[(1)] = (8));

} else {
var statearr_80570_80596 = state_80557__$1;
(statearr_80570_80596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (14))){
var inst_80551 = (state_80557[(2)]);
var state_80557__$1 = state_80557;
var statearr_80571_80597 = state_80557__$1;
(statearr_80571_80597[(2)] = inst_80551);

(statearr_80571_80597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (10))){
var inst_80543 = (state_80557[(2)]);
var state_80557__$1 = state_80557;
var statearr_80572_80598 = state_80557__$1;
(statearr_80572_80598[(2)] = inst_80543);

(statearr_80572_80598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80558 === (8))){
var inst_80540 = cljs.core.async.close_BANG_.call(null,to);
var state_80557__$1 = state_80557;
var statearr_80573_80599 = state_80557__$1;
(statearr_80573_80599[(2)] = inst_80540);

(statearr_80573_80599[(1)] = (10));


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
});})(c__26902__auto___80585))
;
return ((function (switch__26881__auto__,c__26902__auto___80585){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_80577 = [null,null,null,null,null,null,null,null];
(statearr_80577[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_80577[(1)] = (1));

return statearr_80577;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_80557){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80578){if((e80578 instanceof Object)){
var ex__26885__auto__ = e80578;
var statearr_80579_80600 = state_80557;
(statearr_80579_80600[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80601 = state_80557;
state_80557 = G__80601;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_80557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_80557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___80585))
})();
var state__26904__auto__ = (function (){var statearr_80580 = f__26903__auto__.call(null);
(statearr_80580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___80585);

return statearr_80580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___80585))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__80789){
var vec__80790 = p__80789;
var v = cljs.core.nth.call(null,vec__80790,(0),null);
var p = cljs.core.nth.call(null,vec__80790,(1),null);
var job = vec__80790;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26902__auto___80976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results){
return (function (state_80797){
var state_val_80798 = (state_80797[(1)]);
if((state_val_80798 === (1))){
var state_80797__$1 = state_80797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80797__$1,(2),res,v);
} else {
if((state_val_80798 === (2))){
var inst_80794 = (state_80797[(2)]);
var inst_80795 = cljs.core.async.close_BANG_.call(null,res);
var state_80797__$1 = (function (){var statearr_80799 = state_80797;
(statearr_80799[(7)] = inst_80794);

return statearr_80799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80797__$1,inst_80795);
} else {
return null;
}
}
});})(c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results))
;
return ((function (switch__26881__auto__,c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_80803 = [null,null,null,null,null,null,null,null];
(statearr_80803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__);

(statearr_80803[(1)] = (1));

return statearr_80803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1 = (function (state_80797){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80804){if((e80804 instanceof Object)){
var ex__26885__auto__ = e80804;
var statearr_80805_80977 = state_80797;
(statearr_80805_80977[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80978 = state_80797;
state_80797 = G__80978;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = function(state_80797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1.call(this,state_80797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results))
})();
var state__26904__auto__ = (function (){var statearr_80806 = f__26903__auto__.call(null);
(statearr_80806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___80976);

return statearr_80806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___80976,res,vec__80790,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__80807){
var vec__80808 = p__80807;
var v = cljs.core.nth.call(null,vec__80808,(0),null);
var p = cljs.core.nth.call(null,vec__80808,(1),null);
var job = vec__80808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25787__auto___80979 = n;
var __80980 = (0);
while(true){
if((__80980 < n__25787__auto___80979)){
var G__80811_80981 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__80811_80981) {
case "compute":
var c__26902__auto___80983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__80980,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (__80980,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function (state_80824){
var state_val_80825 = (state_80824[(1)]);
if((state_val_80825 === (1))){
var state_80824__$1 = state_80824;
var statearr_80826_80984 = state_80824__$1;
(statearr_80826_80984[(2)] = null);

(statearr_80826_80984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80825 === (2))){
var state_80824__$1 = state_80824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80824__$1,(4),jobs);
} else {
if((state_val_80825 === (3))){
var inst_80822 = (state_80824[(2)]);
var state_80824__$1 = state_80824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80824__$1,inst_80822);
} else {
if((state_val_80825 === (4))){
var inst_80814 = (state_80824[(2)]);
var inst_80815 = process.call(null,inst_80814);
var state_80824__$1 = state_80824;
if(cljs.core.truth_(inst_80815)){
var statearr_80827_80985 = state_80824__$1;
(statearr_80827_80985[(1)] = (5));

} else {
var statearr_80828_80986 = state_80824__$1;
(statearr_80828_80986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80825 === (5))){
var state_80824__$1 = state_80824;
var statearr_80829_80987 = state_80824__$1;
(statearr_80829_80987[(2)] = null);

(statearr_80829_80987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80825 === (6))){
var state_80824__$1 = state_80824;
var statearr_80830_80988 = state_80824__$1;
(statearr_80830_80988[(2)] = null);

(statearr_80830_80988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80825 === (7))){
var inst_80820 = (state_80824[(2)]);
var state_80824__$1 = state_80824;
var statearr_80831_80989 = state_80824__$1;
(statearr_80831_80989[(2)] = inst_80820);

(statearr_80831_80989[(1)] = (3));


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
});})(__80980,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
;
return ((function (__80980,switch__26881__auto__,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_80835 = [null,null,null,null,null,null,null];
(statearr_80835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__);

(statearr_80835[(1)] = (1));

return statearr_80835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1 = (function (state_80824){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80836){if((e80836 instanceof Object)){
var ex__26885__auto__ = e80836;
var statearr_80837_80990 = state_80824;
(statearr_80837_80990[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80991 = state_80824;
state_80824 = G__80991;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = function(state_80824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1.call(this,state_80824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__;
})()
;})(__80980,switch__26881__auto__,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
})();
var state__26904__auto__ = (function (){var statearr_80838 = f__26903__auto__.call(null);
(statearr_80838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___80983);

return statearr_80838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(__80980,c__26902__auto___80983,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
);


break;
case "async":
var c__26902__auto___80992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__80980,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (__80980,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function (state_80851){
var state_val_80852 = (state_80851[(1)]);
if((state_val_80852 === (1))){
var state_80851__$1 = state_80851;
var statearr_80853_80993 = state_80851__$1;
(statearr_80853_80993[(2)] = null);

(statearr_80853_80993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80852 === (2))){
var state_80851__$1 = state_80851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80851__$1,(4),jobs);
} else {
if((state_val_80852 === (3))){
var inst_80849 = (state_80851[(2)]);
var state_80851__$1 = state_80851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80851__$1,inst_80849);
} else {
if((state_val_80852 === (4))){
var inst_80841 = (state_80851[(2)]);
var inst_80842 = async.call(null,inst_80841);
var state_80851__$1 = state_80851;
if(cljs.core.truth_(inst_80842)){
var statearr_80854_80994 = state_80851__$1;
(statearr_80854_80994[(1)] = (5));

} else {
var statearr_80855_80995 = state_80851__$1;
(statearr_80855_80995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80852 === (5))){
var state_80851__$1 = state_80851;
var statearr_80856_80996 = state_80851__$1;
(statearr_80856_80996[(2)] = null);

(statearr_80856_80996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80852 === (6))){
var state_80851__$1 = state_80851;
var statearr_80857_80997 = state_80851__$1;
(statearr_80857_80997[(2)] = null);

(statearr_80857_80997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80852 === (7))){
var inst_80847 = (state_80851[(2)]);
var state_80851__$1 = state_80851;
var statearr_80858_80998 = state_80851__$1;
(statearr_80858_80998[(2)] = inst_80847);

(statearr_80858_80998[(1)] = (3));


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
});})(__80980,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
;
return ((function (__80980,switch__26881__auto__,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_80862 = [null,null,null,null,null,null,null];
(statearr_80862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__);

(statearr_80862[(1)] = (1));

return statearr_80862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1 = (function (state_80851){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80863){if((e80863 instanceof Object)){
var ex__26885__auto__ = e80863;
var statearr_80864_80999 = state_80851;
(statearr_80864_80999[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81000 = state_80851;
state_80851 = G__81000;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = function(state_80851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1.call(this,state_80851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__;
})()
;})(__80980,switch__26881__auto__,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
})();
var state__26904__auto__ = (function (){var statearr_80865 = f__26903__auto__.call(null);
(statearr_80865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___80992);

return statearr_80865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(__80980,c__26902__auto___80992,G__80811_80981,n__25787__auto___80979,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__81001 = (__80980 + (1));
__80980 = G__81001;
continue;
} else {
}
break;
}

var c__26902__auto___81002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___81002,jobs,results,process,async){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___81002,jobs,results,process,async){
return (function (state_80887){
var state_val_80888 = (state_80887[(1)]);
if((state_val_80888 === (1))){
var state_80887__$1 = state_80887;
var statearr_80889_81003 = state_80887__$1;
(statearr_80889_81003[(2)] = null);

(statearr_80889_81003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80888 === (2))){
var state_80887__$1 = state_80887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80887__$1,(4),from);
} else {
if((state_val_80888 === (3))){
var inst_80885 = (state_80887[(2)]);
var state_80887__$1 = state_80887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80887__$1,inst_80885);
} else {
if((state_val_80888 === (4))){
var inst_80868 = (state_80887[(7)]);
var inst_80868__$1 = (state_80887[(2)]);
var inst_80869 = (inst_80868__$1 == null);
var state_80887__$1 = (function (){var statearr_80890 = state_80887;
(statearr_80890[(7)] = inst_80868__$1);

return statearr_80890;
})();
if(cljs.core.truth_(inst_80869)){
var statearr_80891_81004 = state_80887__$1;
(statearr_80891_81004[(1)] = (5));

} else {
var statearr_80892_81005 = state_80887__$1;
(statearr_80892_81005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80888 === (5))){
var inst_80871 = cljs.core.async.close_BANG_.call(null,jobs);
var state_80887__$1 = state_80887;
var statearr_80893_81006 = state_80887__$1;
(statearr_80893_81006[(2)] = inst_80871);

(statearr_80893_81006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80888 === (6))){
var inst_80873 = (state_80887[(8)]);
var inst_80868 = (state_80887[(7)]);
var inst_80873__$1 = cljs.core.async.chan.call(null,(1));
var inst_80874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80875 = [inst_80868,inst_80873__$1];
var inst_80876 = (new cljs.core.PersistentVector(null,2,(5),inst_80874,inst_80875,null));
var state_80887__$1 = (function (){var statearr_80894 = state_80887;
(statearr_80894[(8)] = inst_80873__$1);

return statearr_80894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80887__$1,(8),jobs,inst_80876);
} else {
if((state_val_80888 === (7))){
var inst_80883 = (state_80887[(2)]);
var state_80887__$1 = state_80887;
var statearr_80895_81007 = state_80887__$1;
(statearr_80895_81007[(2)] = inst_80883);

(statearr_80895_81007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80888 === (8))){
var inst_80873 = (state_80887[(8)]);
var inst_80878 = (state_80887[(2)]);
var state_80887__$1 = (function (){var statearr_80896 = state_80887;
(statearr_80896[(9)] = inst_80878);

return statearr_80896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80887__$1,(9),results,inst_80873);
} else {
if((state_val_80888 === (9))){
var inst_80880 = (state_80887[(2)]);
var state_80887__$1 = (function (){var statearr_80897 = state_80887;
(statearr_80897[(10)] = inst_80880);

return statearr_80897;
})();
var statearr_80898_81008 = state_80887__$1;
(statearr_80898_81008[(2)] = null);

(statearr_80898_81008[(1)] = (2));


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
});})(c__26902__auto___81002,jobs,results,process,async))
;
return ((function (switch__26881__auto__,c__26902__auto___81002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_80902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__);

(statearr_80902[(1)] = (1));

return statearr_80902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1 = (function (state_80887){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80903){if((e80903 instanceof Object)){
var ex__26885__auto__ = e80903;
var statearr_80904_81009 = state_80887;
(statearr_80904_81009[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81010 = state_80887;
state_80887 = G__81010;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = function(state_80887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1.call(this,state_80887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___81002,jobs,results,process,async))
})();
var state__26904__auto__ = (function (){var statearr_80905 = f__26903__auto__.call(null);
(statearr_80905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___81002);

return statearr_80905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___81002,jobs,results,process,async))
);


var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__,jobs,results,process,async){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__,jobs,results,process,async){
return (function (state_80943){
var state_val_80944 = (state_80943[(1)]);
if((state_val_80944 === (7))){
var inst_80939 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
var statearr_80945_81011 = state_80943__$1;
(statearr_80945_81011[(2)] = inst_80939);

(statearr_80945_81011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (20))){
var state_80943__$1 = state_80943;
var statearr_80946_81012 = state_80943__$1;
(statearr_80946_81012[(2)] = null);

(statearr_80946_81012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (1))){
var state_80943__$1 = state_80943;
var statearr_80947_81013 = state_80943__$1;
(statearr_80947_81013[(2)] = null);

(statearr_80947_81013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (4))){
var inst_80908 = (state_80943[(7)]);
var inst_80908__$1 = (state_80943[(2)]);
var inst_80909 = (inst_80908__$1 == null);
var state_80943__$1 = (function (){var statearr_80948 = state_80943;
(statearr_80948[(7)] = inst_80908__$1);

return statearr_80948;
})();
if(cljs.core.truth_(inst_80909)){
var statearr_80949_81014 = state_80943__$1;
(statearr_80949_81014[(1)] = (5));

} else {
var statearr_80950_81015 = state_80943__$1;
(statearr_80950_81015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (15))){
var inst_80921 = (state_80943[(8)]);
var state_80943__$1 = state_80943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80943__$1,(18),to,inst_80921);
} else {
if((state_val_80944 === (21))){
var inst_80934 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
var statearr_80951_81016 = state_80943__$1;
(statearr_80951_81016[(2)] = inst_80934);

(statearr_80951_81016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (13))){
var inst_80936 = (state_80943[(2)]);
var state_80943__$1 = (function (){var statearr_80952 = state_80943;
(statearr_80952[(9)] = inst_80936);

return statearr_80952;
})();
var statearr_80953_81017 = state_80943__$1;
(statearr_80953_81017[(2)] = null);

(statearr_80953_81017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (6))){
var inst_80908 = (state_80943[(7)]);
var state_80943__$1 = state_80943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80943__$1,(11),inst_80908);
} else {
if((state_val_80944 === (17))){
var inst_80929 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
if(cljs.core.truth_(inst_80929)){
var statearr_80954_81018 = state_80943__$1;
(statearr_80954_81018[(1)] = (19));

} else {
var statearr_80955_81019 = state_80943__$1;
(statearr_80955_81019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (3))){
var inst_80941 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80943__$1,inst_80941);
} else {
if((state_val_80944 === (12))){
var inst_80918 = (state_80943[(10)]);
var state_80943__$1 = state_80943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80943__$1,(14),inst_80918);
} else {
if((state_val_80944 === (2))){
var state_80943__$1 = state_80943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80943__$1,(4),results);
} else {
if((state_val_80944 === (19))){
var state_80943__$1 = state_80943;
var statearr_80956_81020 = state_80943__$1;
(statearr_80956_81020[(2)] = null);

(statearr_80956_81020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (11))){
var inst_80918 = (state_80943[(2)]);
var state_80943__$1 = (function (){var statearr_80957 = state_80943;
(statearr_80957[(10)] = inst_80918);

return statearr_80957;
})();
var statearr_80958_81021 = state_80943__$1;
(statearr_80958_81021[(2)] = null);

(statearr_80958_81021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (9))){
var state_80943__$1 = state_80943;
var statearr_80959_81022 = state_80943__$1;
(statearr_80959_81022[(2)] = null);

(statearr_80959_81022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (5))){
var state_80943__$1 = state_80943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80960_81023 = state_80943__$1;
(statearr_80960_81023[(1)] = (8));

} else {
var statearr_80961_81024 = state_80943__$1;
(statearr_80961_81024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (14))){
var inst_80921 = (state_80943[(8)]);
var inst_80923 = (state_80943[(11)]);
var inst_80921__$1 = (state_80943[(2)]);
var inst_80922 = (inst_80921__$1 == null);
var inst_80923__$1 = cljs.core.not.call(null,inst_80922);
var state_80943__$1 = (function (){var statearr_80962 = state_80943;
(statearr_80962[(8)] = inst_80921__$1);

(statearr_80962[(11)] = inst_80923__$1);

return statearr_80962;
})();
if(inst_80923__$1){
var statearr_80963_81025 = state_80943__$1;
(statearr_80963_81025[(1)] = (15));

} else {
var statearr_80964_81026 = state_80943__$1;
(statearr_80964_81026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (16))){
var inst_80923 = (state_80943[(11)]);
var state_80943__$1 = state_80943;
var statearr_80965_81027 = state_80943__$1;
(statearr_80965_81027[(2)] = inst_80923);

(statearr_80965_81027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (10))){
var inst_80915 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
var statearr_80966_81028 = state_80943__$1;
(statearr_80966_81028[(2)] = inst_80915);

(statearr_80966_81028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (18))){
var inst_80926 = (state_80943[(2)]);
var state_80943__$1 = state_80943;
var statearr_80967_81029 = state_80943__$1;
(statearr_80967_81029[(2)] = inst_80926);

(statearr_80967_81029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80944 === (8))){
var inst_80912 = cljs.core.async.close_BANG_.call(null,to);
var state_80943__$1 = state_80943;
var statearr_80968_81030 = state_80943__$1;
(statearr_80968_81030[(2)] = inst_80912);

(statearr_80968_81030[(1)] = (10));


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
}
}
}
}
});})(c__26902__auto__,jobs,results,process,async))
;
return ((function (switch__26881__auto__,c__26902__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_80972 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__);

(statearr_80972[(1)] = (1));

return statearr_80972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1 = (function (state_80943){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_80943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e80973){if((e80973 instanceof Object)){
var ex__26885__auto__ = e80973;
var statearr_80974_81031 = state_80943;
(statearr_80974_81031[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81032 = state_80943;
state_80943 = G__81032;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__ = function(state_80943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1.call(this,state_80943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__,jobs,results,process,async))
})();
var state__26904__auto__ = (function (){var statearr_80975 = f__26903__auto__.call(null);
(statearr_80975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_80975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__,jobs,results,process,async))
);

return c__26902__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args81033 = [];
var len__25947__auto___81036 = arguments.length;
var i__25948__auto___81037 = (0);
while(true){
if((i__25948__auto___81037 < len__25947__auto___81036)){
args81033.push((arguments[i__25948__auto___81037]));

var G__81038 = (i__25948__auto___81037 + (1));
i__25948__auto___81037 = G__81038;
continue;
} else {
}
break;
}

var G__81035 = args81033.length;
switch (G__81035) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81033.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args81040 = [];
var len__25947__auto___81043 = arguments.length;
var i__25948__auto___81044 = (0);
while(true){
if((i__25948__auto___81044 < len__25947__auto___81043)){
args81040.push((arguments[i__25948__auto___81044]));

var G__81045 = (i__25948__auto___81044 + (1));
i__25948__auto___81044 = G__81045;
continue;
} else {
}
break;
}

var G__81042 = args81040.length;
switch (G__81042) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81040.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args81047 = [];
var len__25947__auto___81100 = arguments.length;
var i__25948__auto___81101 = (0);
while(true){
if((i__25948__auto___81101 < len__25947__auto___81100)){
args81047.push((arguments[i__25948__auto___81101]));

var G__81102 = (i__25948__auto___81101 + (1));
i__25948__auto___81101 = G__81102;
continue;
} else {
}
break;
}

var G__81049 = args81047.length;
switch (G__81049) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81047.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26902__auto___81104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___81104,tc,fc){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___81104,tc,fc){
return (function (state_81075){
var state_val_81076 = (state_81075[(1)]);
if((state_val_81076 === (7))){
var inst_81071 = (state_81075[(2)]);
var state_81075__$1 = state_81075;
var statearr_81077_81105 = state_81075__$1;
(statearr_81077_81105[(2)] = inst_81071);

(statearr_81077_81105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (1))){
var state_81075__$1 = state_81075;
var statearr_81078_81106 = state_81075__$1;
(statearr_81078_81106[(2)] = null);

(statearr_81078_81106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (4))){
var inst_81052 = (state_81075[(7)]);
var inst_81052__$1 = (state_81075[(2)]);
var inst_81053 = (inst_81052__$1 == null);
var state_81075__$1 = (function (){var statearr_81079 = state_81075;
(statearr_81079[(7)] = inst_81052__$1);

return statearr_81079;
})();
if(cljs.core.truth_(inst_81053)){
var statearr_81080_81107 = state_81075__$1;
(statearr_81080_81107[(1)] = (5));

} else {
var statearr_81081_81108 = state_81075__$1;
(statearr_81081_81108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (13))){
var state_81075__$1 = state_81075;
var statearr_81082_81109 = state_81075__$1;
(statearr_81082_81109[(2)] = null);

(statearr_81082_81109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (6))){
var inst_81052 = (state_81075[(7)]);
var inst_81058 = p.call(null,inst_81052);
var state_81075__$1 = state_81075;
if(cljs.core.truth_(inst_81058)){
var statearr_81083_81110 = state_81075__$1;
(statearr_81083_81110[(1)] = (9));

} else {
var statearr_81084_81111 = state_81075__$1;
(statearr_81084_81111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (3))){
var inst_81073 = (state_81075[(2)]);
var state_81075__$1 = state_81075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81075__$1,inst_81073);
} else {
if((state_val_81076 === (12))){
var state_81075__$1 = state_81075;
var statearr_81085_81112 = state_81075__$1;
(statearr_81085_81112[(2)] = null);

(statearr_81085_81112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (2))){
var state_81075__$1 = state_81075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81075__$1,(4),ch);
} else {
if((state_val_81076 === (11))){
var inst_81052 = (state_81075[(7)]);
var inst_81062 = (state_81075[(2)]);
var state_81075__$1 = state_81075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81075__$1,(8),inst_81062,inst_81052);
} else {
if((state_val_81076 === (9))){
var state_81075__$1 = state_81075;
var statearr_81086_81113 = state_81075__$1;
(statearr_81086_81113[(2)] = tc);

(statearr_81086_81113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (5))){
var inst_81055 = cljs.core.async.close_BANG_.call(null,tc);
var inst_81056 = cljs.core.async.close_BANG_.call(null,fc);
var state_81075__$1 = (function (){var statearr_81087 = state_81075;
(statearr_81087[(8)] = inst_81055);

return statearr_81087;
})();
var statearr_81088_81114 = state_81075__$1;
(statearr_81088_81114[(2)] = inst_81056);

(statearr_81088_81114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (14))){
var inst_81069 = (state_81075[(2)]);
var state_81075__$1 = state_81075;
var statearr_81089_81115 = state_81075__$1;
(statearr_81089_81115[(2)] = inst_81069);

(statearr_81089_81115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (10))){
var state_81075__$1 = state_81075;
var statearr_81090_81116 = state_81075__$1;
(statearr_81090_81116[(2)] = fc);

(statearr_81090_81116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81076 === (8))){
var inst_81064 = (state_81075[(2)]);
var state_81075__$1 = state_81075;
if(cljs.core.truth_(inst_81064)){
var statearr_81091_81117 = state_81075__$1;
(statearr_81091_81117[(1)] = (12));

} else {
var statearr_81092_81118 = state_81075__$1;
(statearr_81092_81118[(1)] = (13));

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
});})(c__26902__auto___81104,tc,fc))
;
return ((function (switch__26881__auto__,c__26902__auto___81104,tc,fc){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_81096 = [null,null,null,null,null,null,null,null,null];
(statearr_81096[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_81096[(1)] = (1));

return statearr_81096;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_81075){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_81075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e81097){if((e81097 instanceof Object)){
var ex__26885__auto__ = e81097;
var statearr_81098_81119 = state_81075;
(statearr_81098_81119[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81120 = state_81075;
state_81075 = G__81120;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_81075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_81075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___81104,tc,fc))
})();
var state__26904__auto__ = (function (){var statearr_81099 = f__26903__auto__.call(null);
(statearr_81099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___81104);

return statearr_81099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___81104,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__){
return (function (state_81184){
var state_val_81185 = (state_81184[(1)]);
if((state_val_81185 === (7))){
var inst_81180 = (state_81184[(2)]);
var state_81184__$1 = state_81184;
var statearr_81186_81207 = state_81184__$1;
(statearr_81186_81207[(2)] = inst_81180);

(statearr_81186_81207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (1))){
var inst_81164 = init;
var state_81184__$1 = (function (){var statearr_81187 = state_81184;
(statearr_81187[(7)] = inst_81164);

return statearr_81187;
})();
var statearr_81188_81208 = state_81184__$1;
(statearr_81188_81208[(2)] = null);

(statearr_81188_81208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (4))){
var inst_81167 = (state_81184[(8)]);
var inst_81167__$1 = (state_81184[(2)]);
var inst_81168 = (inst_81167__$1 == null);
var state_81184__$1 = (function (){var statearr_81189 = state_81184;
(statearr_81189[(8)] = inst_81167__$1);

return statearr_81189;
})();
if(cljs.core.truth_(inst_81168)){
var statearr_81190_81209 = state_81184__$1;
(statearr_81190_81209[(1)] = (5));

} else {
var statearr_81191_81210 = state_81184__$1;
(statearr_81191_81210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (6))){
var inst_81164 = (state_81184[(7)]);
var inst_81171 = (state_81184[(9)]);
var inst_81167 = (state_81184[(8)]);
var inst_81171__$1 = f.call(null,inst_81164,inst_81167);
var inst_81172 = cljs.core.reduced_QMARK_.call(null,inst_81171__$1);
var state_81184__$1 = (function (){var statearr_81192 = state_81184;
(statearr_81192[(9)] = inst_81171__$1);

return statearr_81192;
})();
if(inst_81172){
var statearr_81193_81211 = state_81184__$1;
(statearr_81193_81211[(1)] = (8));

} else {
var statearr_81194_81212 = state_81184__$1;
(statearr_81194_81212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (3))){
var inst_81182 = (state_81184[(2)]);
var state_81184__$1 = state_81184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81184__$1,inst_81182);
} else {
if((state_val_81185 === (2))){
var state_81184__$1 = state_81184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81184__$1,(4),ch);
} else {
if((state_val_81185 === (9))){
var inst_81171 = (state_81184[(9)]);
var inst_81164 = inst_81171;
var state_81184__$1 = (function (){var statearr_81195 = state_81184;
(statearr_81195[(7)] = inst_81164);

return statearr_81195;
})();
var statearr_81196_81213 = state_81184__$1;
(statearr_81196_81213[(2)] = null);

(statearr_81196_81213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (5))){
var inst_81164 = (state_81184[(7)]);
var state_81184__$1 = state_81184;
var statearr_81197_81214 = state_81184__$1;
(statearr_81197_81214[(2)] = inst_81164);

(statearr_81197_81214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (10))){
var inst_81178 = (state_81184[(2)]);
var state_81184__$1 = state_81184;
var statearr_81198_81215 = state_81184__$1;
(statearr_81198_81215[(2)] = inst_81178);

(statearr_81198_81215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81185 === (8))){
var inst_81171 = (state_81184[(9)]);
var inst_81174 = cljs.core.deref.call(null,inst_81171);
var state_81184__$1 = state_81184;
var statearr_81199_81216 = state_81184__$1;
(statearr_81199_81216[(2)] = inst_81174);

(statearr_81199_81216[(1)] = (10));


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
});})(c__26902__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26882__auto____0 = (function (){
var statearr_81203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_81203[(0)] = cljs$core$async$reduce_$_state_machine__26882__auto__);

(statearr_81203[(1)] = (1));

return statearr_81203;
});
var cljs$core$async$reduce_$_state_machine__26882__auto____1 = (function (state_81184){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_81184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e81204){if((e81204 instanceof Object)){
var ex__26885__auto__ = e81204;
var statearr_81205_81217 = state_81184;
(statearr_81205_81217[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81218 = state_81184;
state_81184 = G__81218;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26882__auto__ = function(state_81184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26882__auto____1.call(this,state_81184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26882__auto____0;
cljs$core$async$reduce_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26882__auto____1;
return cljs$core$async$reduce_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__))
})();
var state__26904__auto__ = (function (){var statearr_81206 = f__26903__auto__.call(null);
(statearr_81206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_81206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__))
);

return c__26902__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__,f__$1){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__,f__$1){
return (function (state_81238){
var state_val_81239 = (state_81238[(1)]);
if((state_val_81239 === (1))){
var inst_81233 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_81238__$1 = state_81238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81238__$1,(2),inst_81233);
} else {
if((state_val_81239 === (2))){
var inst_81235 = (state_81238[(2)]);
var inst_81236 = f__$1.call(null,inst_81235);
var state_81238__$1 = state_81238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81238__$1,inst_81236);
} else {
return null;
}
}
});})(c__26902__auto__,f__$1))
;
return ((function (switch__26881__auto__,c__26902__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26882__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26882__auto____0 = (function (){
var statearr_81243 = [null,null,null,null,null,null,null];
(statearr_81243[(0)] = cljs$core$async$transduce_$_state_machine__26882__auto__);

(statearr_81243[(1)] = (1));

return statearr_81243;
});
var cljs$core$async$transduce_$_state_machine__26882__auto____1 = (function (state_81238){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_81238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e81244){if((e81244 instanceof Object)){
var ex__26885__auto__ = e81244;
var statearr_81245_81247 = state_81238;
(statearr_81245_81247[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81248 = state_81238;
state_81238 = G__81248;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26882__auto__ = function(state_81238){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26882__auto____1.call(this,state_81238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26882__auto____0;
cljs$core$async$transduce_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26882__auto____1;
return cljs$core$async$transduce_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__,f__$1))
})();
var state__26904__auto__ = (function (){var statearr_81246 = f__26903__auto__.call(null);
(statearr_81246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_81246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__,f__$1))
);

return c__26902__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args81249 = [];
var len__25947__auto___81301 = arguments.length;
var i__25948__auto___81302 = (0);
while(true){
if((i__25948__auto___81302 < len__25947__auto___81301)){
args81249.push((arguments[i__25948__auto___81302]));

var G__81303 = (i__25948__auto___81302 + (1));
i__25948__auto___81302 = G__81303;
continue;
} else {
}
break;
}

var G__81251 = args81249.length;
switch (G__81251) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81249.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__){
return (function (state_81276){
var state_val_81277 = (state_81276[(1)]);
if((state_val_81277 === (7))){
var inst_81258 = (state_81276[(2)]);
var state_81276__$1 = state_81276;
var statearr_81278_81305 = state_81276__$1;
(statearr_81278_81305[(2)] = inst_81258);

(statearr_81278_81305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (1))){
var inst_81252 = cljs.core.seq.call(null,coll);
var inst_81253 = inst_81252;
var state_81276__$1 = (function (){var statearr_81279 = state_81276;
(statearr_81279[(7)] = inst_81253);

return statearr_81279;
})();
var statearr_81280_81306 = state_81276__$1;
(statearr_81280_81306[(2)] = null);

(statearr_81280_81306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (4))){
var inst_81253 = (state_81276[(7)]);
var inst_81256 = cljs.core.first.call(null,inst_81253);
var state_81276__$1 = state_81276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81276__$1,(7),ch,inst_81256);
} else {
if((state_val_81277 === (13))){
var inst_81270 = (state_81276[(2)]);
var state_81276__$1 = state_81276;
var statearr_81281_81307 = state_81276__$1;
(statearr_81281_81307[(2)] = inst_81270);

(statearr_81281_81307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (6))){
var inst_81261 = (state_81276[(2)]);
var state_81276__$1 = state_81276;
if(cljs.core.truth_(inst_81261)){
var statearr_81282_81308 = state_81276__$1;
(statearr_81282_81308[(1)] = (8));

} else {
var statearr_81283_81309 = state_81276__$1;
(statearr_81283_81309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (3))){
var inst_81274 = (state_81276[(2)]);
var state_81276__$1 = state_81276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81276__$1,inst_81274);
} else {
if((state_val_81277 === (12))){
var state_81276__$1 = state_81276;
var statearr_81284_81310 = state_81276__$1;
(statearr_81284_81310[(2)] = null);

(statearr_81284_81310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (2))){
var inst_81253 = (state_81276[(7)]);
var state_81276__$1 = state_81276;
if(cljs.core.truth_(inst_81253)){
var statearr_81285_81311 = state_81276__$1;
(statearr_81285_81311[(1)] = (4));

} else {
var statearr_81286_81312 = state_81276__$1;
(statearr_81286_81312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (11))){
var inst_81267 = cljs.core.async.close_BANG_.call(null,ch);
var state_81276__$1 = state_81276;
var statearr_81287_81313 = state_81276__$1;
(statearr_81287_81313[(2)] = inst_81267);

(statearr_81287_81313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (9))){
var state_81276__$1 = state_81276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_81288_81314 = state_81276__$1;
(statearr_81288_81314[(1)] = (11));

} else {
var statearr_81289_81315 = state_81276__$1;
(statearr_81289_81315[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (5))){
var inst_81253 = (state_81276[(7)]);
var state_81276__$1 = state_81276;
var statearr_81290_81316 = state_81276__$1;
(statearr_81290_81316[(2)] = inst_81253);

(statearr_81290_81316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (10))){
var inst_81272 = (state_81276[(2)]);
var state_81276__$1 = state_81276;
var statearr_81291_81317 = state_81276__$1;
(statearr_81291_81317[(2)] = inst_81272);

(statearr_81291_81317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81277 === (8))){
var inst_81253 = (state_81276[(7)]);
var inst_81263 = cljs.core.next.call(null,inst_81253);
var inst_81253__$1 = inst_81263;
var state_81276__$1 = (function (){var statearr_81292 = state_81276;
(statearr_81292[(7)] = inst_81253__$1);

return statearr_81292;
})();
var statearr_81293_81318 = state_81276__$1;
(statearr_81293_81318[(2)] = null);

(statearr_81293_81318[(1)] = (2));


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
});})(c__26902__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_81297 = [null,null,null,null,null,null,null,null];
(statearr_81297[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_81297[(1)] = (1));

return statearr_81297;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_81276){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_81276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e81298){if((e81298 instanceof Object)){
var ex__26885__auto__ = e81298;
var statearr_81299_81319 = state_81276;
(statearr_81299_81319[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81320 = state_81276;
state_81276 = G__81320;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_81276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_81276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__))
})();
var state__26904__auto__ = (function (){var statearr_81300 = f__26903__auto__.call(null);
(statearr_81300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_81300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__))
);

return c__26902__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25535__auto__ = (((_ == null))?null:_);
var m__25536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,_);
} else {
var m__25536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async81546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81546 = (function (mult,ch,cs,meta81547){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta81547 = meta81547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_81548,meta81547__$1){
var self__ = this;
var _81548__$1 = this;
return (new cljs.core.async.t_cljs$core$async81546(self__.mult,self__.ch,self__.cs,meta81547__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_81548){
var self__ = this;
var _81548__$1 = this;
return self__.meta81547;
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta81547","meta81547",18765468,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async81546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81546";

cljs.core.async.t_cljs$core$async81546.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async81546");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async81546 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async81546(mult__$1,ch__$1,cs__$1,meta81547){
return (new cljs.core.async.t_cljs$core$async81546(mult__$1,ch__$1,cs__$1,meta81547));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async81546(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26902__auto___81771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___81771,cs,m,dchan,dctr,done){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___81771,cs,m,dchan,dctr,done){
return (function (state_81683){
var state_val_81684 = (state_81683[(1)]);
if((state_val_81684 === (7))){
var inst_81679 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81685_81772 = state_81683__$1;
(statearr_81685_81772[(2)] = inst_81679);

(statearr_81685_81772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (20))){
var inst_81582 = (state_81683[(7)]);
var inst_81594 = cljs.core.first.call(null,inst_81582);
var inst_81595 = cljs.core.nth.call(null,inst_81594,(0),null);
var inst_81596 = cljs.core.nth.call(null,inst_81594,(1),null);
var state_81683__$1 = (function (){var statearr_81686 = state_81683;
(statearr_81686[(8)] = inst_81595);

return statearr_81686;
})();
if(cljs.core.truth_(inst_81596)){
var statearr_81687_81773 = state_81683__$1;
(statearr_81687_81773[(1)] = (22));

} else {
var statearr_81688_81774 = state_81683__$1;
(statearr_81688_81774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (27))){
var inst_81624 = (state_81683[(9)]);
var inst_81631 = (state_81683[(10)]);
var inst_81551 = (state_81683[(11)]);
var inst_81626 = (state_81683[(12)]);
var inst_81631__$1 = cljs.core._nth.call(null,inst_81624,inst_81626);
var inst_81632 = cljs.core.async.put_BANG_.call(null,inst_81631__$1,inst_81551,done);
var state_81683__$1 = (function (){var statearr_81689 = state_81683;
(statearr_81689[(10)] = inst_81631__$1);

return statearr_81689;
})();
if(cljs.core.truth_(inst_81632)){
var statearr_81690_81775 = state_81683__$1;
(statearr_81690_81775[(1)] = (30));

} else {
var statearr_81691_81776 = state_81683__$1;
(statearr_81691_81776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (1))){
var state_81683__$1 = state_81683;
var statearr_81692_81777 = state_81683__$1;
(statearr_81692_81777[(2)] = null);

(statearr_81692_81777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (24))){
var inst_81582 = (state_81683[(7)]);
var inst_81601 = (state_81683[(2)]);
var inst_81602 = cljs.core.next.call(null,inst_81582);
var inst_81560 = inst_81602;
var inst_81561 = null;
var inst_81562 = (0);
var inst_81563 = (0);
var state_81683__$1 = (function (){var statearr_81693 = state_81683;
(statearr_81693[(13)] = inst_81562);

(statearr_81693[(14)] = inst_81561);

(statearr_81693[(15)] = inst_81563);

(statearr_81693[(16)] = inst_81601);

(statearr_81693[(17)] = inst_81560);

return statearr_81693;
})();
var statearr_81694_81778 = state_81683__$1;
(statearr_81694_81778[(2)] = null);

(statearr_81694_81778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (39))){
var state_81683__$1 = state_81683;
var statearr_81698_81779 = state_81683__$1;
(statearr_81698_81779[(2)] = null);

(statearr_81698_81779[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (4))){
var inst_81551 = (state_81683[(11)]);
var inst_81551__$1 = (state_81683[(2)]);
var inst_81552 = (inst_81551__$1 == null);
var state_81683__$1 = (function (){var statearr_81699 = state_81683;
(statearr_81699[(11)] = inst_81551__$1);

return statearr_81699;
})();
if(cljs.core.truth_(inst_81552)){
var statearr_81700_81780 = state_81683__$1;
(statearr_81700_81780[(1)] = (5));

} else {
var statearr_81701_81781 = state_81683__$1;
(statearr_81701_81781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (15))){
var inst_81562 = (state_81683[(13)]);
var inst_81561 = (state_81683[(14)]);
var inst_81563 = (state_81683[(15)]);
var inst_81560 = (state_81683[(17)]);
var inst_81578 = (state_81683[(2)]);
var inst_81579 = (inst_81563 + (1));
var tmp81695 = inst_81562;
var tmp81696 = inst_81561;
var tmp81697 = inst_81560;
var inst_81560__$1 = tmp81697;
var inst_81561__$1 = tmp81696;
var inst_81562__$1 = tmp81695;
var inst_81563__$1 = inst_81579;
var state_81683__$1 = (function (){var statearr_81702 = state_81683;
(statearr_81702[(13)] = inst_81562__$1);

(statearr_81702[(14)] = inst_81561__$1);

(statearr_81702[(15)] = inst_81563__$1);

(statearr_81702[(18)] = inst_81578);

(statearr_81702[(17)] = inst_81560__$1);

return statearr_81702;
})();
var statearr_81703_81782 = state_81683__$1;
(statearr_81703_81782[(2)] = null);

(statearr_81703_81782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (21))){
var inst_81605 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81707_81783 = state_81683__$1;
(statearr_81707_81783[(2)] = inst_81605);

(statearr_81707_81783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (31))){
var inst_81631 = (state_81683[(10)]);
var inst_81635 = done.call(null,null);
var inst_81636 = cljs.core.async.untap_STAR_.call(null,m,inst_81631);
var state_81683__$1 = (function (){var statearr_81708 = state_81683;
(statearr_81708[(19)] = inst_81635);

return statearr_81708;
})();
var statearr_81709_81784 = state_81683__$1;
(statearr_81709_81784[(2)] = inst_81636);

(statearr_81709_81784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (32))){
var inst_81624 = (state_81683[(9)]);
var inst_81625 = (state_81683[(20)]);
var inst_81623 = (state_81683[(21)]);
var inst_81626 = (state_81683[(12)]);
var inst_81638 = (state_81683[(2)]);
var inst_81639 = (inst_81626 + (1));
var tmp81704 = inst_81624;
var tmp81705 = inst_81625;
var tmp81706 = inst_81623;
var inst_81623__$1 = tmp81706;
var inst_81624__$1 = tmp81704;
var inst_81625__$1 = tmp81705;
var inst_81626__$1 = inst_81639;
var state_81683__$1 = (function (){var statearr_81710 = state_81683;
(statearr_81710[(9)] = inst_81624__$1);

(statearr_81710[(22)] = inst_81638);

(statearr_81710[(20)] = inst_81625__$1);

(statearr_81710[(21)] = inst_81623__$1);

(statearr_81710[(12)] = inst_81626__$1);

return statearr_81710;
})();
var statearr_81711_81785 = state_81683__$1;
(statearr_81711_81785[(2)] = null);

(statearr_81711_81785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (40))){
var inst_81651 = (state_81683[(23)]);
var inst_81655 = done.call(null,null);
var inst_81656 = cljs.core.async.untap_STAR_.call(null,m,inst_81651);
var state_81683__$1 = (function (){var statearr_81712 = state_81683;
(statearr_81712[(24)] = inst_81655);

return statearr_81712;
})();
var statearr_81713_81786 = state_81683__$1;
(statearr_81713_81786[(2)] = inst_81656);

(statearr_81713_81786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (33))){
var inst_81642 = (state_81683[(25)]);
var inst_81644 = cljs.core.chunked_seq_QMARK_.call(null,inst_81642);
var state_81683__$1 = state_81683;
if(inst_81644){
var statearr_81714_81787 = state_81683__$1;
(statearr_81714_81787[(1)] = (36));

} else {
var statearr_81715_81788 = state_81683__$1;
(statearr_81715_81788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (13))){
var inst_81572 = (state_81683[(26)]);
var inst_81575 = cljs.core.async.close_BANG_.call(null,inst_81572);
var state_81683__$1 = state_81683;
var statearr_81716_81789 = state_81683__$1;
(statearr_81716_81789[(2)] = inst_81575);

(statearr_81716_81789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (22))){
var inst_81595 = (state_81683[(8)]);
var inst_81598 = cljs.core.async.close_BANG_.call(null,inst_81595);
var state_81683__$1 = state_81683;
var statearr_81717_81790 = state_81683__$1;
(statearr_81717_81790[(2)] = inst_81598);

(statearr_81717_81790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (36))){
var inst_81642 = (state_81683[(25)]);
var inst_81646 = cljs.core.chunk_first.call(null,inst_81642);
var inst_81647 = cljs.core.chunk_rest.call(null,inst_81642);
var inst_81648 = cljs.core.count.call(null,inst_81646);
var inst_81623 = inst_81647;
var inst_81624 = inst_81646;
var inst_81625 = inst_81648;
var inst_81626 = (0);
var state_81683__$1 = (function (){var statearr_81718 = state_81683;
(statearr_81718[(9)] = inst_81624);

(statearr_81718[(20)] = inst_81625);

(statearr_81718[(21)] = inst_81623);

(statearr_81718[(12)] = inst_81626);

return statearr_81718;
})();
var statearr_81719_81791 = state_81683__$1;
(statearr_81719_81791[(2)] = null);

(statearr_81719_81791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (41))){
var inst_81642 = (state_81683[(25)]);
var inst_81658 = (state_81683[(2)]);
var inst_81659 = cljs.core.next.call(null,inst_81642);
var inst_81623 = inst_81659;
var inst_81624 = null;
var inst_81625 = (0);
var inst_81626 = (0);
var state_81683__$1 = (function (){var statearr_81720 = state_81683;
(statearr_81720[(9)] = inst_81624);

(statearr_81720[(27)] = inst_81658);

(statearr_81720[(20)] = inst_81625);

(statearr_81720[(21)] = inst_81623);

(statearr_81720[(12)] = inst_81626);

return statearr_81720;
})();
var statearr_81721_81792 = state_81683__$1;
(statearr_81721_81792[(2)] = null);

(statearr_81721_81792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (43))){
var state_81683__$1 = state_81683;
var statearr_81722_81793 = state_81683__$1;
(statearr_81722_81793[(2)] = null);

(statearr_81722_81793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (29))){
var inst_81667 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81723_81794 = state_81683__$1;
(statearr_81723_81794[(2)] = inst_81667);

(statearr_81723_81794[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (44))){
var inst_81676 = (state_81683[(2)]);
var state_81683__$1 = (function (){var statearr_81724 = state_81683;
(statearr_81724[(28)] = inst_81676);

return statearr_81724;
})();
var statearr_81725_81795 = state_81683__$1;
(statearr_81725_81795[(2)] = null);

(statearr_81725_81795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (6))){
var inst_81615 = (state_81683[(29)]);
var inst_81614 = cljs.core.deref.call(null,cs);
var inst_81615__$1 = cljs.core.keys.call(null,inst_81614);
var inst_81616 = cljs.core.count.call(null,inst_81615__$1);
var inst_81617 = cljs.core.reset_BANG_.call(null,dctr,inst_81616);
var inst_81622 = cljs.core.seq.call(null,inst_81615__$1);
var inst_81623 = inst_81622;
var inst_81624 = null;
var inst_81625 = (0);
var inst_81626 = (0);
var state_81683__$1 = (function (){var statearr_81726 = state_81683;
(statearr_81726[(9)] = inst_81624);

(statearr_81726[(30)] = inst_81617);

(statearr_81726[(20)] = inst_81625);

(statearr_81726[(21)] = inst_81623);

(statearr_81726[(12)] = inst_81626);

(statearr_81726[(29)] = inst_81615__$1);

return statearr_81726;
})();
var statearr_81727_81796 = state_81683__$1;
(statearr_81727_81796[(2)] = null);

(statearr_81727_81796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (28))){
var inst_81623 = (state_81683[(21)]);
var inst_81642 = (state_81683[(25)]);
var inst_81642__$1 = cljs.core.seq.call(null,inst_81623);
var state_81683__$1 = (function (){var statearr_81728 = state_81683;
(statearr_81728[(25)] = inst_81642__$1);

return statearr_81728;
})();
if(inst_81642__$1){
var statearr_81729_81797 = state_81683__$1;
(statearr_81729_81797[(1)] = (33));

} else {
var statearr_81730_81798 = state_81683__$1;
(statearr_81730_81798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (25))){
var inst_81625 = (state_81683[(20)]);
var inst_81626 = (state_81683[(12)]);
var inst_81628 = (inst_81626 < inst_81625);
var inst_81629 = inst_81628;
var state_81683__$1 = state_81683;
if(cljs.core.truth_(inst_81629)){
var statearr_81731_81799 = state_81683__$1;
(statearr_81731_81799[(1)] = (27));

} else {
var statearr_81732_81800 = state_81683__$1;
(statearr_81732_81800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (34))){
var state_81683__$1 = state_81683;
var statearr_81733_81801 = state_81683__$1;
(statearr_81733_81801[(2)] = null);

(statearr_81733_81801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (17))){
var state_81683__$1 = state_81683;
var statearr_81734_81802 = state_81683__$1;
(statearr_81734_81802[(2)] = null);

(statearr_81734_81802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (3))){
var inst_81681 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81683__$1,inst_81681);
} else {
if((state_val_81684 === (12))){
var inst_81610 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81735_81803 = state_81683__$1;
(statearr_81735_81803[(2)] = inst_81610);

(statearr_81735_81803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (2))){
var state_81683__$1 = state_81683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81683__$1,(4),ch);
} else {
if((state_val_81684 === (23))){
var state_81683__$1 = state_81683;
var statearr_81736_81804 = state_81683__$1;
(statearr_81736_81804[(2)] = null);

(statearr_81736_81804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (35))){
var inst_81665 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81737_81805 = state_81683__$1;
(statearr_81737_81805[(2)] = inst_81665);

(statearr_81737_81805[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (19))){
var inst_81582 = (state_81683[(7)]);
var inst_81586 = cljs.core.chunk_first.call(null,inst_81582);
var inst_81587 = cljs.core.chunk_rest.call(null,inst_81582);
var inst_81588 = cljs.core.count.call(null,inst_81586);
var inst_81560 = inst_81587;
var inst_81561 = inst_81586;
var inst_81562 = inst_81588;
var inst_81563 = (0);
var state_81683__$1 = (function (){var statearr_81738 = state_81683;
(statearr_81738[(13)] = inst_81562);

(statearr_81738[(14)] = inst_81561);

(statearr_81738[(15)] = inst_81563);

(statearr_81738[(17)] = inst_81560);

return statearr_81738;
})();
var statearr_81739_81806 = state_81683__$1;
(statearr_81739_81806[(2)] = null);

(statearr_81739_81806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (11))){
var inst_81560 = (state_81683[(17)]);
var inst_81582 = (state_81683[(7)]);
var inst_81582__$1 = cljs.core.seq.call(null,inst_81560);
var state_81683__$1 = (function (){var statearr_81740 = state_81683;
(statearr_81740[(7)] = inst_81582__$1);

return statearr_81740;
})();
if(inst_81582__$1){
var statearr_81741_81807 = state_81683__$1;
(statearr_81741_81807[(1)] = (16));

} else {
var statearr_81742_81808 = state_81683__$1;
(statearr_81742_81808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (9))){
var inst_81612 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81743_81809 = state_81683__$1;
(statearr_81743_81809[(2)] = inst_81612);

(statearr_81743_81809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (5))){
var inst_81558 = cljs.core.deref.call(null,cs);
var inst_81559 = cljs.core.seq.call(null,inst_81558);
var inst_81560 = inst_81559;
var inst_81561 = null;
var inst_81562 = (0);
var inst_81563 = (0);
var state_81683__$1 = (function (){var statearr_81744 = state_81683;
(statearr_81744[(13)] = inst_81562);

(statearr_81744[(14)] = inst_81561);

(statearr_81744[(15)] = inst_81563);

(statearr_81744[(17)] = inst_81560);

return statearr_81744;
})();
var statearr_81745_81810 = state_81683__$1;
(statearr_81745_81810[(2)] = null);

(statearr_81745_81810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (14))){
var state_81683__$1 = state_81683;
var statearr_81746_81811 = state_81683__$1;
(statearr_81746_81811[(2)] = null);

(statearr_81746_81811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (45))){
var inst_81673 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81747_81812 = state_81683__$1;
(statearr_81747_81812[(2)] = inst_81673);

(statearr_81747_81812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (26))){
var inst_81615 = (state_81683[(29)]);
var inst_81669 = (state_81683[(2)]);
var inst_81670 = cljs.core.seq.call(null,inst_81615);
var state_81683__$1 = (function (){var statearr_81748 = state_81683;
(statearr_81748[(31)] = inst_81669);

return statearr_81748;
})();
if(inst_81670){
var statearr_81749_81813 = state_81683__$1;
(statearr_81749_81813[(1)] = (42));

} else {
var statearr_81750_81814 = state_81683__$1;
(statearr_81750_81814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (16))){
var inst_81582 = (state_81683[(7)]);
var inst_81584 = cljs.core.chunked_seq_QMARK_.call(null,inst_81582);
var state_81683__$1 = state_81683;
if(inst_81584){
var statearr_81751_81815 = state_81683__$1;
(statearr_81751_81815[(1)] = (19));

} else {
var statearr_81752_81816 = state_81683__$1;
(statearr_81752_81816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (38))){
var inst_81662 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81753_81817 = state_81683__$1;
(statearr_81753_81817[(2)] = inst_81662);

(statearr_81753_81817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (30))){
var state_81683__$1 = state_81683;
var statearr_81754_81818 = state_81683__$1;
(statearr_81754_81818[(2)] = null);

(statearr_81754_81818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (10))){
var inst_81561 = (state_81683[(14)]);
var inst_81563 = (state_81683[(15)]);
var inst_81571 = cljs.core._nth.call(null,inst_81561,inst_81563);
var inst_81572 = cljs.core.nth.call(null,inst_81571,(0),null);
var inst_81573 = cljs.core.nth.call(null,inst_81571,(1),null);
var state_81683__$1 = (function (){var statearr_81755 = state_81683;
(statearr_81755[(26)] = inst_81572);

return statearr_81755;
})();
if(cljs.core.truth_(inst_81573)){
var statearr_81756_81819 = state_81683__$1;
(statearr_81756_81819[(1)] = (13));

} else {
var statearr_81757_81820 = state_81683__$1;
(statearr_81757_81820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (18))){
var inst_81608 = (state_81683[(2)]);
var state_81683__$1 = state_81683;
var statearr_81758_81821 = state_81683__$1;
(statearr_81758_81821[(2)] = inst_81608);

(statearr_81758_81821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (42))){
var state_81683__$1 = state_81683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81683__$1,(45),dchan);
} else {
if((state_val_81684 === (37))){
var inst_81651 = (state_81683[(23)]);
var inst_81642 = (state_81683[(25)]);
var inst_81551 = (state_81683[(11)]);
var inst_81651__$1 = cljs.core.first.call(null,inst_81642);
var inst_81652 = cljs.core.async.put_BANG_.call(null,inst_81651__$1,inst_81551,done);
var state_81683__$1 = (function (){var statearr_81759 = state_81683;
(statearr_81759[(23)] = inst_81651__$1);

return statearr_81759;
})();
if(cljs.core.truth_(inst_81652)){
var statearr_81760_81822 = state_81683__$1;
(statearr_81760_81822[(1)] = (39));

} else {
var statearr_81761_81823 = state_81683__$1;
(statearr_81761_81823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81684 === (8))){
var inst_81562 = (state_81683[(13)]);
var inst_81563 = (state_81683[(15)]);
var inst_81565 = (inst_81563 < inst_81562);
var inst_81566 = inst_81565;
var state_81683__$1 = state_81683;
if(cljs.core.truth_(inst_81566)){
var statearr_81762_81824 = state_81683__$1;
(statearr_81762_81824[(1)] = (10));

} else {
var statearr_81763_81825 = state_81683__$1;
(statearr_81763_81825[(1)] = (11));

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
});})(c__26902__auto___81771,cs,m,dchan,dctr,done))
;
return ((function (switch__26881__auto__,c__26902__auto___81771,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26882__auto__ = null;
var cljs$core$async$mult_$_state_machine__26882__auto____0 = (function (){
var statearr_81767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81767[(0)] = cljs$core$async$mult_$_state_machine__26882__auto__);

(statearr_81767[(1)] = (1));

return statearr_81767;
});
var cljs$core$async$mult_$_state_machine__26882__auto____1 = (function (state_81683){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_81683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e81768){if((e81768 instanceof Object)){
var ex__26885__auto__ = e81768;
var statearr_81769_81826 = state_81683;
(statearr_81769_81826[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81827 = state_81683;
state_81683 = G__81827;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26882__auto__ = function(state_81683){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26882__auto____1.call(this,state_81683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26882__auto____0;
cljs$core$async$mult_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26882__auto____1;
return cljs$core$async$mult_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___81771,cs,m,dchan,dctr,done))
})();
var state__26904__auto__ = (function (){var statearr_81770 = f__26903__auto__.call(null);
(statearr_81770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___81771);

return statearr_81770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___81771,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args81828 = [];
var len__25947__auto___81831 = arguments.length;
var i__25948__auto___81832 = (0);
while(true){
if((i__25948__auto___81832 < len__25947__auto___81831)){
args81828.push((arguments[i__25948__auto___81832]));

var G__81833 = (i__25948__auto___81832 + (1));
i__25948__auto___81832 = G__81833;
continue;
} else {
}
break;
}

var G__81830 = args81828.length;
switch (G__81830) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81828.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,state_map);
} else {
var m__25536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,mode);
} else {
var m__25536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___81845 = arguments.length;
var i__25948__auto___81846 = (0);
while(true){
if((i__25948__auto___81846 < len__25947__auto___81845)){
args__25954__auto__.push((arguments[i__25948__auto___81846]));

var G__81847 = (i__25948__auto___81846 + (1));
i__25948__auto___81846 = G__81847;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__81839){
var map__81840 = p__81839;
var map__81840__$1 = ((((!((map__81840 == null)))?((((map__81840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81840):map__81840);
var opts = map__81840__$1;
var statearr_81842_81848 = state;
(statearr_81842_81848[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__81840,map__81840__$1,opts){
return (function (val){
var statearr_81843_81849 = state;
(statearr_81843_81849[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__81840,map__81840__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_81844_81850 = state;
(statearr_81844_81850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq81835){
var G__81836 = cljs.core.first.call(null,seq81835);
var seq81835__$1 = cljs.core.next.call(null,seq81835);
var G__81837 = cljs.core.first.call(null,seq81835__$1);
var seq81835__$2 = cljs.core.next.call(null,seq81835__$1);
var G__81838 = cljs.core.first.call(null,seq81835__$2);
var seq81835__$3 = cljs.core.next.call(null,seq81835__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__81836,G__81837,G__81838,seq81835__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async82016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82016 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta82017){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta82017 = meta82017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82018,meta82017__$1){
var self__ = this;
var _82018__$1 = this;
return (new cljs.core.async.t_cljs$core$async82016(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta82017__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82018){
var self__ = this;
var _82018__$1 = this;
return self__.meta82017;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta82017","meta82017",1941360889,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async82016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82016";

cljs.core.async.t_cljs$core$async82016.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82016");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async82016 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async82016(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta82017){
return (new cljs.core.async.t_cljs$core$async82016(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta82017));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async82016(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26902__auto___82181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_82118){
var state_val_82119 = (state_82118[(1)]);
if((state_val_82119 === (7))){
var inst_82034 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
var statearr_82120_82182 = state_82118__$1;
(statearr_82120_82182[(2)] = inst_82034);

(statearr_82120_82182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (20))){
var inst_82046 = (state_82118[(7)]);
var state_82118__$1 = state_82118;
var statearr_82121_82183 = state_82118__$1;
(statearr_82121_82183[(2)] = inst_82046);

(statearr_82121_82183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (27))){
var state_82118__$1 = state_82118;
var statearr_82122_82184 = state_82118__$1;
(statearr_82122_82184[(2)] = null);

(statearr_82122_82184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (1))){
var inst_82022 = (state_82118[(8)]);
var inst_82022__$1 = calc_state.call(null);
var inst_82024 = (inst_82022__$1 == null);
var inst_82025 = cljs.core.not.call(null,inst_82024);
var state_82118__$1 = (function (){var statearr_82123 = state_82118;
(statearr_82123[(8)] = inst_82022__$1);

return statearr_82123;
})();
if(inst_82025){
var statearr_82124_82185 = state_82118__$1;
(statearr_82124_82185[(1)] = (2));

} else {
var statearr_82125_82186 = state_82118__$1;
(statearr_82125_82186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (24))){
var inst_82078 = (state_82118[(9)]);
var inst_82092 = (state_82118[(10)]);
var inst_82069 = (state_82118[(11)]);
var inst_82092__$1 = inst_82069.call(null,inst_82078);
var state_82118__$1 = (function (){var statearr_82126 = state_82118;
(statearr_82126[(10)] = inst_82092__$1);

return statearr_82126;
})();
if(cljs.core.truth_(inst_82092__$1)){
var statearr_82127_82187 = state_82118__$1;
(statearr_82127_82187[(1)] = (29));

} else {
var statearr_82128_82188 = state_82118__$1;
(statearr_82128_82188[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (4))){
var inst_82037 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82037)){
var statearr_82129_82189 = state_82118__$1;
(statearr_82129_82189[(1)] = (8));

} else {
var statearr_82130_82190 = state_82118__$1;
(statearr_82130_82190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (15))){
var inst_82063 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82063)){
var statearr_82131_82191 = state_82118__$1;
(statearr_82131_82191[(1)] = (19));

} else {
var statearr_82132_82192 = state_82118__$1;
(statearr_82132_82192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (21))){
var inst_82068 = (state_82118[(12)]);
var inst_82068__$1 = (state_82118[(2)]);
var inst_82069 = cljs.core.get.call(null,inst_82068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_82070 = cljs.core.get.call(null,inst_82068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_82071 = cljs.core.get.call(null,inst_82068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_82118__$1 = (function (){var statearr_82133 = state_82118;
(statearr_82133[(11)] = inst_82069);

(statearr_82133[(13)] = inst_82070);

(statearr_82133[(12)] = inst_82068__$1);

return statearr_82133;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82118__$1,(22),inst_82071);
} else {
if((state_val_82119 === (31))){
var inst_82100 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82100)){
var statearr_82134_82193 = state_82118__$1;
(statearr_82134_82193[(1)] = (32));

} else {
var statearr_82135_82194 = state_82118__$1;
(statearr_82135_82194[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (32))){
var inst_82077 = (state_82118[(14)]);
var state_82118__$1 = state_82118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82118__$1,(35),out,inst_82077);
} else {
if((state_val_82119 === (33))){
var inst_82068 = (state_82118[(12)]);
var inst_82046 = inst_82068;
var state_82118__$1 = (function (){var statearr_82136 = state_82118;
(statearr_82136[(7)] = inst_82046);

return statearr_82136;
})();
var statearr_82137_82195 = state_82118__$1;
(statearr_82137_82195[(2)] = null);

(statearr_82137_82195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (13))){
var inst_82046 = (state_82118[(7)]);
var inst_82053 = inst_82046.cljs$lang$protocol_mask$partition0$;
var inst_82054 = (inst_82053 & (64));
var inst_82055 = inst_82046.cljs$core$ISeq$;
var inst_82056 = (inst_82054) || (inst_82055);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82056)){
var statearr_82138_82196 = state_82118__$1;
(statearr_82138_82196[(1)] = (16));

} else {
var statearr_82139_82197 = state_82118__$1;
(statearr_82139_82197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (22))){
var inst_82078 = (state_82118[(9)]);
var inst_82077 = (state_82118[(14)]);
var inst_82076 = (state_82118[(2)]);
var inst_82077__$1 = cljs.core.nth.call(null,inst_82076,(0),null);
var inst_82078__$1 = cljs.core.nth.call(null,inst_82076,(1),null);
var inst_82079 = (inst_82077__$1 == null);
var inst_82080 = cljs.core._EQ_.call(null,inst_82078__$1,change);
var inst_82081 = (inst_82079) || (inst_82080);
var state_82118__$1 = (function (){var statearr_82140 = state_82118;
(statearr_82140[(9)] = inst_82078__$1);

(statearr_82140[(14)] = inst_82077__$1);

return statearr_82140;
})();
if(cljs.core.truth_(inst_82081)){
var statearr_82141_82198 = state_82118__$1;
(statearr_82141_82198[(1)] = (23));

} else {
var statearr_82142_82199 = state_82118__$1;
(statearr_82142_82199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (36))){
var inst_82068 = (state_82118[(12)]);
var inst_82046 = inst_82068;
var state_82118__$1 = (function (){var statearr_82143 = state_82118;
(statearr_82143[(7)] = inst_82046);

return statearr_82143;
})();
var statearr_82144_82200 = state_82118__$1;
(statearr_82144_82200[(2)] = null);

(statearr_82144_82200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (29))){
var inst_82092 = (state_82118[(10)]);
var state_82118__$1 = state_82118;
var statearr_82145_82201 = state_82118__$1;
(statearr_82145_82201[(2)] = inst_82092);

(statearr_82145_82201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (6))){
var state_82118__$1 = state_82118;
var statearr_82146_82202 = state_82118__$1;
(statearr_82146_82202[(2)] = false);

(statearr_82146_82202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (28))){
var inst_82088 = (state_82118[(2)]);
var inst_82089 = calc_state.call(null);
var inst_82046 = inst_82089;
var state_82118__$1 = (function (){var statearr_82147 = state_82118;
(statearr_82147[(7)] = inst_82046);

(statearr_82147[(15)] = inst_82088);

return statearr_82147;
})();
var statearr_82148_82203 = state_82118__$1;
(statearr_82148_82203[(2)] = null);

(statearr_82148_82203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (25))){
var inst_82114 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
var statearr_82149_82204 = state_82118__$1;
(statearr_82149_82204[(2)] = inst_82114);

(statearr_82149_82204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (34))){
var inst_82112 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
var statearr_82150_82205 = state_82118__$1;
(statearr_82150_82205[(2)] = inst_82112);

(statearr_82150_82205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (17))){
var state_82118__$1 = state_82118;
var statearr_82151_82206 = state_82118__$1;
(statearr_82151_82206[(2)] = false);

(statearr_82151_82206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (3))){
var state_82118__$1 = state_82118;
var statearr_82152_82207 = state_82118__$1;
(statearr_82152_82207[(2)] = false);

(statearr_82152_82207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (12))){
var inst_82116 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82118__$1,inst_82116);
} else {
if((state_val_82119 === (2))){
var inst_82022 = (state_82118[(8)]);
var inst_82027 = inst_82022.cljs$lang$protocol_mask$partition0$;
var inst_82028 = (inst_82027 & (64));
var inst_82029 = inst_82022.cljs$core$ISeq$;
var inst_82030 = (inst_82028) || (inst_82029);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82030)){
var statearr_82153_82208 = state_82118__$1;
(statearr_82153_82208[(1)] = (5));

} else {
var statearr_82154_82209 = state_82118__$1;
(statearr_82154_82209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (23))){
var inst_82077 = (state_82118[(14)]);
var inst_82083 = (inst_82077 == null);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82083)){
var statearr_82155_82210 = state_82118__$1;
(statearr_82155_82210[(1)] = (26));

} else {
var statearr_82156_82211 = state_82118__$1;
(statearr_82156_82211[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (35))){
var inst_82103 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
if(cljs.core.truth_(inst_82103)){
var statearr_82157_82212 = state_82118__$1;
(statearr_82157_82212[(1)] = (36));

} else {
var statearr_82158_82213 = state_82118__$1;
(statearr_82158_82213[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (19))){
var inst_82046 = (state_82118[(7)]);
var inst_82065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82046);
var state_82118__$1 = state_82118;
var statearr_82159_82214 = state_82118__$1;
(statearr_82159_82214[(2)] = inst_82065);

(statearr_82159_82214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (11))){
var inst_82046 = (state_82118[(7)]);
var inst_82050 = (inst_82046 == null);
var inst_82051 = cljs.core.not.call(null,inst_82050);
var state_82118__$1 = state_82118;
if(inst_82051){
var statearr_82160_82215 = state_82118__$1;
(statearr_82160_82215[(1)] = (13));

} else {
var statearr_82161_82216 = state_82118__$1;
(statearr_82161_82216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (9))){
var inst_82022 = (state_82118[(8)]);
var state_82118__$1 = state_82118;
var statearr_82162_82217 = state_82118__$1;
(statearr_82162_82217[(2)] = inst_82022);

(statearr_82162_82217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (5))){
var state_82118__$1 = state_82118;
var statearr_82163_82218 = state_82118__$1;
(statearr_82163_82218[(2)] = true);

(statearr_82163_82218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (14))){
var state_82118__$1 = state_82118;
var statearr_82164_82219 = state_82118__$1;
(statearr_82164_82219[(2)] = false);

(statearr_82164_82219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (26))){
var inst_82078 = (state_82118[(9)]);
var inst_82085 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_82078);
var state_82118__$1 = state_82118;
var statearr_82165_82220 = state_82118__$1;
(statearr_82165_82220[(2)] = inst_82085);

(statearr_82165_82220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (16))){
var state_82118__$1 = state_82118;
var statearr_82166_82221 = state_82118__$1;
(statearr_82166_82221[(2)] = true);

(statearr_82166_82221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (38))){
var inst_82108 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
var statearr_82167_82222 = state_82118__$1;
(statearr_82167_82222[(2)] = inst_82108);

(statearr_82167_82222[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (30))){
var inst_82078 = (state_82118[(9)]);
var inst_82069 = (state_82118[(11)]);
var inst_82070 = (state_82118[(13)]);
var inst_82095 = cljs.core.empty_QMARK_.call(null,inst_82069);
var inst_82096 = inst_82070.call(null,inst_82078);
var inst_82097 = cljs.core.not.call(null,inst_82096);
var inst_82098 = (inst_82095) && (inst_82097);
var state_82118__$1 = state_82118;
var statearr_82168_82223 = state_82118__$1;
(statearr_82168_82223[(2)] = inst_82098);

(statearr_82168_82223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (10))){
var inst_82022 = (state_82118[(8)]);
var inst_82042 = (state_82118[(2)]);
var inst_82043 = cljs.core.get.call(null,inst_82042,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_82044 = cljs.core.get.call(null,inst_82042,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_82045 = cljs.core.get.call(null,inst_82042,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_82046 = inst_82022;
var state_82118__$1 = (function (){var statearr_82169 = state_82118;
(statearr_82169[(16)] = inst_82043);

(statearr_82169[(7)] = inst_82046);

(statearr_82169[(17)] = inst_82044);

(statearr_82169[(18)] = inst_82045);

return statearr_82169;
})();
var statearr_82170_82224 = state_82118__$1;
(statearr_82170_82224[(2)] = null);

(statearr_82170_82224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (18))){
var inst_82060 = (state_82118[(2)]);
var state_82118__$1 = state_82118;
var statearr_82171_82225 = state_82118__$1;
(statearr_82171_82225[(2)] = inst_82060);

(statearr_82171_82225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (37))){
var state_82118__$1 = state_82118;
var statearr_82172_82226 = state_82118__$1;
(statearr_82172_82226[(2)] = null);

(statearr_82172_82226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82119 === (8))){
var inst_82022 = (state_82118[(8)]);
var inst_82039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82022);
var state_82118__$1 = state_82118;
var statearr_82173_82227 = state_82118__$1;
(statearr_82173_82227[(2)] = inst_82039);

(statearr_82173_82227[(1)] = (10));


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
});})(c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26881__auto__,c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26882__auto__ = null;
var cljs$core$async$mix_$_state_machine__26882__auto____0 = (function (){
var statearr_82177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82177[(0)] = cljs$core$async$mix_$_state_machine__26882__auto__);

(statearr_82177[(1)] = (1));

return statearr_82177;
});
var cljs$core$async$mix_$_state_machine__26882__auto____1 = (function (state_82118){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82178){if((e82178 instanceof Object)){
var ex__26885__auto__ = e82178;
var statearr_82179_82228 = state_82118;
(statearr_82179_82228[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82229 = state_82118;
state_82118 = G__82229;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26882__auto__ = function(state_82118){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26882__auto____1.call(this,state_82118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26882__auto____0;
cljs$core$async$mix_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26882__auto____1;
return cljs$core$async$mix_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26904__auto__ = (function (){var statearr_82180 = f__26903__auto__.call(null);
(statearr_82180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82181);

return statearr_82180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82181,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args82230 = [];
var len__25947__auto___82233 = arguments.length;
var i__25948__auto___82234 = (0);
while(true){
if((i__25948__auto___82234 < len__25947__auto___82233)){
args82230.push((arguments[i__25948__auto___82234]));

var G__82235 = (i__25948__auto___82234 + (1));
i__25948__auto___82234 = G__82235;
continue;
} else {
}
break;
}

var G__82232 = args82230.length;
switch (G__82232) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82230.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args82238 = [];
var len__25947__auto___82363 = arguments.length;
var i__25948__auto___82364 = (0);
while(true){
if((i__25948__auto___82364 < len__25947__auto___82363)){
args82238.push((arguments[i__25948__auto___82364]));

var G__82365 = (i__25948__auto___82364 + (1));
i__25948__auto___82364 = G__82365;
continue;
} else {
}
break;
}

var G__82240 = args82238.length;
switch (G__82240) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82238.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24872__auto__,mults){
return (function (p1__82237_SHARP_){
if(cljs.core.truth_(p1__82237_SHARP_.call(null,topic))){
return p1__82237_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__82237_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async82241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82241 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta82242){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta82242 = meta82242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_82243,meta82242__$1){
var self__ = this;
var _82243__$1 = this;
return (new cljs.core.async.t_cljs$core$async82241(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta82242__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_82243){
var self__ = this;
var _82243__$1 = this;
return self__.meta82242;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta82242","meta82242",695360363,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async82241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82241";

cljs.core.async.t_cljs$core$async82241.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82241");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async82241 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async82241(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta82242){
return (new cljs.core.async.t_cljs$core$async82241(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta82242));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async82241(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26902__auto___82367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82367,mults,ensure_mult,p){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82367,mults,ensure_mult,p){
return (function (state_82315){
var state_val_82316 = (state_82315[(1)]);
if((state_val_82316 === (7))){
var inst_82311 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82317_82368 = state_82315__$1;
(statearr_82317_82368[(2)] = inst_82311);

(statearr_82317_82368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (20))){
var state_82315__$1 = state_82315;
var statearr_82318_82369 = state_82315__$1;
(statearr_82318_82369[(2)] = null);

(statearr_82318_82369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (1))){
var state_82315__$1 = state_82315;
var statearr_82319_82370 = state_82315__$1;
(statearr_82319_82370[(2)] = null);

(statearr_82319_82370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (24))){
var inst_82294 = (state_82315[(7)]);
var inst_82303 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_82294);
var state_82315__$1 = state_82315;
var statearr_82320_82371 = state_82315__$1;
(statearr_82320_82371[(2)] = inst_82303);

(statearr_82320_82371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (4))){
var inst_82246 = (state_82315[(8)]);
var inst_82246__$1 = (state_82315[(2)]);
var inst_82247 = (inst_82246__$1 == null);
var state_82315__$1 = (function (){var statearr_82321 = state_82315;
(statearr_82321[(8)] = inst_82246__$1);

return statearr_82321;
})();
if(cljs.core.truth_(inst_82247)){
var statearr_82322_82372 = state_82315__$1;
(statearr_82322_82372[(1)] = (5));

} else {
var statearr_82323_82373 = state_82315__$1;
(statearr_82323_82373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (15))){
var inst_82288 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82324_82374 = state_82315__$1;
(statearr_82324_82374[(2)] = inst_82288);

(statearr_82324_82374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (21))){
var inst_82308 = (state_82315[(2)]);
var state_82315__$1 = (function (){var statearr_82325 = state_82315;
(statearr_82325[(9)] = inst_82308);

return statearr_82325;
})();
var statearr_82326_82375 = state_82315__$1;
(statearr_82326_82375[(2)] = null);

(statearr_82326_82375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (13))){
var inst_82270 = (state_82315[(10)]);
var inst_82272 = cljs.core.chunked_seq_QMARK_.call(null,inst_82270);
var state_82315__$1 = state_82315;
if(inst_82272){
var statearr_82327_82376 = state_82315__$1;
(statearr_82327_82376[(1)] = (16));

} else {
var statearr_82328_82377 = state_82315__$1;
(statearr_82328_82377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (22))){
var inst_82300 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
if(cljs.core.truth_(inst_82300)){
var statearr_82329_82378 = state_82315__$1;
(statearr_82329_82378[(1)] = (23));

} else {
var statearr_82330_82379 = state_82315__$1;
(statearr_82330_82379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (6))){
var inst_82294 = (state_82315[(7)]);
var inst_82296 = (state_82315[(11)]);
var inst_82246 = (state_82315[(8)]);
var inst_82294__$1 = topic_fn.call(null,inst_82246);
var inst_82295 = cljs.core.deref.call(null,mults);
var inst_82296__$1 = cljs.core.get.call(null,inst_82295,inst_82294__$1);
var state_82315__$1 = (function (){var statearr_82331 = state_82315;
(statearr_82331[(7)] = inst_82294__$1);

(statearr_82331[(11)] = inst_82296__$1);

return statearr_82331;
})();
if(cljs.core.truth_(inst_82296__$1)){
var statearr_82332_82380 = state_82315__$1;
(statearr_82332_82380[(1)] = (19));

} else {
var statearr_82333_82381 = state_82315__$1;
(statearr_82333_82381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (25))){
var inst_82305 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82334_82382 = state_82315__$1;
(statearr_82334_82382[(2)] = inst_82305);

(statearr_82334_82382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (17))){
var inst_82270 = (state_82315[(10)]);
var inst_82279 = cljs.core.first.call(null,inst_82270);
var inst_82280 = cljs.core.async.muxch_STAR_.call(null,inst_82279);
var inst_82281 = cljs.core.async.close_BANG_.call(null,inst_82280);
var inst_82282 = cljs.core.next.call(null,inst_82270);
var inst_82256 = inst_82282;
var inst_82257 = null;
var inst_82258 = (0);
var inst_82259 = (0);
var state_82315__$1 = (function (){var statearr_82335 = state_82315;
(statearr_82335[(12)] = inst_82259);

(statearr_82335[(13)] = inst_82256);

(statearr_82335[(14)] = inst_82258);

(statearr_82335[(15)] = inst_82281);

(statearr_82335[(16)] = inst_82257);

return statearr_82335;
})();
var statearr_82336_82383 = state_82315__$1;
(statearr_82336_82383[(2)] = null);

(statearr_82336_82383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (3))){
var inst_82313 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82315__$1,inst_82313);
} else {
if((state_val_82316 === (12))){
var inst_82290 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82337_82384 = state_82315__$1;
(statearr_82337_82384[(2)] = inst_82290);

(statearr_82337_82384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (2))){
var state_82315__$1 = state_82315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82315__$1,(4),ch);
} else {
if((state_val_82316 === (23))){
var state_82315__$1 = state_82315;
var statearr_82338_82385 = state_82315__$1;
(statearr_82338_82385[(2)] = null);

(statearr_82338_82385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (19))){
var inst_82296 = (state_82315[(11)]);
var inst_82246 = (state_82315[(8)]);
var inst_82298 = cljs.core.async.muxch_STAR_.call(null,inst_82296);
var state_82315__$1 = state_82315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82315__$1,(22),inst_82298,inst_82246);
} else {
if((state_val_82316 === (11))){
var inst_82256 = (state_82315[(13)]);
var inst_82270 = (state_82315[(10)]);
var inst_82270__$1 = cljs.core.seq.call(null,inst_82256);
var state_82315__$1 = (function (){var statearr_82339 = state_82315;
(statearr_82339[(10)] = inst_82270__$1);

return statearr_82339;
})();
if(inst_82270__$1){
var statearr_82340_82386 = state_82315__$1;
(statearr_82340_82386[(1)] = (13));

} else {
var statearr_82341_82387 = state_82315__$1;
(statearr_82341_82387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (9))){
var inst_82292 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82342_82388 = state_82315__$1;
(statearr_82342_82388[(2)] = inst_82292);

(statearr_82342_82388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (5))){
var inst_82253 = cljs.core.deref.call(null,mults);
var inst_82254 = cljs.core.vals.call(null,inst_82253);
var inst_82255 = cljs.core.seq.call(null,inst_82254);
var inst_82256 = inst_82255;
var inst_82257 = null;
var inst_82258 = (0);
var inst_82259 = (0);
var state_82315__$1 = (function (){var statearr_82343 = state_82315;
(statearr_82343[(12)] = inst_82259);

(statearr_82343[(13)] = inst_82256);

(statearr_82343[(14)] = inst_82258);

(statearr_82343[(16)] = inst_82257);

return statearr_82343;
})();
var statearr_82344_82389 = state_82315__$1;
(statearr_82344_82389[(2)] = null);

(statearr_82344_82389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (14))){
var state_82315__$1 = state_82315;
var statearr_82348_82390 = state_82315__$1;
(statearr_82348_82390[(2)] = null);

(statearr_82348_82390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (16))){
var inst_82270 = (state_82315[(10)]);
var inst_82274 = cljs.core.chunk_first.call(null,inst_82270);
var inst_82275 = cljs.core.chunk_rest.call(null,inst_82270);
var inst_82276 = cljs.core.count.call(null,inst_82274);
var inst_82256 = inst_82275;
var inst_82257 = inst_82274;
var inst_82258 = inst_82276;
var inst_82259 = (0);
var state_82315__$1 = (function (){var statearr_82349 = state_82315;
(statearr_82349[(12)] = inst_82259);

(statearr_82349[(13)] = inst_82256);

(statearr_82349[(14)] = inst_82258);

(statearr_82349[(16)] = inst_82257);

return statearr_82349;
})();
var statearr_82350_82391 = state_82315__$1;
(statearr_82350_82391[(2)] = null);

(statearr_82350_82391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (10))){
var inst_82259 = (state_82315[(12)]);
var inst_82256 = (state_82315[(13)]);
var inst_82258 = (state_82315[(14)]);
var inst_82257 = (state_82315[(16)]);
var inst_82264 = cljs.core._nth.call(null,inst_82257,inst_82259);
var inst_82265 = cljs.core.async.muxch_STAR_.call(null,inst_82264);
var inst_82266 = cljs.core.async.close_BANG_.call(null,inst_82265);
var inst_82267 = (inst_82259 + (1));
var tmp82345 = inst_82256;
var tmp82346 = inst_82258;
var tmp82347 = inst_82257;
var inst_82256__$1 = tmp82345;
var inst_82257__$1 = tmp82347;
var inst_82258__$1 = tmp82346;
var inst_82259__$1 = inst_82267;
var state_82315__$1 = (function (){var statearr_82351 = state_82315;
(statearr_82351[(17)] = inst_82266);

(statearr_82351[(12)] = inst_82259__$1);

(statearr_82351[(13)] = inst_82256__$1);

(statearr_82351[(14)] = inst_82258__$1);

(statearr_82351[(16)] = inst_82257__$1);

return statearr_82351;
})();
var statearr_82352_82392 = state_82315__$1;
(statearr_82352_82392[(2)] = null);

(statearr_82352_82392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (18))){
var inst_82285 = (state_82315[(2)]);
var state_82315__$1 = state_82315;
var statearr_82353_82393 = state_82315__$1;
(statearr_82353_82393[(2)] = inst_82285);

(statearr_82353_82393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82316 === (8))){
var inst_82259 = (state_82315[(12)]);
var inst_82258 = (state_82315[(14)]);
var inst_82261 = (inst_82259 < inst_82258);
var inst_82262 = inst_82261;
var state_82315__$1 = state_82315;
if(cljs.core.truth_(inst_82262)){
var statearr_82354_82394 = state_82315__$1;
(statearr_82354_82394[(1)] = (10));

} else {
var statearr_82355_82395 = state_82315__$1;
(statearr_82355_82395[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__26902__auto___82367,mults,ensure_mult,p))
;
return ((function (switch__26881__auto__,c__26902__auto___82367,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_82359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82359[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_82359[(1)] = (1));

return statearr_82359;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_82315){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82360){if((e82360 instanceof Object)){
var ex__26885__auto__ = e82360;
var statearr_82361_82396 = state_82315;
(statearr_82361_82396[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82397 = state_82315;
state_82315 = G__82397;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_82315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_82315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82367,mults,ensure_mult,p))
})();
var state__26904__auto__ = (function (){var statearr_82362 = f__26903__auto__.call(null);
(statearr_82362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82367);

return statearr_82362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82367,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args82398 = [];
var len__25947__auto___82401 = arguments.length;
var i__25948__auto___82402 = (0);
while(true){
if((i__25948__auto___82402 < len__25947__auto___82401)){
args82398.push((arguments[i__25948__auto___82402]));

var G__82403 = (i__25948__auto___82402 + (1));
i__25948__auto___82402 = G__82403;
continue;
} else {
}
break;
}

var G__82400 = args82398.length;
switch (G__82400) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82398.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args82405 = [];
var len__25947__auto___82408 = arguments.length;
var i__25948__auto___82409 = (0);
while(true){
if((i__25948__auto___82409 < len__25947__auto___82408)){
args82405.push((arguments[i__25948__auto___82409]));

var G__82410 = (i__25948__auto___82409 + (1));
i__25948__auto___82409 = G__82410;
continue;
} else {
}
break;
}

var G__82407 = args82405.length;
switch (G__82407) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82405.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args82412 = [];
var len__25947__auto___82483 = arguments.length;
var i__25948__auto___82484 = (0);
while(true){
if((i__25948__auto___82484 < len__25947__auto___82483)){
args82412.push((arguments[i__25948__auto___82484]));

var G__82485 = (i__25948__auto___82484 + (1));
i__25948__auto___82484 = G__82485;
continue;
} else {
}
break;
}

var G__82414 = args82412.length;
switch (G__82414) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82412.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26902__auto___82487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_82453){
var state_val_82454 = (state_82453[(1)]);
if((state_val_82454 === (7))){
var state_82453__$1 = state_82453;
var statearr_82455_82488 = state_82453__$1;
(statearr_82455_82488[(2)] = null);

(statearr_82455_82488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (1))){
var state_82453__$1 = state_82453;
var statearr_82456_82489 = state_82453__$1;
(statearr_82456_82489[(2)] = null);

(statearr_82456_82489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (4))){
var inst_82417 = (state_82453[(7)]);
var inst_82419 = (inst_82417 < cnt);
var state_82453__$1 = state_82453;
if(cljs.core.truth_(inst_82419)){
var statearr_82457_82490 = state_82453__$1;
(statearr_82457_82490[(1)] = (6));

} else {
var statearr_82458_82491 = state_82453__$1;
(statearr_82458_82491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (15))){
var inst_82449 = (state_82453[(2)]);
var state_82453__$1 = state_82453;
var statearr_82459_82492 = state_82453__$1;
(statearr_82459_82492[(2)] = inst_82449);

(statearr_82459_82492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (13))){
var inst_82442 = cljs.core.async.close_BANG_.call(null,out);
var state_82453__$1 = state_82453;
var statearr_82460_82493 = state_82453__$1;
(statearr_82460_82493[(2)] = inst_82442);

(statearr_82460_82493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (6))){
var state_82453__$1 = state_82453;
var statearr_82461_82494 = state_82453__$1;
(statearr_82461_82494[(2)] = null);

(statearr_82461_82494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (3))){
var inst_82451 = (state_82453[(2)]);
var state_82453__$1 = state_82453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82453__$1,inst_82451);
} else {
if((state_val_82454 === (12))){
var inst_82439 = (state_82453[(8)]);
var inst_82439__$1 = (state_82453[(2)]);
var inst_82440 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_82439__$1);
var state_82453__$1 = (function (){var statearr_82462 = state_82453;
(statearr_82462[(8)] = inst_82439__$1);

return statearr_82462;
})();
if(cljs.core.truth_(inst_82440)){
var statearr_82463_82495 = state_82453__$1;
(statearr_82463_82495[(1)] = (13));

} else {
var statearr_82464_82496 = state_82453__$1;
(statearr_82464_82496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (2))){
var inst_82416 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_82417 = (0);
var state_82453__$1 = (function (){var statearr_82465 = state_82453;
(statearr_82465[(7)] = inst_82417);

(statearr_82465[(9)] = inst_82416);

return statearr_82465;
})();
var statearr_82466_82497 = state_82453__$1;
(statearr_82466_82497[(2)] = null);

(statearr_82466_82497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (11))){
var inst_82417 = (state_82453[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82453,(10),Object,null,(9));
var inst_82426 = chs__$1.call(null,inst_82417);
var inst_82427 = done.call(null,inst_82417);
var inst_82428 = cljs.core.async.take_BANG_.call(null,inst_82426,inst_82427);
var state_82453__$1 = state_82453;
var statearr_82467_82498 = state_82453__$1;
(statearr_82467_82498[(2)] = inst_82428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82453__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (9))){
var inst_82417 = (state_82453[(7)]);
var inst_82430 = (state_82453[(2)]);
var inst_82431 = (inst_82417 + (1));
var inst_82417__$1 = inst_82431;
var state_82453__$1 = (function (){var statearr_82468 = state_82453;
(statearr_82468[(7)] = inst_82417__$1);

(statearr_82468[(10)] = inst_82430);

return statearr_82468;
})();
var statearr_82469_82499 = state_82453__$1;
(statearr_82469_82499[(2)] = null);

(statearr_82469_82499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (5))){
var inst_82437 = (state_82453[(2)]);
var state_82453__$1 = (function (){var statearr_82470 = state_82453;
(statearr_82470[(11)] = inst_82437);

return statearr_82470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82453__$1,(12),dchan);
} else {
if((state_val_82454 === (14))){
var inst_82439 = (state_82453[(8)]);
var inst_82444 = cljs.core.apply.call(null,f,inst_82439);
var state_82453__$1 = state_82453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82453__$1,(16),out,inst_82444);
} else {
if((state_val_82454 === (16))){
var inst_82446 = (state_82453[(2)]);
var state_82453__$1 = (function (){var statearr_82471 = state_82453;
(statearr_82471[(12)] = inst_82446);

return statearr_82471;
})();
var statearr_82472_82500 = state_82453__$1;
(statearr_82472_82500[(2)] = null);

(statearr_82472_82500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (10))){
var inst_82421 = (state_82453[(2)]);
var inst_82422 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_82453__$1 = (function (){var statearr_82473 = state_82453;
(statearr_82473[(13)] = inst_82421);

return statearr_82473;
})();
var statearr_82474_82501 = state_82453__$1;
(statearr_82474_82501[(2)] = inst_82422);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82453__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82454 === (8))){
var inst_82435 = (state_82453[(2)]);
var state_82453__$1 = state_82453;
var statearr_82475_82502 = state_82453__$1;
(statearr_82475_82502[(2)] = inst_82435);

(statearr_82475_82502[(1)] = (5));


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
});})(c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26881__auto__,c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_82479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82479[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_82479[(1)] = (1));

return statearr_82479;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_82453){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82480){if((e82480 instanceof Object)){
var ex__26885__auto__ = e82480;
var statearr_82481_82503 = state_82453;
(statearr_82481_82503[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82504 = state_82453;
state_82453 = G__82504;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_82453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_82453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26904__auto__ = (function (){var statearr_82482 = f__26903__auto__.call(null);
(statearr_82482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82487);

return statearr_82482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82487,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args82506 = [];
var len__25947__auto___82564 = arguments.length;
var i__25948__auto___82565 = (0);
while(true){
if((i__25948__auto___82565 < len__25947__auto___82564)){
args82506.push((arguments[i__25948__auto___82565]));

var G__82566 = (i__25948__auto___82565 + (1));
i__25948__auto___82565 = G__82566;
continue;
} else {
}
break;
}

var G__82508 = args82506.length;
switch (G__82508) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82506.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___82568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82568,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82568,out){
return (function (state_82540){
var state_val_82541 = (state_82540[(1)]);
if((state_val_82541 === (7))){
var inst_82520 = (state_82540[(7)]);
var inst_82519 = (state_82540[(8)]);
var inst_82519__$1 = (state_82540[(2)]);
var inst_82520__$1 = cljs.core.nth.call(null,inst_82519__$1,(0),null);
var inst_82521 = cljs.core.nth.call(null,inst_82519__$1,(1),null);
var inst_82522 = (inst_82520__$1 == null);
var state_82540__$1 = (function (){var statearr_82542 = state_82540;
(statearr_82542[(9)] = inst_82521);

(statearr_82542[(7)] = inst_82520__$1);

(statearr_82542[(8)] = inst_82519__$1);

return statearr_82542;
})();
if(cljs.core.truth_(inst_82522)){
var statearr_82543_82569 = state_82540__$1;
(statearr_82543_82569[(1)] = (8));

} else {
var statearr_82544_82570 = state_82540__$1;
(statearr_82544_82570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (1))){
var inst_82509 = cljs.core.vec.call(null,chs);
var inst_82510 = inst_82509;
var state_82540__$1 = (function (){var statearr_82545 = state_82540;
(statearr_82545[(10)] = inst_82510);

return statearr_82545;
})();
var statearr_82546_82571 = state_82540__$1;
(statearr_82546_82571[(2)] = null);

(statearr_82546_82571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (4))){
var inst_82510 = (state_82540[(10)]);
var state_82540__$1 = state_82540;
return cljs.core.async.ioc_alts_BANG_.call(null,state_82540__$1,(7),inst_82510);
} else {
if((state_val_82541 === (6))){
var inst_82536 = (state_82540[(2)]);
var state_82540__$1 = state_82540;
var statearr_82547_82572 = state_82540__$1;
(statearr_82547_82572[(2)] = inst_82536);

(statearr_82547_82572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (3))){
var inst_82538 = (state_82540[(2)]);
var state_82540__$1 = state_82540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82540__$1,inst_82538);
} else {
if((state_val_82541 === (2))){
var inst_82510 = (state_82540[(10)]);
var inst_82512 = cljs.core.count.call(null,inst_82510);
var inst_82513 = (inst_82512 > (0));
var state_82540__$1 = state_82540;
if(cljs.core.truth_(inst_82513)){
var statearr_82549_82573 = state_82540__$1;
(statearr_82549_82573[(1)] = (4));

} else {
var statearr_82550_82574 = state_82540__$1;
(statearr_82550_82574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (11))){
var inst_82510 = (state_82540[(10)]);
var inst_82529 = (state_82540[(2)]);
var tmp82548 = inst_82510;
var inst_82510__$1 = tmp82548;
var state_82540__$1 = (function (){var statearr_82551 = state_82540;
(statearr_82551[(10)] = inst_82510__$1);

(statearr_82551[(11)] = inst_82529);

return statearr_82551;
})();
var statearr_82552_82575 = state_82540__$1;
(statearr_82552_82575[(2)] = null);

(statearr_82552_82575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (9))){
var inst_82520 = (state_82540[(7)]);
var state_82540__$1 = state_82540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82540__$1,(11),out,inst_82520);
} else {
if((state_val_82541 === (5))){
var inst_82534 = cljs.core.async.close_BANG_.call(null,out);
var state_82540__$1 = state_82540;
var statearr_82553_82576 = state_82540__$1;
(statearr_82553_82576[(2)] = inst_82534);

(statearr_82553_82576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (10))){
var inst_82532 = (state_82540[(2)]);
var state_82540__$1 = state_82540;
var statearr_82554_82577 = state_82540__$1;
(statearr_82554_82577[(2)] = inst_82532);

(statearr_82554_82577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82541 === (8))){
var inst_82521 = (state_82540[(9)]);
var inst_82510 = (state_82540[(10)]);
var inst_82520 = (state_82540[(7)]);
var inst_82519 = (state_82540[(8)]);
var inst_82524 = (function (){var cs = inst_82510;
var vec__82515 = inst_82519;
var v = inst_82520;
var c = inst_82521;
return ((function (cs,vec__82515,v,c,inst_82521,inst_82510,inst_82520,inst_82519,state_val_82541,c__26902__auto___82568,out){
return (function (p1__82505_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__82505_SHARP_);
});
;})(cs,vec__82515,v,c,inst_82521,inst_82510,inst_82520,inst_82519,state_val_82541,c__26902__auto___82568,out))
})();
var inst_82525 = cljs.core.filterv.call(null,inst_82524,inst_82510);
var inst_82510__$1 = inst_82525;
var state_82540__$1 = (function (){var statearr_82555 = state_82540;
(statearr_82555[(10)] = inst_82510__$1);

return statearr_82555;
})();
var statearr_82556_82578 = state_82540__$1;
(statearr_82556_82578[(2)] = null);

(statearr_82556_82578[(1)] = (2));


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
});})(c__26902__auto___82568,out))
;
return ((function (switch__26881__auto__,c__26902__auto___82568,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_82560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82560[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_82560[(1)] = (1));

return statearr_82560;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_82540){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82561){if((e82561 instanceof Object)){
var ex__26885__auto__ = e82561;
var statearr_82562_82579 = state_82540;
(statearr_82562_82579[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82580 = state_82540;
state_82540 = G__82580;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_82540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_82540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82568,out))
})();
var state__26904__auto__ = (function (){var statearr_82563 = f__26903__auto__.call(null);
(statearr_82563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82568);

return statearr_82563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82568,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args82581 = [];
var len__25947__auto___82630 = arguments.length;
var i__25948__auto___82631 = (0);
while(true){
if((i__25948__auto___82631 < len__25947__auto___82630)){
args82581.push((arguments[i__25948__auto___82631]));

var G__82632 = (i__25948__auto___82631 + (1));
i__25948__auto___82631 = G__82632;
continue;
} else {
}
break;
}

var G__82583 = args82581.length;
switch (G__82583) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82581.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___82634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82634,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82634,out){
return (function (state_82607){
var state_val_82608 = (state_82607[(1)]);
if((state_val_82608 === (7))){
var inst_82589 = (state_82607[(7)]);
var inst_82589__$1 = (state_82607[(2)]);
var inst_82590 = (inst_82589__$1 == null);
var inst_82591 = cljs.core.not.call(null,inst_82590);
var state_82607__$1 = (function (){var statearr_82609 = state_82607;
(statearr_82609[(7)] = inst_82589__$1);

return statearr_82609;
})();
if(inst_82591){
var statearr_82610_82635 = state_82607__$1;
(statearr_82610_82635[(1)] = (8));

} else {
var statearr_82611_82636 = state_82607__$1;
(statearr_82611_82636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (1))){
var inst_82584 = (0);
var state_82607__$1 = (function (){var statearr_82612 = state_82607;
(statearr_82612[(8)] = inst_82584);

return statearr_82612;
})();
var statearr_82613_82637 = state_82607__$1;
(statearr_82613_82637[(2)] = null);

(statearr_82613_82637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (4))){
var state_82607__$1 = state_82607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82607__$1,(7),ch);
} else {
if((state_val_82608 === (6))){
var inst_82602 = (state_82607[(2)]);
var state_82607__$1 = state_82607;
var statearr_82614_82638 = state_82607__$1;
(statearr_82614_82638[(2)] = inst_82602);

(statearr_82614_82638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (3))){
var inst_82604 = (state_82607[(2)]);
var inst_82605 = cljs.core.async.close_BANG_.call(null,out);
var state_82607__$1 = (function (){var statearr_82615 = state_82607;
(statearr_82615[(9)] = inst_82604);

return statearr_82615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82607__$1,inst_82605);
} else {
if((state_val_82608 === (2))){
var inst_82584 = (state_82607[(8)]);
var inst_82586 = (inst_82584 < n);
var state_82607__$1 = state_82607;
if(cljs.core.truth_(inst_82586)){
var statearr_82616_82639 = state_82607__$1;
(statearr_82616_82639[(1)] = (4));

} else {
var statearr_82617_82640 = state_82607__$1;
(statearr_82617_82640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (11))){
var inst_82584 = (state_82607[(8)]);
var inst_82594 = (state_82607[(2)]);
var inst_82595 = (inst_82584 + (1));
var inst_82584__$1 = inst_82595;
var state_82607__$1 = (function (){var statearr_82618 = state_82607;
(statearr_82618[(10)] = inst_82594);

(statearr_82618[(8)] = inst_82584__$1);

return statearr_82618;
})();
var statearr_82619_82641 = state_82607__$1;
(statearr_82619_82641[(2)] = null);

(statearr_82619_82641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (9))){
var state_82607__$1 = state_82607;
var statearr_82620_82642 = state_82607__$1;
(statearr_82620_82642[(2)] = null);

(statearr_82620_82642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (5))){
var state_82607__$1 = state_82607;
var statearr_82621_82643 = state_82607__$1;
(statearr_82621_82643[(2)] = null);

(statearr_82621_82643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (10))){
var inst_82599 = (state_82607[(2)]);
var state_82607__$1 = state_82607;
var statearr_82622_82644 = state_82607__$1;
(statearr_82622_82644[(2)] = inst_82599);

(statearr_82622_82644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82608 === (8))){
var inst_82589 = (state_82607[(7)]);
var state_82607__$1 = state_82607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82607__$1,(11),out,inst_82589);
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
});})(c__26902__auto___82634,out))
;
return ((function (switch__26881__auto__,c__26902__auto___82634,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_82626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82626[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_82626[(1)] = (1));

return statearr_82626;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_82607){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82627){if((e82627 instanceof Object)){
var ex__26885__auto__ = e82627;
var statearr_82628_82645 = state_82607;
(statearr_82628_82645[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82646 = state_82607;
state_82607 = G__82646;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_82607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_82607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82634,out))
})();
var state__26904__auto__ = (function (){var statearr_82629 = f__26903__auto__.call(null);
(statearr_82629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82634);

return statearr_82629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82634,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async82654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82654 = (function (map_LT_,f,ch,meta82655){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta82655 = meta82655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82656,meta82655__$1){
var self__ = this;
var _82656__$1 = this;
return (new cljs.core.async.t_cljs$core$async82654(self__.map_LT_,self__.f,self__.ch,meta82655__$1));
});

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82656){
var self__ = this;
var _82656__$1 = this;
return self__.meta82655;
});

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async82657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82657 = (function (map_LT_,f,ch,meta82655,_,fn1,meta82658){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta82655 = meta82655;
this._ = _;
this.fn1 = fn1;
this.meta82658 = meta82658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_82659,meta82658__$1){
var self__ = this;
var _82659__$1 = this;
return (new cljs.core.async.t_cljs$core$async82657(self__.map_LT_,self__.f,self__.ch,self__.meta82655,self__._,self__.fn1,meta82658__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_82659){
var self__ = this;
var _82659__$1 = this;
return self__.meta82658;
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__82647_SHARP_){
return f1.call(null,(((p1__82647_SHARP_ == null))?null:self__.f.call(null,p1__82647_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta82655","meta82655",1531257430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async82654","cljs.core.async/t_cljs$core$async82654",1972430428,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta82658","meta82658",1404073465,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async82657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82657";

cljs.core.async.t_cljs$core$async82657.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82657");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async82657 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async82657(map_LT___$1,f__$1,ch__$1,meta82655__$1,___$2,fn1__$1,meta82658){
return (new cljs.core.async.t_cljs$core$async82657(map_LT___$1,f__$1,ch__$1,meta82655__$1,___$2,fn1__$1,meta82658));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async82657(self__.map_LT_,self__.f,self__.ch,self__.meta82655,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24860__auto__ = ret;
if(cljs.core.truth_(and__24860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async82654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async82654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta82655","meta82655",1531257430,null)], null);
});

cljs.core.async.t_cljs$core$async82654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82654";

cljs.core.async.t_cljs$core$async82654.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82654");
});

cljs.core.async.__GT_t_cljs$core$async82654 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async82654(map_LT___$1,f__$1,ch__$1,meta82655){
return (new cljs.core.async.t_cljs$core$async82654(map_LT___$1,f__$1,ch__$1,meta82655));
});

}

return (new cljs.core.async.t_cljs$core$async82654(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async82663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82663 = (function (map_GT_,f,ch,meta82664){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta82664 = meta82664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82665,meta82664__$1){
var self__ = this;
var _82665__$1 = this;
return (new cljs.core.async.t_cljs$core$async82663(self__.map_GT_,self__.f,self__.ch,meta82664__$1));
});

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82665){
var self__ = this;
var _82665__$1 = this;
return self__.meta82664;
});

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async82663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async82663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta82664","meta82664",51688319,null)], null);
});

cljs.core.async.t_cljs$core$async82663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82663";

cljs.core.async.t_cljs$core$async82663.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82663");
});

cljs.core.async.__GT_t_cljs$core$async82663 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async82663(map_GT___$1,f__$1,ch__$1,meta82664){
return (new cljs.core.async.t_cljs$core$async82663(map_GT___$1,f__$1,ch__$1,meta82664));
});

}

return (new cljs.core.async.t_cljs$core$async82663(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async82669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82669 = (function (filter_GT_,p,ch,meta82670){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta82670 = meta82670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82671,meta82670__$1){
var self__ = this;
var _82671__$1 = this;
return (new cljs.core.async.t_cljs$core$async82669(self__.filter_GT_,self__.p,self__.ch,meta82670__$1));
});

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82671){
var self__ = this;
var _82671__$1 = this;
return self__.meta82670;
});

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async82669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async82669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta82670","meta82670",591720298,null)], null);
});

cljs.core.async.t_cljs$core$async82669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async82669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82669";

cljs.core.async.t_cljs$core$async82669.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async82669");
});

cljs.core.async.__GT_t_cljs$core$async82669 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async82669(filter_GT___$1,p__$1,ch__$1,meta82670){
return (new cljs.core.async.t_cljs$core$async82669(filter_GT___$1,p__$1,ch__$1,meta82670));
});

}

return (new cljs.core.async.t_cljs$core$async82669(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args82672 = [];
var len__25947__auto___82716 = arguments.length;
var i__25948__auto___82717 = (0);
while(true){
if((i__25948__auto___82717 < len__25947__auto___82716)){
args82672.push((arguments[i__25948__auto___82717]));

var G__82718 = (i__25948__auto___82717 + (1));
i__25948__auto___82717 = G__82718;
continue;
} else {
}
break;
}

var G__82674 = args82672.length;
switch (G__82674) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82672.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___82720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___82720,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___82720,out){
return (function (state_82695){
var state_val_82696 = (state_82695[(1)]);
if((state_val_82696 === (7))){
var inst_82691 = (state_82695[(2)]);
var state_82695__$1 = state_82695;
var statearr_82697_82721 = state_82695__$1;
(statearr_82697_82721[(2)] = inst_82691);

(statearr_82697_82721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (1))){
var state_82695__$1 = state_82695;
var statearr_82698_82722 = state_82695__$1;
(statearr_82698_82722[(2)] = null);

(statearr_82698_82722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (4))){
var inst_82677 = (state_82695[(7)]);
var inst_82677__$1 = (state_82695[(2)]);
var inst_82678 = (inst_82677__$1 == null);
var state_82695__$1 = (function (){var statearr_82699 = state_82695;
(statearr_82699[(7)] = inst_82677__$1);

return statearr_82699;
})();
if(cljs.core.truth_(inst_82678)){
var statearr_82700_82723 = state_82695__$1;
(statearr_82700_82723[(1)] = (5));

} else {
var statearr_82701_82724 = state_82695__$1;
(statearr_82701_82724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (6))){
var inst_82677 = (state_82695[(7)]);
var inst_82682 = p.call(null,inst_82677);
var state_82695__$1 = state_82695;
if(cljs.core.truth_(inst_82682)){
var statearr_82702_82725 = state_82695__$1;
(statearr_82702_82725[(1)] = (8));

} else {
var statearr_82703_82726 = state_82695__$1;
(statearr_82703_82726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (3))){
var inst_82693 = (state_82695[(2)]);
var state_82695__$1 = state_82695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82695__$1,inst_82693);
} else {
if((state_val_82696 === (2))){
var state_82695__$1 = state_82695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82695__$1,(4),ch);
} else {
if((state_val_82696 === (11))){
var inst_82685 = (state_82695[(2)]);
var state_82695__$1 = state_82695;
var statearr_82704_82727 = state_82695__$1;
(statearr_82704_82727[(2)] = inst_82685);

(statearr_82704_82727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (9))){
var state_82695__$1 = state_82695;
var statearr_82705_82728 = state_82695__$1;
(statearr_82705_82728[(2)] = null);

(statearr_82705_82728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (5))){
var inst_82680 = cljs.core.async.close_BANG_.call(null,out);
var state_82695__$1 = state_82695;
var statearr_82706_82729 = state_82695__$1;
(statearr_82706_82729[(2)] = inst_82680);

(statearr_82706_82729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (10))){
var inst_82688 = (state_82695[(2)]);
var state_82695__$1 = (function (){var statearr_82707 = state_82695;
(statearr_82707[(8)] = inst_82688);

return statearr_82707;
})();
var statearr_82708_82730 = state_82695__$1;
(statearr_82708_82730[(2)] = null);

(statearr_82708_82730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82696 === (8))){
var inst_82677 = (state_82695[(7)]);
var state_82695__$1 = state_82695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82695__$1,(11),out,inst_82677);
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
});})(c__26902__auto___82720,out))
;
return ((function (switch__26881__auto__,c__26902__auto___82720,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_82712 = [null,null,null,null,null,null,null,null,null];
(statearr_82712[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_82712[(1)] = (1));

return statearr_82712;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_82695){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82713){if((e82713 instanceof Object)){
var ex__26885__auto__ = e82713;
var statearr_82714_82731 = state_82695;
(statearr_82714_82731[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82732 = state_82695;
state_82695 = G__82732;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_82695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_82695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___82720,out))
})();
var state__26904__auto__ = (function (){var statearr_82715 = f__26903__auto__.call(null);
(statearr_82715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___82720);

return statearr_82715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___82720,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args82733 = [];
var len__25947__auto___82736 = arguments.length;
var i__25948__auto___82737 = (0);
while(true){
if((i__25948__auto___82737 < len__25947__auto___82736)){
args82733.push((arguments[i__25948__auto___82737]));

var G__82738 = (i__25948__auto___82737 + (1));
i__25948__auto___82737 = G__82738;
continue;
} else {
}
break;
}

var G__82735 = args82733.length;
switch (G__82735) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82733.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__){
return (function (state_82905){
var state_val_82906 = (state_82905[(1)]);
if((state_val_82906 === (7))){
var inst_82901 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
var statearr_82907_82948 = state_82905__$1;
(statearr_82907_82948[(2)] = inst_82901);

(statearr_82907_82948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (20))){
var inst_82871 = (state_82905[(7)]);
var inst_82882 = (state_82905[(2)]);
var inst_82883 = cljs.core.next.call(null,inst_82871);
var inst_82857 = inst_82883;
var inst_82858 = null;
var inst_82859 = (0);
var inst_82860 = (0);
var state_82905__$1 = (function (){var statearr_82908 = state_82905;
(statearr_82908[(8)] = inst_82859);

(statearr_82908[(9)] = inst_82882);

(statearr_82908[(10)] = inst_82857);

(statearr_82908[(11)] = inst_82858);

(statearr_82908[(12)] = inst_82860);

return statearr_82908;
})();
var statearr_82909_82949 = state_82905__$1;
(statearr_82909_82949[(2)] = null);

(statearr_82909_82949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (1))){
var state_82905__$1 = state_82905;
var statearr_82910_82950 = state_82905__$1;
(statearr_82910_82950[(2)] = null);

(statearr_82910_82950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (4))){
var inst_82846 = (state_82905[(13)]);
var inst_82846__$1 = (state_82905[(2)]);
var inst_82847 = (inst_82846__$1 == null);
var state_82905__$1 = (function (){var statearr_82911 = state_82905;
(statearr_82911[(13)] = inst_82846__$1);

return statearr_82911;
})();
if(cljs.core.truth_(inst_82847)){
var statearr_82912_82951 = state_82905__$1;
(statearr_82912_82951[(1)] = (5));

} else {
var statearr_82913_82952 = state_82905__$1;
(statearr_82913_82952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (15))){
var state_82905__$1 = state_82905;
var statearr_82917_82953 = state_82905__$1;
(statearr_82917_82953[(2)] = null);

(statearr_82917_82953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (21))){
var state_82905__$1 = state_82905;
var statearr_82918_82954 = state_82905__$1;
(statearr_82918_82954[(2)] = null);

(statearr_82918_82954[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (13))){
var inst_82859 = (state_82905[(8)]);
var inst_82857 = (state_82905[(10)]);
var inst_82858 = (state_82905[(11)]);
var inst_82860 = (state_82905[(12)]);
var inst_82867 = (state_82905[(2)]);
var inst_82868 = (inst_82860 + (1));
var tmp82914 = inst_82859;
var tmp82915 = inst_82857;
var tmp82916 = inst_82858;
var inst_82857__$1 = tmp82915;
var inst_82858__$1 = tmp82916;
var inst_82859__$1 = tmp82914;
var inst_82860__$1 = inst_82868;
var state_82905__$1 = (function (){var statearr_82919 = state_82905;
(statearr_82919[(14)] = inst_82867);

(statearr_82919[(8)] = inst_82859__$1);

(statearr_82919[(10)] = inst_82857__$1);

(statearr_82919[(11)] = inst_82858__$1);

(statearr_82919[(12)] = inst_82860__$1);

return statearr_82919;
})();
var statearr_82920_82955 = state_82905__$1;
(statearr_82920_82955[(2)] = null);

(statearr_82920_82955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (22))){
var state_82905__$1 = state_82905;
var statearr_82921_82956 = state_82905__$1;
(statearr_82921_82956[(2)] = null);

(statearr_82921_82956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (6))){
var inst_82846 = (state_82905[(13)]);
var inst_82855 = f.call(null,inst_82846);
var inst_82856 = cljs.core.seq.call(null,inst_82855);
var inst_82857 = inst_82856;
var inst_82858 = null;
var inst_82859 = (0);
var inst_82860 = (0);
var state_82905__$1 = (function (){var statearr_82922 = state_82905;
(statearr_82922[(8)] = inst_82859);

(statearr_82922[(10)] = inst_82857);

(statearr_82922[(11)] = inst_82858);

(statearr_82922[(12)] = inst_82860);

return statearr_82922;
})();
var statearr_82923_82957 = state_82905__$1;
(statearr_82923_82957[(2)] = null);

(statearr_82923_82957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (17))){
var inst_82871 = (state_82905[(7)]);
var inst_82875 = cljs.core.chunk_first.call(null,inst_82871);
var inst_82876 = cljs.core.chunk_rest.call(null,inst_82871);
var inst_82877 = cljs.core.count.call(null,inst_82875);
var inst_82857 = inst_82876;
var inst_82858 = inst_82875;
var inst_82859 = inst_82877;
var inst_82860 = (0);
var state_82905__$1 = (function (){var statearr_82924 = state_82905;
(statearr_82924[(8)] = inst_82859);

(statearr_82924[(10)] = inst_82857);

(statearr_82924[(11)] = inst_82858);

(statearr_82924[(12)] = inst_82860);

return statearr_82924;
})();
var statearr_82925_82958 = state_82905__$1;
(statearr_82925_82958[(2)] = null);

(statearr_82925_82958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (3))){
var inst_82903 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82905__$1,inst_82903);
} else {
if((state_val_82906 === (12))){
var inst_82891 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
var statearr_82926_82959 = state_82905__$1;
(statearr_82926_82959[(2)] = inst_82891);

(statearr_82926_82959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (2))){
var state_82905__$1 = state_82905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82905__$1,(4),in$);
} else {
if((state_val_82906 === (23))){
var inst_82899 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
var statearr_82927_82960 = state_82905__$1;
(statearr_82927_82960[(2)] = inst_82899);

(statearr_82927_82960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (19))){
var inst_82886 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
var statearr_82928_82961 = state_82905__$1;
(statearr_82928_82961[(2)] = inst_82886);

(statearr_82928_82961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (11))){
var inst_82857 = (state_82905[(10)]);
var inst_82871 = (state_82905[(7)]);
var inst_82871__$1 = cljs.core.seq.call(null,inst_82857);
var state_82905__$1 = (function (){var statearr_82929 = state_82905;
(statearr_82929[(7)] = inst_82871__$1);

return statearr_82929;
})();
if(inst_82871__$1){
var statearr_82930_82962 = state_82905__$1;
(statearr_82930_82962[(1)] = (14));

} else {
var statearr_82931_82963 = state_82905__$1;
(statearr_82931_82963[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (9))){
var inst_82893 = (state_82905[(2)]);
var inst_82894 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_82905__$1 = (function (){var statearr_82932 = state_82905;
(statearr_82932[(15)] = inst_82893);

return statearr_82932;
})();
if(cljs.core.truth_(inst_82894)){
var statearr_82933_82964 = state_82905__$1;
(statearr_82933_82964[(1)] = (21));

} else {
var statearr_82934_82965 = state_82905__$1;
(statearr_82934_82965[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (5))){
var inst_82849 = cljs.core.async.close_BANG_.call(null,out);
var state_82905__$1 = state_82905;
var statearr_82935_82966 = state_82905__$1;
(statearr_82935_82966[(2)] = inst_82849);

(statearr_82935_82966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (14))){
var inst_82871 = (state_82905[(7)]);
var inst_82873 = cljs.core.chunked_seq_QMARK_.call(null,inst_82871);
var state_82905__$1 = state_82905;
if(inst_82873){
var statearr_82936_82967 = state_82905__$1;
(statearr_82936_82967[(1)] = (17));

} else {
var statearr_82937_82968 = state_82905__$1;
(statearr_82937_82968[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (16))){
var inst_82889 = (state_82905[(2)]);
var state_82905__$1 = state_82905;
var statearr_82938_82969 = state_82905__$1;
(statearr_82938_82969[(2)] = inst_82889);

(statearr_82938_82969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82906 === (10))){
var inst_82858 = (state_82905[(11)]);
var inst_82860 = (state_82905[(12)]);
var inst_82865 = cljs.core._nth.call(null,inst_82858,inst_82860);
var state_82905__$1 = state_82905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82905__$1,(13),out,inst_82865);
} else {
if((state_val_82906 === (18))){
var inst_82871 = (state_82905[(7)]);
var inst_82880 = cljs.core.first.call(null,inst_82871);
var state_82905__$1 = state_82905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82905__$1,(20),out,inst_82880);
} else {
if((state_val_82906 === (8))){
var inst_82859 = (state_82905[(8)]);
var inst_82860 = (state_82905[(12)]);
var inst_82862 = (inst_82860 < inst_82859);
var inst_82863 = inst_82862;
var state_82905__$1 = state_82905;
if(cljs.core.truth_(inst_82863)){
var statearr_82939_82970 = state_82905__$1;
(statearr_82939_82970[(1)] = (10));

} else {
var statearr_82940_82971 = state_82905__$1;
(statearr_82940_82971[(1)] = (11));

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
}
}
}
}
}
}
});})(c__26902__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____0 = (function (){
var statearr_82944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82944[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__);

(statearr_82944[(1)] = (1));

return statearr_82944;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____1 = (function (state_82905){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_82905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e82945){if((e82945 instanceof Object)){
var ex__26885__auto__ = e82945;
var statearr_82946_82972 = state_82905;
(statearr_82946_82972[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82973 = state_82905;
state_82905 = G__82973;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__ = function(state_82905){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____1.call(this,state_82905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__))
})();
var state__26904__auto__ = (function (){var statearr_82947 = f__26903__auto__.call(null);
(statearr_82947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_82947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__))
);

return c__26902__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args82974 = [];
var len__25947__auto___82977 = arguments.length;
var i__25948__auto___82978 = (0);
while(true){
if((i__25948__auto___82978 < len__25947__auto___82977)){
args82974.push((arguments[i__25948__auto___82978]));

var G__82979 = (i__25948__auto___82978 + (1));
i__25948__auto___82978 = G__82979;
continue;
} else {
}
break;
}

var G__82976 = args82974.length;
switch (G__82976) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82974.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args82981 = [];
var len__25947__auto___82984 = arguments.length;
var i__25948__auto___82985 = (0);
while(true){
if((i__25948__auto___82985 < len__25947__auto___82984)){
args82981.push((arguments[i__25948__auto___82985]));

var G__82986 = (i__25948__auto___82985 + (1));
i__25948__auto___82985 = G__82986;
continue;
} else {
}
break;
}

var G__82983 = args82981.length;
switch (G__82983) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82981.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args82988 = [];
var len__25947__auto___83039 = arguments.length;
var i__25948__auto___83040 = (0);
while(true){
if((i__25948__auto___83040 < len__25947__auto___83039)){
args82988.push((arguments[i__25948__auto___83040]));

var G__83041 = (i__25948__auto___83040 + (1));
i__25948__auto___83040 = G__83041;
continue;
} else {
}
break;
}

var G__82990 = args82988.length;
switch (G__82990) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82988.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___83043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___83043,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___83043,out){
return (function (state_83014){
var state_val_83015 = (state_83014[(1)]);
if((state_val_83015 === (7))){
var inst_83009 = (state_83014[(2)]);
var state_83014__$1 = state_83014;
var statearr_83016_83044 = state_83014__$1;
(statearr_83016_83044[(2)] = inst_83009);

(statearr_83016_83044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (1))){
var inst_82991 = null;
var state_83014__$1 = (function (){var statearr_83017 = state_83014;
(statearr_83017[(7)] = inst_82991);

return statearr_83017;
})();
var statearr_83018_83045 = state_83014__$1;
(statearr_83018_83045[(2)] = null);

(statearr_83018_83045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (4))){
var inst_82994 = (state_83014[(8)]);
var inst_82994__$1 = (state_83014[(2)]);
var inst_82995 = (inst_82994__$1 == null);
var inst_82996 = cljs.core.not.call(null,inst_82995);
var state_83014__$1 = (function (){var statearr_83019 = state_83014;
(statearr_83019[(8)] = inst_82994__$1);

return statearr_83019;
})();
if(inst_82996){
var statearr_83020_83046 = state_83014__$1;
(statearr_83020_83046[(1)] = (5));

} else {
var statearr_83021_83047 = state_83014__$1;
(statearr_83021_83047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (6))){
var state_83014__$1 = state_83014;
var statearr_83022_83048 = state_83014__$1;
(statearr_83022_83048[(2)] = null);

(statearr_83022_83048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (3))){
var inst_83011 = (state_83014[(2)]);
var inst_83012 = cljs.core.async.close_BANG_.call(null,out);
var state_83014__$1 = (function (){var statearr_83023 = state_83014;
(statearr_83023[(9)] = inst_83011);

return statearr_83023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83014__$1,inst_83012);
} else {
if((state_val_83015 === (2))){
var state_83014__$1 = state_83014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83014__$1,(4),ch);
} else {
if((state_val_83015 === (11))){
var inst_82994 = (state_83014[(8)]);
var inst_83003 = (state_83014[(2)]);
var inst_82991 = inst_82994;
var state_83014__$1 = (function (){var statearr_83024 = state_83014;
(statearr_83024[(7)] = inst_82991);

(statearr_83024[(10)] = inst_83003);

return statearr_83024;
})();
var statearr_83025_83049 = state_83014__$1;
(statearr_83025_83049[(2)] = null);

(statearr_83025_83049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (9))){
var inst_82994 = (state_83014[(8)]);
var state_83014__$1 = state_83014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83014__$1,(11),out,inst_82994);
} else {
if((state_val_83015 === (5))){
var inst_82994 = (state_83014[(8)]);
var inst_82991 = (state_83014[(7)]);
var inst_82998 = cljs.core._EQ_.call(null,inst_82994,inst_82991);
var state_83014__$1 = state_83014;
if(inst_82998){
var statearr_83027_83050 = state_83014__$1;
(statearr_83027_83050[(1)] = (8));

} else {
var statearr_83028_83051 = state_83014__$1;
(statearr_83028_83051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (10))){
var inst_83006 = (state_83014[(2)]);
var state_83014__$1 = state_83014;
var statearr_83029_83052 = state_83014__$1;
(statearr_83029_83052[(2)] = inst_83006);

(statearr_83029_83052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83015 === (8))){
var inst_82991 = (state_83014[(7)]);
var tmp83026 = inst_82991;
var inst_82991__$1 = tmp83026;
var state_83014__$1 = (function (){var statearr_83030 = state_83014;
(statearr_83030[(7)] = inst_82991__$1);

return statearr_83030;
})();
var statearr_83031_83053 = state_83014__$1;
(statearr_83031_83053[(2)] = null);

(statearr_83031_83053[(1)] = (2));


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
});})(c__26902__auto___83043,out))
;
return ((function (switch__26881__auto__,c__26902__auto___83043,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_83035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83035[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_83035[(1)] = (1));

return statearr_83035;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_83014){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_83014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e83036){if((e83036 instanceof Object)){
var ex__26885__auto__ = e83036;
var statearr_83037_83054 = state_83014;
(statearr_83037_83054[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83055 = state_83014;
state_83014 = G__83055;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_83014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_83014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___83043,out))
})();
var state__26904__auto__ = (function (){var statearr_83038 = f__26903__auto__.call(null);
(statearr_83038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___83043);

return statearr_83038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___83043,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args83056 = [];
var len__25947__auto___83126 = arguments.length;
var i__25948__auto___83127 = (0);
while(true){
if((i__25948__auto___83127 < len__25947__auto___83126)){
args83056.push((arguments[i__25948__auto___83127]));

var G__83128 = (i__25948__auto___83127 + (1));
i__25948__auto___83127 = G__83128;
continue;
} else {
}
break;
}

var G__83058 = args83056.length;
switch (G__83058) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83056.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___83130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___83130,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___83130,out){
return (function (state_83096){
var state_val_83097 = (state_83096[(1)]);
if((state_val_83097 === (7))){
var inst_83092 = (state_83096[(2)]);
var state_83096__$1 = state_83096;
var statearr_83098_83131 = state_83096__$1;
(statearr_83098_83131[(2)] = inst_83092);

(statearr_83098_83131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (1))){
var inst_83059 = (new Array(n));
var inst_83060 = inst_83059;
var inst_83061 = (0);
var state_83096__$1 = (function (){var statearr_83099 = state_83096;
(statearr_83099[(7)] = inst_83061);

(statearr_83099[(8)] = inst_83060);

return statearr_83099;
})();
var statearr_83100_83132 = state_83096__$1;
(statearr_83100_83132[(2)] = null);

(statearr_83100_83132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (4))){
var inst_83064 = (state_83096[(9)]);
var inst_83064__$1 = (state_83096[(2)]);
var inst_83065 = (inst_83064__$1 == null);
var inst_83066 = cljs.core.not.call(null,inst_83065);
var state_83096__$1 = (function (){var statearr_83101 = state_83096;
(statearr_83101[(9)] = inst_83064__$1);

return statearr_83101;
})();
if(inst_83066){
var statearr_83102_83133 = state_83096__$1;
(statearr_83102_83133[(1)] = (5));

} else {
var statearr_83103_83134 = state_83096__$1;
(statearr_83103_83134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (15))){
var inst_83086 = (state_83096[(2)]);
var state_83096__$1 = state_83096;
var statearr_83104_83135 = state_83096__$1;
(statearr_83104_83135[(2)] = inst_83086);

(statearr_83104_83135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (13))){
var state_83096__$1 = state_83096;
var statearr_83105_83136 = state_83096__$1;
(statearr_83105_83136[(2)] = null);

(statearr_83105_83136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (6))){
var inst_83061 = (state_83096[(7)]);
var inst_83082 = (inst_83061 > (0));
var state_83096__$1 = state_83096;
if(cljs.core.truth_(inst_83082)){
var statearr_83106_83137 = state_83096__$1;
(statearr_83106_83137[(1)] = (12));

} else {
var statearr_83107_83138 = state_83096__$1;
(statearr_83107_83138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (3))){
var inst_83094 = (state_83096[(2)]);
var state_83096__$1 = state_83096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83096__$1,inst_83094);
} else {
if((state_val_83097 === (12))){
var inst_83060 = (state_83096[(8)]);
var inst_83084 = cljs.core.vec.call(null,inst_83060);
var state_83096__$1 = state_83096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83096__$1,(15),out,inst_83084);
} else {
if((state_val_83097 === (2))){
var state_83096__$1 = state_83096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83096__$1,(4),ch);
} else {
if((state_val_83097 === (11))){
var inst_83076 = (state_83096[(2)]);
var inst_83077 = (new Array(n));
var inst_83060 = inst_83077;
var inst_83061 = (0);
var state_83096__$1 = (function (){var statearr_83108 = state_83096;
(statearr_83108[(10)] = inst_83076);

(statearr_83108[(7)] = inst_83061);

(statearr_83108[(8)] = inst_83060);

return statearr_83108;
})();
var statearr_83109_83139 = state_83096__$1;
(statearr_83109_83139[(2)] = null);

(statearr_83109_83139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (9))){
var inst_83060 = (state_83096[(8)]);
var inst_83074 = cljs.core.vec.call(null,inst_83060);
var state_83096__$1 = state_83096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83096__$1,(11),out,inst_83074);
} else {
if((state_val_83097 === (5))){
var inst_83069 = (state_83096[(11)]);
var inst_83064 = (state_83096[(9)]);
var inst_83061 = (state_83096[(7)]);
var inst_83060 = (state_83096[(8)]);
var inst_83068 = (inst_83060[inst_83061] = inst_83064);
var inst_83069__$1 = (inst_83061 + (1));
var inst_83070 = (inst_83069__$1 < n);
var state_83096__$1 = (function (){var statearr_83110 = state_83096;
(statearr_83110[(11)] = inst_83069__$1);

(statearr_83110[(12)] = inst_83068);

return statearr_83110;
})();
if(cljs.core.truth_(inst_83070)){
var statearr_83111_83140 = state_83096__$1;
(statearr_83111_83140[(1)] = (8));

} else {
var statearr_83112_83141 = state_83096__$1;
(statearr_83112_83141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (14))){
var inst_83089 = (state_83096[(2)]);
var inst_83090 = cljs.core.async.close_BANG_.call(null,out);
var state_83096__$1 = (function (){var statearr_83114 = state_83096;
(statearr_83114[(13)] = inst_83089);

return statearr_83114;
})();
var statearr_83115_83142 = state_83096__$1;
(statearr_83115_83142[(2)] = inst_83090);

(statearr_83115_83142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (10))){
var inst_83080 = (state_83096[(2)]);
var state_83096__$1 = state_83096;
var statearr_83116_83143 = state_83096__$1;
(statearr_83116_83143[(2)] = inst_83080);

(statearr_83116_83143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83097 === (8))){
var inst_83069 = (state_83096[(11)]);
var inst_83060 = (state_83096[(8)]);
var tmp83113 = inst_83060;
var inst_83060__$1 = tmp83113;
var inst_83061 = inst_83069;
var state_83096__$1 = (function (){var statearr_83117 = state_83096;
(statearr_83117[(7)] = inst_83061);

(statearr_83117[(8)] = inst_83060__$1);

return statearr_83117;
})();
var statearr_83118_83144 = state_83096__$1;
(statearr_83118_83144[(2)] = null);

(statearr_83118_83144[(1)] = (2));


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
});})(c__26902__auto___83130,out))
;
return ((function (switch__26881__auto__,c__26902__auto___83130,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_83122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83122[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_83122[(1)] = (1));

return statearr_83122;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_83096){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_83096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e83123){if((e83123 instanceof Object)){
var ex__26885__auto__ = e83123;
var statearr_83124_83145 = state_83096;
(statearr_83124_83145[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83146 = state_83096;
state_83096 = G__83146;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_83096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_83096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___83130,out))
})();
var state__26904__auto__ = (function (){var statearr_83125 = f__26903__auto__.call(null);
(statearr_83125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___83130);

return statearr_83125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___83130,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args83147 = [];
var len__25947__auto___83221 = arguments.length;
var i__25948__auto___83222 = (0);
while(true){
if((i__25948__auto___83222 < len__25947__auto___83221)){
args83147.push((arguments[i__25948__auto___83222]));

var G__83223 = (i__25948__auto___83222 + (1));
i__25948__auto___83222 = G__83223;
continue;
} else {
}
break;
}

var G__83149 = args83147.length;
switch (G__83149) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83147.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26902__auto___83225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___83225,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___83225,out){
return (function (state_83191){
var state_val_83192 = (state_83191[(1)]);
if((state_val_83192 === (7))){
var inst_83187 = (state_83191[(2)]);
var state_83191__$1 = state_83191;
var statearr_83193_83226 = state_83191__$1;
(statearr_83193_83226[(2)] = inst_83187);

(statearr_83193_83226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (1))){
var inst_83150 = [];
var inst_83151 = inst_83150;
var inst_83152 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_83191__$1 = (function (){var statearr_83194 = state_83191;
(statearr_83194[(7)] = inst_83152);

(statearr_83194[(8)] = inst_83151);

return statearr_83194;
})();
var statearr_83195_83227 = state_83191__$1;
(statearr_83195_83227[(2)] = null);

(statearr_83195_83227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (4))){
var inst_83155 = (state_83191[(9)]);
var inst_83155__$1 = (state_83191[(2)]);
var inst_83156 = (inst_83155__$1 == null);
var inst_83157 = cljs.core.not.call(null,inst_83156);
var state_83191__$1 = (function (){var statearr_83196 = state_83191;
(statearr_83196[(9)] = inst_83155__$1);

return statearr_83196;
})();
if(inst_83157){
var statearr_83197_83228 = state_83191__$1;
(statearr_83197_83228[(1)] = (5));

} else {
var statearr_83198_83229 = state_83191__$1;
(statearr_83198_83229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (15))){
var inst_83181 = (state_83191[(2)]);
var state_83191__$1 = state_83191;
var statearr_83199_83230 = state_83191__$1;
(statearr_83199_83230[(2)] = inst_83181);

(statearr_83199_83230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (13))){
var state_83191__$1 = state_83191;
var statearr_83200_83231 = state_83191__$1;
(statearr_83200_83231[(2)] = null);

(statearr_83200_83231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (6))){
var inst_83151 = (state_83191[(8)]);
var inst_83176 = inst_83151.length;
var inst_83177 = (inst_83176 > (0));
var state_83191__$1 = state_83191;
if(cljs.core.truth_(inst_83177)){
var statearr_83201_83232 = state_83191__$1;
(statearr_83201_83232[(1)] = (12));

} else {
var statearr_83202_83233 = state_83191__$1;
(statearr_83202_83233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (3))){
var inst_83189 = (state_83191[(2)]);
var state_83191__$1 = state_83191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83191__$1,inst_83189);
} else {
if((state_val_83192 === (12))){
var inst_83151 = (state_83191[(8)]);
var inst_83179 = cljs.core.vec.call(null,inst_83151);
var state_83191__$1 = state_83191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83191__$1,(15),out,inst_83179);
} else {
if((state_val_83192 === (2))){
var state_83191__$1 = state_83191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83191__$1,(4),ch);
} else {
if((state_val_83192 === (11))){
var inst_83159 = (state_83191[(10)]);
var inst_83155 = (state_83191[(9)]);
var inst_83169 = (state_83191[(2)]);
var inst_83170 = [];
var inst_83171 = inst_83170.push(inst_83155);
var inst_83151 = inst_83170;
var inst_83152 = inst_83159;
var state_83191__$1 = (function (){var statearr_83203 = state_83191;
(statearr_83203[(7)] = inst_83152);

(statearr_83203[(11)] = inst_83169);

(statearr_83203[(12)] = inst_83171);

(statearr_83203[(8)] = inst_83151);

return statearr_83203;
})();
var statearr_83204_83234 = state_83191__$1;
(statearr_83204_83234[(2)] = null);

(statearr_83204_83234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (9))){
var inst_83151 = (state_83191[(8)]);
var inst_83167 = cljs.core.vec.call(null,inst_83151);
var state_83191__$1 = state_83191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83191__$1,(11),out,inst_83167);
} else {
if((state_val_83192 === (5))){
var inst_83152 = (state_83191[(7)]);
var inst_83159 = (state_83191[(10)]);
var inst_83155 = (state_83191[(9)]);
var inst_83159__$1 = f.call(null,inst_83155);
var inst_83160 = cljs.core._EQ_.call(null,inst_83159__$1,inst_83152);
var inst_83161 = cljs.core.keyword_identical_QMARK_.call(null,inst_83152,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_83162 = (inst_83160) || (inst_83161);
var state_83191__$1 = (function (){var statearr_83205 = state_83191;
(statearr_83205[(10)] = inst_83159__$1);

return statearr_83205;
})();
if(cljs.core.truth_(inst_83162)){
var statearr_83206_83235 = state_83191__$1;
(statearr_83206_83235[(1)] = (8));

} else {
var statearr_83207_83236 = state_83191__$1;
(statearr_83207_83236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (14))){
var inst_83184 = (state_83191[(2)]);
var inst_83185 = cljs.core.async.close_BANG_.call(null,out);
var state_83191__$1 = (function (){var statearr_83209 = state_83191;
(statearr_83209[(13)] = inst_83184);

return statearr_83209;
})();
var statearr_83210_83237 = state_83191__$1;
(statearr_83210_83237[(2)] = inst_83185);

(statearr_83210_83237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (10))){
var inst_83174 = (state_83191[(2)]);
var state_83191__$1 = state_83191;
var statearr_83211_83238 = state_83191__$1;
(statearr_83211_83238[(2)] = inst_83174);

(statearr_83211_83238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83192 === (8))){
var inst_83159 = (state_83191[(10)]);
var inst_83155 = (state_83191[(9)]);
var inst_83151 = (state_83191[(8)]);
var inst_83164 = inst_83151.push(inst_83155);
var tmp83208 = inst_83151;
var inst_83151__$1 = tmp83208;
var inst_83152 = inst_83159;
var state_83191__$1 = (function (){var statearr_83212 = state_83191;
(statearr_83212[(7)] = inst_83152);

(statearr_83212[(8)] = inst_83151__$1);

(statearr_83212[(14)] = inst_83164);

return statearr_83212;
})();
var statearr_83213_83239 = state_83191__$1;
(statearr_83213_83239[(2)] = null);

(statearr_83213_83239[(1)] = (2));


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
});})(c__26902__auto___83225,out))
;
return ((function (switch__26881__auto__,c__26902__auto___83225,out){
return (function() {
var cljs$core$async$state_machine__26882__auto__ = null;
var cljs$core$async$state_machine__26882__auto____0 = (function (){
var statearr_83217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83217[(0)] = cljs$core$async$state_machine__26882__auto__);

(statearr_83217[(1)] = (1));

return statearr_83217;
});
var cljs$core$async$state_machine__26882__auto____1 = (function (state_83191){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_83191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e83218){if((e83218 instanceof Object)){
var ex__26885__auto__ = e83218;
var statearr_83219_83240 = state_83191;
(statearr_83219_83240[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83241 = state_83191;
state_83191 = G__83241;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
cljs$core$async$state_machine__26882__auto__ = function(state_83191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26882__auto____1.call(this,state_83191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26882__auto____0;
cljs$core$async$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26882__auto____1;
return cljs$core$async$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___83225,out))
})();
var state__26904__auto__ = (function (){var statearr_83220 = f__26903__auto__.call(null);
(statearr_83220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___83225);

return statearr_83220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___83225,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1487768186148