!function(){var e=document.createElement("style");e.innerHTML=".context-menu{position:fixed;top:0;left:0;z-index:200;display:block;width:156px;margin:0;list-style:none;background-color:#151515;border:1px solid rgba(0,0,0,.08);border-radius:.25rem;box-shadow:0 2px 2px #00000024,0 3px 1px -2px #0000001a,0 1px 5px #0000000f;background-clip:padding-box;user-select:none}.context-menu__item{margin:0!important}.context-menu li{display:inline-block;width:100%;height:42px!important;margin:0!important;line-height:42px!important}.context-menu li span{line-height:42px!important}.context-menu li>div{margin:0!important}.context-menu li:not(.ant-menu-item-disabled):hover{color:#c9d1d9;background-color:#f5f5f5}.context-menu .ant-divider,.context-menu__popup .ant-divider{margin:0}.context-menu__popup li{display:inline-block;width:100%;height:42px!important;margin:0!important;line-height:42px!important}.context-menu__popup li span{line-height:42px!important}.context-menu__popup li>div{margin:0!important}.context-menu__popup li:not(.ant-menu-item-disabled):hover{color:#c9d1d9;background-color:#f5f5f5}.context-menu .ant-menu-submenu-title,.context-menu .ant-menu-item{padding:0!important}\n",document.head.appendChild(e),System.register(["./vendor-legacy.8528c51e.js","./index-legacy.f25f109a.js","./index-legacy.da7add73.js","./index-legacy.ef69f13c.js","./dynamic-table-legacy.2803c2bc.js","./hero-legacy.25a79c80.js","./useFormModal-legacy.a7b61c96.js","./index-legacy.f25f109a4.js","./schema-form-legacy.9d0dcf92.js","./index-legacy.9ee1e062.js"],(function(e){"use strict";var t,n,o,l,a,i,c,r,s,d,u,p,m,x,f,y,b,h,v,g,k,j,w,_,I,C,O,E,L,T,$,M,S;return{setters:[function(e){t=e.D,n=e.bo,o=e.aw,l=e.F,a=e.b,i=e.j,c=e.u,r=e.k,s=e.at,d=e.l,u=e.Q,p=e.ac,m=e.aI,x=e.ay,f=e.ax,y=e.b9,b=e.O,h=e.C,v=e.o,g=e.e,k=e.E,j=e.bt,w=e.ad,_=e.h},function(){},function(e){I=e.r,C=e.I,O=e.Y},function(e){E=e.I,L=e.a,T=e.j},function(e){$=e.u},function(e){M=e.g},function(e){S=e.u},function(){},function(){},function(){}],execute:function(){const P=[{title:"头像",align:"center",width:100,hideInSearch:!0,dataIndex:"avatar",bodyCell:({record:e})=>t(E,{src:e.avatar,preview:{src:e.posters},key:e.avatar},null)},{title:"英雄名称",align:"center",dataIndex:"title"},{title:"英雄称号",align:"center",dataIndex:"name"},{title:"定位",align:"center",dataIndex:"roles",bodyCell:({record:e})=>{var a;return t(l,null,[null===(a=e.roles)||void 0===a?void 0:a.map((e=>{return t(n,{color:"blue",key:e},"function"==typeof(l=e)||"[object Object]"===Object.prototype.toString.call(l)&&!o(l)?e:{default:()=>[e]});var l}))])}},{title:"操作",align:"center",width:120,dataIndex:"$action",actions:({record:e})=>[{label:"查看详情",onClick:()=>I.push({name:"demos-table-lol-info",params:{id:e.heroId}})}]}];const D="context-menu",q={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},A=e=>{const{item:n}=e;return t("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,n)},[e.showIcon&&n.icon&&t(C,{class:"mr-2",type:n.icon},null),t("span",null,[n.label])])};var F=a({name:"ContextMenu",props:q,setup(e){const n=i(null),a=i(!1),x=c((()=>{const{axis:t,items:n,styles:o,width:l}=e,{x:a,y:i}=t||{x:0,y:0},c=40*(n||[]).length,r=l,s=document.body;return{...o,position:"absolute",width:`${l}px`,left:`${(s.clientWidth<a+r?a-r:a)+1}px`,top:`${(s.clientHeight<i+c?i-c:i)+1}px`}}));function f(e,t){const{handler:n,disabled:o}=e;o||(a.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function y(n){return n.map((n=>{const{disabled:o,label:i,children:c,divider:r=!1}=n,s={item:n,handler:f,showIcon:e.showIcon};return c&&0!==c.length?u(a)?t(p.SubMenu,{key:i,disabled:o,popupClassName:"context-menu__popup"},{title:()=>t(A,s,null),default:()=>y(c)}):null:t(l,null,[t(p.Item,{disabled:o,class:"context-menu__item",key:i},{default:()=>[t(A,s,null)]}),r?t(m,{key:`d-${i}`},null):null])}))}return r((()=>{s((()=>a.value=!0))})),d((()=>{const e=u(n);e&&document.body.removeChild(e)})),()=>{let l;if(!u(a))return null;const{items:i}=e;return t("div",{class:D},[t(p,{inlineIndent:12,mode:"vertical",ref:n,style:u(x)},(c=l=y(i),"function"==typeof c||"[object Object]"===Object.prototype.toString.call(c)&&!o(c)?l:{default:()=>[l]}))]);var c}}});const N={domList:[],resolve:()=>({})},z=function(e){const{event:n}=e||{};if(n&&(null==n||n.preventDefault()),O)return new Promise((o=>{const l=document.body,a=document.createElement("div"),i={};e.styles&&(i.styles=e.styles),e.items&&(i.items=e.items),e.event&&(i.customEvent=n,i.axis={x:n.clientX,y:n.clientY});const c=t(F,i);x(c,a);const r=function(){N.resolve("")};N.domList.push(a);const s=function(){N.domList.forEach((e=>{try{e&&l.removeChild(e)}catch(t){console.error(t)}})),l.removeEventListener("click",r),l.removeEventListener("scroll",r)};N.resolve=function(e){s(),o(e)},s(),l.appendChild(a),l.addEventListener("click",r),l.addEventListener("scroll",r)}))},H=function(){N&&(N.resolve(""),N.domList=[])};function W(e=!0){return f()&&e&&d((()=>{H()})),[z,H]}const Y=e=>[{field:"filename",component:"Input",label:e("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:e("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}],B=_(" 英雄联盟 -- 根据数组格式的数据进行导出 "),Q=_("表格自带导出"),V=_(" 数组格式导出 "),X=_(" 自定义导出格式 ");e("default",a({name:"DemosTablesLolTable",setup(e){const[n]=$(),o=b(),[l]=W(),a=(()=>{const{t:e}=y(),[t]=S();return{openModal:({onOk:n})=>{t({modalProps:{title:e("component.excel.exportModalTitle"),onFinish:async e=>{const{filename:t,bookType:o}=e;n({filename:`${t.split(".").shift()}.${o}`,bookType:o})}},formProps:{labelWidth:100,schemas:Y(e)}})}}})();let i=[];const c=()=>{const e=P.filter((e=>"$action"!==e.dataIndex)),t=e.map((e=>e.dataIndex));L({data:i.map((e=>t.reduce(((t,n)=>(t[n]=Array.isArray(e[n])?e[n].toString():e[n],t)),{}))).map((e=>Object.values(e))),header:e.map((e=>e.title)),filename:"二维数组方式导出excel.xlsx"})},r=()=>{a.openModal({onOk:({filename:e,bookType:t})=>{T({data:i,filename:e,write2excelOpts:{bookType:t}})}})},s=async e=>{const{data:t}=await M(e);return i=t.list,t},d=e=>({onContextmenu:t=>{l({event:t,items:[{label:"查看",handler:()=>{console.log("record",e),o.push({name:"demos-table-lol-info",params:{id:e.heroId}})}},{label:"编辑",handler:()=>{console.log("record",e)}}]})}});return(e,o)=>{const l=h("a-button");return v(),g("div",null,[t(u(j),{message:"游戏介绍",type:"info","show-icon":""},{description:k((()=>[B])),_:1}),t(u(w),{title:"英雄列表mock数据",style:{"margin-top":"20px"}},{default:k((()=>[t(u(n),{size:"small",bordered:"","data-request":s,columns:u(P),"row-key":"heroid","export-file-name":"表格自带导出","custom-row":d},{"export-button":k((()=>[t(l,{type:"primary"},{default:k((()=>[Q])),_:1})])),toolbar:k((()=>[t(l,{type:"primary",onClick:c},{default:k((()=>[V])),_:1}),t(l,{type:"primary",onClick:r},{default:k((()=>[X])),_:1})])),_:1},8,["columns"])])),_:1})])}}}))}}}))}();
