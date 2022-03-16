var Ce=Object.defineProperty,we=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ne=(y,n,s)=>n in y?Ce(y,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[n]=s,ae=(y,n)=>{for(var s in n||(n={}))Se.call(n,s)&&ne(y,s,n[s]);if(te)for(var s of te(n))Oe.call(n,s)&&ne(y,s,n[s]);return y},le=(y,n)=>we(y,Te(n));var j=(y,n,s)=>new Promise((d,u)=>{var p=f=>{try{$(s.next(f))}catch(g){u(g)}},i=f=>{try{$(s.throw(f))}catch(g){u(g)}},$=f=>f.done?d(f.value):Promise.resolve(f.value).then(p,i);$((s=s.apply(y,n)).next())});import{o as v,e as M,w as Ie,v as Le,f as P,p as Me,g as Pe,b as F,u as E,C as q,G as S,Q as e,P as Y,O as J,am as G,D as t,E as o,aT as H,ac as k,aU as se,h as T,t as I,as as X,aV as oe,aW as ue,aX as Ee,a1 as ve,F as D,r as K,aY as Fe,aZ as De,a_ as re,a$ as Re,H as ye,T as Ae,I as W,B as he,a6 as Ke,q as Be,n as Ue,b0 as Ne,b1 as ge,b2 as Ve,b3 as je,j as B,b4 as qe,at as ze,b5 as z,a8 as Ge,b6 as ie,b7 as He,aJ as Z,b8 as Je,b9 as We,ba as Qe,aq as Xe,ar as Ye,a2 as Ze,bb as et,bc as tt,bd as ce,a5 as nt,ap as de,U as at,be as lt,X as st,bf as ot,bg as U,M as ut,bh as rt,bi as it,bj as ct}from"./vendor.0b1d9c36.js";import{_ as V,u as dt,a as pt,S as pe,T as me,R as mt,I as fe,b as ee,L as be,c as ft,t as _t,d as vt,l as _e,e as yt,f as ht}from"./index.ba2a0c35.js";import{u as gt,b as bt}from"./tabsView.b4f8da61.js";var kt="/vite-vue3-admin/assets/logo.3503d5cd.png";const xt=y=>(Me("data-v-4ea3708a"),y=y(),Pe(),y),$t={class:"logo"},Ct=xt(()=>P("img",{src:kt,alt:""},null,-1)),wt={class:"title"},Tt={props:{collapsed:{type:Boolean}},setup(y){return(n,s)=>(v(),M("div",$t,[Ct,Ie(P("h2",wt,"One Piece",512),[[Le,!y.collapsed]])]))}};var St=V(Tt,[["__scopeId","data-v-4ea3708a"]]);const N=F({props:{title:{type:[String,Object],required:!0,default:""}},setup(y){const n=y,s=dt(),d=E(()=>{var p;const{title:u=""}=n;return typeof u=="object"&&(p=u==null?void 0:u[s.locale])!=null?p:u});return(u,p)=>{const i=q("i18n-t");return v(),S(i,{tag:"span",keypath:e(d),scope:"global"},null,8,["keypath"])}}});const Ot={class:"tabs-view"},It={style:{display:"inline-block"}},Lt={class:"tabs-view-content"},Mt=F({setup(y){const n=Y(),s=J(),d=gt(),u=pt(),p=E(()=>n.fullPath),i=E(()=>d.getTabsList),$=E(()=>u.list),f=c=>{const{fullPath:O,hash:R,meta:L,name:A,params:ke,path:xe,query:$e}=c;return{fullPath:O,hash:R,meta:L,name:A,params:ke,path:xe,query:$e}};let g=[];try{const c=pe.get(me);g=c?JSON.parse(c):[f(n)]}catch(c){g=[f(n)]}d.initTabs(g);const r=()=>{var c,O;if(n.meta.keepAlive){const R=(O=(c=s.currentRoute.value.matched.find(L=>L.name==n.name))==null?void 0:c.components)==null?void 0:O.default.name;R&&u.remove(R)}};G(()=>n.fullPath,()=>{bt.some(c=>c===n.name)||d.addTabs(f(n))},{immediate:!0}),window.addEventListener("beforeunload",()=>{pe.set(me,JSON.stringify(i.value))});const a=c=>s.currentRoute.value.matched.some(O=>O.name===c.name),l=c=>{if(i.value.length===1)return he.warning("\u8FD9\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\uFF01");if(r(),d.closeCurrentTab(c),p.value===c.fullPath){const O=i.value[Math.max(0,i.value.length-1)];s.push(O)}},_=(c,O)=>{O=="remove"&&l(i.value.find(R=>R.fullPath==c))},x=c=>{s.push(c)},b=()=>{r(),s.replace({name:mt,params:{path:e(n).fullPath}})},h=c=>{d.closeLeftTabs(c),!a(c)&&s.replace(c.fullPath)},m=c=>{d.closeRightTabs(c),!a(c)&&s.replace(c.fullPath)},w=c=>{d.closeOtherTabs(c),!a(c)&&s.replace(c.fullPath)},C=()=>{localStorage.removeItem("routes"),d.closeAllTabs(),s.replace("/")};return(c,O)=>{const R=q("router-view");return v(),M("div",Ot,[t(e(re),{"active-key":e(p),"hide-add":"",type:"editable-card",class:"tabs",onChange:x,onEdit:_},{rightExtra:o(()=>[t(e(H),{trigger:["click"],placement:"bottomRight"},{overlay:o(()=>[t(e(k),{style:{"user-select":"none"}},{default:o(()=>[t(e(k).Item,{key:"1",disabled:e(p)!==e(n).fullPath,onClick:b},{default:o(()=>[t(e(se)),T(" "+I(c.$t("layout.multipleTab.reload")),1)]),_:1},8,["disabled"]),t(e(k).Item,{key:"2",onClick:O[1]||(O[1]=L=>l(e(n)))},{default:o(()=>[t(e(X)),T(" "+I(c.$t("layout.multipleTab.close")),1)]),_:1}),t(e(k).Divider),t(e(k).Item,{key:"5",onClick:O[2]||(O[2]=L=>w(e(n)))},{default:o(()=>[t(e(oe)),T(" "+I(c.$t("layout.multipleTab.closeOther")),1)]),_:1}),t(e(k).Item,{key:"6",onClick:C},{default:o(()=>[t(e(ue)),T(" "+I(c.$t("layout.multipleTab.closeAll")),1)]),_:1})]),_:1})]),default:o(()=>[P("a",{class:"ant-dropdown-link",onClick:O[0]||(O[0]=ve(()=>{},["prevent"]))},[t(e(Ee),{style:{fontSize:"20px"}})])]),_:1})]),default:o(()=>[(v(!0),M(D,null,K(e(i),L=>(v(),S(e(re).TabPane,{key:L.fullPath},{tab:o(()=>[t(e(H),{trigger:["contextmenu"]},{overlay:o(()=>[t(e(k),{style:{"user-select":"none"}},{default:o(()=>[t(e(k).Item,{key:"1",disabled:e(p)!==L.fullPath,onClick:b},{default:o(()=>[t(e(se)),T(" "+I(c.$t("layout.multipleTab.reload")),1)]),_:2},1032,["disabled"]),t(e(k).Item,{key:"2",onClick:A=>l(L)},{default:o(()=>[t(e(X)),T(" "+I(c.$t("layout.multipleTab.close")),1)]),_:2},1032,["onClick"]),t(e(k).Divider),t(e(k).Item,{key:"3",onClick:A=>h(L)},{default:o(()=>[t(e(Fe)),T(" "+I(c.$t("layout.multipleTab.closeLeft")),1)]),_:2},1032,["onClick"]),t(e(k).Item,{key:"4",onClick:A=>m(L)},{default:o(()=>[t(e(De)),T(" "+I(c.$t("layout.multipleTab.closeRight")),1)]),_:2},1032,["onClick"]),t(e(k).Divider),t(e(k).Item,{key:"5",onClick:A=>w(L)},{default:o(()=>[t(e(oe)),T(" "+I(c.$t("layout.multipleTab.closeOther")),1)]),_:2},1032,["onClick"]),t(e(k).Item,{key:"6",onClick:C},{default:o(()=>[t(e(ue)),T(" "+I(c.$t("layout.multipleTab.closeAll")),1)]),_:1})]),_:2},1024)]),default:o(()=>{var A;return[P("div",It,[t(e(N),{title:(A=L.meta)==null?void 0:A.title},null,8,["title"])])]}),_:2},1024)]),_:2},1024))),128))]),_:1},8,["active-key"]),P("div",Lt,[t(R,null,{default:o(({Component:L})=>[L?(v(),S(Ae,{key:0,name:"fade-transform",mode:"out-in",appear:""},{default:o(()=>[(v(),S(Re,{include:e($)},[(v(),S(ye(L),{key:e(n).fullPath}))],1032,["include"]))]),_:2},1024)):W("",!0)]),_:1})])])}}});var Pt=V(Mt,[["__scopeId","data-v-0c5cb6c6"]]);const Et={name:"MyMenuItem"},Ft=F(le(ae({},Et),{props:{menuInfo:{type:Object}},setup(y){const n=y,s=E(()=>{var d;return[...((d=n.menuInfo)==null?void 0:d.children)||[]].sort((u,p)=>{var i,$;return(((i=u==null?void 0:u.meta)==null?void 0:i.orderNum)||0)-((($=p==null?void 0:p.meta)==null?void 0:$.orderNum)||0)})});return(d,u)=>{var i,$,f,g,r,a;const p=q("MyMenuItem");return($=(i=n.menuInfo)==null?void 0:i.meta)!=null&&$.hideInMenu?W("",!0):(v(),M(D,{key:0},[(g=(f=n.menuInfo)==null?void 0:f.children)!=null&&g.length?(v(),S(e(k).SubMenu,Ke({key:0,key:(r=n.menuInfo)==null?void 0:r.name},d.$attrs),{title:o(()=>{var l,_,x;return[P("span",null,[t(e(fe),{type:(l=n.menuInfo.meta)==null?void 0:l.icon},null,8,["type"]),t(e(N),{title:(x=(_=n.menuInfo)==null?void 0:_.meta)==null?void 0:x.title},null,8,["title"])])]}),default:o(()=>[(v(!0),M(D,null,K(e(s),l=>(v(),S(p,{key:l.name,"menu-info":l},null,8,["menu-info"]))),128))]),_:1},16)):(v(),S(e(k).Item,{key:(a=n.menuInfo)==null?void 0:a.name},{default:o(()=>{var l,_,x,b;return[t(e(fe),{type:(_=(l=n.menuInfo)==null?void 0:l.meta)==null?void 0:_.icon},null,8,["type"]),t(e(N),{title:(b=(x=n.menuInfo)==null?void 0:x.meta)==null?void 0:b.title},null,8,["title"])]}),_:1}))],64))}}}));const Dt={class:"menu-container"},Rt=F({props:{collapsed:{type:Boolean}},setup(y){const n=y,s=ee(),d=Y(),u=J(),p=Be({openKeys:[],selectedKeys:[d.name]}),i=E(()=>[...s.menus].sort((r,a)=>{var l,_;return(((l=r==null?void 0:r.meta)==null?void 0:l.orderNum)||0)-(((_=a==null?void 0:a.meta)==null?void 0:_.orderNum)||0)}));i.value;const $=r=>u.getRoutes().find(a=>[a.name,a.path].includes(r));function f(){var a,l,_,x;const r=d.meta;if(r!=null&&r.activeMenu){const b=$(r.activeMenu);return(l=(a=b==null?void 0:b.meta)==null?void 0:a.namePath)!=null?l:[r==null?void 0:r.activeMenu]}return r!=null&&r.hideInMenu?(p==null?void 0:p.openKeys)||[]:(x=(_=d.meta)==null?void 0:_.namePath)!=null?x:d.matched.slice(1).map(b=>b.name)}G(()=>n.collapsed,r=>{p.openKeys=r?[]:f(),p.selectedKeys=[d.name]}),G(()=>d.fullPath,()=>{var a,l,_;if(d.name===be||n.collapsed)return;p.openKeys=f();const r=d.meta;if(r!=null&&r.activeMenu){const x=$(r.activeMenu);p.selectedKeys=[(a=x==null?void 0:x.name)!=null?a:r==null?void 0:r.activeMenu]}else p.selectedKeys=[(_=(l=d.meta)==null?void 0:l.activeMenu)!=null?_:d.name]},{immediate:!0});const g=({key:r})=>{r!==d.name&&(/http(s)?:/.test(r)?window.open(r):u.push({name:r}))};return(r,a)=>(v(),M("div",Dt,[t(e(k),{"open-keys":e(p).openKeys,"onUpdate:open-keys":a[0]||(a[0]=l=>e(p).openKeys=l),"selected-keys":e(p).selectedKeys,"onUpdate:selected-keys":a[1]||(a[1]=l=>e(p).selectedKeys=l),mode:"inline",theme:"dark",collapsed:n.collapsed,collapsible:"",onClick:g},{default:o(()=>[(v(!0),M(D,null,K(e(i),l=>(v(),S(Ft,{key:l.name,"menu-info":l},null,8,["menu-info"]))),128))]),_:1},8,["open-keys","selected-keys","collapsed"])]))}});var At=V(Rt,[["__scopeId","data-v-7f49ab09"]]);const Kt={class:"pb-12px"},Bt=["onMouseenter"],Ut=F({props:{value:null,options:null},emits:["update:value","enter"],setup(y,{emit:n}){const s=y,d=E({get(){return s.value},set(i){n("update:value",i)}});function u(i){return j(this,null,function*(){d.value=i.name})}function p(){n("enter")}return(i,$)=>(v(),M("div",null,[P("div",Kt,[(v(!0),M(D,null,K(y.options,f=>{var g;return v(),M("div",{key:f.name,class:"bg-[#e5e7eb] h-56px mt-8px px-14px rounded-4px flex items-center justify-justify-between",style:Ue([{cursor:"pointer"},{background:f.name===e(d)?"#1890ff":"",color:f.name===e(d)?"#fff":""}]),onClick:p,onMouseenter:r=>u(f)},[t(e(Ne)),t(e(N),{class:"flex-1 ml-5px",title:(g=f.meta)==null?void 0:g.title},null,8,["title"]),t(e(ge),{class:"icon text-20px p-2px mr-3px"})],44,Bt)}),128))])]))}});const Nt={class:"flex items-center"},Vt={class:"mr-14px"},jt=T(" \u786E\u8BA4 "),qt={class:"mr-14px"},zt=T(" \u5207\u6362 "),Gt=T(" \u5173\u95ED "),Ht=F({setup(y){return(n,s)=>(v(),M("div",Nt,[P("span",Vt,[t(e(ge),{class:"icon text-15px p-2px mr-3px"}),jt]),P("span",qt,[t(e(Ve),{class:"icon text-15px p-2px mr-5px"}),t(e(je),{class:"icon text-15px p-2px mr-3px"}),zt]),P("span",null,[t(e(X),{class:"icon text-15px p-2px mr-3px"}),Gt])]))}});var Jt=V(Ht,[["__scopeId","data-v-ed4880f6"]]);const Wt={class:"mt-20px"},Qt=F({setup(y){const n=ee(),s=J(),d=B(""),u=B(""),p=E(()=>a(n.menus)),i=qe([]),$=B(null),f=Je(r,300),g=B(!1);G(g,h=>j(this,null,function*(){var m;h&&(yield ze(),(m=$.value)==null||m.focus())}));function r(){var h;i.value=p.value.filter(m=>{var C;const w=_t((C=m.meta)==null?void 0:C.title);return d.value&&(w==null?void 0:w.toLocaleLowerCase().includes(d.value.toLocaleLowerCase().trim()))}),((h=i.value)==null?void 0:h.length)>0?u.value=i.value[0].name:u.value=""}function a(h,m=[]){return h&&h.length===0?[]:h.reduce((w,C)=>{var c;return!((c=C.meta)!=null&&c.hideInMenu)&&!C.children&&w.push(C),C.children&&C.children.length>0&&a(C.children,m),w},m)}function l(){g.value=!1,setTimeout(()=>{i.value=[],d.value=""},200)}function _(){const{length:h}=i.value;if(h===0)return;const m=i.value.findIndex(w=>w.name===u.value);m===0?u.value=i.value[h-1].name:u.value=i.value[m-1].name}function x(){const{length:h}=i.value;if(h===0)return;const m=i.value.findIndex(w=>w.name===u.value);m+1===h?u.value=i.value[0].name:u.value=i.value[m+1].name}function b(){const{length:h}=i.value;h===0||u.value===""||(/http(s)?:/.test(u.value)?window.open(u.value):(s.push({name:u.value}),l()))}return z("Escape",l),z("Enter",b),z("ArrowUp",_),z("ArrowDown",x),(h,m)=>{const w=q("a-input");return v(),S(e(Z),{title:h.$t("common.searchText"),placement:"bottom","mouse-enter-delay":.5},{default:o(()=>[Ge(h.$slots,"default",{},()=>[t(e(ie),{onClick:m[0]||(m[0]=C=>g.value=!0)})]),t(e(ft),{visible:g.value,"onUpdate:visible":m[3]||(m[3]=C=>g.value=C),title:"\u641C\u7D22\u83DC\u5355",keyboard:!1,onCancel:l},{footer:o(()=>[t(Jt)]),default:o(()=>[t(w,{ref_key:"inputRef",ref:$,value:d.value,"onUpdate:value":m[1]||(m[1]=C=>d.value=C),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",onChange:e(f)},{prefix:o(()=>[t(e(ie),{class:"text-15px text-[#c2c2c2]"})]),_:1},8,["value","onChange"]),P("div",Wt,[e(i).length===0?(v(),S(e(He),{key:0,description:"\u6682\u65E0\u641C\u7D22\u7ED3\u679C"})):(v(),S(Ut,{key:1,value:u.value,"onUpdate:value":m[2]||(m[2]=C=>u.value=C),options:e(i),onEnter:b},null,8,["value","options"]))])]),_:1},8,["visible"])]),_:3},8,["title","mouse-enter-delay"])}}}),Xt=F({setup(y){const{t:n}=We(),{toggle:s,isFullscreen:d}=Qe(),u=E(()=>e(d)?n("layout.header.tooltipExitFull"):n("layout.header.tooltipEntryFull"));return(p,i)=>(v(),S(e(Z),{title:e(u),placement:"bottom","mouse-enter-delay":.5},{default:o(()=>[P("span",{onClick:i[0]||(i[0]=(...$)=>e(s)&&e(s)(...$))},[e(d)?(v(),S(e(Ye),{key:1})):(v(),S(e(Xe),{key:0}))])]),_:1},8,["title","mouse-enter-delay"]))}}),Yt={key:0,class:"ml-1"},Zt={href:"javascript:;"},en=F({props:{showText:{type:Boolean,default:!0},reload:{type:Boolean}},setup(y){const n=y,s=B([]),{changeLocale:d,getLocale:u}=vt(),p=E(()=>{var g;const f=s.value[0];return f?(g=_e.find(r=>r.lang===f))==null?void 0:g.label:""});Ze(()=>{s.value=[e(u)]});function i(f){return j(this,null,function*(){yield d(f),s.value=[f],n.reload&&location.reload()})}function $({key:f}){e(u)!==f&&i(f)}return(f,g)=>(v(),S(e(H),{placement:"bottomRight"},{overlay:o(()=>[t(e(k),{selectedKeys:s.value,"onUpdate:selectedKeys":g[0]||(g[0]=r=>s.value=r),onClick:$},{default:o(()=>[(v(!0),M(D,null,K(e(_e),r=>(v(),S(e(k).Item,{key:r.lang},{default:o(()=>[P("a",Zt,I(r.icon)+" "+I(r.label),1)]),_:2},1024))),128))]),_:1},8,["selectedKeys"])]),default:o(()=>[t(e(yt),{name:"locale"}),y.showText?(v(),M("span",Yt,I(e(p)),1)):W("",!0)]),_:1}))}}),tn=["onClick"];var nn=F({props:{collapsed:{type:Boolean}},emits:["update:collapsed"],setup(y,{emit:n}){const s=ee(),d=ht(),u=J(),p=Y(),i=E(()=>s.userInfo),$=E(()=>{var a,l,_;if((a=p.meta)!=null&&a.namePath){let x=s.menus;const b=(_=(l=p.meta)==null?void 0:l.namePath)==null?void 0:_.map(h=>{const m=x.find(w=>w.name===h);return x=(m==null?void 0:m.children)||[],m});return[{name:"__index",meta:{title:"\u9996\u9875"},children:s.menus},...b]}return p.matched}),f=a=>{var l,_;if(typeof(a==null?void 0:a.redirect)=="object"){const x=Object.values(a.redirect);if((l=a==null?void 0:a.children)!=null&&l.length){const b=a.children.find(h=>x.some(m=>{var w;return[h.name,h.path,(w=h.meta)==null?void 0:w.fullPath].some(C=>C===m)}));return f(b)}return x.find(b=>typeof b=="string")}else if(typeof(a==null?void 0:a.redirect)=="string"){if((_=a==null?void 0:a.children)!=null&&_.length){const x=a.children.find(b=>{var h;return[b.name,b.path,(h=b.meta)==null?void 0:h.fullPath].some(m=>m===(a==null?void 0:a.redirect))});return f(x)}return a==null?void 0:a.redirect}return a},g=a=>{const l=f(a);(l==null?void 0:l.name)!==p.name&&(/http(s)?:/.test(l==null?void 0:l.name)?window.open(l==null?void 0:l.name):l!=null&&l.name&&u.push({name:l.name}))},r=()=>{ut.confirm({title:"\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",icon:t(rt,null,null),centered:!0,onOk:()=>j(this,null,function*(){s.userInfo.phone!=="13553550634"&&(yield s.logout()),he.success("\u6210\u529F\u9000\u51FA\u767B\u5F55"),localStorage.clear(),u.replace({name:be,query:{redirect:p.fullPath}})})})};return(a,l)=>(v(),S(e(U).Header,{class:"layout-header"},{default:o(()=>[t(e(de),{size:20},{default:o(()=>[P("span",{class:"menu-fold",onClick:l[0]||(l[0]=()=>n("update:collapsed",!y.collapsed))},[(v(),S(ye(y.collapsed?e(et):e(tt))))]),t(e(ce),null,{default:o(()=>[(v(!0),M(D,null,K(e($),(_,x)=>{var b;return v(),S(e(ce).Item,{key:_.name},nt({default:o(()=>{var h;return[t(e(N),{title:(h=_==null?void 0:_.meta)==null?void 0:h.title},null,8,["title"])]}),_:2},[(b=_==null?void 0:_.children)!=null&&b.length?{name:"overlay",fn:o(()=>{var h;return[t(e(k),{"selected-keys":[(h=e($)[x+1])==null?void 0:h.name]},{default:o(()=>[(v(!0),M(D,null,K(_==null?void 0:_.children,m=>{var w,C;return v(),M(D,{key:m.name},[!((w=m.meta)!=null&&w.hideInMenu)&&!((C=m.meta)!=null&&C.hideInBreadcrumb)?(v(),S(e(k).Item,{key:m.name,onClick:c=>g(m)},{default:o(()=>{var c;return[t(e(N),{title:(c=m.meta)==null?void 0:c.title},null,8,["title"])]}),_:2},1032,["onClick"])):W("",!0)],64)}),128))]),_:2},1032,["selected-keys"])]})}:void 0]),1024)}),128))]),_:1})]),_:1}),t(e(de),{size:20},{default:o(()=>[t(e(Qt)),t(e(Z),{title:a.$t("layout.header.tooltipLock"),placement:"bottom"},{default:o(()=>[t(e(at),{onClick:l[1]||(l[1]=_=>e(d).setLock(!0))})]),_:1},8,["title"]),t(e(Xt)),t(e(en)),t(e(H),{placement:"bottomRight"},{overlay:o(()=>[t(e(k),null,{default:o(()=>[t(e(k).Item,{onClick:l[2]||(l[2]=_=>a.$router.push({name:"account-about"}))},{default:o(()=>[T(I(a.$t("routes.account.about")),1)]),_:1}),t(e(k).Item,{onClick:l[3]||(l[3]=_=>a.$router.push({name:"account-settings"}))},{default:o(()=>[T(I(a.$t("routes.account.settings")),1)]),_:1}),t(e(k).Divider),t(e(k).Item,null,{default:o(()=>[P("div",{onClick:ve(r,["prevent"])},[t(e(lt)),T(" "+I(a.$t("layout.header.dropdownItemLoginOut")),1)],8,tn)]),_:1})]),_:1})]),default:o(()=>[t(e(st),{src:e(i).headImg,alt:e(i).name},{default:o(()=>[T(I(e(i).name),1)]),_:1},8,["src","alt"])]),_:1}),t(e(ot))]),_:1})]),_:1}))}});var an=V(nn,[["__scopeId","data-v-c8850512"]]);const ln="_page_footer_auaql_1",sn="_page_footer_link_auaql_7",on="_copyright_auaql_15";var Q={page_footer:ln,page_footer_link:sn,copyright:on};const{Footer:un}=U;var rn=F({name:"PageFooter",components:{ALayoutFooter:un},setup(){return()=>t(D,null,[t(q("a-layout-footer"),{class:Q.page_footer},{default:()=>[t("div",{class:Q.page_footer_link},[t("a",{href:"https://github.com/vuejs/vue-next",target:"_blank"},[T("vue 3.0")]),t("a",{href:"https://github.com/buqiyuan",target:"_blank"},[t(it,null,null)]),t("a",{href:"https://github.com/vueComponent/ant-design-vue",target:"_blank"},[" ",T("ant-design-vue 2.0")])]),t("div",{class:Q.copyright},[T("Copyright "),t(ct,null,null),T(" 2020"),t("a",{href:"https://buqiyuan.gitee.io",target:"_blank"},[T("buqiyuan.gitee.io")])])]})])}});const cn=F({setup(y){const n=B(!1),s=E(()=>n.value?80:220);return(d,u)=>(v(),S(e(U),{class:"layout"},{default:o(()=>[t(e(U).Sider,{collapsed:n.value,"onUpdate:collapsed":u[0]||(u[0]=p=>n.value=p),width:e(s),trigger:null,collapsible:"",class:"layout-sider"},{default:o(()=>[t(St,{collapsed:n.value},null,8,["collapsed"]),t(At,{collapsed:n.value},null,8,["collapsed"])]),_:1},8,["collapsed","width"]),t(e(U),null,{default:o(()=>[t(an,{collapsed:n.value,"onUpdate:collapsed":u[1]||(u[1]=p=>n.value=p)},null,8,["collapsed"]),t(e(U).Content,{class:"layout-content"},{default:o(()=>[t(e(Pt))]),_:1}),t(e(rn))]),_:1})]),_:1}))}});var _n=V(cn,[["__scopeId","data-v-14812472"]]);export{_n as default};