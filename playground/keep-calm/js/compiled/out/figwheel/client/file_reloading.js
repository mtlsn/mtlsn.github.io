// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24872__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24872__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__85687_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__85687_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__85692 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__85693 = null;
var count__85694 = (0);
var i__85695 = (0);
while(true){
if((i__85695 < count__85694)){
var n = cljs.core._nth.call(null,chunk__85693,i__85695);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__85696 = seq__85692;
var G__85697 = chunk__85693;
var G__85698 = count__85694;
var G__85699 = (i__85695 + (1));
seq__85692 = G__85696;
chunk__85693 = G__85697;
count__85694 = G__85698;
i__85695 = G__85699;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__85692);
if(temp__4657__auto__){
var seq__85692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85692__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__85692__$1);
var G__85700 = cljs.core.chunk_rest.call(null,seq__85692__$1);
var G__85701 = c__25683__auto__;
var G__85702 = cljs.core.count.call(null,c__25683__auto__);
var G__85703 = (0);
seq__85692 = G__85700;
chunk__85693 = G__85701;
count__85694 = G__85702;
i__85695 = G__85703;
continue;
} else {
var n = cljs.core.first.call(null,seq__85692__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__85704 = cljs.core.next.call(null,seq__85692__$1);
var G__85705 = null;
var G__85706 = (0);
var G__85707 = (0);
seq__85692 = G__85704;
chunk__85693 = G__85705;
count__85694 = G__85706;
i__85695 = G__85707;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__85758_85769 = cljs.core.seq.call(null,deps);
var chunk__85759_85770 = null;
var count__85760_85771 = (0);
var i__85761_85772 = (0);
while(true){
if((i__85761_85772 < count__85760_85771)){
var dep_85773 = cljs.core._nth.call(null,chunk__85759_85770,i__85761_85772);
topo_sort_helper_STAR_.call(null,dep_85773,(depth + (1)),state);

var G__85774 = seq__85758_85769;
var G__85775 = chunk__85759_85770;
var G__85776 = count__85760_85771;
var G__85777 = (i__85761_85772 + (1));
seq__85758_85769 = G__85774;
chunk__85759_85770 = G__85775;
count__85760_85771 = G__85776;
i__85761_85772 = G__85777;
continue;
} else {
var temp__4657__auto___85778 = cljs.core.seq.call(null,seq__85758_85769);
if(temp__4657__auto___85778){
var seq__85758_85779__$1 = temp__4657__auto___85778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85758_85779__$1)){
var c__25683__auto___85780 = cljs.core.chunk_first.call(null,seq__85758_85779__$1);
var G__85781 = cljs.core.chunk_rest.call(null,seq__85758_85779__$1);
var G__85782 = c__25683__auto___85780;
var G__85783 = cljs.core.count.call(null,c__25683__auto___85780);
var G__85784 = (0);
seq__85758_85769 = G__85781;
chunk__85759_85770 = G__85782;
count__85760_85771 = G__85783;
i__85761_85772 = G__85784;
continue;
} else {
var dep_85785 = cljs.core.first.call(null,seq__85758_85779__$1);
topo_sort_helper_STAR_.call(null,dep_85785,(depth + (1)),state);

var G__85786 = cljs.core.next.call(null,seq__85758_85779__$1);
var G__85787 = null;
var G__85788 = (0);
var G__85789 = (0);
seq__85758_85769 = G__85786;
chunk__85759_85770 = G__85787;
count__85760_85771 = G__85788;
i__85761_85772 = G__85789;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__85762){
var vec__85766 = p__85762;
var seq__85767 = cljs.core.seq.call(null,vec__85766);
var first__85768 = cljs.core.first.call(null,seq__85767);
var seq__85767__$1 = cljs.core.next.call(null,seq__85767);
var x = first__85768;
var xs = seq__85767__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__85766,seq__85767,first__85768,seq__85767__$1,x,xs,get_deps__$1){
return (function (p1__85708_SHARP_){
return clojure.set.difference.call(null,p1__85708_SHARP_,x);
});})(vec__85766,seq__85767,first__85768,seq__85767__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__85802 = cljs.core.seq.call(null,provides);
var chunk__85803 = null;
var count__85804 = (0);
var i__85805 = (0);
while(true){
if((i__85805 < count__85804)){
var prov = cljs.core._nth.call(null,chunk__85803,i__85805);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__85806_85814 = cljs.core.seq.call(null,requires);
var chunk__85807_85815 = null;
var count__85808_85816 = (0);
var i__85809_85817 = (0);
while(true){
if((i__85809_85817 < count__85808_85816)){
var req_85818 = cljs.core._nth.call(null,chunk__85807_85815,i__85809_85817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_85818,prov);

var G__85819 = seq__85806_85814;
var G__85820 = chunk__85807_85815;
var G__85821 = count__85808_85816;
var G__85822 = (i__85809_85817 + (1));
seq__85806_85814 = G__85819;
chunk__85807_85815 = G__85820;
count__85808_85816 = G__85821;
i__85809_85817 = G__85822;
continue;
} else {
var temp__4657__auto___85823 = cljs.core.seq.call(null,seq__85806_85814);
if(temp__4657__auto___85823){
var seq__85806_85824__$1 = temp__4657__auto___85823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85806_85824__$1)){
var c__25683__auto___85825 = cljs.core.chunk_first.call(null,seq__85806_85824__$1);
var G__85826 = cljs.core.chunk_rest.call(null,seq__85806_85824__$1);
var G__85827 = c__25683__auto___85825;
var G__85828 = cljs.core.count.call(null,c__25683__auto___85825);
var G__85829 = (0);
seq__85806_85814 = G__85826;
chunk__85807_85815 = G__85827;
count__85808_85816 = G__85828;
i__85809_85817 = G__85829;
continue;
} else {
var req_85830 = cljs.core.first.call(null,seq__85806_85824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_85830,prov);

var G__85831 = cljs.core.next.call(null,seq__85806_85824__$1);
var G__85832 = null;
var G__85833 = (0);
var G__85834 = (0);
seq__85806_85814 = G__85831;
chunk__85807_85815 = G__85832;
count__85808_85816 = G__85833;
i__85809_85817 = G__85834;
continue;
}
} else {
}
}
break;
}

var G__85835 = seq__85802;
var G__85836 = chunk__85803;
var G__85837 = count__85804;
var G__85838 = (i__85805 + (1));
seq__85802 = G__85835;
chunk__85803 = G__85836;
count__85804 = G__85837;
i__85805 = G__85838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__85802);
if(temp__4657__auto__){
var seq__85802__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85802__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__85802__$1);
var G__85839 = cljs.core.chunk_rest.call(null,seq__85802__$1);
var G__85840 = c__25683__auto__;
var G__85841 = cljs.core.count.call(null,c__25683__auto__);
var G__85842 = (0);
seq__85802 = G__85839;
chunk__85803 = G__85840;
count__85804 = G__85841;
i__85805 = G__85842;
continue;
} else {
var prov = cljs.core.first.call(null,seq__85802__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__85810_85843 = cljs.core.seq.call(null,requires);
var chunk__85811_85844 = null;
var count__85812_85845 = (0);
var i__85813_85846 = (0);
while(true){
if((i__85813_85846 < count__85812_85845)){
var req_85847 = cljs.core._nth.call(null,chunk__85811_85844,i__85813_85846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_85847,prov);

var G__85848 = seq__85810_85843;
var G__85849 = chunk__85811_85844;
var G__85850 = count__85812_85845;
var G__85851 = (i__85813_85846 + (1));
seq__85810_85843 = G__85848;
chunk__85811_85844 = G__85849;
count__85812_85845 = G__85850;
i__85813_85846 = G__85851;
continue;
} else {
var temp__4657__auto___85852__$1 = cljs.core.seq.call(null,seq__85810_85843);
if(temp__4657__auto___85852__$1){
var seq__85810_85853__$1 = temp__4657__auto___85852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85810_85853__$1)){
var c__25683__auto___85854 = cljs.core.chunk_first.call(null,seq__85810_85853__$1);
var G__85855 = cljs.core.chunk_rest.call(null,seq__85810_85853__$1);
var G__85856 = c__25683__auto___85854;
var G__85857 = cljs.core.count.call(null,c__25683__auto___85854);
var G__85858 = (0);
seq__85810_85843 = G__85855;
chunk__85811_85844 = G__85856;
count__85812_85845 = G__85857;
i__85813_85846 = G__85858;
continue;
} else {
var req_85859 = cljs.core.first.call(null,seq__85810_85853__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_85859,prov);

var G__85860 = cljs.core.next.call(null,seq__85810_85853__$1);
var G__85861 = null;
var G__85862 = (0);
var G__85863 = (0);
seq__85810_85843 = G__85860;
chunk__85811_85844 = G__85861;
count__85812_85845 = G__85862;
i__85813_85846 = G__85863;
continue;
}
} else {
}
}
break;
}

var G__85864 = cljs.core.next.call(null,seq__85802__$1);
var G__85865 = null;
var G__85866 = (0);
var G__85867 = (0);
seq__85802 = G__85864;
chunk__85803 = G__85865;
count__85804 = G__85866;
i__85805 = G__85867;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__85872_85876 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__85873_85877 = null;
var count__85874_85878 = (0);
var i__85875_85879 = (0);
while(true){
if((i__85875_85879 < count__85874_85878)){
var ns_85880 = cljs.core._nth.call(null,chunk__85873_85877,i__85875_85879);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_85880);

var G__85881 = seq__85872_85876;
var G__85882 = chunk__85873_85877;
var G__85883 = count__85874_85878;
var G__85884 = (i__85875_85879 + (1));
seq__85872_85876 = G__85881;
chunk__85873_85877 = G__85882;
count__85874_85878 = G__85883;
i__85875_85879 = G__85884;
continue;
} else {
var temp__4657__auto___85885 = cljs.core.seq.call(null,seq__85872_85876);
if(temp__4657__auto___85885){
var seq__85872_85886__$1 = temp__4657__auto___85885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85872_85886__$1)){
var c__25683__auto___85887 = cljs.core.chunk_first.call(null,seq__85872_85886__$1);
var G__85888 = cljs.core.chunk_rest.call(null,seq__85872_85886__$1);
var G__85889 = c__25683__auto___85887;
var G__85890 = cljs.core.count.call(null,c__25683__auto___85887);
var G__85891 = (0);
seq__85872_85876 = G__85888;
chunk__85873_85877 = G__85889;
count__85874_85878 = G__85890;
i__85875_85879 = G__85891;
continue;
} else {
var ns_85892 = cljs.core.first.call(null,seq__85872_85886__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_85892);

var G__85893 = cljs.core.next.call(null,seq__85872_85886__$1);
var G__85894 = null;
var G__85895 = (0);
var G__85896 = (0);
seq__85872_85876 = G__85893;
chunk__85873_85877 = G__85894;
count__85874_85878 = G__85895;
i__85875_85879 = G__85896;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24872__auto__ = goog.require__;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__85897__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__85897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85898__i = 0, G__85898__a = new Array(arguments.length -  0);
while (G__85898__i < G__85898__a.length) {G__85898__a[G__85898__i] = arguments[G__85898__i + 0]; ++G__85898__i;}
  args = new cljs.core.IndexedSeq(G__85898__a,0);
} 
return G__85897__delegate.call(this,args);};
G__85897.cljs$lang$maxFixedArity = 0;
G__85897.cljs$lang$applyTo = (function (arglist__85899){
var args = cljs.core.seq(arglist__85899);
return G__85897__delegate(args);
});
G__85897.cljs$core$IFn$_invoke$arity$variadic = G__85897__delegate;
return G__85897;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__85900 = cljs.core._EQ_;
var expr__85901 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__85900.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__85901))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__85900,expr__85901){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__85900,expr__85901))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__85900,expr__85901){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e85903){if((e85903 instanceof Error)){
var e = e85903;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e85903;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__85900,expr__85901))
} else {
if(cljs.core.truth_(pred__85900.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__85901))){
return ((function (pred__85900,expr__85901){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__85900,expr__85901){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__85900,expr__85901))
);

return deferred.addErrback(((function (deferred,pred__85900,expr__85901){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__85900,expr__85901))
);
});
;})(pred__85900,expr__85901))
} else {
if(cljs.core.truth_(pred__85900.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__85901))){
return ((function (pred__85900,expr__85901){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e85904){if((e85904 instanceof Error)){
var e = e85904;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e85904;

}
}})());
});
;})(pred__85900,expr__85901))
} else {
return ((function (pred__85900,expr__85901){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__85900,expr__85901))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__85905,callback){
var map__85908 = p__85905;
var map__85908__$1 = ((((!((map__85908 == null)))?((((map__85908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85908):map__85908);
var file_msg = map__85908__$1;
var request_url = cljs.core.get.call(null,map__85908__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__85908,map__85908__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__85908,map__85908__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__){
return (function (state_85932){
var state_val_85933 = (state_85932[(1)]);
if((state_val_85933 === (7))){
var inst_85928 = (state_85932[(2)]);
var state_85932__$1 = state_85932;
var statearr_85934_85954 = state_85932__$1;
(statearr_85934_85954[(2)] = inst_85928);

(statearr_85934_85954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (1))){
var state_85932__$1 = state_85932;
var statearr_85935_85955 = state_85932__$1;
(statearr_85935_85955[(2)] = null);

(statearr_85935_85955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (4))){
var inst_85912 = (state_85932[(7)]);
var inst_85912__$1 = (state_85932[(2)]);
var state_85932__$1 = (function (){var statearr_85936 = state_85932;
(statearr_85936[(7)] = inst_85912__$1);

return statearr_85936;
})();
if(cljs.core.truth_(inst_85912__$1)){
var statearr_85937_85956 = state_85932__$1;
(statearr_85937_85956[(1)] = (5));

} else {
var statearr_85938_85957 = state_85932__$1;
(statearr_85938_85957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (6))){
var state_85932__$1 = state_85932;
var statearr_85939_85958 = state_85932__$1;
(statearr_85939_85958[(2)] = null);

(statearr_85939_85958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (3))){
var inst_85930 = (state_85932[(2)]);
var state_85932__$1 = state_85932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85932__$1,inst_85930);
} else {
if((state_val_85933 === (2))){
var state_85932__$1 = state_85932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85932__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_85933 === (11))){
var inst_85924 = (state_85932[(2)]);
var state_85932__$1 = (function (){var statearr_85940 = state_85932;
(statearr_85940[(8)] = inst_85924);

return statearr_85940;
})();
var statearr_85941_85959 = state_85932__$1;
(statearr_85941_85959[(2)] = null);

(statearr_85941_85959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (9))){
var inst_85918 = (state_85932[(9)]);
var inst_85916 = (state_85932[(10)]);
var inst_85920 = inst_85918.call(null,inst_85916);
var state_85932__$1 = state_85932;
var statearr_85942_85960 = state_85932__$1;
(statearr_85942_85960[(2)] = inst_85920);

(statearr_85942_85960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (5))){
var inst_85912 = (state_85932[(7)]);
var inst_85914 = figwheel.client.file_reloading.blocking_load.call(null,inst_85912);
var state_85932__$1 = state_85932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85932__$1,(8),inst_85914);
} else {
if((state_val_85933 === (10))){
var inst_85916 = (state_85932[(10)]);
var inst_85922 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_85916);
var state_85932__$1 = state_85932;
var statearr_85943_85961 = state_85932__$1;
(statearr_85943_85961[(2)] = inst_85922);

(statearr_85943_85961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85933 === (8))){
var inst_85918 = (state_85932[(9)]);
var inst_85912 = (state_85932[(7)]);
var inst_85916 = (state_85932[(2)]);
var inst_85917 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_85918__$1 = cljs.core.get.call(null,inst_85917,inst_85912);
var state_85932__$1 = (function (){var statearr_85944 = state_85932;
(statearr_85944[(9)] = inst_85918__$1);

(statearr_85944[(10)] = inst_85916);

return statearr_85944;
})();
if(cljs.core.truth_(inst_85918__$1)){
var statearr_85945_85962 = state_85932__$1;
(statearr_85945_85962[(1)] = (9));

} else {
var statearr_85946_85963 = state_85932__$1;
(statearr_85946_85963[(1)] = (10));

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
});})(c__26902__auto__))
;
return ((function (switch__26881__auto__,c__26902__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26882__auto__ = null;
var figwheel$client$file_reloading$state_machine__26882__auto____0 = (function (){
var statearr_85950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_85950[(0)] = figwheel$client$file_reloading$state_machine__26882__auto__);

(statearr_85950[(1)] = (1));

return statearr_85950;
});
var figwheel$client$file_reloading$state_machine__26882__auto____1 = (function (state_85932){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_85932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e85951){if((e85951 instanceof Object)){
var ex__26885__auto__ = e85951;
var statearr_85952_85964 = state_85932;
(statearr_85952_85964[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85965 = state_85932;
state_85932 = G__85965;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26882__auto__ = function(state_85932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26882__auto____1.call(this,state_85932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26882__auto____0;
figwheel$client$file_reloading$state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26882__auto____1;
return figwheel$client$file_reloading$state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__))
})();
var state__26904__auto__ = (function (){var statearr_85953 = f__26903__auto__.call(null);
(statearr_85953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_85953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__))
);

return c__26902__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__85966,callback){
var map__85969 = p__85966;
var map__85969__$1 = ((((!((map__85969 == null)))?((((map__85969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85969):map__85969);
var file_msg = map__85969__$1;
var namespace = cljs.core.get.call(null,map__85969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__85969,map__85969__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__85969,map__85969__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__85971){
var map__85974 = p__85971;
var map__85974__$1 = ((((!((map__85974 == null)))?((((map__85974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85974):map__85974);
var file_msg = map__85974__$1;
var namespace = cljs.core.get.call(null,map__85974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__85976){
var map__85979 = p__85976;
var map__85979__$1 = ((((!((map__85979 == null)))?((((map__85979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85979):map__85979);
var file_msg = map__85979__$1;
var namespace = cljs.core.get.call(null,map__85979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24860__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24860__auto__){
var or__24872__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24860__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__85981,callback){
var map__85984 = p__85981;
var map__85984__$1 = ((((!((map__85984 == null)))?((((map__85984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85984):map__85984);
var file_msg = map__85984__$1;
var request_url = cljs.core.get.call(null,map__85984__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__85984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26902__auto___86088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto___86088,out){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto___86088,out){
return (function (state_86070){
var state_val_86071 = (state_86070[(1)]);
if((state_val_86071 === (1))){
var inst_86044 = cljs.core.seq.call(null,files);
var inst_86045 = cljs.core.first.call(null,inst_86044);
var inst_86046 = cljs.core.next.call(null,inst_86044);
var inst_86047 = files;
var state_86070__$1 = (function (){var statearr_86072 = state_86070;
(statearr_86072[(7)] = inst_86046);

(statearr_86072[(8)] = inst_86047);

(statearr_86072[(9)] = inst_86045);

return statearr_86072;
})();
var statearr_86073_86089 = state_86070__$1;
(statearr_86073_86089[(2)] = null);

(statearr_86073_86089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86071 === (2))){
var inst_86047 = (state_86070[(8)]);
var inst_86053 = (state_86070[(10)]);
var inst_86052 = cljs.core.seq.call(null,inst_86047);
var inst_86053__$1 = cljs.core.first.call(null,inst_86052);
var inst_86054 = cljs.core.next.call(null,inst_86052);
var inst_86055 = (inst_86053__$1 == null);
var inst_86056 = cljs.core.not.call(null,inst_86055);
var state_86070__$1 = (function (){var statearr_86074 = state_86070;
(statearr_86074[(11)] = inst_86054);

(statearr_86074[(10)] = inst_86053__$1);

return statearr_86074;
})();
if(inst_86056){
var statearr_86075_86090 = state_86070__$1;
(statearr_86075_86090[(1)] = (4));

} else {
var statearr_86076_86091 = state_86070__$1;
(statearr_86076_86091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86071 === (3))){
var inst_86068 = (state_86070[(2)]);
var state_86070__$1 = state_86070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86070__$1,inst_86068);
} else {
if((state_val_86071 === (4))){
var inst_86053 = (state_86070[(10)]);
var inst_86058 = figwheel.client.file_reloading.reload_js_file.call(null,inst_86053);
var state_86070__$1 = state_86070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86070__$1,(7),inst_86058);
} else {
if((state_val_86071 === (5))){
var inst_86064 = cljs.core.async.close_BANG_.call(null,out);
var state_86070__$1 = state_86070;
var statearr_86077_86092 = state_86070__$1;
(statearr_86077_86092[(2)] = inst_86064);

(statearr_86077_86092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86071 === (6))){
var inst_86066 = (state_86070[(2)]);
var state_86070__$1 = state_86070;
var statearr_86078_86093 = state_86070__$1;
(statearr_86078_86093[(2)] = inst_86066);

(statearr_86078_86093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86071 === (7))){
var inst_86054 = (state_86070[(11)]);
var inst_86060 = (state_86070[(2)]);
var inst_86061 = cljs.core.async.put_BANG_.call(null,out,inst_86060);
var inst_86047 = inst_86054;
var state_86070__$1 = (function (){var statearr_86079 = state_86070;
(statearr_86079[(8)] = inst_86047);

(statearr_86079[(12)] = inst_86061);

return statearr_86079;
})();
var statearr_86080_86094 = state_86070__$1;
(statearr_86080_86094[(2)] = null);

(statearr_86080_86094[(1)] = (2));


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
});})(c__26902__auto___86088,out))
;
return ((function (switch__26881__auto__,c__26902__auto___86088,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____0 = (function (){
var statearr_86084 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86084[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__);

(statearr_86084[(1)] = (1));

return statearr_86084;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____1 = (function (state_86070){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_86070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e86085){if((e86085 instanceof Object)){
var ex__26885__auto__ = e86085;
var statearr_86086_86095 = state_86070;
(statearr_86086_86095[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86096 = state_86070;
state_86070 = G__86096;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__ = function(state_86070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____1.call(this,state_86070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto___86088,out))
})();
var state__26904__auto__ = (function (){var statearr_86087 = f__26903__auto__.call(null);
(statearr_86087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto___86088);

return statearr_86087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto___86088,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__86097,opts){
var map__86101 = p__86097;
var map__86101__$1 = ((((!((map__86101 == null)))?((((map__86101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86101):map__86101);
var eval_body__$1 = cljs.core.get.call(null,map__86101__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__86101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24860__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24860__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24860__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e86103){var e = e86103;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__86104_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__86104_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__86113){
var vec__86114 = p__86113;
var k = cljs.core.nth.call(null,vec__86114,(0),null);
var v = cljs.core.nth.call(null,vec__86114,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__86117){
var vec__86118 = p__86117;
var k = cljs.core.nth.call(null,vec__86118,(0),null);
var v = cljs.core.nth.call(null,vec__86118,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__86124,p__86125){
var map__86372 = p__86124;
var map__86372__$1 = ((((!((map__86372 == null)))?((((map__86372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86372):map__86372);
var opts = map__86372__$1;
var before_jsload = cljs.core.get.call(null,map__86372__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__86372__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__86372__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__86373 = p__86125;
var map__86373__$1 = ((((!((map__86373 == null)))?((((map__86373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86373):map__86373);
var msg = map__86373__$1;
var files = cljs.core.get.call(null,map__86373__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__86373__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__86373__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26903__auto__ = (function (){var switch__26881__auto__ = ((function (c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_86526){
var state_val_86527 = (state_86526[(1)]);
if((state_val_86527 === (7))){
var inst_86390 = (state_86526[(7)]);
var inst_86389 = (state_86526[(8)]);
var inst_86388 = (state_86526[(9)]);
var inst_86387 = (state_86526[(10)]);
var inst_86395 = cljs.core._nth.call(null,inst_86388,inst_86390);
var inst_86396 = figwheel.client.file_reloading.eval_body.call(null,inst_86395,opts);
var inst_86397 = (inst_86390 + (1));
var tmp86528 = inst_86389;
var tmp86529 = inst_86388;
var tmp86530 = inst_86387;
var inst_86387__$1 = tmp86530;
var inst_86388__$1 = tmp86529;
var inst_86389__$1 = tmp86528;
var inst_86390__$1 = inst_86397;
var state_86526__$1 = (function (){var statearr_86531 = state_86526;
(statearr_86531[(7)] = inst_86390__$1);

(statearr_86531[(8)] = inst_86389__$1);

(statearr_86531[(9)] = inst_86388__$1);

(statearr_86531[(10)] = inst_86387__$1);

(statearr_86531[(11)] = inst_86396);

return statearr_86531;
})();
var statearr_86532_86618 = state_86526__$1;
(statearr_86532_86618[(2)] = null);

(statearr_86532_86618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (20))){
var inst_86430 = (state_86526[(12)]);
var inst_86438 = figwheel.client.file_reloading.sort_files.call(null,inst_86430);
var state_86526__$1 = state_86526;
var statearr_86533_86619 = state_86526__$1;
(statearr_86533_86619[(2)] = inst_86438);

(statearr_86533_86619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (27))){
var state_86526__$1 = state_86526;
var statearr_86534_86620 = state_86526__$1;
(statearr_86534_86620[(2)] = null);

(statearr_86534_86620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (1))){
var inst_86379 = (state_86526[(13)]);
var inst_86376 = before_jsload.call(null,files);
var inst_86377 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_86378 = (function (){return ((function (inst_86379,inst_86376,inst_86377,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86121_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__86121_SHARP_);
});
;})(inst_86379,inst_86376,inst_86377,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86379__$1 = cljs.core.filter.call(null,inst_86378,files);
var inst_86380 = cljs.core.not_empty.call(null,inst_86379__$1);
var state_86526__$1 = (function (){var statearr_86535 = state_86526;
(statearr_86535[(14)] = inst_86377);

(statearr_86535[(13)] = inst_86379__$1);

(statearr_86535[(15)] = inst_86376);

return statearr_86535;
})();
if(cljs.core.truth_(inst_86380)){
var statearr_86536_86621 = state_86526__$1;
(statearr_86536_86621[(1)] = (2));

} else {
var statearr_86537_86622 = state_86526__$1;
(statearr_86537_86622[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (24))){
var state_86526__$1 = state_86526;
var statearr_86538_86623 = state_86526__$1;
(statearr_86538_86623[(2)] = null);

(statearr_86538_86623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (39))){
var inst_86480 = (state_86526[(16)]);
var state_86526__$1 = state_86526;
var statearr_86539_86624 = state_86526__$1;
(statearr_86539_86624[(2)] = inst_86480);

(statearr_86539_86624[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (46))){
var inst_86521 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86540_86625 = state_86526__$1;
(statearr_86540_86625[(2)] = inst_86521);

(statearr_86540_86625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (4))){
var inst_86424 = (state_86526[(2)]);
var inst_86425 = cljs.core.List.EMPTY;
var inst_86426 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_86425);
var inst_86427 = (function (){return ((function (inst_86424,inst_86425,inst_86426,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86122_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__86122_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__86122_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__86122_SHARP_)));
} else {
return and__24860__auto__;
}
});
;})(inst_86424,inst_86425,inst_86426,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86428 = cljs.core.filter.call(null,inst_86427,files);
var inst_86429 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_86430 = cljs.core.concat.call(null,inst_86428,inst_86429);
var state_86526__$1 = (function (){var statearr_86541 = state_86526;
(statearr_86541[(17)] = inst_86424);

(statearr_86541[(12)] = inst_86430);

(statearr_86541[(18)] = inst_86426);

return statearr_86541;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_86542_86626 = state_86526__$1;
(statearr_86542_86626[(1)] = (16));

} else {
var statearr_86543_86627 = state_86526__$1;
(statearr_86543_86627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (15))){
var inst_86414 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86544_86628 = state_86526__$1;
(statearr_86544_86628[(2)] = inst_86414);

(statearr_86544_86628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (21))){
var inst_86440 = (state_86526[(19)]);
var inst_86440__$1 = (state_86526[(2)]);
var inst_86441 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_86440__$1);
var state_86526__$1 = (function (){var statearr_86545 = state_86526;
(statearr_86545[(19)] = inst_86440__$1);

return statearr_86545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86526__$1,(22),inst_86441);
} else {
if((state_val_86527 === (31))){
var inst_86524 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86526__$1,inst_86524);
} else {
if((state_val_86527 === (32))){
var inst_86480 = (state_86526[(16)]);
var inst_86485 = inst_86480.cljs$lang$protocol_mask$partition0$;
var inst_86486 = (inst_86485 & (64));
var inst_86487 = inst_86480.cljs$core$ISeq$;
var inst_86488 = (inst_86486) || (inst_86487);
var state_86526__$1 = state_86526;
if(cljs.core.truth_(inst_86488)){
var statearr_86546_86629 = state_86526__$1;
(statearr_86546_86629[(1)] = (35));

} else {
var statearr_86547_86630 = state_86526__$1;
(statearr_86547_86630[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (40))){
var inst_86501 = (state_86526[(20)]);
var inst_86500 = (state_86526[(2)]);
var inst_86501__$1 = cljs.core.get.call(null,inst_86500,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_86502 = cljs.core.get.call(null,inst_86500,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_86503 = cljs.core.not_empty.call(null,inst_86501__$1);
var state_86526__$1 = (function (){var statearr_86548 = state_86526;
(statearr_86548[(20)] = inst_86501__$1);

(statearr_86548[(21)] = inst_86502);

return statearr_86548;
})();
if(cljs.core.truth_(inst_86503)){
var statearr_86549_86631 = state_86526__$1;
(statearr_86549_86631[(1)] = (41));

} else {
var statearr_86550_86632 = state_86526__$1;
(statearr_86550_86632[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (33))){
var state_86526__$1 = state_86526;
var statearr_86551_86633 = state_86526__$1;
(statearr_86551_86633[(2)] = false);

(statearr_86551_86633[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (13))){
var inst_86400 = (state_86526[(22)]);
var inst_86404 = cljs.core.chunk_first.call(null,inst_86400);
var inst_86405 = cljs.core.chunk_rest.call(null,inst_86400);
var inst_86406 = cljs.core.count.call(null,inst_86404);
var inst_86387 = inst_86405;
var inst_86388 = inst_86404;
var inst_86389 = inst_86406;
var inst_86390 = (0);
var state_86526__$1 = (function (){var statearr_86552 = state_86526;
(statearr_86552[(7)] = inst_86390);

(statearr_86552[(8)] = inst_86389);

(statearr_86552[(9)] = inst_86388);

(statearr_86552[(10)] = inst_86387);

return statearr_86552;
})();
var statearr_86553_86634 = state_86526__$1;
(statearr_86553_86634[(2)] = null);

(statearr_86553_86634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (22))){
var inst_86443 = (state_86526[(23)]);
var inst_86448 = (state_86526[(24)]);
var inst_86440 = (state_86526[(19)]);
var inst_86444 = (state_86526[(25)]);
var inst_86443__$1 = (state_86526[(2)]);
var inst_86444__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_86443__$1);
var inst_86445 = (function (){var all_files = inst_86440;
var res_SINGLEQUOTE_ = inst_86443__$1;
var res = inst_86444__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_86443,inst_86448,inst_86440,inst_86444,inst_86443__$1,inst_86444__$1,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86123_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__86123_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_86443,inst_86448,inst_86440,inst_86444,inst_86443__$1,inst_86444__$1,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86446 = cljs.core.filter.call(null,inst_86445,inst_86443__$1);
var inst_86447 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_86448__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_86447);
var inst_86449 = cljs.core.not_empty.call(null,inst_86448__$1);
var state_86526__$1 = (function (){var statearr_86554 = state_86526;
(statearr_86554[(23)] = inst_86443__$1);

(statearr_86554[(24)] = inst_86448__$1);

(statearr_86554[(26)] = inst_86446);

(statearr_86554[(25)] = inst_86444__$1);

return statearr_86554;
})();
if(cljs.core.truth_(inst_86449)){
var statearr_86555_86635 = state_86526__$1;
(statearr_86555_86635[(1)] = (23));

} else {
var statearr_86556_86636 = state_86526__$1;
(statearr_86556_86636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (36))){
var state_86526__$1 = state_86526;
var statearr_86557_86637 = state_86526__$1;
(statearr_86557_86637[(2)] = false);

(statearr_86557_86637[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (41))){
var inst_86501 = (state_86526[(20)]);
var inst_86505 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_86506 = cljs.core.map.call(null,inst_86505,inst_86501);
var inst_86507 = cljs.core.pr_str.call(null,inst_86506);
var inst_86508 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_86507)].join('');
var inst_86509 = figwheel.client.utils.log.call(null,inst_86508);
var state_86526__$1 = state_86526;
var statearr_86558_86638 = state_86526__$1;
(statearr_86558_86638[(2)] = inst_86509);

(statearr_86558_86638[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (43))){
var inst_86502 = (state_86526[(21)]);
var inst_86512 = (state_86526[(2)]);
var inst_86513 = cljs.core.not_empty.call(null,inst_86502);
var state_86526__$1 = (function (){var statearr_86559 = state_86526;
(statearr_86559[(27)] = inst_86512);

return statearr_86559;
})();
if(cljs.core.truth_(inst_86513)){
var statearr_86560_86639 = state_86526__$1;
(statearr_86560_86639[(1)] = (44));

} else {
var statearr_86561_86640 = state_86526__$1;
(statearr_86561_86640[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (29))){
var inst_86443 = (state_86526[(23)]);
var inst_86480 = (state_86526[(16)]);
var inst_86448 = (state_86526[(24)]);
var inst_86440 = (state_86526[(19)]);
var inst_86446 = (state_86526[(26)]);
var inst_86444 = (state_86526[(25)]);
var inst_86476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_86479 = (function (){var all_files = inst_86440;
var res_SINGLEQUOTE_ = inst_86443;
var res = inst_86444;
var files_not_loaded = inst_86446;
var dependencies_that_loaded = inst_86448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86480,inst_86448,inst_86440,inst_86446,inst_86444,inst_86476,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86478){
var map__86562 = p__86478;
var map__86562__$1 = ((((!((map__86562 == null)))?((((map__86562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86562):map__86562);
var namespace = cljs.core.get.call(null,map__86562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86480,inst_86448,inst_86440,inst_86446,inst_86444,inst_86476,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86480__$1 = cljs.core.group_by.call(null,inst_86479,inst_86446);
var inst_86482 = (inst_86480__$1 == null);
var inst_86483 = cljs.core.not.call(null,inst_86482);
var state_86526__$1 = (function (){var statearr_86564 = state_86526;
(statearr_86564[(16)] = inst_86480__$1);

(statearr_86564[(28)] = inst_86476);

return statearr_86564;
})();
if(inst_86483){
var statearr_86565_86641 = state_86526__$1;
(statearr_86565_86641[(1)] = (32));

} else {
var statearr_86566_86642 = state_86526__$1;
(statearr_86566_86642[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (44))){
var inst_86502 = (state_86526[(21)]);
var inst_86515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_86502);
var inst_86516 = cljs.core.pr_str.call(null,inst_86515);
var inst_86517 = [cljs.core.str("not required: "),cljs.core.str(inst_86516)].join('');
var inst_86518 = figwheel.client.utils.log.call(null,inst_86517);
var state_86526__$1 = state_86526;
var statearr_86567_86643 = state_86526__$1;
(statearr_86567_86643[(2)] = inst_86518);

(statearr_86567_86643[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (6))){
var inst_86421 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86568_86644 = state_86526__$1;
(statearr_86568_86644[(2)] = inst_86421);

(statearr_86568_86644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (28))){
var inst_86446 = (state_86526[(26)]);
var inst_86473 = (state_86526[(2)]);
var inst_86474 = cljs.core.not_empty.call(null,inst_86446);
var state_86526__$1 = (function (){var statearr_86569 = state_86526;
(statearr_86569[(29)] = inst_86473);

return statearr_86569;
})();
if(cljs.core.truth_(inst_86474)){
var statearr_86570_86645 = state_86526__$1;
(statearr_86570_86645[(1)] = (29));

} else {
var statearr_86571_86646 = state_86526__$1;
(statearr_86571_86646[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (25))){
var inst_86444 = (state_86526[(25)]);
var inst_86460 = (state_86526[(2)]);
var inst_86461 = cljs.core.not_empty.call(null,inst_86444);
var state_86526__$1 = (function (){var statearr_86572 = state_86526;
(statearr_86572[(30)] = inst_86460);

return statearr_86572;
})();
if(cljs.core.truth_(inst_86461)){
var statearr_86573_86647 = state_86526__$1;
(statearr_86573_86647[(1)] = (26));

} else {
var statearr_86574_86648 = state_86526__$1;
(statearr_86574_86648[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (34))){
var inst_86495 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
if(cljs.core.truth_(inst_86495)){
var statearr_86575_86649 = state_86526__$1;
(statearr_86575_86649[(1)] = (38));

} else {
var statearr_86576_86650 = state_86526__$1;
(statearr_86576_86650[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (17))){
var state_86526__$1 = state_86526;
var statearr_86577_86651 = state_86526__$1;
(statearr_86577_86651[(2)] = recompile_dependents);

(statearr_86577_86651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (3))){
var state_86526__$1 = state_86526;
var statearr_86578_86652 = state_86526__$1;
(statearr_86578_86652[(2)] = null);

(statearr_86578_86652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (12))){
var inst_86417 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86579_86653 = state_86526__$1;
(statearr_86579_86653[(2)] = inst_86417);

(statearr_86579_86653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (2))){
var inst_86379 = (state_86526[(13)]);
var inst_86386 = cljs.core.seq.call(null,inst_86379);
var inst_86387 = inst_86386;
var inst_86388 = null;
var inst_86389 = (0);
var inst_86390 = (0);
var state_86526__$1 = (function (){var statearr_86580 = state_86526;
(statearr_86580[(7)] = inst_86390);

(statearr_86580[(8)] = inst_86389);

(statearr_86580[(9)] = inst_86388);

(statearr_86580[(10)] = inst_86387);

return statearr_86580;
})();
var statearr_86581_86654 = state_86526__$1;
(statearr_86581_86654[(2)] = null);

(statearr_86581_86654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (23))){
var inst_86443 = (state_86526[(23)]);
var inst_86448 = (state_86526[(24)]);
var inst_86440 = (state_86526[(19)]);
var inst_86446 = (state_86526[(26)]);
var inst_86444 = (state_86526[(25)]);
var inst_86451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_86453 = (function (){var all_files = inst_86440;
var res_SINGLEQUOTE_ = inst_86443;
var res = inst_86444;
var files_not_loaded = inst_86446;
var dependencies_that_loaded = inst_86448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86451,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86452){
var map__86582 = p__86452;
var map__86582__$1 = ((((!((map__86582 == null)))?((((map__86582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86582):map__86582);
var request_url = cljs.core.get.call(null,map__86582__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86451,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86454 = cljs.core.reverse.call(null,inst_86448);
var inst_86455 = cljs.core.map.call(null,inst_86453,inst_86454);
var inst_86456 = cljs.core.pr_str.call(null,inst_86455);
var inst_86457 = figwheel.client.utils.log.call(null,inst_86456);
var state_86526__$1 = (function (){var statearr_86584 = state_86526;
(statearr_86584[(31)] = inst_86451);

return statearr_86584;
})();
var statearr_86585_86655 = state_86526__$1;
(statearr_86585_86655[(2)] = inst_86457);

(statearr_86585_86655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (35))){
var state_86526__$1 = state_86526;
var statearr_86586_86656 = state_86526__$1;
(statearr_86586_86656[(2)] = true);

(statearr_86586_86656[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (19))){
var inst_86430 = (state_86526[(12)]);
var inst_86436 = figwheel.client.file_reloading.expand_files.call(null,inst_86430);
var state_86526__$1 = state_86526;
var statearr_86587_86657 = state_86526__$1;
(statearr_86587_86657[(2)] = inst_86436);

(statearr_86587_86657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (11))){
var state_86526__$1 = state_86526;
var statearr_86588_86658 = state_86526__$1;
(statearr_86588_86658[(2)] = null);

(statearr_86588_86658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (9))){
var inst_86419 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86589_86659 = state_86526__$1;
(statearr_86589_86659[(2)] = inst_86419);

(statearr_86589_86659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (5))){
var inst_86390 = (state_86526[(7)]);
var inst_86389 = (state_86526[(8)]);
var inst_86392 = (inst_86390 < inst_86389);
var inst_86393 = inst_86392;
var state_86526__$1 = state_86526;
if(cljs.core.truth_(inst_86393)){
var statearr_86590_86660 = state_86526__$1;
(statearr_86590_86660[(1)] = (7));

} else {
var statearr_86591_86661 = state_86526__$1;
(statearr_86591_86661[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (14))){
var inst_86400 = (state_86526[(22)]);
var inst_86409 = cljs.core.first.call(null,inst_86400);
var inst_86410 = figwheel.client.file_reloading.eval_body.call(null,inst_86409,opts);
var inst_86411 = cljs.core.next.call(null,inst_86400);
var inst_86387 = inst_86411;
var inst_86388 = null;
var inst_86389 = (0);
var inst_86390 = (0);
var state_86526__$1 = (function (){var statearr_86592 = state_86526;
(statearr_86592[(7)] = inst_86390);

(statearr_86592[(32)] = inst_86410);

(statearr_86592[(8)] = inst_86389);

(statearr_86592[(9)] = inst_86388);

(statearr_86592[(10)] = inst_86387);

return statearr_86592;
})();
var statearr_86593_86662 = state_86526__$1;
(statearr_86593_86662[(2)] = null);

(statearr_86593_86662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (45))){
var state_86526__$1 = state_86526;
var statearr_86594_86663 = state_86526__$1;
(statearr_86594_86663[(2)] = null);

(statearr_86594_86663[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (26))){
var inst_86443 = (state_86526[(23)]);
var inst_86448 = (state_86526[(24)]);
var inst_86440 = (state_86526[(19)]);
var inst_86446 = (state_86526[(26)]);
var inst_86444 = (state_86526[(25)]);
var inst_86463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_86465 = (function (){var all_files = inst_86440;
var res_SINGLEQUOTE_ = inst_86443;
var res = inst_86444;
var files_not_loaded = inst_86446;
var dependencies_that_loaded = inst_86448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86463,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86464){
var map__86595 = p__86464;
var map__86595__$1 = ((((!((map__86595 == null)))?((((map__86595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86595):map__86595);
var namespace = cljs.core.get.call(null,map__86595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__86595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86463,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86466 = cljs.core.map.call(null,inst_86465,inst_86444);
var inst_86467 = cljs.core.pr_str.call(null,inst_86466);
var inst_86468 = figwheel.client.utils.log.call(null,inst_86467);
var inst_86469 = (function (){var all_files = inst_86440;
var res_SINGLEQUOTE_ = inst_86443;
var res = inst_86444;
var files_not_loaded = inst_86446;
var dependencies_that_loaded = inst_86448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86463,inst_86465,inst_86466,inst_86467,inst_86468,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86443,inst_86448,inst_86440,inst_86446,inst_86444,inst_86463,inst_86465,inst_86466,inst_86467,inst_86468,state_val_86527,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86470 = setTimeout(inst_86469,(10));
var state_86526__$1 = (function (){var statearr_86597 = state_86526;
(statearr_86597[(33)] = inst_86468);

(statearr_86597[(34)] = inst_86463);

return statearr_86597;
})();
var statearr_86598_86664 = state_86526__$1;
(statearr_86598_86664[(2)] = inst_86470);

(statearr_86598_86664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (16))){
var state_86526__$1 = state_86526;
var statearr_86599_86665 = state_86526__$1;
(statearr_86599_86665[(2)] = reload_dependents);

(statearr_86599_86665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (38))){
var inst_86480 = (state_86526[(16)]);
var inst_86497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86480);
var state_86526__$1 = state_86526;
var statearr_86600_86666 = state_86526__$1;
(statearr_86600_86666[(2)] = inst_86497);

(statearr_86600_86666[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (30))){
var state_86526__$1 = state_86526;
var statearr_86601_86667 = state_86526__$1;
(statearr_86601_86667[(2)] = null);

(statearr_86601_86667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (10))){
var inst_86400 = (state_86526[(22)]);
var inst_86402 = cljs.core.chunked_seq_QMARK_.call(null,inst_86400);
var state_86526__$1 = state_86526;
if(inst_86402){
var statearr_86602_86668 = state_86526__$1;
(statearr_86602_86668[(1)] = (13));

} else {
var statearr_86603_86669 = state_86526__$1;
(statearr_86603_86669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (18))){
var inst_86434 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
if(cljs.core.truth_(inst_86434)){
var statearr_86604_86670 = state_86526__$1;
(statearr_86604_86670[(1)] = (19));

} else {
var statearr_86605_86671 = state_86526__$1;
(statearr_86605_86671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (42))){
var state_86526__$1 = state_86526;
var statearr_86606_86672 = state_86526__$1;
(statearr_86606_86672[(2)] = null);

(statearr_86606_86672[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (37))){
var inst_86492 = (state_86526[(2)]);
var state_86526__$1 = state_86526;
var statearr_86607_86673 = state_86526__$1;
(statearr_86607_86673[(2)] = inst_86492);

(statearr_86607_86673[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86527 === (8))){
var inst_86387 = (state_86526[(10)]);
var inst_86400 = (state_86526[(22)]);
var inst_86400__$1 = cljs.core.seq.call(null,inst_86387);
var state_86526__$1 = (function (){var statearr_86608 = state_86526;
(statearr_86608[(22)] = inst_86400__$1);

return statearr_86608;
})();
if(inst_86400__$1){
var statearr_86609_86674 = state_86526__$1;
(statearr_86609_86674[(1)] = (10));

} else {
var statearr_86610_86675 = state_86526__$1;
(statearr_86610_86675[(1)] = (11));

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
}
});})(c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26881__auto__,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____0 = (function (){
var statearr_86614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86614[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__);

(statearr_86614[(1)] = (1));

return statearr_86614;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____1 = (function (state_86526){
while(true){
var ret_value__26883__auto__ = (function (){try{while(true){
var result__26884__auto__ = switch__26881__auto__.call(null,state_86526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26884__auto__;
}
break;
}
}catch (e86615){if((e86615 instanceof Object)){
var ex__26885__auto__ = e86615;
var statearr_86616_86676 = state_86526;
(statearr_86616_86676[(5)] = ex__26885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86677 = state_86526;
state_86526 = G__86677;
continue;
} else {
return ret_value__26883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__ = function(state_86526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____1.call(this,state_86526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26882__auto__;
})()
;})(switch__26881__auto__,c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26904__auto__ = (function (){var statearr_86617 = f__26903__auto__.call(null);
(statearr_86617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26902__auto__);

return statearr_86617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26904__auto__);
});})(c__26902__auto__,map__86372,map__86372__$1,opts,before_jsload,on_jsload,reload_dependents,map__86373,map__86373__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26902__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__86680,link){
var map__86683 = p__86680;
var map__86683__$1 = ((((!((map__86683 == null)))?((((map__86683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86683):map__86683);
var file = cljs.core.get.call(null,map__86683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__86683,map__86683__$1,file){
return (function (p1__86678_SHARP_,p2__86679_SHARP_){
if(cljs.core._EQ_.call(null,p1__86678_SHARP_,p2__86679_SHARP_)){
return p1__86678_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__86683,map__86683__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__86689){
var map__86690 = p__86689;
var map__86690__$1 = ((((!((map__86690 == null)))?((((map__86690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86690):map__86690);
var match_length = cljs.core.get.call(null,map__86690__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__86690__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__86685_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__86685_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__86692_SHARP_,p2__86693_SHARP_){
return cljs.core.assoc.call(null,p1__86692_SHARP_,cljs.core.get.call(null,p2__86693_SHARP_,key),p2__86693_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_86694 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_86694);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_86694);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__86695,p__86696){
var map__86701 = p__86695;
var map__86701__$1 = ((((!((map__86701 == null)))?((((map__86701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86701):map__86701);
var on_cssload = cljs.core.get.call(null,map__86701__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__86702 = p__86696;
var map__86702__$1 = ((((!((map__86702 == null)))?((((map__86702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86702):map__86702);
var files_msg = map__86702__$1;
var files = cljs.core.get.call(null,map__86702__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1487768191401