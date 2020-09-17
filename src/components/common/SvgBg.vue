<template>
    <div>
        <svg width="600" height="600">

            <defs>
                <pattern id="imgpattern" x="0" y="0" width="1" height="1">
                    <image width="120" height="250"
                           xlink:href="http://upload-images.jianshu.io/upload_images/4890701-417c25e40509aefc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
                </pattern>
            </defs>



            <path fill="url(#imgpattern)" stroke="black" stroke-width="4"
                  d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />

        </svg>
    </div>
</template>

<script>
    export default {
        name: "SvgBg"
    }
</script>

<style scoped>
    .img-transform{

        transform:rotate(89deg);

        transform-origin:50%50%;

    }
    .circle-transform{
        transform:translate3d(-1px,-1px,0)rotate(-89deg);
        transform-origin:50%50%;
    }
</style>