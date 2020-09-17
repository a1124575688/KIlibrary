
let createData = {
    fnTextPageData:[
        {
            title:'数组中找到最大的那个数',
            content:'let maxValue = Math.max(...array);注:给max传入的不能是个数组,要用扩展运算符\'...\'处理一下'
        },
        {
            title:'数组对象排序',
            content:'let members = [\n' +
                '\t{id: 1, role: 3},\n' +
                '\t{id: 2, role: 1},\n' +
                '\t{id: 3, role: 1},\n' +
                '\t{id: 4, role: 4}\n' +
                ']\n' + 'membersResult = members.sort((a, b) => a.role- b.role)  //升序,降序反过来'
        },
        {
            title:'不换行显示省略号',
            content:'overflow:hidden; \n' +
                'text-overflow:ellipsis; \n' +
                'white-space:nowrap; '
        },
        {
            title:'dom阴影',
            content:'box-shadow:0px 0px 10px red inset;'
        },
        {
            title:'字体外阴影',
            content:'text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;'
        },
        {
            title:"es6数组扩展运算符'...'",
            content:'let a = [1,2,3],let b = [...a],这样就复制了这个数组创造了一个新数组;\n' +
                'let c = [1,2,3],let b = [4,5,6],合成新数组[...c,...b];\n' +
                "[...'hello'],得到数组// [ \"h\", \"e\", \"l\", \"l\", \"o\" ]"
        },
        {
            title:"es6对象扩展运算符'...'",
            content:'let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };//解构赋值\n' +
                'x // 1\n' +
                'y // 2\n' +
                'z // { a: 3, b: 4 }\n' +
                'let z = { a: 3, b: 4 };\n' +
                'let n = { ...z };\n' +
                'n // { a: 3, b: 4 } //用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。'
        },
        {
            title:"数组实例的includes()",
            content:'[1, 2, 3].includes(2)     // true;返回一个布尔值,用于判断该数组是否有传入的元素'
        },
        {
            title:"对象的简洁写法{a}",
            content:'表示{a:a},常见于vue的组件注册,js文件的导出.'
        },
        {
            title:"堆与栈",
            content:'栈里面存放基本数据类型:String、Number、Boolean、Symbol、Undefined、Null;堆里面存放引用数据类型:object(数组也是特殊的对象)\n'+
                '栈（stack）是系统自动分配内存空间,由系统自动释放\n'+
                '堆（heap）是动态分配的内存，大小不定也不会自动释放。'
        },
        {
            title:"深拷贝与浅拷贝",
            content:'如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短。\n'+
                '如果B没变，那就是深拷贝，自食其力。\n'+
                '用assign实现深拷贝:\n' +
                'let obj = {\n' +
                '    a: 1,\n' +
                '    b: 2\n' +
                '}\n' +
                'var obj1 = Object.assign({}, obj); // obj赋值给一个空{}\n' +
                'obj1.a = 3;\n' +
                'console.log(obj.a)；// 1'
        },
        {
            title:"provide与inject",
            content:'向后代组件注入一个依赖值\n' +
                'provide(){\n' +
                '            return{\n' +
                '                lookValue:this.testValue\n' +
                '            }\n' +
                '        },\n' +
                'inject:[\'lookValue\']\n' +
                '响应式写法:\n' +
                'provide(){\n' +
                '            return{\n' +
                '                lookValue:()=> this.testValue\n' +
                '            }\n' +
                '        }\n' +
                'inject:[\'lookValue\'],\n' +
                'computed:{\n' +
                '   getLookValue(){\n' +
                '        return this.lookValue()\n' +
                '    }\n' +
                '        },\n' +
                'watch:{\n' +
                '   getLookValue(newVal){\n' +
                '       console.log(\'newVal\',newVal)\n' +
                '          }\n' +
                '        }'

        }
    ]
};

export default createData