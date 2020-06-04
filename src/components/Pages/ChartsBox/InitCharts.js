import {tool} from '@com/tools.js';

//页面渲染的数组
let chartList = []
//半圆饼图
function banBanPieChart(){
    let list = [
        {
            name: '类型1',
            value: 20,
            startColor: 'rgba(242, 160, 48, 1)',
            endColor: 'rgba(242, 160, 48, .2)'
        },
        {
            name: '类型2',
            value: 20,
            startColor: 'rgba(46, 201, 163, 1)',
            endColor: 'rgba(46, 201, 163, .2)'
        },
        {
            name: '类型3',
            value: 20,
            startColor: 'rgba(72, 203, 82, 1)',
            endColor: 'rgba(72, 203, 82, .2)'
        },
        {
            name: '类型4',
            value: 20,
            startColor: 'rgba(43, 159, 254, 1)',
            endColor: 'rgba(43, 159, 254, .2)'
        },
        {
            name: '类型5',
            value: 20,
            startColor: 'rgba(109, 65, 232, 1)',
            endColor: 'rgba(109, 65, 232, .2)'
        }
    ];
    let listData = [];
    let totalValue = 0;
    let listLength = list.length;
    list.forEach((item, index) => {
        totalValue = totalValue + item.value;
        listData.push({
            value: item.value,
            name: item.name,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: item.startColor // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: item.endColor // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },

        })
        // totalValue就是算出来隐藏的另一半的值,把它push进数组

        if (index == listLength - 1) {
            listData.push({
                value: totalValue,
                name: '隐藏的一半',
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0,0,0,0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
            })
        }
    });
    let option = {
        backgroundColor:'rgba(1,1,1,0.7)',
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [{
            name: '类型分布',
            type: 'pie',
            radius: 177,
            center: ['50%', '100%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: listData,

            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',


                }
            }
        }]
    };

    chartList.push({
        title:'半圆饼图',
        id:tool.randomString(4),
        options:option
    })

}
//雷达图
function radarChart(){
    let option = {
        backgroundColor: '#000000',
        tooltip: {
            trigger: 'axis',
            show: true
        },
        radar: {
            indicator: [{
                name: '消防隐患',
                max: 100
            },
                {
                    name: '劳动' + '\n' + '保障',
                    max: 100
                },
                {
                    name: '非法' + '\n' + '生产',
                    max: 100
                },
                {
                    name: '环境' + '\n' + '保护',
                    max: 100
                },
                {
                    name: '安全' + '\n' + '生产',
                    max: 100
                },
            ],
            radius: '70%',
            center: ['50%', '50%'],
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: 22
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                    ]
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        '#6b6b6b', '#6b6b6b',
                        '#6b6b6b', '#6b6b6b',
                        '#6b6b6b', '#6b6b6b'
                    ].reverse(),
                    width: 3
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238,238,238, 0.2)'
                }
            }
        },
        series: {

            name: '隐患类型',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [{
                value: [100, 90, 80, 66, 90],

            }],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(87,201,255,0.8)',
                    borderColor: 'rgba(87,201,255,0.2)',
                    borderWidth: 12,
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(13, 178, 255, 0.49)',
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(13, 178, 255, 1)',
                    width: 5
                }
            },

        }


    };
    chartList.push({
        title:'雷达图',
        id:tool.randomString(4),
        options:option
    })
}
//渐变主柱状图
function barGradualChart() {
    let option = {
        // tooltip : {
        //     trigger: 'axis',
        //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     },
        //     formatter: function (params) {
        //         var tar = params[1];
        //         return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        //     }
        // },
        backgroundColor: 'rgba(1,1,1,0.7)',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            data: ['回访\n总数', '非常\n满意', '基本\n满意', '未表态', '不满意'],

            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(131,141,148,0.2)',
                    width: 2
                }
            },

            axisLabel: {
                color: 'rgba(255,255,255,0.7)',
                fontSize: 22
            },

        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '满意度',
            type: 'bar',
            stack: '总量',
            barWidth: 20,

            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1400, 1200, 300]
        },
            {
                name: '满意度',
                type: 'bar',
                stack: '总量',
                barWidth: 20,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 20,
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.75)'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            if (params.dataIndex === 0) {
                                return {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(35,157,250,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(35,157,250,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }

                            } else {
                                return {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(192,247,255,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(192,247,255,0.2)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        }
                    }
                },
                data: [2900, 1200, 300, 200, 900]
            }
        ]
    };
    chartList.push({
        title:'渐变主柱状图',
        id:tool.randomString(4),
        options:option
    })
}
//渐变折线面积图
function lineType1Chart(){
    let option = {
        // backgroundColor:'rgba(1,1,255,1)',
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisTick: false,
            axisLabel: {
                textStyle: {
                    color: 'blank',
                    fontSize: 18
                }
            },
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: 'blank'
                }
            }
        },
        grid:{
            left:'12%'
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        yAxis: {
            type: 'value',
            axisTick: false,
            splitLine: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'blank',
                    fontSize: 18
                }
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            symbol: 'circle',
            symbolSize: 18,
            showSymbol: false,
            itemStyle: {
                color: '#81C8FF'
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#614CFFFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00F1FFFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 4
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(5,230,253,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(5,230,253,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            markLine: {
                symbolSize: [10, 20],
                symbol: ['none', 'rect'],
                label: {
                    show: true,
                    distance:15
                },
                data: [{
                    name: 'Y 轴值为 100 的水平线',
                    yAxis: 100,
                    type: 'none',
                    lineStyle: {
                        color: '#FF1800'
                    }

                },
                    {
                        name: 'Y 轴值为 400 的水平线',
                        yAxis: 400,
                        type: 'none',
                        lineStyle: {
                            color: '#FFDE00FF'
                        }
                    },
                    {
                        name: 'Y 轴值为 700 的水平线',
                        yAxis: 700,
                        type: 'none',
                        lineStyle: {
                            color: '#00FFD2'
                        }
                    },
                ],
                lineStyle: {
                    width: 2,
                    color: 'blank'
                }
            }
        }]
    };
    chartList.push({
        title:'代号为1的柱状图',
        id:tool.randomString(4),
        options:option
    })
}

banBanPieChart();
radarChart();
barGradualChart();
lineType1Chart();
export default chartList


