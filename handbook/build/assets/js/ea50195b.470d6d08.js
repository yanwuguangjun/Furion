(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5434],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,N=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(N,o(o({ref:n},m),{},{components:t})):a.createElement(N,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2433:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=t(4034),i=t(9973),r=(t(7294),t(3905)),o={id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",sidebar_label:"23. JSON \u5e8f\u5217\u5316"},s=void 0,l={unversionedId:"json-serialization",id:"json-serialization",isDocsHomePage:!1,title:"23. JSON \u5e8f\u5217\u5316",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 1.16.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/json-serialization.mdx",sourceDirName:".",slug:"/json-serialization",permalink:"/furion/docs/json-serialization",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/json-serialization.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1625735152,formattedLastUpdatedAt:"7/8/2021",frontMatter:{id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",sidebar_label:"23. JSON \u5e8f\u5217\u5316"},sidebar:"docs",previous:{title:"22. \u4e8b\u4ef6\u603b\u7ebf",permalink:"/furion/docs/event-bus"},next:{title:"24. \u5373\u65f6\u901a\u8baf",permalink:"/furion/docs/signalr"}},p=[{value:"23.1 \u4ec0\u4e48\u662f <code>JSON</code>",id:"231-\u4ec0\u4e48\u662f-json",children:[]},{value:"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93",id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93",children:[]},{value:"23.3 <code>IJsonSerializerProvider</code> \u63a5\u53e3",id:"233-ijsonserializerprovider-\u63a5\u53e3",children:[]},{value:"23.4 \u5982\u4f55\u4f7f\u7528",id:"234-\u5982\u4f55\u4f7f\u7528",children:[{value:"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",children:[]},{value:"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61",id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61",children:[]},{value:"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",children:[]},{value:"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",children:[]}]},{value:"23.5 \u9ad8\u7ea7\u7528\u6cd5",id:"235-\u9ad8\u7ea7\u7528\u6cd5",children:[{value:"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",children:[]},{value:"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09",id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09",children:[]},{value:"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316",id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316",children:[]},{value:"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528",id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528",children:[]},{value:"23.5.5 \u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316",id:"2355-\u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316",children:[]},{value:"23.5.6 \u5141\u8bb8\u5c3e\u968f\u9017\u53f7",id:"2356-\u5141\u8bb8\u5c3e\u968f\u9017\u53f7",children:[]},{value:"23.5.7 \u5141\u8bb8\u6ce8\u91ca",id:"2357-\u5141\u8bb8\u6ce8\u91ca",children:[]},{value:"23.5.8 \u5904\u7406\u4e71\u7801\u95ee\u9898",id:"2358-\u5904\u7406\u4e71\u7801\u95ee\u9898",children:[]},{value:"23.5.9 \u4e0d\u533a\u5206\u5927\u5c0f\u5199",id:"2359-\u4e0d\u533a\u5206\u5927\u5c0f\u5199",children:[]}]},{value:"23.6 <code>DataTable</code>\u3001<code>DataSet</code>\u3001<code>Tuple</code> \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",id:"236-datatable\u3001dataset\u3001tuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",children:[]},{value:"23.7 <code>System.Text.Json</code> \u548c <code>Newtonsoft.Json</code> \u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4",id:"237-systemtextjson-\u548c-newtonsoftjson-\u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4",children:[]},{value:"23.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"238-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,r.kt)("h2",{id:"231-\u4ec0\u4e48\u662f-json"},"23.1 \u4ec0\u4e48\u662f ",(0,r.kt)("inlineCode",{parentName:"h2"},"JSON")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JSON (JavaScript Object Notation, JS \u5bf9\u8c61\u6807\u8bb0) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u57fa\u4e8e ECMAScript (w3c \u5236\u5b9a\u7684 js \u89c4\u8303)\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u91c7\u7528\u5b8c\u5168\u72ec\u7acb\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u6587\u672c\u683c\u5f0f\u6765\u5b58\u50a8\u548c\u8868\u793a\u6570\u636e\u3002\u7b80\u6d01\u548c\u6e05\u6670\u7684\u5c42\u6b21\u7ed3\u6784\u4f7f\u5f97 JSON \u6210\u4e3a\u7406\u60f3\u7684\u6570\u636e\u4ea4\u6362\u8bed\u8a00\u3002 \u6613\u4e8e\u4eba\u9605\u8bfb\u548c\u7f16\u5199\uff0c\u540c\u65f6\u4e5f\u6613\u4e8e\u673a\u5668\u89e3\u6790\u548c\u751f\u6210\uff0c\u5e76\u6709\u6548\u5730\u63d0\u5347\u7f51\u7edc\u4f20\u8f93\u6548\u7387\u3002")),(0,r.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cJSON\uff0c\u662f\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u5728\u4e0e\u540e\u7aef\u7684\u6570\u636e\u4ea4\u4e92\u4e2d\u6709\u8f83\u4e3a\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),(0,r.kt)("h2",{id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93"},"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93"),(0,r.kt)("p",null,"\u76ee\u524d\u5728 C# \u8bed\u8a00\u4e2d\u6709\u4e24\u4e2a\u4e3b\u6d41\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," \u5e8f\u5217\u5316\u64cd\u4f5c\u5e93\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},".NET Core")," \u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u4e5f\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json"),"\uff1a\u76ee\u524d\u4f7f\u7528\u4eba\u6570\u6700\u591a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u9700\u8981\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\u5305")),(0,r.kt)("p",null,"\u7531\u4e8e\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u76f8\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u529f\u80fd\u548c\u7a33\u5b9a\u6027\u6709\u8bb8\u591a\u4e0d\u8db3\u4e4b\u5904\uff0c\u6bd4\u5982\u5faa\u73af\u5f15\u7528\u95ee\u9898\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u65e0\u89e3\u3002\u4f46\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 6")," \u4e4b\u540e\u5f97\u5230\u89e3\u51b3\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e3a\u4e86\u89e3\u51b3\u591a\u79cd\u5e8f\u5217\u5316\u5de5\u5177\u914d\u7f6e\u548c\u7528\u6cd5\u4e0a\u7684\u5dee\u5f02\u95ee\u9898\uff0c\u62bd\u8c61\u51fa\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"233-ijsonserializerprovider-\u63a5\u53e3"},"23.3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"IJsonSerializerProvider")," \u63a5\u53e3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u89c4\u8303\uff0c\u540c\u65f6",(0,r.kt)("strong",{parentName:"p"},"\u8981\u6c42\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u5b9e\u4f53\u90fd\u5fc5\u987b\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f"),"\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'namespace Furion.JsonSerialization\n{\n    /// <summary>\n    /// Json \u5e8f\u5217\u5316\u63d0\u4f9b\u5668\n    /// </summary>\n    public interface IJsonSerializerProvider\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <param name="inherit">\u662f\u5426\u7ee7\u627f\u5168\u5c40\u914d\u7f6e\uff0c\u9ed8\u8ba4 true</param>\n        /// <returns></returns>\n        string Serialize(object value, object jsonSerializerOptions = default, bool inherit = true);\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <param name="inherit">\u662f\u5426\u7ee7\u627f\u5168\u5c40\u914d\u7f6e\uff0c\u9ed8\u8ba4 true</param>\n        /// <returns></returns>\n        T Deserialize<T>(string json, object jsonSerializerOptions = default, bool inherit = true);\n\n        /// <summary>\n        /// \u8fd4\u56de\u8bfb\u53d6\u5168\u5c40\u914d\u7f6e\u7684 JSON \u9009\u9879\n        /// </summary>\n        /// <returns></returns>\n        object GetSerializerOptions();\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u9ed8\u8ba4\u5b9e\u73b0")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"SystemTextJsonSerializerProvider")," \u7c7b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5728\u5e94\u7528\u542f\u52a8\u65f6\u5df2\u9ed8\u8ba4\u6ce8\u518c\u3002"))),(0,r.kt)("h2",{id:"234-\u5982\u4f55\u4f7f\u7528"},"23.4 \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h3",{id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")),(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON.GetJsonSerializer()")," \u65b9\u5f0f\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u67e5\u770b ",(0,r.kt)("a",{parentName:"strong",href:"/furion/docs/global/json"},"JSON \u9759\u6001\u7c7b")))),(0,r.kt)("p",null,"\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{10,13}","{10,13}":!0},"using Furion.DynamicApiController;\nusing Furion.JsonSerialization;\n\nnamespace Furion.Application\n{\n    public class JsonDemo : IDynamicApiController\n    {\n        private readonly IJsonSerializerProvider _jsonSerializer;\n        private readonly IJsonSerializerProvider _jsonSerializer2;\n        public JsonDemo(IJsonSerializerProvider jsonSerializer)\n        {\n            _jsonSerializer = jsonSerializer;\n            _jsonSerializer2 = JSON.GetJsonSerializer();\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public string GetText()\n{\n    return _jsonSerializer.Serialize(new\n    {\n        Id = 1,\n        Name = "Furion"\n    });\n}\n')),(0,r.kt)("h3",{id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"},"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public object GetObject()\n{\n    var json = "{\\"Id\\":1,\\"Name\\":\\"Furion\\"}";\n    var obj = _jsonSerializer.Deserialize<object>(json);\n    return obj;\n}\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u9ed8\u8ba4\u53cd\u5e8f\u5217\u5316\u5927\u5c0f\u5199\u654f\u611f\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b8c\u5168\u5339\u914d\u7684\u5c5e\u6027\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u8d4b\u503c\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\u6216\u5355\u72ec\u914d\u7f6e\u3002"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u914d\u7f6e")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;\n        });\n")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u72ec\u914d\u7f6e")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var obj = _jsonSerializer.Deserialize<object>(json, new JsonSerializerOptions\n   {\n       PropertyNameCaseInsensitive = true\n   });\n")))),(0,r.kt)("h3",{id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"},"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e0d\u63a8\u8350\u4e00\u4e2a\u6846\u67b6\u4e2d\u6709\u591a\u79cd\u5e8f\u5217\u5316\u5b9e\u73b0\u7c7b\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5c31\u4e0d\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u914d\u7f6e\u66f4\u591a\u9009\u9879\uff0c\u53ea\u9700\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," \u914d\u7f6e\u5bf9\u8c61\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5}","{5}":!0},'var json =  _jsonSerializer.Serialize(new\n            {\n                Id = 1,\n                Name = "Furion"\n            }, new JsonSerializerOptions {\n                WriteIndented = true\n            });\n')),(0,r.kt)("h2",{id:"235-\u9ad8\u7ea7\u7528\u6cd5"},"23.5 \u9ad8\u7ea7\u7528\u6cd5"),(0,r.kt)("h3",{id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"},"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"),(0,r.kt)("p",null,"\u6b63\u5982\u4e0a\u6587\u6240\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u73b0\u65b9\u5f0f\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e93\uff0c\u5982\u9700\u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53ea\u9700\u4ee5\u4e0b\u6b65\u9aa4\u5373\u53ef\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\uff0c\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2}","{2}":!0},"services.AddControllersWithViews()\n        .AddNewtonsoftJson();\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")," \u63d0\u4f9b\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{10}","{10}":!0},'using Furion.DependencyInjection;\nusing Furion.JsonSerialization;\nusing Newtonsoft.Json;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// Newtonsoft.Json \u5b9e\u73b0\n    /// </summary>\n    public class NewtonsoftJsonSerializerProvider : IJsonSerializerProvider, ISingleton\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <param name="inherit">\u662f\u5426\u7ee7\u627f\u5168\u5c40\u914d\u7f6e\uff0c\u9ed8\u8ba4 true</param>\n        /// <returns></returns>\n        public string Serialize(object value, object jsonSerializerOptions = null, bool inherit = true)\n        {\n            return JsonConvert.SerializeObject(value, (jsonSerializerOptions ?? (inherit ? GetSerializerOptions() : default)) as JsonSerializerSettings);\n        }\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <param name="inherit">\u662f\u5426\u7ee7\u627f\u5168\u5c40\u914d\u7f6e\uff0c\u9ed8\u8ba4 true</param>\n        /// <returns></returns>\n        public T Deserialize<T>(string json, object jsonSerializerOptions = null, bool inherit = true)\n        {\n            return JsonConvert.DeserializeObject<T>(json, (jsonSerializerOptions ?? (inherit ? GetSerializerOptions() : default)) as JsonSerializerSettings);\n        }\n\n        /// <summary>\n        /// \u8fd4\u56de\u8bfb\u53d6\u5168\u5c40\u914d\u7f6e\u7684 JSON \u9009\u9879\n        /// </summary>\n        /// <returns></returns>\n        public object GetSerializerOptions()\n        {\n            return App.GetOptions<MvcNewtonsoftJsonOptions>()?.SerializerSettings;\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09"},"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n            // options.JsonSerializerOptions.DictionaryKeyPolicy = null;    // \u914d\u7f6e Dictionary \u7c7b\u578b\u5e8f\u5217\u5316\u8f93\u51fa\n        });\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ContractResolver = new DefaultContractResolver();\n        });\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u65b9\u5f0f\u63a5\u53e3\u8fd4\u56de\u503c\u80fd\u591f\u6b63\u5e38\u8f93\u51fa\uff0c\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u754c\u9762\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Example Values")," \u4f9d\u7136\u663e\u793a\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u5c5e\u6027\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u518d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},".AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n        });\n")),(0,r.kt)("p",{parentName:"div"},"\u4e3b\u8981\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u62d3\u5c55\u5305\u5e95\u5c42\u4f9d\u8d56\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json"),"\u3002"))),(0,r.kt)("h3",{id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316"},"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.Converters.AddDateFormatString("yyyy-MM-dd HH:mm:ss");\n        });\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5c0f\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeOffset")," \u7c7b\u578b\uff0c\u90a3\u4e48\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'.AddDateFormatString("yyyy-MM-dd HH:mm:ss", true)')," \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u81ea\u52a8\u8f6c\u6362\u6210\u672c\u5730\u65f6\u95f4\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Mysql")," \u6570\u636e\u5e93\uff0c\u4e14\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pomelo.EntityFrameworkCore.MySql")," \u5305\uff0c\u90a3\u4e48\u4f1a\u51fa\u73b0\u65f6\u533a\u95ee\u9898\uff0c\u6bd4\u5982\u5c11 8 \u5c0f\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u914d\u7f6e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"))),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";\n        });\n')),(0,r.kt)("h3",{id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528"},"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;\n        });\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 5")," \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e76\u4e0d\u652f\u6301\u5904\u7406\u5faa\u73af\u5f15\u7528\u95ee\u9898\uff0c\u4ee5\u4e0a\u7684\u89e3\u51b3\u65b9\u6848\u4ec5\u9650\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 6 Preview 2+"),"\u3002\ud83d\ude02"))),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;\n        });\n")),(0,r.kt)("h3",{id:"2355-\u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316"},"23.5.5 \u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.IncludeFields = true;\n        });\n")),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"2356-\u5141\u8bb8\u5c3e\u968f\u9017\u53f7"},"23.5.6 \u5141\u8bb8\u5c3e\u968f\u9017\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.AllowTrailingCommas = true;\n        });\n")),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"2357-\u5141\u8bb8\u6ce8\u91ca"},"23.5.7 \u5141\u8bb8\u6ce8\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.ReadCommentHandling = JsonCommentHandling.Skip;\n        });\n")),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"2358-\u5904\u7406\u4e71\u7801\u95ee\u9898"},"23.5.8 \u5904\u7406\u4e71\u7801\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping;\n        });\n")),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"2359-\u4e0d\u533a\u5206\u5927\u5c0f\u5199"},"23.5.9 \u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;\n        });\n")),(0,r.kt)("p",null,"\u9700\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u66f4\u591a\u5e8f\u5217\u5316\u914d\u7f6e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u53ea\u5217\u4e3e\u5e38\u7528\u89c1\u7684\u5e8f\u5217\u5316\u914d\u7f6e\uff0c\u5982\u9700\u67e5\u770b\u66f4\u591a\u914d\u7f6e\uff0c\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-configure-options?pivots=dotnet-5-0"},"System.Text.Json \u6587\u6863")))),(0,r.kt)("h2",{id:"236-datatable\u3001dataset\u3001tuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"},"23.6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"DataTable"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h2"},"DataSet"),"\u3001",(0,r.kt)("inlineCode",{parentName:"h2"},"Tuple")," \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"),(0,r.kt)("p",null,"\u7531\u4e8e\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4f46\u662f\u4e0d\u652f\u6301\u590d\u6742\u7c7b\u578b\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTable")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSet"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple")," \u5143\u7ec4\uff0c\u6240\u4ee5\u9700\u8981\u66f4\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"NewtonsoftJson")," \u5373\u53ef\uff0c\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"./json-serialization#2351-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%8F%E5%88%97%E5%8C%96%E6%8F%90%E4%BE%9B%E5%99%A8"},"JSON \u5e8f\u5217\u5316 - 23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668")),(0,r.kt)("h2",{id:"237-systemtextjson-\u548c-newtonsoftjson-\u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4"},"23.7 ",(0,r.kt)("inlineCode",{parentName:"h2"},"System.Text.Json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h2"},"Newtonsoft.Json")," \u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-migrate-from-newtonsoft-how-to?pivots=dotnet-5-0"},"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-migrate-from-newtonsoft-how-to?pivots=dotnet-5-0")),(0,r.kt)("h2",{id:"238-\u53cd\u9988\u4e0e\u5efa\u8bae"},"23.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}d.isMDXComponent=!0}}]);