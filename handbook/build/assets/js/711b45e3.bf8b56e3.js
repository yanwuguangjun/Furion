"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[984],{7870:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),p=["components"],o={id:"dapper",title:"10.2. Dapper \u96c6\u6210",sidebar_label:"10.2. Dapper \u96c6\u6210"},s=void 0,l={unversionedId:"dapper",id:"dapper",title:"10.2. Dapper \u96c6\u6210",description:"\u5728 Furion \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 EFCore\uff0c\u5982\u679c\u4e0d\u4f7f\u7528 EFCore\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 Furion.Pure \u4ee3\u66ff Furion\u3002",source:"@site/docs/dapper.mdx",sourceDirName:".",slug:"/dapper",permalink:"/furion/docs/dapper",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dapper.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1654567463,formattedLastUpdatedAt:"6/7/2022",frontMatter:{id:"dapper",title:"10.2. Dapper \u96c6\u6210",sidebar_label:"10.2. Dapper \u96c6\u6210"},sidebar:"docs",previous:{title:"10.1. SqlSugar \u96c6\u6210",permalink:"/furion/docs/sqlsugar"},next:{title:"10.3. MongoDB \u64cd\u4f5c",permalink:"/furion/docs/mongodb"}},d={},c=[{value:"10.2.1 \u5173\u4e8e Dapper",id:"1021-\u5173\u4e8e-dapper",level:2},{value:"10.2.2 \u5982\u4f55\u96c6\u6210",id:"1022-\u5982\u4f55\u96c6\u6210",level:2},{value:"10.2.2.1 \u6ce8\u518c <code>Dapper</code> \u670d\u52a1",id:"10221-\u6ce8\u518c-dapper-\u670d\u52a1",level:3},{value:"10.2.2.2 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"10222-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668",level:3},{value:"10.2.3 \u57fa\u672c\u4f7f\u7528",id:"1023-\u57fa\u672c\u4f7f\u7528",level:2},{value:"10.2.3.1 <code>sql</code> \u64cd\u4f5c",id:"10231-sql-\u64cd\u4f5c",level:3},{value:"10.2.3.2 <code>&lt;TEntity&gt;</code> \u64cd\u4f5c",id:"10232-tentity-\u64cd\u4f5c",level:3},{value:"10.2.4 \u9ad8\u7ea7\u4f7f\u7528",id:"1024-\u9ad8\u7ea7\u4f7f\u7528",level:2},{value:"10.2.4.1 \u67e5\u8be2\u4e00\u5bf9\u4e00",id:"10241-\u67e5\u8be2\u4e00\u5bf9\u4e00",level:3},{value:"10.2.4.2 \u67e5\u8be2\u591a\u4e2a\u7ed3\u679c",id:"10242-\u67e5\u8be2\u591a\u4e2a\u7ed3\u679c",level:3},{value:"10.2.4.3 \u66f4\u591a\u64cd\u4f5c",id:"10243-\u66f4\u591a\u64cd\u4f5c",level:3},{value:"10.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1025-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6e29\u99a8\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"EFCore"),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion.Pure")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion")),"\u3002"))),(0,i.kt)("h2",{id:"1021-\u5173\u4e8e-dapper"},"10.2.1 \u5173\u4e8e Dapper"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dapper")," \u662f .NET/C# \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5fae\u578b ORM")," \u6846\u67b6\uff0c\u4e3b\u8981\u662f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ADO.NET")," \u64cd\u4f5c\u5bf9\u8c61\u63d0\u4f9b\u62d3\u5c55\u80fd\u529b\uff0c\u63a8\u5d07\u539f\u751f ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u64cd\u4f5c\u6cd5\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dapper")," \u5b98\u65b9\u4ed3\u5e93\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StackExchange/Dapper"},"https://github.com/StackExchange/Dapper")),(0,i.kt)("h2",{id:"1022-\u5982\u4f55\u96c6\u6210"},"10.2.2 \u5982\u4f55\u96c6\u6210"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"Dapper")," \u62d3\u5c55\u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.Dapper"},"Furion.Extras.DatabaseAccessor.Dapper"),"\u3002"),(0,i.kt)("h3",{id:"10221-\u6ce8\u518c-dapper-\u670d\u52a1"},"10.2.2.1 \u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"h3"},"Dapper")," \u670d\u52a1"),(0,i.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddDapper(connStr, SqlProvider)")," \u5373\u53ef\u3002\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDapper("Data Source=./Furion.db", SqlProvider.Sqlite);\n\n// \u66f4\u591a\u914d\u7f6e\uff0c\u4ec5 v3.4.3+ \u7248\u672c\u6709\u6548\nservers.AddDapper("Data Source=./Furion.db", SqlProvider.Sqlite, () => {\n  DefaultTypeMap.MatchNamesWithUnderscores = true;\n})\n')),(0,i.kt)("h3",{id:"10222-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668"},"10.2.2.2 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.Data.SqlClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.Data.Sqlite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"MySql.Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Npgsql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Npgsql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Oracle.ManagedDataAccess.Core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"FirebirdSql.Data.FirebirdClient"))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b89\u88c5\u62d3\u5c55\u5305\u4f4d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u5c06\u62d3\u5c55\u5305 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.Dapper")," \u5b89\u88c5\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\u3002"))),(0,i.kt)("h2",{id:"1023-\u57fa\u672c\u4f7f\u7528"},"10.2.3 \u57fa\u672c\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u63a5\u53e3\uff0c\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u975e\u6cdb\u578b\u7248\u672c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"private readonly IDapperRepository _dapperRepository;\npublic PersonService(IDapperRepository dapperRepository)\n{\n    _dapperRepository = dapperRepository;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6cdb\u578b\u7248\u672c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"private readonly IDapperRepository<Person> _personRepository;\npublic PersonService(IDapperRepository<Person> personRepository)\n{\n    _personRepository = personRepository;\n}\n")),(0,i.kt)("h3",{id:"10231-sql-\u64cd\u4f5c"},"10.2.3.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"sql")," \u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var data = _dapperRepository.Query("select * from person");\nvar data = await _dapperRepository.QueryAsync("select * from person");\n\nvar data = _dapperRepository.Query<Person>("select * from person");\n\nvar guid = Guid.NewGuid();\nvar dog = _dapperRepository.Query<Dog>("select Age = @Age, Id = @Id", new { Age = (int?)null, Id = guid });\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var count = _dapperRepository.Execute(@"insert MyTable(colA, colB) values (@a, @b)",\n    new[] { new { a=1, b=1 }, new { a=2, b=2 }, new { a=3, b=3 } }\n  );\n\nvar user = _dapperRepository.Query<User>("spGetUser", new {Id = 1},\n        commandType: CommandType.StoredProcedure).SingleOrDefault();\n')),(0,i.kt)("p",null,"\u7528\u6cd5\u548c\u5b98\u65b9\u4e00\u81f4\uff0c\u6b64\u5904\u4e0d\u518d\u4e3e\u66f4\u591a\u4f8b\u5b50\u3002"),(0,i.kt)("h3",{id:"10232-tentity-\u64cd\u4f5c"},"10.2.3.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"<TEntity>")," \u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u4e24\u4e2a\u64cd\u4f5c\u4ed3\u50a8\uff0c\u540e\u8005\u7ee7\u627f\u524d\u8005\u3002\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var person = personRepository.Get(1);\nvar persons = personRepository.GetAll();\n\nvar effects = personRepository.Insert(person);\nvar effects = personRepository.Update(person);\nvar effects = personRepository.Delete(person);\n\nvar effects = personRepository.Insert(persons); // \u63d2\u5165\u591a\u4e2a\nvar effects = personRepository.Update(persons); // \u66f4\u65b0\u591a\u4e2a\nvar effects = personRepository.Delete(persons); // \u5220\u9664\u591a\u4e2a\n\nvar effects = await personRepository.InsertAsync(person);\n")),(0,i.kt)("h2",{id:"1024-\u9ad8\u7ea7\u4f7f\u7528"},"10.2.4 \u9ad8\u7ea7\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"IDapperRepository<TEntity>")," \u4ed3\u50a8\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"DynamicContext")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"IDbConnection")," \u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u62ff\u5230\u8be5\u5bf9\u8c61\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u64cd\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"Dapper")," \u63d0\u4f9b\u7684\u6240\u6709\u64cd\u4f5c\u4e86\uff0c\u5982\uff1a"),(0,i.kt)("h3",{id:"10241-\u67e5\u8be2\u4e00\u5bf9\u4e00"},"10.2.4.1 \u67e5\u8be2\u4e00\u5bf9\u4e00"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var sql =\n@"select * from #Posts p\nleft join #Users u on u.Id = p.OwnerId\nOrder by p.Id";\n\nvar data = dapperRepository.Context.Query<Post, User, Post>(sql, (post, user) => { post.Owner = user; return post;});\nvar post = data.First();\n')),(0,i.kt)("h3",{id:"10242-\u67e5\u8be2\u591a\u4e2a\u7ed3\u679c"},"10.2.4.2 \u67e5\u8be2\u591a\u4e2a\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var sql =\n@"\nselect * from Customers where CustomerId = @id\nselect * from Orders where CustomerId = @id\nselect * from Returns where CustomerId = @id";\n\nusing (var multi = dapperRepository.Context.QueryMultiple(sql, new {id=selectedId}))\n{\n  var customer = multi.Read<Customer>().Single();\n  var orders = multi.Read<Order>().ToList();\n  var returns = multi.Read<Return>().ToList();\n  // ...\n}\n')),(0,i.kt)("h3",{id:"10243-\u66f4\u591a\u64cd\u4f5c"},"10.2.4.3 \u66f4\u591a\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var shapes = new List<IShape>();\nusing (var reader = dapperRepository.Context.ExecuteReader("select * from Shapes"))\n{\n   var circleParser = reader.GetRowParser<IShape>(typeof(Circle));\n   var squareParser = reader.GetRowParser<IShape>(typeof(Square));\n   var triangleParser = reader.GetRowParser<IShape>(typeof(Triangle));\n\n   var typeColumnIndex = reader.GetOrdinal("Type");\n\n   while (reader.Read())\n   {\n       IShape shape;\n       var type = (ShapeType)reader.GetInt32(typeColumnIndex);\n       switch (type)\n       {\n           case ShapeType.Circle:\n            shape = circleParser(reader);\n            break;\n           case ShapeType.Square:\n            shape = squareParser(reader);\n            break;\n           case ShapeType.Triangle:\n            shape = triangleParser(reader);\n            break;\n           default:\n            throw new NotImplementedException();\n       }\n\n        shapes.Add(shape);\n   }\n}\n')),(0,i.kt)("h2",{id:"1025-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dapper")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StackExchange/Dapper"},"Dapper \u5b98\u7f51"),"\u3002"))))}u.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(k,p(p({ref:n},d),{},{components:t})):r.createElement(k,p({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);