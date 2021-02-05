(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),p=(a(0),a(198)),i={id:"dapper",title:"10.2. Dapper \u96c6\u6210",sidebar_label:"10.2. Dapper \u96c6\u6210"},o={unversionedId:"dapper",id:"dapper",isDocsHomePage:!1,title:"10.2. Dapper \u96c6\u6210",description:"10.2.1 \u5173\u4e8e Dapper",source:"@site/docs\\dapper.mdx",slug:"/dapper",permalink:"/docs/dapper",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dapper.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,sidebar_label:"10.2. Dapper \u96c6\u6210",sidebar:"docs",previous:{title:"10.1. SqlSugar \u96c6\u6210",permalink:"/docs/sqlsugar"},next:{title:"11. SaaS \u591a\u79df\u6237",permalink:"/docs/saas"}},c=[{value:"10.2.1 \u5173\u4e8e Dapper",id:"1021-\u5173\u4e8e-dapper",children:[]},{value:"10.2.2 \u5982\u4f55\u96c6\u6210",id:"1022-\u5982\u4f55\u96c6\u6210",children:[{value:"10.2.2.1 \u6ce8\u518c <code>Dapper</code> \u670d\u52a1",id:"10221-\u6ce8\u518c-dapper-\u670d\u52a1",children:[]},{value:"10.2.2.2 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"10222-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668",children:[]}]},{value:"10.2.3 \u57fa\u672c\u4f7f\u7528",id:"1023-\u57fa\u672c\u4f7f\u7528",children:[{value:"10.2.3.1 <code>sql</code> \u64cd\u4f5c",id:"10231-sql-\u64cd\u4f5c",children:[]},{value:"10.2.3.2 <code>&lt;TEntity&gt;</code> \u64cd\u4f5c",id:"10232-tentity-\u64cd\u4f5c",children:[]}]},{value:"10.2.4 \u9ad8\u7ea7\u4f7f\u7528",id:"1024-\u9ad8\u7ea7\u4f7f\u7528",children:[{value:"10.2.4.1 \u67e5\u8be2\u4e00\u5bf9\u4e00",id:"10241-\u67e5\u8be2\u4e00\u5bf9\u4e00",children:[]},{value:"10.2.4.2 \u67e5\u8be2\u591a\u4e2a\u7ed3\u679c",id:"10242-\u67e5\u8be2\u591a\u4e2a\u7ed3\u679c",children:[]},{value:"10.2.4.3 \u66f4\u591a\u64cd\u4f5c",id:"10243-\u66f4\u591a\u64cd\u4f5c",children:[]}]},{value:"10.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1025-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"1021-\u5173\u4e8e-dapper"},"10.2.1 \u5173\u4e8e Dapper"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Dapper")," \u662f .NET/C# \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"\u5fae\u578b ORM")," \u6846\u67b6\uff0c\u4e3b\u8981\u662f\u4e3a ",Object(p.b)("inlineCode",{parentName:"p"},"ADO.NET")," \u64cd\u4f5c\u5bf9\u8c61\u63d0\u4f9b\u62d3\u5c55\u80fd\u529b\uff0c\u63a8\u5d07\u539f\u751f ",Object(p.b)("inlineCode",{parentName:"p"},"sql")," \u64cd\u4f5c\u6cd5\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Dapper")," \u5b98\u65b9\u4ed3\u5e93\u5730\u5740\uff1a",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/StackExchange/Dapper"}),"https://github.com/StackExchange/Dapper")),Object(p.b)("h2",{id:"1022-\u5982\u4f55\u96c6\u6210"},"10.2.2 \u5982\u4f55\u96c6\u6210"),Object(p.b)("p",null,"\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",Object(p.b)("inlineCode",{parentName:"p"},"Dapper")," \u62d3\u5c55\u5305 ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.Dapper"}),"Furion.Extras.DatabaseAccessor.Dapper"),"\u3002"),Object(p.b)("h3",{id:"10221-\u6ce8\u518c-dapper-\u670d\u52a1"},"10.2.2.1 \u6ce8\u518c ",Object(p.b)("inlineCode",{parentName:"h3"},"Dapper")," \u670d\u52a1"),Object(p.b)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",Object(p.b)("inlineCode",{parentName:"p"},"services.AddDapper(connStr, SqlProvider)")," \u5373\u53ef\u3002\u5982\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'services.AddDapper("Data Source=./Furion.db", SqlProvider.Sqlite);\n')),Object(p.b)("h3",{id:"10222-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668"},"10.2.2.2 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"Microsoft.Data.SqlClient")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"Microsoft.Data.Sqlite")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"MySql.Data")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"Npgsql"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"Npgsql")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"Oracle.ManagedDataAccess.Core")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",Object(p.b)("inlineCode",{parentName:"li"},"FirebirdSql.Data.FirebirdClient"))),Object(p.b)("div",{className:"admonition admonition-important alert alert--info"},Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b89\u88c5\u62d3\u5c55\u5305\u4f4d\u7f6e")),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"\u5728 ",Object(p.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u5c06\u62d3\u5c55\u5305 ",Object(p.b)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.Dapper")," \u5b89\u88c5\u5230 ",Object(p.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\u3002"))),Object(p.b)("h2",{id:"1023-\u57fa\u672c\u4f7f\u7528"},"10.2.3 \u57fa\u672c\u4f7f\u7528"),Object(p.b)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository")," \u6216 ",Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u63a5\u53e3\uff0c\u5982\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u975e\u6cdb\u578b\u7248\u672c")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"private readonly IDapperRepository _dapperRepository;\npublic PersonService(IDapperRepository dapperRepository)\n{\n    _dapperRepository = dapperRepository;\n}\n")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u6cdb\u578b\u7248\u672c")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"private readonly IDapperRepository<Person> _personRepository;\npublic PersonService(IDapperRepository<Person> personRepository)\n{\n    _personRepository = personRepository;\n}\n")),Object(p.b)("h3",{id:"10231-sql-\u64cd\u4f5c"},"10.2.3.1 ",Object(p.b)("inlineCode",{parentName:"h3"},"sql")," \u64cd\u4f5c"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'var data = _dapperRepository.Query("select * from person");\nvar data = await _dapperRepository.QueryAsync("select * from person");\n\nvar data = _dapperRepository.Query<Person>("select * from person");\n\nvar guid = Guid.NewGuid();\nvar dog = _dapperRepository.Query<Dog>("select Age = @Age, Id = @Id", new { Age = (int?)null, Id = guid });\n')),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'var count = _dapperRepository.Execute(@"insert MyTable(colA, colB) values (@a, @b)",\n    new[] { new { a=1, b=1 }, new { a=2, b=2 }, new { a=3, b=3 } }\n  );\n\nvar user = _dapperRepository.Query<User>("spGetUser", new {Id = 1},\n        commandType: CommandType.StoredProcedure).SingleOrDefault();\n')),Object(p.b)("p",null,"\u7528\u6cd5\u548c\u5b98\u65b9\u4e00\u81f4\uff0c\u6b64\u5904\u4e0d\u518d\u4e3e\u66f4\u591a\u4f8b\u5b50\u3002"),Object(p.b)("h3",{id:"10232-tentity-\u64cd\u4f5c"},"10.2.3.2 ",Object(p.b)("inlineCode",{parentName:"h3"},"<TEntity>")," \u64cd\u4f5c"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u4e24\u4e2a\u64cd\u4f5c\u4ed3\u50a8\uff0c\u540e\u8005\u7ee7\u627f\u524d\u8005\u3002\u4f7f\u7528\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),"var person = personRepository.Get(1);\nvar persons = personRepository.GetAll();\n\nvar effects = personRepository.Insert(person);\nvar effects = personRepository.Update(person);\nvar effects = personRepository.Delete(person);\n\nvar effects = personRepository.Insert(persons); // \u63d2\u5165\u591a\u4e2a\nvar effects = personRepository.Update(persons); // \u66f4\u65b0\u591a\u4e2a\nvar effects = personRepository.Delete(persons); // \u5220\u9664\u591a\u4e2a\n\nvar effects = await personRepository.InsertAsync(person);\n")),Object(p.b)("h2",{id:"1024-\u9ad8\u7ea7\u4f7f\u7528"},"10.2.4 \u9ad8\u7ea7\u4f7f\u7528"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u4ed3\u50a8\u63d0\u4f9b\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"Context")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"DynamicContext")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u8fd4\u56de ",Object(p.b)("inlineCode",{parentName:"p"},"IDbConnection")," \u5bf9\u8c61\u3002"),Object(p.b)("p",null,"\u62ff\u5230\u8be5\u5bf9\u8c61\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u64cd\u4f5c ",Object(p.b)("inlineCode",{parentName:"p"},"Dapper")," \u63d0\u4f9b\u7684\u6240\u6709\u64cd\u4f5c\u4e86\uff0c\u5982\uff1a"),Object(p.b)("h3",{id:"10241-\u67e5\u8be2\u4e00\u5bf9\u4e00"},"10.2.4.1 \u67e5\u8be2\u4e00\u5bf9\u4e00"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'var sql =\n@"select * from #Posts p\nleft join #Users u on u.Id = p.OwnerId\nOrder by p.Id";\n\nvar data = dapperRepository.Context.Query<Post, User, Post>(sql, (post, user) => { post.Owner = user; return post;});\nvar post = data.First();\n')),Object(p.b)("h3",{id:"10242-\u67e5\u8be2\u591a\u4e2a\u7ed3\u679c"},"10.2.4.2 \u67e5\u8be2\u591a\u4e2a\u7ed3\u679c"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'var sql =\n@"\nselect * from Customers where CustomerId = @id\nselect * from Orders where CustomerId = @id\nselect * from Returns where CustomerId = @id";\n\nusing (var multi = dapperRepository.Context.QueryMultiple(sql, new {id=selectedId}))\n{\n  var customer = multi.Read<Customer>().Single();\n  var orders = multi.Read<Order>().ToList();\n  var returns = multi.Read<Return>().ToList();\n  // ...\n}\n')),Object(p.b)("h3",{id:"10243-\u66f4\u591a\u64cd\u4f5c"},"10.2.4.3 \u66f4\u591a\u64cd\u4f5c"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs"}),'var shapes = new List<IShape>();\nusing (var reader = dapperRepository.Context.ExecuteReader("select * from Shapes"))\n{\n   var circleParser = reader.GetRowParser<IShape>(typeof(Circle));\n   var squareParser = reader.GetRowParser<IShape>(typeof(Square));\n   var triangleParser = reader.GetRowParser<IShape>(typeof(Triangle));\n\n   var typeColumnIndex = reader.GetOrdinal("Type");\n\n   while (reader.Read())\n   {\n       IShape shape;\n       var type = (ShapeType)reader.GetInt32(typeColumnIndex);\n       switch (type)\n       {\n           case ShapeType.Circle:\n            shape = circleParser(reader);\n            break;\n           case ShapeType.Square:\n            shape = squareParser(reader);\n            break;\n           case ShapeType.Triangle:\n            shape = triangleParser(reader);\n            break;\n           default:\n            throw new NotImplementedException();\n       }\n\n        shapes.Add(shape);\n   }\n}\n')),Object(p.b)("h2",{id:"1025-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(p.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(p.b)("hr",null),Object(p.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(p.b)("inlineCode",{parentName:"p"},"Dapper")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/StackExchange/Dapper"}),"Dapper \u5b98\u7f51"),"\u3002"))))}l.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||p;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);