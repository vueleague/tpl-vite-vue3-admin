import{i as t,q as u,w as s}from"./index.ba2a0c35.js";function o(e){return t({url:u.info,method:"get",params:e})}function n(e){return t({url:u.list,method:"get",data:e})}function a(e){return t({url:u.page,method:"get",params:e})}function d(e){return t({url:u.add,method:"post",data:e},{successMsg:"\u521B\u5EFA\u89D2\u8272\u6210\u529F"})}function l(e){return t({url:u.update,method:"post",data:e},{successMsg:"\u66F4\u65B0\u89D2\u8272\u6210\u529F"})}function p(e){return t({url:u.delete,method:"post",data:e},{successMsg:"\u5220\u9664\u89D2\u8272\u6210\u529F"})}function c(){return t({url:s.list,method:"get"})}function i(e){return t({url:"sys/dept/delete",method:"post",data:e},{successMsg:"\u5220\u9664\u6210\u529F"})}function f(e){return t({url:s.update,method:"post",data:e})}function g(e){return t({url:s.add,method:"post",data:e})}function m(e){return t({url:s.transfer,method:"post",data:e})}export{c as a,a as b,g as c,i as d,l as e,d as f,n as g,o as h,p as i,m as t,f as u};
