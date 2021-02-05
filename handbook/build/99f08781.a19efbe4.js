(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{147:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(198)),i={id:"jsonserializer",title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b"},l={unversionedId:"global/jsonserializer",id:"global/jsonserializer",isDocsHomePage:!1,title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",description:"7.1 \u5e8f\u5217\u5316",source:"@site/docs\\global\\jsonserializer.mdx",slug:"/global/jsonserializer",permalink:"/furion/docs/global/jsonserializer",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/global/jsonserializer.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,sidebar_label:"7. JsonSerializerUtility \u9759\u6001\u7c7b",sidebar:"global",previous:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/furion/docs/global/shttp"},next:{title:"8. L \u9759\u6001\u7c7b",permalink:"/furion/docs/global/l"}},c=[{value:"7.1 \u5e8f\u5217\u5316",id:"71-\u5e8f\u5217\u5316",children:[]},{value:"7.3 \u53cd\u5e8f\u5217\u5316",id:"73-\u53cd\u5e8f\u5217\u5316",children:[]},{value:"7.4 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",id:"74-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e",children:[]}],s={toc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"71-\u5e8f\u5217\u5316"},"7.1 \u5e8f\u5217\u5316"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"var str = JsonSerializerUtility.Serialize(obj, [options]);\n")),Object(a.b)("h2",{id:"73-\u53cd\u5e8f\u5217\u5316"},"7.3 \u53cd\u5e8f\u5217\u5316"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"var obj = JsonSerializerUtility.Deserialize<T>(str, [options]);\n")),Object(a.b)("h2",{id:"74-\u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"},"7.4 \u83b7\u53d6\u9ed8\u8ba4\u5e8f\u5217\u5316\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"var options = JsonSerializerUtility.GetDefaultJsonSerializerOptionss);\n")))}u.isMDXComponent=!0},198:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(f,l(l({ref:r},s),{},{components:t})):o.a.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);