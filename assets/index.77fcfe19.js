var O=Object.defineProperty,P=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))R.call(t,n)&&w(e,n,t[n]);if(I)for(var n of I(t))V.call(t,n)&&w(e,n,t[n]);return e},_=(e,t)=>P(e,N(t));var F=(e,t,n)=>new Promise((m,p)=>{var i=a=>{try{o(n.next(a))}catch(c){p(c)}},l=a=>{try{o(n.throw(a))}catch(c){p(c)}},o=a=>a.done?m(a.value):Promise.resolve(a.value).then(i,l);o((n=n.apply(e,t)).next())});import{D as r,bo as q,aw as T,F as j,b as D,j as k,u as H,k as W,at as X,l as S,Q as f,ac as E,aI as Y,ay as z,ax as K,b9 as Q,O as U,C as G,o as J,e as Z,E as y,bt as ee,ad as te,h as C}from"./vendor.0b1d9c36.js";/* empty css              */import{r as ne,I as oe,Y as le}from"./index.ba2a0c35.js";import{I as ae,a as se,j as ue}from"./index.3b9e6362.js";import{u as re}from"./dynamic-table.bceae78c.js";import{g as ce}from"./hero.72496d87.js";import{u as ie}from"./useFormModal.c00c4eeb.js";/* empty css               */import"./schema-form.a98a8267.js";import"./index.f26c1058.js";function de(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const M=[{title:"\u5934\u50CF",align:"center",width:100,hideInSearch:!0,dataIndex:"avatar",bodyCell:({record:e})=>r(ae,{src:e.avatar,preview:{src:e.posters},key:e.avatar},null)},{title:"\u82F1\u96C4\u540D\u79F0",align:"center",dataIndex:"title"},{title:"\u82F1\u96C4\u79F0\u53F7",align:"center",dataIndex:"name"},{title:"\u5B9A\u4F4D",align:"center",dataIndex:"roles",bodyCell:({record:e})=>{var t;return r(j,null,[(t=e.roles)==null?void 0:t.map(n=>r(q,{color:"blue",key:n},de(n)?n:{default:()=>[n]}))])}},{title:"\u64CD\u4F5C",align:"center",width:120,dataIndex:"$action",actions:({record:e})=>[{label:"\u67E5\u770B\u8BE6\u60C5",onClick:()=>ne.push({name:"demos-table-lol-info",params:{id:e.heroId}})}]}];function me(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const g="context-menu",pe={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},A=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(oe,{class:"mr-2",type:t.icon},null),r("span",null,[t.label])])};var fe=D({name:"ContextMenu",props:pe,setup(e){const t=k(null),n=k(!1),m=H(()=>{const{axis:l,items:o,styles:a,width:c}=e,{x:s,y:d}=l||{x:0,y:0},u=(o||[]).length*40,h=c,x=document.body,$=x.clientWidth<s+h?s-h:s,L=x.clientHeight<d+u?d-u:d;return _(v({},a),{position:"absolute",width:`${c}px`,left:`${$+1}px`,top:`${L+1}px`})});W(()=>{X(()=>n.value=!0)}),S(()=>{const l=f(t);l&&document.body.removeChild(l)});function p(l,o){const{handler:a,disabled:c}=l;c||(n.value=!1,o==null||o.stopPropagation(),o==null||o.preventDefault(),a==null||a())}function i(l){return l.map(o=>{const{disabled:a,label:c,children:s,divider:d=!1}=o,u={item:o,handler:p,showIcon:e.showIcon};return!s||s.length===0?r(j,null,[r(E.Item,{disabled:a,class:`${g}__item`,key:c},{default:()=>[r(A,u,null)]}),d?r(Y,{key:`d-${c}`},null):null]):f(n)?r(E.SubMenu,{key:c,disabled:a,popupClassName:`${g}__popup`},{title:()=>r(A,u,null),default:()=>i(s)}):null})}return()=>{let l;if(!f(n))return null;const{items:o}=e;return r("div",{class:g},[r(E,{inlineIndent:12,mode:"vertical",ref:t,style:f(m)},me(l=i(o))?l:{default:()=>[l]})])}}});const b={domList:[],resolve:()=>({})},xe=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!le)return new Promise(n=>{const m=document.body,p=document.createElement("div"),i={};e.styles&&(i.styles=e.styles),e.items&&(i.items=e.items),e.event&&(i.customEvent=t,i.axis={x:t.clientX,y:t.clientY});const l=r(fe,i);z(l,p);const o=function(){b.resolve("")};b.domList.push(p);const a=function(){b.domList.forEach(c=>{try{c&&m.removeChild(c)}catch(s){console.error(s)}}),m.removeEventListener("click",o),m.removeEventListener("scroll",o)};b.resolve=function(c){a(),n(c)},a(),m.appendChild(p),m.addEventListener("click",o),m.addEventListener("scroll",o)})},B=function(){b&&(b.resolve(""),b.domList=[])};function ye(e=!0){return K()&&e&&S(()=>{B()}),[xe,B]}const be=e=>[{field:"filename",component:"Input",label:e("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:e("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}],he=()=>{const{t:e}=Q(),[t]=ie();return{openModal:({onOk:m})=>{t({modalProps:{title:e("component.excel.exportModalTitle"),onFinish:p=>F(void 0,null,function*(){const{filename:i,bookType:l}=p;m({filename:`${i.split(".").shift()}.${l}`,bookType:l})})},formProps:{labelWidth:100,schemas:be(e)}})}}},Ce=C(" \u82F1\u96C4\u8054\u76DF -- \u6839\u636E\u6570\u7EC4\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA "),ve=C("\u8868\u683C\u81EA\u5E26\u5BFC\u51FA"),_e=C(" \u6570\u7EC4\u683C\u5F0F\u5BFC\u51FA "),Fe=C(" \u81EA\u5B9A\u4E49\u5BFC\u51FA\u683C\u5F0F "),Ee={name:"DemosTablesLolTable"},$e=D(_(v({},Ee),{setup(e){const[t]=re(),n=U(),[m]=ye(),p=he();let i=[];const l=()=>{const s=M.filter(u=>u.dataIndex!=="$action"),d=s.map(u=>u.dataIndex);se({data:i.map(u=>d.reduce((h,x)=>(h[x]=Array.isArray(u[x])?u[x].toString():u[x],h),{})).map(u=>Object.values(u)),header:s.map(u=>u.title),filename:"\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx"})},o=()=>{p.openModal({onOk:({filename:s,bookType:d})=>{ue({data:i,filename:s,write2excelOpts:{bookType:d}})}})},a=s=>F(this,null,function*(){const{data:d}=yield ce(s);return i=d.list,d}),c=s=>({onContextmenu:d=>{m({event:d,items:[{label:"\u67E5\u770B",handler:()=>{n.push({name:"demos-table-lol-info",params:{id:s.heroId}})}},{label:"\u7F16\u8F91",handler:()=>{}}]})}});return(s,d)=>{const u=G("a-button");return J(),Z("div",null,[r(f(ee),{message:"\u6E38\u620F\u4ECB\u7ECD",type:"info","show-icon":""},{description:y(()=>[Ce]),_:1}),r(f(te),{title:"\u82F1\u96C4\u5217\u8868mock\u6570\u636E",style:{"margin-top":"20px"}},{default:y(()=>[r(f(t),{size:"small",bordered:"","data-request":a,columns:f(M),"row-key":"heroid","export-file-name":"\u8868\u683C\u81EA\u5E26\u5BFC\u51FA","custom-row":c},{"export-button":y(()=>[r(u,{type:"primary"},{default:y(()=>[ve]),_:1})]),toolbar:y(()=>[r(u,{type:"primary",onClick:l},{default:y(()=>[_e]),_:1}),r(u,{type:"primary",onClick:o},{default:y(()=>[Fe]),_:1})]),_:1},8,["columns"])]),_:1})])}}}));export{$e as default};
