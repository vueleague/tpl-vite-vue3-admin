var x=Object.defineProperty,C=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var M=(n,t,e)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,y=(n,t)=>{for(var e in t||(t={}))g.call(t,e)&&M(n,e,t[e]);if(F)for(var e of F(t))k.call(t,e)&&M(n,e,t[e]);return n},_=(n,t)=>C(n,O(t));var s=(n,t,e)=>new Promise((f,w)=>{var a=c=>{try{i(e.next(c))}catch(u){w(u)}},r=c=>{try{i(e.throw(c))}catch(u){w(u)}},i=c=>c.done?f(c.value):Promise.resolve(c.value).then(a,r);i((e=e.apply(n,t)).next())});import{x as R}from"./index.ba2a0c35.js";import{_ as b}from"./schema-form.a98a8267.js";import{j as A,D as B,a6 as D,at as G,Q as N}from"./vendor.0b1d9c36.js";function z(){const[n]=R();return[w=>s(this,[w],function*({modalProps:e,formProps:f}){const a=A(),r=i=>{var c,u;(c=a.value)==null||c.resetFields(),(u=e==null?void 0:e.onCancel)==null||u.call(e,i)};return yield n.show(_(y({destroyOnClose:!0},e),{onCancel:r,content:()=>{const i=Object.assign({},{showActionButtonGroup:!1},f);return B(b,D({ref:a},i),null)},onOk:()=>s(this,null,function*(){var c,u,h,v;let i;try{i=yield(c=a.value)==null?void 0:c.validate(),yield(u=e==null?void 0:e.onFinish)==null?void 0:u.call(e,i),(h=a.value)==null||h.resetFields()}catch(j){return(v=e==null?void 0:e.onFail)==null||v.call(e,i),Promise.reject(j)}})})),yield G(),[N(a)]}),n]}export{z as u};