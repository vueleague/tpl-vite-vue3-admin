System.register(["./vendor-legacy.8528c51e.js","./dynamic-table-legacy.2803c2bc.js","./index-legacy.da7add73.js","./schema-form-legacy.9d0dcf92.js","./index-legacy.9ee1e062.js"],(function(e){"use strict";var t,n,a,i,l,c,r,d,o,s,u,f,b,m,g;return{setters:[function(e){t=e.am,n=e.k,a=e.bW,i=e.b,l=e.o,c=e.G,r=e.Q,d=e.D,o=e.bo,s=e.h,u=e.F},function(e){f=e.u},function(e){b=e.i,m=e.U,g=e.V},function(){},function(){}],execute:function(){function y(){return b({url:m.list,method:"get"})}e("default",i({name:"SystemMonitorOnline",setup(e){const[i,h]=f();((e={})=>{const i=g().client,l=new Map,c=()=>{Object.keys(e).forEach((t=>{if(i){const n=e[t];l.set(t,n),i.subscribe(t,n)}}))};t((()=>i),c),n(c),a((()=>{Object.keys(e).forEach((e=>{i&&l.has(e)&&i.unsubscribe(e,l.get(e))}))}))})({connect(){null==h||h.reload()},online(){null==h||h.reload()},offline(){null==h||h.reload()}});const x=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"用户名",dataIndex:"username",align:"center",bodyCell:({record:e})=>d(u,null,[d("span",{class:"pr-16px"},[e.username]),e.isCurrent&&d(o,{color:"red"},{default:()=>[s("当前")]})])},{title:"登录IP",dataIndex:"ip",width:140,align:"center"},{title:"登录时间",dataIndex:"time",align:"center"},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"},{title:"操作",dataIndex:"$action",align:"center",actions:({record:e})=>[{label:"下线",auth:"sys.online.kick",disabled:e.disable,popConfirm:{title:"确定下线该用户吗?",onConfirm:()=>p(e)}}]}],p=async e=>{var t;await(t={id:e.id},b({url:m.kick,method:"post",data:t}))};return(e,t)=>(l(),c(r(i),{ref:"dynamicTableRef","header-title":"在线用户","title-tooltip":"这是真实操作，请不要随意将其他用户踢下线。","data-request":r(y),columns:x},null,8,["data-request"]))}}))}}}));