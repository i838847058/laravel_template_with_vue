(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed606062","chunk-2d0ccb97"],{"4ec3":function(e,r,t){"use strict";t.r(r),t.d(r,"order_baseUrl",function(){return n}),t.d(r,"product_baseUrl",function(){return o}),t.d(r,"package_baseUrl",function(){return u}),t.d(r,"detail_baseUrl",function(){return d}),t.d(r,"log_baseUrl",function(){return a});var n="/api/orders",o="/api/products",u="/api/packages",d="/api/details",a="/api/logs"},f8b7:function(e,r,t){"use strict";t.r(r),t.d(r,"getInfo",function(){return u}),t.d(r,"getInfoById",function(){return d}),t.d(r,"updateInfo",function(){return a}),t.d(r,"deleteInfoById",function(){return c}),t.d(r,"addInfo",function(){return i}),t.d(r,"deleteAll",function(){return l}),t.d(r,"getProductsById",function(){return s}),t.d(r,"getEnableProductsById",function(){return b}),t.d(r,"getSummaryById",function(){return m});var n=t("1c1e"),o=t("4ec3");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;arguments.length>3&&arguments[3];return Object(n["a"])({url:o["order_baseUrl"],method:"get",params:{page:r,pageSize:t,order_number:e.order_number,merchant_number:e.merchant_number,merchant_name:e.merchant_name,status:e.status}})}function d(e){return Object(n["a"])({url:o["order_baseUrl"]+"/"+e,method:"get"})}function a(e,r){return"string"===typeof r.order_time?r.order_time=Math.ceil(Date.parse(r.order_time)/1e3):r.order_time=Math.ceil(r.order_time.getTime()/1e3),Object(n["a"])({url:o["order_baseUrl"]+"/"+e,method:"PATCH",data:r})}function c(e){return Object(n["a"])({url:o["order_baseUrl"]+"/"+e,method:"delete"})}function i(e){return e.order_time=Math.ceil(e.order_time.getTime()/1e3),Object(n["a"])({url:o["order_baseUrl"],method:"post",data:e})}function l(e){return Object(n["a"])({url:o["order_baseUrl"]+"/deleteAll",method:"post",data:{ids:e}})}function s(e){return Object(n["a"])({url:o["order_baseUrl"]+"/"+e+"/products",method:"get"})}function b(e){return Object(n["a"])({url:o["order_baseUrl"]+"/"+e+"/enable",method:"get"})}function m(e){return Object(n["a"])({url:o["order_baseUrl"]+"/"+e+"/summary",method:"get"})}}}]);