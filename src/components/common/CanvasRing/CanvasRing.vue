<template>
    <div class="time-graph">
        <canvas :id="domId" width="164" height="164"></canvas>
        <div class="ring-text">{{options.percent}}%</div>
    </div>
</template>

<script>
    export default {
        name: "CanvasRing",
        data(){
            return{
                domId:'xbDom' //给随机ID是因为页面上不能有相同ID的dom
            }
        },
        methods:{
            drawMain(drawing_elem, percent, forecolor, bgcolor) {
                /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
                */
                let that = this;
                let context = drawing_elem.getContext("2d");
                let center_x = drawing_elem.width / 2;
                let center_y = drawing_elem.height / 2;
                let rad = Math.PI*2/100;
                let speed = 0;
//绘制运动圆环
                function foregroundCircle(n){
                    context.save();
                    context.strokeStyle = forecolor;
                    context.lineWidth = 10;
                    context.lineCap = "round";
                    let radius = center_x - context.lineWidth + 10 - 5 - 8;
                    context.beginPath();

                    let g = context.createLinearGradient(0,0,140,0);  //创建渐变对象  渐变开始点和渐变结束点
                    g.addColorStop(0, '#FCF9C1'); //添加颜色点
                    g.addColorStop(1, '#1C58BC'); //添加颜色点
                    context.strokeStyle = g;     //使用渐变对象作为圆环的颜色

                    context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +(100 - n)*rad  + 40, true); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                    context.stroke();
                    context.closePath();
                    context.restore();
                }
//执行动画
                (function drawFrame(){
                    window.requestAnimationFrame(drawFrame);
                    context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
                    // backgroundCircle();
                    if(that.options.percent > 0){
                        foregroundCircle(speed);
                    }
                    if(speed >= percent) return;
                    speed += 1;
                }());
            },
            setRing(){
                let time_canvas = document.getElementById(this.domId);
                this.drawMain(time_canvas, this.options.percent, this.options.pathColor, "#35414d");
            }
        },
        props:{
            options:{
                default(){
                    return{
                        percent:80,
                        pathColor:'red'
                    }
                }
            }
        },
        created(){

        },
        watch:{
            options:{
                handler(newVal){
                    let time_canvas = document.getElementById(this.domId);
                    this.drawMain(time_canvas, this.options.percent, this.options.pathColor, "#35414d");
                },
                deep:true //深度监听
            },
        },
        mounted() {
            this.setRing()
        }
    }
</script>

<style scoped>
    .time-graph {
        padding-top: 20px;
        display:flex;
        display:-webkit-flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .ring-text{
        font-size: 36px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%,-50%);
    }


</style>