System.register(["./vendor-legacy.8528c51e.js","./index-legacy.f25f109a2.js"],(function(e){"use strict";var t,i,l,s,n,r,u,a,o,c,p,d,m,g,v;return{setters:[function(e){t=e.b,i=e.o,l=e.e,s=e.D,n=e.E,r=e.Q,u=e.ad,a=e.bZ,o=e.bo,c=e.h,p=e.t,d=e.F,m=e.r,g=e.G,v=e.f},function(){}],execute:function(){const f=c("的前端项目是基于Vue3.x、Vite2.x、 Ant-Design-Vue3.x 、TypeScript4.x开发， 内置了动态路由、权限验证、并提供了常用的功能组件，帮助你快速搭建企业级中后台产品原型。 原则上不会限制任何代码用于商用。 "),y=v("a",{href:"https://qm.qq.com/cgi-bin/qm/qr?k=ID-KcAOdPUPWVgAnsPLF3gRdHLc8GURO&jump_from=webapi",target:"_blank"}," 点击链接加入群聊 ",-1);e("default",t({setup(e){const{pkg:t,lastBuildTime:v}={pkg:{name:"vite-vue3-admin",version:"1.0.2",author:{name:"buqiyuan",email:"1743369777@qq.com",url:"https://github.com/buqiyuan"},scripts:{serve:"npm run dev",dev:"vite",build:"cross-env NODE_ENV=production vite build",preview:"npm run build && vite preview","preview:dist":"vite preview",deploy:"npm run build && npx gh-pages -d dist","clean:cache":"npx rimraf node_modules/.cache/ && npx rimraf node_modules/.vite","clean:lib":"npx rimraf node_modules","lint:eslint":'eslint --cache --max-warnings 0  "{src,mock}/**/*.{vue,ts,tsx}" --fix',"lint:prettier":'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',"lint:lint-staged":"lint-staged",prepare:"husky install",postversion:"git push && git push origin --tags",reinstall:"rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run dev",version:"conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md","test:gzip":"npx http-server dist --cors --gzip -c-1","test:br":"npx http-server dist --cors --brotli -c-1"},dependencies:{"@ant-design/icons-vue":"^6.1.0","@vue/runtime-core":"^3.2.31","@vueuse/core":"^8.0.1","ant-design-vue":"3.1.0-rc.0",axios:"^0.26.1","core-js":"^3.21.1",dayjs:"^1.11.0","file-saver":"^2.0.5","lodash-es":"^4.17.21",mitt:"^3.0.0",nprogress:"^1.0.0-1",pinia:"2.0.12",qs:"^6.10.3","socket.io-client":"^4.4.1",sortablejs:"^1.14.0",vue:"^3.2.31","vue-i18n":"9.2.0-beta.30","vue-router":"^4.0.14","vue-types":"^4.1.1",xlsx:"^0.18.4"},devDependencies:{"@commitlint/cli":"^16.2.3","@commitlint/config-conventional":"^16.2.1","@types/lodash-es":"^4.17.6","@types/node":"^17.0.21","@typescript-eslint/eslint-plugin":"^5.15.0","@typescript-eslint/parser":"^5.15.0","@vitejs/plugin-legacy":"^1.7.1","@vitejs/plugin-vue":"^2.2.4","@vitejs/plugin-vue-jsx":"^1.3.8",commitizen:"^4.2.4","conventional-changelog-cli":"^2.2.2","cross-env":"^7.0.3",eslint:"^8.11.0","eslint-config-prettier":"^8.5.0","eslint-define-config":"^1.2.5","eslint-plugin-import":"2.25.4","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.5.0",husky:"^7.0.4",less:"^4.1.2","lint-staged":"^12.3.6",mockjs:"^1.1.0","postcss-html":"^1.3.0",prettier:"^2.6.0",stylelint:"^14.5.3","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^7.0.0","stylelint-config-standard":"^25.0.0","stylelint-order":"^5.0.0",typescript:"^4.6.2","unplugin-vue-define-options":"^0.4.0",vite:"^2.8.6","vite-plugin-eslint":"^1.3.0","vite-plugin-mock":"^2.9.6","vite-plugin-style-import":"^1.4.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-windicss":"^1.8.3","vue-eslint-parser":"^8.3.0",windicss:"^3.5.1"},__npminstall_done:!1,repository:{type:"git",url:"https://github.com/buqiyuan/vite-vue3-admin"},homepage:"https://buqiyuan.gitee.io/vite-vue3-admin",keywords:["vue","ant-design-vue","vue3","ts","tsx","admin","typescript"],license:"MIT",engines:{node:"^12 || >=14"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix","prettier --write"],"{!(package)*.json,*.code-snippets,.!(browserslist)*rc}":["prettier --write--parser json"],"package.json":["prettier --write"],"*.vue":["eslint --fix","prettier --write","stylelint --fix"],"*.{scss,less,styl,html}":["stylelint --fix","prettier --write"],"*.md":["prettier --write"]},target:"web"},lastBuildTime:"2022-03-16 16:43:42"},b=({url:e="",text:t})=>s("a",{href:`https://www.npmjs.com/package/${e}`,target:"_blank"},[t]);return(e,x)=>(i(),l("div",null,[s(r(u),null,{default:n((()=>[s(r(u).Meta,{title:"关于"},{description:n((()=>[s(b,{url:r(t).author.url,text:r(t).name},null,8,["url","text"]),f])),_:1})])),_:1}),s(r(u),{class:"mt-3"},{default:n((()=>[s(r(a),{title:"项目信息",column:2,bordered:""},{default:n((()=>[s(r(a).Item,{label:"版本"},{default:n((()=>[s(r(o),{color:"processing"},{default:n((()=>[c(p(r(t).version),1)])),_:1})])),_:1}),s(r(a).Item,{label:"最后编译时间"},{default:n((()=>[s(r(o),{color:"processing"},{default:n((()=>[c(p(r(v)),1)])),_:1})])),_:1}),s(r(a).Item,{label:"GitHub"},{default:n((()=>[s(b,{url:r(t).repository.url,text:"GitHub"},null,8,["url"])])),_:1}),s(r(a).Item,{label:"预览地址"},{default:n((()=>[s(b,{url:r(t).homepage,text:"预览地址"},null,8,["url"])])),_:1}),s(r(a).Item,{label:"QQ交流群","label-align":"left",align:"left"},{default:n((()=>[y])),_:1})])),_:1})])),_:1}),s(r(u),{class:"mt-3"},{default:n((()=>[s(r(a),{title:"生产环境依赖",bordered:""},{default:n((()=>[(i(!0),l(d,null,m(r(t).dependencies,((e,t)=>(i(),g(r(a).Item,{key:t,label:t},{default:n((()=>[s(b,{url:t,text:e},null,8,["url","text"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),s(r(u),{class:"mt-3"},{default:n((()=>[s(r(a),{title:"开发环境依赖",bordered:""},{default:n((()=>[(i(!0),l(d,null,m(r(t).devDependencies,((e,t)=>(i(),g(r(a).Item,{key:t,label:t},{default:n((()=>[s(b,{url:t,text:e},null,8,["url","text"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1})]))}}))}}}));
