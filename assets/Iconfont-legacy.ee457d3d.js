System.register(["./vendor-legacy.8528c51e.js","./index-legacy.f25f109a.js","./index-legacy.f25f109a2.js","./index-legacy.f25f109a4.js","./index-legacy.da7add73.js"],(function(e){"use strict";var t,l,n,i,a,c,r,u,o,s,d,p,f,m;return{setters:[function(e){t=e.b,l=e.q,n=e.C,i=e.o,a=e.e,c=e.D,r=e.Q,u=e.bt,o=e.E,s=e.c1,d=e.bZ,p=e.G,f=e.h},function(){},function(){},function(){},function(e){m=e.I}],execute:function(){const g=f(" 示意图："),y=f(" (例如：//at.alicdn.com/t/font_1166867_7zdsgx6x88l.js) "),b=f(" （例如：icon-huanfu1、icon-zhutipifu、icon-xinwendongtai1） "),v={key:1};e("default",t({name:"CustomIcon",setup(e){const t=l({scriptUrl:"",iconName:"",visible:!1,imageUrl:""}),f=e=>{t.imageUrl=e.target.currentSrc,t.visible=!0};return(e,l)=>{const x=n("a-input"),h=n("a-card");return i(),a("div",null,[c(r(u),{message:"自定义图标",description:"使用阿里图标库，可以有效减小项目的体积，支持离线本地图标和在线图标",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),c(h,null,{default:o((()=>[g,c(r(s),{width:700,src:"http://ww1.sinaimg.cn/large/005IOlAWgy1gl8bm4ot9dj314r0opabq.jpg",onClick:f}),c(r(d),{title:"使用示例",column:1},{default:o((()=>[c(r(d).Item,{label:"阿里图标路径"},{default:o((()=>[c(x,{value:r(t).scriptUrl,"onUpdate:value":l[0]||(l[0]=e=>r(t).scriptUrl=e),style:{width:"400px"},placeholder:"请输入你的阿里巴巴矢量图标库项目图标的路径"},null,8,["value"]),y])),_:1}),c(r(d).Item,{label:"图标名字"},{default:o((()=>[c(x,{value:r(t).iconName,"onUpdate:value":l[1]||(l[1]=e=>r(t).iconName=e),placeholder:"请输入图标的名字",style:{width:"200px"}},null,8,["value"]),b])),_:1}),c(r(d).Item,{label:"效果"},{default:o((()=>[r(t).scriptUrl&&r(t).iconName?(i(),p(r(m),{key:0,"script-url":r(t).scriptUrl,type:r(t).iconName,size:"30"},null,8,["script-url","type"])):(i(),a("span",v,"可以复制示例的地址和图标查看效果"))])),_:1})])),_:1})])),_:1})])}}}))}}}));
