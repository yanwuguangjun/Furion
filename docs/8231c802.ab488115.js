(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(198)),b={id:"entity",title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",sidebar_label:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53"},c={unversionedId:"entity",id:"entity",isDocsHomePage:!1,title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",description:"9.3.1 \u6570\u636e\u5e93\u5b9e\u4f53",source:"@site/docs\\entity.mdx",slug:"/entity",permalink:"/docs/entity",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/entity.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,sidebar_label:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",sidebar:"docs",previous:{title:"9.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668",permalink:"/docs/dbcontext-locator"},next:{title:"9.4 \u4ed3\u50a8\u6a21\u5f0f",permalink:"/docs/dbcontext-repository"}},l=[{value:"9.3.1 \u6570\u636e\u5e93\u5b9e\u4f53",id:"931-\u6570\u636e\u5e93\u5b9e\u4f53",children:[]},{value:"9.3.2 \u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53",id:"932-\u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53",children:[{value:"9.3.2.1 \u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219",id:"9321-\u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219",children:[]},{value:"9.3.2.2 <code>IEntity</code> \u793a\u8303\uff1a",id:"9322-ientity-\u793a\u8303\uff1a",children:[]},{value:"9.3.2.2 <code>EntityBase</code> \u793a\u8303\uff1a",id:"9322-entitybase-\u793a\u8303\uff1a",children:[]},{value:"9.3.2.3 <code>Entity</code> \u793a\u8303\uff1a",id:"9323-entity-\u793a\u8303\uff1a",children:[]},{value:"9.3.2.4 <code>EntityNotKey</code> \u793a\u8303\uff1a",id:"9324-entitynotkey-\u793a\u8303\uff1a",children:[]}]},{value:"9.3.3 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e",id:"933-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e",children:[{value:"9.3.3.1 \u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e",id:"9331-\u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e",children:[]},{value:"9.3.3.2 \u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e",id:"9332-\u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e",children:[]}]},{value:"9.3.4 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e",id:"934-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e",children:[]},{value:"9.3.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"935-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],o={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"931-\u6570\u636e\u5e93\u5b9e\u4f53"},"9.3.1 \u6570\u636e\u5e93\u5b9e\u4f53"),Object(r.b)("p",null,"\u5728\u9762\u5411\u5bf9\u8c61\u5f00\u53d1\u601d\u60f3\u4e2d\uff0c\u6700\u91cd\u8981\u5c24\u4e3a",Object(r.b)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u4e8c\u5b57\uff0c\u5728 .NET \u5f00\u53d1\u8fc7\u53bb\uff0c\u64cd\u4f5c\u6570\u636e\u5e93\u5f80\u5f80\u91c7\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"DataTable")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"DataSet")," \u6765\u63a5\u6536\u6570\u636e\u5e93\u8fd4\u56de\u7ed3\u679c\u96c6\uff0c\u800c\u64cd\u4f5c\u6570\u636e\u5e93\u4e5f\u79bb\u4e0d\u5f00\u624b\u5199 ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002"),Object(r.b)("p",null,"\u5728\u8fc7\u53bb\u9762\u5411\u8fc7\u7a0b\u548c\u5e94\u7528\u4e0d\u53d1\u8fbe\u7684\u65f6\u4ee3\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u786e\u5b9e\u597d\u4f7f\u3002\u7136\u540e\u968f\u7740\u4e2d\u56fd\u4e92\u8054\u7f51\u7f51\u6c11\u7684\u6fc0\u589e\uff0c\u7535\u5b50\u5316\u65f6\u4ee3\u7684\u5230\u6765\uff0c\u5404\u884c\u5404\u4e1a\u5bf9\u5e94\u7528\u9700\u6c42\u4e5f\u8fbe\u5230\u4e86\u524d\u6240\u672a\u6709\u7684\u91cf\u7ea7\u3002"),Object(r.b)("p",null,"\u6240\u4ee5\uff0c\u5728\u8fc7\u53bb\u624b\u5199 ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u7684\u65f6\u4ee3\u5404\u79cd\u95ee\u9898\u663e\u9732\u65e0\u7591\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u5458\u80fd\u529b\u53c2\u5dee\u4e0d\u9f50\uff0c\u5199\u51fa\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"sql")," \u6027\u80fd\u81ea\u7136\u4e5f\u5929\u5dee\u5730\u522b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sql")," \u5c5e\u4e8e\u5b57\u7b26\u4e32\u786c\u7f16\u7a0b\uff0c\u540e\u671f\u7ef4\u62a4\u96be\u4e0a\u52a0\u96be"),Object(r.b)("li",{parentName:"ul"},"\u8bb8\u591a\u5355\u8868\u751a\u81f3\u591a\u8868\u7ed3\u6784\u4e00\u81f4\uff0c\u51fa\u73b0\u5927\u91cf\u91cd\u590d ",Object(r.b)("inlineCode",{parentName:"li"},"sql")," \u4ee3\u7801"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sql")," \u672c\u8eab\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u4e2d\u5199\u6cd5\u6709\u5dee\uff0c\u540e\u7eed\u8fc1\u79fb\u5934\u75db\u4e0d\u5df2")),Object(r.b)("p",null,"\u5f53\u7136\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u662f\u65f6\u4ee3\u7684\u4ea7\u7269\uff0c\u6211\u4eec\u4e5f\u79bb\u4e0d\u5f00 ",Object(r.b)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u4f46\u5bf9\u4e8e\u5927\u591a\u6570\u7a0b\u5e8f\u5458\u548c\u9879\u76ee\u6765\u8bf4\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u672a\u5fc5\u80fd\u591f\u5e26\u7ed9\u4ed6\u4eec\u591a\u5927\u7684\u6548\u76ca\u3002"),Object(r.b)("p",null,"\u6240\u4ee5\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"ORM")," \u5c31\u8bde\u751f\u4e86\uff0c\u6240\u8c13\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"ORM")," \u5c31\u662f\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\uff0c\u82f1\u6587\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"Object Relational Mapping"),"\uff0c\u7b80\u5355\u70b9\u8bf4\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"ORM")," \u6839\u636e\u7279\u6709\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"POCO \u8d2b\u8840\u6a21\u578b")," \u89c4\u5219\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002\u5927\u5927\u907f\u514d\u4e86\u91cd\u590d ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u80fd\u529b\u53c2\u5dee\u4e0d\u9f50\u7b49\u95ee\u9898\u3002\uff08\u5f53\u7136 ",Object(r.b)("inlineCode",{parentName:"p"},"ORM")," \u4f5c\u8005 ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u80fd\u529b\u4e5f\u4f1a\u5f71\u54cd\u6700\u7ec8\u6027\u80fd\uff09"),Object(r.b)("p",null,"\u4e0a\u9762\u6240\u8bf4\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"POCO")," \u8d2b\u8840\u6a21\u578b\u6b63\u662f\u6211\u4eec\u672c\u7ae0\u8282\u7684 ",Object(r.b)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u5b9e\u4f53"),"\u3002"),Object(r.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u5c31\u662f\u6570\u636e\u5e93\u8868\u7684\u7c7b\u8868\u73b0\uff0c\u901a\u8fc7\u4e00\u5b9a\u7684\u89c4\u5219\u4f7f\u8fd9\u4e2a\u7c7b\u80fd\u591f\u4e00\u4e00\u5bf9\u5e94\u8868\u7ed3\u6784\u3002\u901a\u5e38\u8fd9\u6837\u7684\u7c7b\u4e5f\u79f0\u4e3a\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"POCO")," \u8d2b\u8840\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u53ea\u6709\u5b9a\u4e49\uff0c\u6ca1\u6709\u884c\u4e3a\u3002"),Object(r.b)("h2",{id:"932-\u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53"},"9.3.2 \u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u591a\u79cd\u5b9a\u4e49\u5b9e\u4f53\u7684\u63a5\u53e3\u4f9d\u8d56\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IEntity"),"\uff1a\u5b9e\u4f53\u57fa\u63a5\u53e3\uff0c\u662f\u6240\u6709\u5b9e\u4f53\u7684\u57fa\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IEntityNotKey"),"\uff1a\u65e0\u952e\u5b9e\u4f53\u63a5\u53e3\uff0c\u4e5f\u5c31\u662f\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u4f9d\u8d56\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EntityBase"),"\uff1a\u5b9e\u4f53\u57fa\u62bd\u8c61\u7c7b\uff0c\u5185\u7f6e\u4e86 ",Object(r.b)("inlineCode",{parentName:"li"},"Id"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"TenantId")," \u5b57\u6bb5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Entity"),"\uff1a\u5b9e\u4f53\u901a\u7528\u62bd\u8c61\u7c7b\uff0c\u7ee7\u627f\u81ea ",Object(r.b)("inlineCode",{parentName:"li"},"EntityBase"),"\uff0c\u540c\u65f6\u5185\u7f6e ",Object(r.b)("inlineCode",{parentName:"li"},"CreatedTime"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"UpdatedTime"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"IsDeleted")," \u5b57\u6bb5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EntityNotKey"),"\uff1a\u65e0\u952e\u5b9e\u4f53\u62bd\u8c61\u7c7b\uff0c\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u4f9d\u8d56\u62bd\u8c61\u7c7b")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b9e\u4f53\u5b9a\u4e49\u4f4d\u7f6e")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u6709\u7ea6\u5b9a\uff0c\u5b9e\u4f53\u7edf\u4e00\u5b9a\u4e49\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u3002"))),Object(r.b)("h3",{id:"9321-\u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219"},"9.3.2.1 \u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u9700\u8981 ",Object(r.b)("inlineCode",{parentName:"li"},"Furion")," \u4e3a\u5b9e\u4f53\u6dfb\u52a0\u4efb\u4f55\u5185\u7f6e\u7279\u6027\uff0c\u9009\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"IEntity"),"\uff0c\u65e0\u952e\u5b9e\u4f53\u9009\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"IEntityNotKey")),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u53ea\u9700\u8981 ",Object(r.b)("inlineCode",{parentName:"li"},"Id")," \u5c5e\u6027\uff0c\u9009\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"EntityBase")),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981 ",Object(r.b)("inlineCode",{parentName:"li"},"Furion")," \u4e3a\u4f60\u81ea\u52a8\u6dfb\u52a0\u5e38\u7528\u5b57\u6bb5\uff0c\u5219\u9009\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"Entity")),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"DbSet")," \u64cd\u4f5c\uff0c\u5219\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"li"},"EntityNotKey"))),Object(r.b)("h3",{id:"9322-ientity-\u793a\u8303\uff1a"},"9.3.2.2 ",Object(r.b)("inlineCode",{parentName:"h3"},"IEntity")," \u793a\u8303\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5}","{1,5}":!0}),"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : IEntity\n    {\n        /// <summary>\n        /// \u624b\u5de5\u5b9a\u4e49 Id\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),Object(r.b)("h3",{id:"9322-entitybase-\u793a\u8303\uff1a"},"9.3.2.2 ",Object(r.b)("inlineCode",{parentName:"h3"},"EntityBase")," \u793a\u8303\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5}","{1,5}":!0}),"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : EntityBase\n    {\n        // \u65e0\u9700\u5b9a\u4e49 Id \u5c5e\u6027\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),Object(r.b)("h3",{id:"9323-entity-\u793a\u8303\uff1a"},"9.3.2.3 ",Object(r.b)("inlineCode",{parentName:"h3"},"Entity")," \u793a\u8303\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5}","{1,5}":!0}),"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : Entity\n    {\n        // \u65e0\u9700\u5b9a\u4e49 Id \u5c5e\u6027\n        // \u5e76\u81ea\u52a8\u6dfb\u52a0 CreatedTime\uff0cUpdateTime\uff0cIsDeleted \u5c5e\u6027\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),Object(r.b)("h3",{id:"9324-entitynotkey-\u793a\u8303\uff1a"},"9.3.2.4 ",Object(r.b)("inlineCode",{parentName:"h3"},"EntityNotKey")," \u793a\u8303\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,7-9}","{1,5,7-9}":!0}),'using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class UserView : EntityNotKey\n    {\n        public UserView() : base("\u89c6\u56fe\u540d\u79f0")\n        {\n        }\n\n        /// <summary>\n        /// Id\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," \u624d\u80fd\u8fdb\u884c\u4ed3\u50a8\u7b49\u64cd\u4f5c\u3002"))),Object(r.b)("h2",{id:"933-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e"},"9.3.3 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e"),Object(r.b)("p",null,"\u5728\u8fc7\u53bb\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u9700\u8981\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"OnModelCreating")," \u4e2d\u914d\u7f6e\u3002",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u4e3a\u4e86\u7b80\u5316\u914d\u7f6e\u548c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u62bd\u8c61\u51fa\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"IEntityTypeBuilder<TEntity>")," \u63a5\u53e3\u3002"),Object(r.b)("p",null,"\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"IEntityTypeBuilder<TEntity>")," \u63a5\u53e3\uff0c\u6211\u4eec\u65e0\u9700\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"OnModelCreating")," \u4e2d\u914d\u7f6e\uff0c\u53ef\u5728\u4efb\u610f\u5730\u65b9\u914d\u7f6e\u3002"),Object(r.b)("h3",{id:"9331-\u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e"},"9.3.3.1 \u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,20-25}","{1,5,20-25}":!0}),"using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Furion.Core\n{\n    public class User : Entity, IEntityTypeBuilder<User>\n    {\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        // \u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f53\n        public void Configure(EntityTypeBuilder<User> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasKey(u => u.Id);\n            entityBuilder.HasIndex(u => u.Name);\n        }\n    }\n}\n")),Object(r.b)("h3",{id:"9332-\u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e"},"9.3.3.2 \u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,8,10-14}","{1,8,10-14}":!0}),"using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Furion.Core\n{\n    public class SomeClass : IEntityTypeBuilder<User>\n    {\n        public void Configure(EntityTypeBuilder<User> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasKey(u => u.Id);\n            entityBuilder.HasIndex(u => u.Name);\n        }\n    }\n}\n")),Object(r.b)("p",null,"\u5982\uff0c\u4e0a\u9762\u4f8b\u5b50\uff0c\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"SomeClass")," \u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"User")," \u6570\u636e\u5e93\u5b9e\u4f53\u3002"),Object(r.b)("h2",{id:"934-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e"},"9.3.4 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u81ea\u52a8\u626b\u63cf\u6240\u6709\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"IEntity")," \u63a5\u53e3\u7684\u7c7b\u8fdb\u884c ",Object(r.b)("inlineCode",{parentName:"p"},"DbSet<TEntity>")," \u6ce8\u518c\uff0c\u4e5f\u5c31\u662f\u5b9e\u73b0\u81ea\u52a8\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"OnModelCreating"),"\u3002"),Object(r.b)("p",null,"\u5982\u679c\u9700\u8981\u8df3\u8fc7\u81ea\u52a8\u6ce8\u518c\uff0c\u53ea\u9700\u8981\u8d34 ",Object(r.b)("inlineCode",{parentName:"p"},"[NonAutomatic]")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"[SkipScan]")," \u7279\u6027\u5373\u53ef\u3002\u4e00\u65e6\u8d34\u4e86\u6b64\u7279\u6027\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u624b\u52a8\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"OnModelCreating")),Object(r.b)("h2",{id:"935-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.3.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),p=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,u=s["".concat(b,".").concat(m)]||s[m]||d[m]||r;return t?i.a.createElement(u,c(c({ref:n},o),{},{components:t})):i.a.createElement(u,c({ref:n},o))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,b=new Array(r);b[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<r;o++)b[o]=t[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);