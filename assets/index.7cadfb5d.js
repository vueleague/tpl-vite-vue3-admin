var C=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var m=(o,e,u)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[e]=u,B=(o,e)=>{for(var u in e||(e={}))E.call(e,u)&&m(o,u,e[u]);if(d)for(var u of d(e))P.call(e,u)&&m(o,u,e[u]);return o},f=(o,e)=>v(o,A(e));var _=(o,e,u)=>new Promise((a,t)=>{var l=r=>{try{s(u.next(r))}catch(c){t(c)}},p=r=>{try{s(u.throw(r))}catch(c){t(c)}},s=r=>r.done?a(r.value):Promise.resolve(r.value).then(l,p);s((u=u.apply(o,e)).next())});import{b as g,j as h,C as b,o as y,e as D,D as n,E as i,Q as F,bt as x,a6 as q,p as k,g as I,h as w,B as S,f as M}from"./vendor.0b1d9c36.js";/* empty css              */import{_ as N}from"./schema-form.a98a8267.js";import{_ as V}from"./index.ba2a0c35.js";import"./index.f26c1058.js";const Q={},Y=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(o,e)=>_(void 0,null,function*(){return e?e==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(o,e=""){return new Promise((u,a)=>{setTimeout(()=>{e.includes("admin")?a("\u8BE5\u5B57\u6BB5\u4E0D\u80FD\u5305\u542Badmin\u5173\u952E\u5B57"):u()},100)})}}]}];const j=o=>(k("data-v-cee00a14"),o=o(),I(),o),G=j(()=>M("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/rule-form/index.vue"}," \u67E5\u770B\u6E90\u7801 ",-1)),R=w(" \u786E\u5B9A "),T={name:"DemosFormRuleForm"},O=g(f(B({},T),{setup(o){Q.url;const e=h(),u={schemas:Y,labelWidth:120,actionColOptions:{span:24}};function a(){var t,l;(t=e.value)==null||t.formModel,(l=e.value)==null||l.validate().then(()=>S.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}return(t,l)=>{const p=b("a-button"),s=b("a-card");return y(),D("div",null,[n(F(x),{message:"\u9A8C\u8BC1\u8868\u5355",description:"\u52A8\u6001\u9A8C\u8BC1\u8868\u5355",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:i(()=>[G]),_:1}),n(s,null,{default:i(()=>[n(F(N),q({ref_key:"dynamicForm",ref:e},u),{"operate-button":i(()=>[n(p,{type:"primary",onClick:a},{default:i(()=>[R]),_:1})]),_:1},16)]),_:1})])}}}));var L=V(O,[["__scopeId","data-v-cee00a14"]]);export{L as default};