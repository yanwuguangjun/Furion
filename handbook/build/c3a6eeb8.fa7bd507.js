(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(198)),l={id:"datavalidator",title:"3. DataValidator \u9759\u6001\u7c7b",sidebar_label:"3. DataValidator \u9759\u6001\u7c7b"},i={unversionedId:"global/datavalidator",id:"global/datavalidator",isDocsHomePage:!1,title:"3. DataValidator \u9759\u6001\u7c7b",description:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",source:"@site/docs\\global\\datavalidator.mdx",slug:"/global/datavalidator",permalink:"/furion/docs/global/datavalidator",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/global/datavalidator.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,sidebar_label:"3. DataValidator \u9759\u6001\u7c7b",sidebar:"global",previous:{title:"2. Db \u9759\u6001\u7c7b",permalink:"/furion/docs/global/db"},next:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/furion/docs/global/oops"}},c=[{value:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",children:[]},{value:"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c",id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]}],u={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"},"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var result = DataValidator.TryValidateObject(obj);\n")),Object(o.b)("h2",{id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var result = DataValidator.TryValidateValue(value, typeof(RequiredAttribure), typeof(RangeAttribute));\n")),Object(o.b)("h2",{id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'var result = DataValidator.TryValidateValue(value,"\u6b63\u5219\u8868\u8fbe\u5f0f");\n')),Object(o.b)("h2",{id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var result = DataValidator.TryValidateValue(value, ValidationTypes.Number);\n\nvar result2 = DataValidator.TryValidateValue(value, ValidationPattern.AllOfThem, ValidationTypes.Number, ValidationTypes.Required);\n")))}d.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(a),s=r,f=p["".concat(l,".").concat(s)]||p[s]||b[s]||o;return a?n.a.createElement(f,i(i({ref:t},u),{},{components:a})):n.a.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);