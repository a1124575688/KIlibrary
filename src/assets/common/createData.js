
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
                ']\n' + 'membersResult = members.sort((a, b) => a.role- b.role)'
        }
    ]
};

export default createData