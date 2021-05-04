(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6594],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2609:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=t(4034),a=t(9973),r=(t(7294),t(3905)),i={id:"mongodb",title:"10.3. MongoDB \u64cd\u4f5c",sidebar_label:"10.3. MongoDB \u64cd\u4f5c"},c={unversionedId:"mongodb",id:"mongodb",isDocsHomePage:!1,title:"10.3. MongoDB \u64cd\u4f5c",description:"10.3.1 \u5173\u4e8e MongoDB",source:"@site/docs/mongodb.mdx",sourceDirName:".",slug:"/mongodb",permalink:"/furion/docs/mongodb",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/mongodb.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1620105709,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"10.3. MongoDB \u64cd\u4f5c",frontMatter:{id:"mongodb",title:"10.3. MongoDB \u64cd\u4f5c",sidebar_label:"10.3. MongoDB \u64cd\u4f5c"},sidebar:"docs",previous:{title:"10.2. Dapper \u96c6\u6210",permalink:"/furion/docs/dapper"},next:{title:"11. SaaS \u591a\u79df\u6237",permalink:"/furion/docs/saas"}},l=[{value:"10.3.1 \u5173\u4e8e MongoDB",id:"1031-\u5173\u4e8e-mongodb",children:[]},{value:"10.3.2 \u5982\u4f55\u96c6\u6210",id:"1032-\u5982\u4f55\u96c6\u6210",children:[{value:"10.3.2.1 \u6ce8\u518c <code>MongoDB</code> \u670d\u52a1",id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1",children:[]}]},{value:"10.3.3 \u57fa\u672c\u4f7f\u7528",id:"1033-\u57fa\u672c\u4f7f\u7528",children:[{value:"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50",id:"10331-\u5e38\u89c1\u4f8b\u5b50",children:[]}]},{value:"10.3.3.2 \u83b7\u53d6 <code>MongoClient</code> \u5bf9\u8c61",id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61",children:[]},{value:"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1031-\u5173\u4e8e-mongodb"},"10.3.1 \u5173\u4e8e MongoDB"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," \u8bed\u8a00\u7f16\u5199\u3002\u65e8\u5728\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB")," \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u4ecb\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u4ea7\u54c1\uff0c\u662f\u975e\u5173\u7cfb\u6570\u636e\u5e93\u5f53\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u50cf\u5173\u7cfb\u6570\u636e\u5e93\u7684\u3002"),(0,r.kt)("h2",{id:"1032-\u5982\u4f55\u96c6\u6210"},"10.3.2 \u5982\u4f55\u96c6\u6210"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u62d3\u5c55\u5305 ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.MongoDB"},"Furion.Extras.DatabaseAccessor.MongoDB"),"\u3002"),(0,r.kt)("h3",{id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1"},"10.3.2.1 \u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoDB")," \u670d\u52a1"),(0,r.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"services.AddMongoDB(connectionString)")," \u5373\u53ef\u3002\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// \u65b9\u5f0f\u4e00\nservices.AddMongoDB("mongodb://localhost:27017");\n\n// \u65b9\u5f0f\u4e8c\nservices.AddMongoDB(new MongoClientSettings {});\n\n// \u65b9\u5f0f\u4e09\nservices.AddMongoDB(new MongoUrl {});\n')),(0,r.kt)("h2",{id:"1033-\u57fa\u672c\u4f7f\u7528"},"10.3.3 \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u63a5\u53e3\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u975e\u6cdb\u578b\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private readonly IMongoDBRepository _mongoRepository;\npublic PersonService(IMongoDBRepository mongoRepository)\n{\n    _mongoRepository = mongoRepository;\n}\n")),(0,r.kt)("h3",{id:"10331-\u5e38\u89c1\u4f8b\u5b50"},"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<BsonDocument>("bar");\n\nawait collection.InsertOneAsync(new BsonDocument("Name", "Jack"));\n\nvar list = await collection.Find(new BsonDocument("Name", "Jack"))\n    .ToListAsync();\n\nforeach(var document in list)\n{\n    Console.WriteLine(document["Name"]);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Person\n{\n    public ObjectId Id { get; set; }\n    public string Name { get; set; }\n}\n\nvar database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<Person>("bar");\n\nawait collection.InsertOneAsync(new Person { Name = "Jack" });\n\nvar list = await collection.Find(x => x.Name == "Jack")\n                           .ToListAsync();\n\nforeach(var person in list)\n{\n    Console.WriteLine(person.Name);\n}\n')),(0,r.kt)("h2",{id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61"},"10.3.3.2 \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"MongoClient")," \u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u53ea\u5c01\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u57fa\u7840\u529f\u80fd\uff0c\u5982\u9700\u83b7\u53d6\u66f4\u591a\u64cd\u4f5c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".Context")," \u5c5e\u6027\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoClient")," \u5bf9\u8c61\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var client = _mongoRepository.Context;\n")),(0,r.kt)("h2",{id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://hub.fastgit.org/mongodb/mongo-csharp-driver"},"MongoDB \u4ed3\u5e93"),"\u3002"))))}p.isMDXComponent=!0}}]);