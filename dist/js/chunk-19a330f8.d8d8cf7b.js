(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19a330f8"],{"7b3b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fn-text-box"},[n("el-collapse",{staticClass:"fn-text-item",on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.pageData,(function(t,a){return n("el-collapse-item",{key:t.name,attrs:{title:a+1+"."+t.title,name:a+1}},[n("pre",{staticClass:"fn-code-show"},[e._v(e._s(t.content))])])})),1)],1)},l=[],o={fnTextPageData:[{title:"数组中找到最大的那个数",content:"let maxValue = Math.max(...array);注:给max传入的不能是个数组,要用扩展运算符'...'处理一下"},{title:"数组对象排序",content:"let members = [\n\t{id: 1, role: 3},\n\t{id: 2, role: 1},\n\t{id: 3, role: 1},\n\t{id: 4, role: 4}\n]\nmembersResult = members.sort((a, b) => a.role- b.role)  //升序,降序反过来"},{title:"不换行显示省略号",content:"overflow:hidden; \ntext-overflow:ellipsis; \nwhite-space:nowrap; "},{title:"dom阴影",content:"box-shadow:0px 0px 10px red inset;"},{title:"字体外阴影",content:"text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;"},{title:"es6数组扩展运算符'...'",content:'let a = [1,2,3],let b = [...a],这样就复制了这个数组创造了一个新数组;\nlet c = [1,2,3],let b = [4,5,6],合成新数组[...c,...b];\n[...\'hello\'],得到数组// [ "h", "e", "l", "l", "o" ]'},{title:"es6对象扩展运算符'...'",content:"let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };//解构赋值\nx // 1\ny // 2\nz // { a: 3, b: 4 }\nlet z = { a: 3, b: 4 };\nlet n = { ...z };\nn // { a: 3, b: 4 } //用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。"},{title:"数组实例的includes()",content:"[1, 2, 3].includes(2)     // true;返回一个布尔值,用于判断该数组是否有传入的元素"},{title:"对象的简洁写法{a}",content:"表示{a:a},常见于vue的组件注册,js文件的导出."},{title:"堆与栈",content:"栈里面存放基本数据类型:String、Number、Boolean、Symbol、Undefined、Null;堆里面存放引用数据类型:object(数组也是特殊的对象)\n栈（stack）是系统自动分配内存空间,由系统自动释放\n堆（heap）是动态分配的内存，大小不定也不会自动释放。"},{title:"深拷贝与浅拷贝",content:"如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短。\n如果B没变，那就是深拷贝，自食其力。\n用assign实现深拷贝:\nlet obj = {\n    a: 1,\n    b: 2\n}\nvar obj1 = Object.assign({}, obj); // obj赋值给一个空{}\nobj1.a = 3;\nconsole.log(obj.a)；// 1"},{title:"provide与inject",content:"向后代组件注入一个依赖值\nprovide(){\n            return{\n                lookValue:this.testValue\n            }\n        },\ninject:['lookValue']\n响应式写法:\nprovide(){\n            return{\n                lookValue:()=> this.testValue\n            }\n        }\ninject:['lookValue'],\ncomputed:{\n   getLookValue(){\n        return this.lookValue()\n    }\n        },\nwatch:{\n   getLookValue(newVal){\n       console.log('newVal',newVal)\n          }\n        }"}]},i=o,c={name:"FnText",created:function(){},data:function(){return{pageData:i.fnTextPageData,activeNames:["1"]}},methods:{handleChange:function(e){console.log(e)}}},s=c,r=(n("7d83"),n("2877")),u=Object(r["a"])(s,a,l,!1,null,"65de12e2",null);t["default"]=u.exports},"7d83":function(e,t,n){"use strict";var a=n("7ed3"),l=n.n(a);l.a},"7ed3":function(e,t,n){}}]);
//# sourceMappingURL=chunk-19a330f8.d8d8cf7b.js.map