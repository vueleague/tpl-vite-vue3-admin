var M=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var _=(o,e,t)=>e in o?M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,u=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&_(o,t,e[t]);if(p)for(var t of p(e))O.call(e,t)&&_(o,t,e[t]);return o},m=(o,e)=>x(o,g(e));import{b as U,q as B,C as b,o as N,e as V,D as s,E as n,Q as a,bt as q,ap as A,h as d,f as v}from"./vendor.0b1d9c36.js";/* empty css              */import{x as f,c as E}from"./index.ba2a0c35.js";const T=d(" \u5BF9ant-design-vue\u7684modal\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u81EA\u5B9A\u4E49\u4E00\u4E2A\u53EF\u62D6\u62FD\u3001\u53EF\u8C03\u6574\u5927\u5C0F\u7684\u6A21\u6001\u6846\uFF0C "),$=v("span",{class:"text-red-500"}," Tips: \u5982\u679C\u4F60\u7684\u5F39\u7A97\u4F9D\u8D56\u4E8EApp\u4E0A\u4E0B\u6587\uFF08provide/inject\uFF09\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528`useModal\u7EC4\u4EF6\u65B9\u5F0F` ",-1),j=v("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin/blob/main/src/views/demos/custom-modal.vue"}," \u67E5\u770B\u6E90\u7801 ",-1),D=d("\u666E\u901A\u7EC4\u4EF6\u65B9\u5F0F"),H=d("useModal\u7EC4\u4EF6\u65B9\u5F0F"),Q=d("hook\u7EAF\u51FD\u6570\u5F0F"),S={name:"CustomModal"};var K=U(m(u({},S),{setup(o){const[e]=f(),[t]=f(),l=B({visible:!1}),h=()=>{e.show({title:"\u6211\u662Fhook\u7EAF\u51FD\u6570\u5F0F\u6A21\u6001\u6846",content:"hello"})},k=()=>{t.show({title:"\u6211\u662FUseModalComp",content:"\u563F\u563F\u563F"})},C=()=>{l.visible=!1};return(z,i)=>{const c=b("a-button"),y=b("a-card");return N(),V("div",null,[s(a(q),{message:"\u81EA\u5B9A\u4E49\u6A21\u6001\u6846",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:n(()=>[T,$,j]),_:1}),s(y,null,{default:n(()=>[s(a(A),null,{default:n(()=>[s(c,{type:"primary",onClick:i[0]||(i[0]=r=>a(l).visible=!0)},{default:n(()=>[D]),_:1}),s(c,{type:"primary",onClick:k},{default:n(()=>[H]),_:1}),s(c,{type:"primary",onClick:h},{default:n(()=>[Q]),_:1})]),_:1})]),_:1}),s(a(E),{visible:a(l).visible,"onUpdate:visible":i[1]||(i[1]=r=>a(l).visible=r),onOk:C},null,8,["visible"]),s(a(t))])}}}));export{K as default};