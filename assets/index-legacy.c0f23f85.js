!function(){var e=document.createElement("style");e.innerHTML=".box[data-v-70c47669]{display:flex;padding:12px;width:100%;height:calc(100vh - 280px);flex-direction:column;background-color:#fff}.box img[data-v-70c47669]{min-height:0;flex:1}.box .ant-form[data-v-70c47669]{flex:2}\n",document.head.appendChild(e),System.register(["./vendor-legacy.8528c51e.js","./index-legacy.f25f109a2.js","./index-legacy.f25f109a3.js","./index-legacy.da7add73.js"],(function(e){"use strict";var n,o,i,t,a,s,d,g,r,w,l,c,u,p,m,f,b,v,x,h,_,k;return{setters:[function(e){n=e.b,o=e.j,i=e.a2,t=e.o,a=e.e,s=e.D,d=e.E,g=e.Q,r=e.bZ,w=e.h,l=e.t,c=e.F,u=e.r,p=e.G,m=e.b_,f=e.p,b=e.g,v=e.f},function(){},function(){},function(e){x=e._,h=e.b,_=e.Z,k=e.$}],execute:function(){const y={class:"box"},M=(e=>(f("data-v-70c47669"),e=e(),b(),e))((()=>v("img",{src:"/vite-vue3-admin/assets/analysis.04ad2692.svg"},null,-1)));e("default",x(n({name:"DashboardWelcome",setup(e){var n;const f=null===(n=h().userInfo)||void 0===n?void 0:n.loginIp,{online:b}=_(),{battery:v,batteryStatus:x,calcDischargingTime:j}=k(),I=o(function(e="en"){const n=navigator.userAgent.toLowerCase(),o=e=>e.test(n),i=e=>{var o;return null===(o=n.match(e))||void 0===o?void 0:o.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},t=new Map([[o(/windows|win32|win64|wow32|wow64/g),"windows"],[o(/macintosh|macintel/g),"macos"],[o(/x11/g),"linux"],[o(/android|adr/g),"android"],[o(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",a=new Map([["windows",new Map([[o(/windows nt 5.0|windows 2000/g),"2000"],[o(/windows nt 5.1|windows xp/g),"xp"],[o(/windows nt 5.2|windows 2003/g),"2003"],[o(/windows nt 6.0|windows vista/g),"vista"],[o(/windows nt 6.1|windows 7/g),"7"],[o(/windows nt 6.2|windows 8/g),"8"],[o(/windows nt 6.3|windows 8.1/g),"8.1"],[o(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",i(/os x [\d._]+/g)],["android",i(/android [\d._]+/g)],["ios",i(/os [\d._]+/g)]]).get(t)||"unknow";let s="unknow";"windows"===t||"macos"===t||"linux"===t?s="desktop":("android"===t||"ios"===t||o(/mobile/g))&&(s="mobile");const[d="unknow",g="unknow"]=new Map([[o(/applewebkit/g),["webkit",new Map([[o(/safari/g),"safari"],[o(/chrome/g),"chrome"],[o(/opr/g),"opera"],[o(/edge/g),"edge"]]).get(!0)]],[o(/gecko/g)&&o(/firefox/g),["gecko","firefox"]],[o(/presto/g),["presto","opera"]],[o(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],r=new Map([["webkit",i(/applewebkit\/[\d._]+/g)],["gecko",i(/gecko\/[\d._]+/g)],["presto",i(/presto\/[\d._]+/g)],["trident",i(/trident\/[\d._]+/g)]]).get(d)||"unknow",w=new Map([["firefox",i(/firefox\/[\d._]+/g)],["opera",i(/opr\/[\d._]+/g)],["iexplore",i(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",i(/edge\/[\d._]+/g)],["safari",i(/version\/[\d._]+/g)],["chrome",i(/chrome\/[\d._]+/g)]]).get(g)||"unknow",[l="none",c="unknow"]=new Map([[o(/micromessenger/g),["wechat",i(/micromessenger\/[\d._]+/g)]],[o(/qqbrowser/g),["qq",i(/qqbrowser\/[\d._]+/g)]],[o(/ucbrowser/g),["uc",i(/ucbrowser\/[\d._]+/g)]],[o(/qihu 360se/g),["360","unknow"]],[o(/2345explorer/g),["2345",i(/2345explorer\/[\d._]+/g)]],[o(/metasr/g),["sougou","unknow"]],[o(/lbbrowser/g),["liebao","unknow"]],[o(/maxthon/g),["maxthon",i(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({"内核":d,"内核版本":r,"平台":s,"载体":g,"载体版本":w,"系统":t,"系统版本":a},"none"===l?{}:{"外壳":l,"外壳版本":c}),en:Object.assign({engine:d,engineVs:r,platform:s,supporter:g,supporterVs:w,system:t,systemVs:a},"none"===l?{}:{shell:l,shellVs:c})}[e]}("zh-cn"));return i((()=>{Object.assign(I.value,{"距离电池充满需要":Number.isFinite(v.value.chargingTime)&&0!=v.value.chargingTime?j.value:"未知","剩余可使用时间":Number.isFinite(v.value.dischargingTime)&&0!=v.value.dischargingTime?j.value:"未知","电池状态":x.value,"当前电量":`${v.value.level}%`})})),(e,n)=>(t(),a("div",y,[M,s(g(r),{title:"系统信息",bordered:""},{default:d((()=>[s(g(r).Item,{key:"IP",label:"IP"},{default:d((()=>[w(l(g(f)),1)])),_:1}),(t(!0),a(c,null,u(I.value,((e,n)=>(t(),p(g(r).Item,{key:n,label:n},{default:d((()=>[w(l(e),1)])),_:2},1032,["label"])))),128)),s(g(r).Item,{label:"网络状态"},{default:d((()=>[s(g(m),{status:g(b)?"processing":"default",text:g(b)?"在线":"离线"},null,8,["status","text"])])),_:1})])),_:1})]))}}),[["__scopeId","data-v-70c47669"]]))}}}))}();
