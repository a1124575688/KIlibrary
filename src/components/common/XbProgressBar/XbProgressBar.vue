<template>
    <div class="xb-progress-bar-box" :style="barBoxStyle">
        <div class="progress-bar" :style="barStyle"></div>
        <div class="progress-line"></div>
    </div>
</template>

<script>
    /**参数：
    * width：整个进度条宽度
    * height：进度条高度
    * percent：进度条百分比
    * color：进度条颜色(只支持传入rgba颜色,透明度会自己算的,格式参考下面的default)*/
    export default {
        name: "XbProgressBar",
        props:{
            width:{
                default() {
                    return "300";
                }
            },
            height:{
                default() {
                    return "20";
                }
            },
            percent:{
                default() {
                    return "50";
                }
            },
            color:{
                default() {
                    return "rgba(52, 223, 136,1)";
                }
            }
        },
        mounted(){

        },
        methods:{
            rgbaNum(rgba,transparency) {
                let val = rgba.match(/(\d(\.\d+)?)+/g);
                val[val.length - 1] = transparency;
                return `rgba(${String(val)})`;
            }
        },
        computed:{
            barStyle(){
                return `width:${this.percent}%;background: linear-gradient(to left,${this.color},${this.rgbaNum(this.color,0.3)});border:1px solid ${this.rgbaNum(this.color,0.75)};`
            },
            barBoxStyle(){
                return `width:${this.width}px;height:${this.height}px`
            },
        },
    }
</script>

<style scoped lang="scss">
    .xb-progress-bar-box{
        display: flex;
        align-items: center;
        .progress-bar{
            border-right: 6px solid rgba(255,255,255,.7);
            height: 100%;
            transition: .1s linear;
        }
        .progress-line{
            flex: 1;
            background-color: rgba(255,255,255,.2);
            height: 1px;
        }
    }
</style>