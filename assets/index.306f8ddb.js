var C=Object.defineProperty,y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(e,l,o)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,p=(e,l)=>{for(var o in l||(l={}))k.call(l,o)&&d(e,o,l[o]);if(c)for(var o of c(l))w.call(l,o)&&d(e,o,l[o]);return e},r=(e,l)=>y(e,P(l));import{b as S,j as g,C as B,o as A,e as x,D as a,Q as m,bt as D,f as E,E as t,a6 as N,h as i,B as W}from"./vendor.0b1d9c36.js";/* empty css              */import{_ as V}from"./schema-form.a98a8267.js";import{_ as q}from"./index.ba2a0c35.js";import"./index.f26c1058.js";const L=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(l){requestIdleCallback(()=>{l?e==null||e.validateFields():e==null||e.clearValidate()})}}),labelWidth:200}];const j={class:"mb-4"},M=i(" \u66F4\u6539\u5B57\u6BB53label "),O=i(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),Q=i(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),R=i(" \u5220\u9664\u5B57\u6BB511 "),T=i(" \u786E\u5B9A "),$={name:"DemosFormDynamicForm"},z=S(r(p({},$),{setup(e){const l=g(),o={schemas:L,labelWidth:120,actionColOptions:{span:24}};function _(){var u,s;(u=l.value)==null||u.formModel,(s=l.value)==null||s.validate().then(()=>W.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}function f(){var u;(u=l.value)==null||u.updateSchema({field:"field3",label:"\u5B57\u6BB53 New"})}function b(){var u;(u=l.value)==null||u.updateSchema([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function h(){var u;(u=l.value)==null||u.appendSchemaByField({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function F(){var u;(u=l.value)==null||u.removeSchemaByFiled("field11")}return(u,s)=>{const n=B("a-button"),v=B("a-card");return A(),x("div",null,[a(m(D),{message:"\u52A8\u6001\u8868\u5355\u793A\u4F8B",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),E("div",j,[a(n,{class:"mr-2",onClick:f},{default:t(()=>[M]),_:1}),a(n,{class:"mr-2",onClick:b},{default:t(()=>[O]),_:1}),a(n,{class:"mr-2",onClick:h},{default:t(()=>[Q]),_:1}),a(n,{class:"mr-2",onClick:F},{default:t(()=>[R]),_:1})]),a(v,null,{default:t(()=>[a(m(V),N({ref_key:"dynamicForm",ref:l},o),{"operate-button":t(()=>[a(n,{type:"primary",onClick:_},{default:t(()=>[T]),_:1})]),_:1},16)]),_:1})])}}}));var Y=q(z,[["__scopeId","data-v-3e7e56ea"]]);export{Y as default};