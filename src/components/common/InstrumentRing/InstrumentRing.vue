<template>
    <div :style="{
        width:size + 'px',
        height:size + 'px'
    }" class="single-circle-ring">
        <svg :style="{
           width:size + 'px',
            height:size + 'px',
        }">
            <g :transform="`rotate(-120,${size/2},${size/2})`">
                <path :d="innerPath" fill="none" stroke="rgba(255,255,255,0.2)" :stroke-width="lineWidth * 1.7" :stroke-dasharray="Math.PI  * r * 2 * 2/3" :stroke-offset="Math.PI * 2 * r" stroke-linecap="round">

                </path>
                <path :d="innerPath" fill="none" :stroke="color" :stroke-width="lineWidth * 1.7" :stroke-dasharray="Math.PI * 2 * r" :stroke-offset="Math.PI * 2 * r" stroke-linecap="round">
                    <animate attributeName="stroke-dashoffset" :from="Math.PI * 2 * r" :to="Math.PI * 2 * r * (1 - (percent * 2/3) / 100)" dur="1s" fill="freeze" />
                </path>
            </g>

        </svg>
        <div class="ring-text">
            <div :style="{color:color}">{{this.percent}}</div>
            <div :style="{color:color}">%</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'InstrumentRing',
        props: {
            size: {
                default: 120
            },
            color: {
                default: '#ff5a0c'
            },
            percent: {
                default:100
            },
            fontSize: {
                default: 24
            },
        },
        created(){

        },
        computed: {
            lineWidth(){
                return this.size / 20
            },
            r(){
                return (this.size - this.lineWidth * 2) / 2
            },
            innerPath(){
                return `
                M${this.size / 2},${this.size / 2}
                m${0},${-this.r},
                a${this.r},${this.r},0,1,1,0,${2 * this.r}
                a${this.r},${this.r},0,1,1,0,${-2 * this.r}
            `
            },
            // angle(){
            //     return 2/3
            // }
        }
    }
</script>
<style lang="scss" scoped>
    .single-circle-ring{
        position: relative;
    }
    .ring-text{
        display: flex;
        align-items: baseline;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        div:first-child{
            font-size: 40px;
            font-weight: bold;
        }
        div:last-child{
            font-size: 25px;
        }
    }
</style>
