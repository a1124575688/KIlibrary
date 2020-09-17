<template>
    <canvas class="circlering" ref="canvas"></canvas>
</template>

<script>
    import anime from 'animejs';
	export default {
		name: "CircleRing",
        data: function(){
            return {
                option: {
	                angle: [135, 0],
	                color: ['rgba(222, 206, 136, 1)', 'rgba(223, 172, 64, 1)'],
	                isClockWise: true,
	                radius: 40,
	                width: 8,
	                lineCap: 'bevel',
	                lineJoin: 'round',
	                rect: null,
	                rectShadowColor: 'rgba(223, 172, 64, 1)',
	                rectSize: 4,
	                rectShadowSize: 10
                },
	            lastAngle: 0,
                isInit: false
            }
        },
        props:{
            options: {
            	type: Object,
                default(){
            		return {
            			angle: [135, 270],
                        color: ['rgba(222, 206, 136, 1)', 'rgba(223, 172, 64, 1)'],
			            isClockWise: true,
                        radius: 40,
			            width: 8,
			            lineCap: 'bevel',
			            lineJoin: 'round',
                        rect: 'circle',
                        rectShadowColor: 'rgba(223, 172, 64, 1)',
                        rectSize: 4,
                        rectShadowSize: 10
		            }
                }
            },
            autoplay: {
            	type: [String,Boolean],
                default: function () {
	                return true;
                }
            },
        },
        watch:{
			options:{
				deep:true,
                handler: function () {
	                this.lastAngle = this.option.angle[1];
	                if(this._isMounted){
		                this.mixOption(this.options, this.option);
		                this.drawAngle();
                    }else{
		                this.mixOption(this.options, this.option);
                    }
                }
            }
        },
        created() {
	        this.mixOption(this.options, this.option);
        },
		mounted() {
			if(this.autoplay){
				setTimeout(() => {
					this.drawAngle();
				},0)
            }
        },
		methods: {
	        degToRad(deg){
		        return deg * (Math.PI/180);
	        },
			mixOption(options,target){
                    if(this.$tool.isType('Object',options)){
					for(let i in options){
						if(options.hasOwnProperty(i)&&options[i]!==undefined){
							if(this.$tool.isType('Object',options[i])){
								if(!this.$tool.isType('Object',target[i])){
									target[i] = {}
								}
								this.mixOption(options[i],target[i])
							}else{
								target[i] = options[i];
							}
						}
					}
				}
			},
            getAttr(){
	            const option = this.option;
	            const [startAngle, totalAngle] = option.angle;
	            const endAngle = startAngle + totalAngle;
	            const [startColor, endColor] = option.color;
	            const isClockWise = option.isClockWise !== false;
	            const canvas = this.$refs.canvas;
	            const width = canvas.clientWidth;
	            const height = canvas.clientHeight;
	            this.width = width;
	            this.height = height;
	            option.lineCap = option.lineCap? option.lineCap:'round';
	            option.lineJoin = option.lineJoin? option.lineJoin:'round';
	            canvas.setAttribute('width',width*2);
	            canvas.setAttribute('height',height*2);
	            return {option,startAngle,totalAngle,endAngle,startColor,endColor,isClockWise,canvas,width,height};
            },
            clear(ctx){
	            const width = this.width;
	            const height = this.height;
	            ctx.clearRect(0, 0, width, height);
            },
	        drawAngle(){
	        	let {
	        		option,startAngle,totalAngle,
                    startColor,endColor,isClockWise,
                    canvas,width,height
	        	} = this.getAttr();
	        	this.startAngle = startAngle;
		        if(!option.center){
			        option.center = ['50%','50%']
		        }
		        let coordDel = {
			        x: 0,
			        y: 0
		        }
		        if(option.center[0].includes('%')){
			        coordDel.x = option.center[0].replace('%','')/100*width;
		        }
		        if(option.center[1].includes('%')){
			        coordDel.y = option.center[1].replace('%','')/100*height;
		        }
		        this.center = coordDel;
		        if (canvas.getContext) {
			        let ctx = canvas.getContext('2d');
			        this.ctx = ctx;
			        ctx.scale(2,2);
			        ctx.lineCap = option.lineCap;
			        ctx.lineJoin = option.lineJoin;
			        ctx.lineWidth = option.width||10;
			        ctx.strokeStyle = startColor;
			        const colorArray1 = startColor.match(/(\d(\.\d+)?)+/g);//取出数字
			        const startC = {
				        r:Number(colorArray1[0]),
				        g:Number(colorArray1[1]),
				        b:Number(colorArray1[2]),
				        a:Number(colorArray1[3]),
			        }
			        const colorArray2 = endColor.match(/(\d(\.\d+)?)+/g);//取出数字
			        const endC = {
				        r:Number(colorArray2[0]),
				        g:Number(colorArray2[1]),
				        b:Number(colorArray2[2]),
				        a:Number(colorArray2[3]),
			        }
			        const ani = {
				        index: 0,
				        lastIndex: 0,
				        currentStartAngle: startAngle
			        }
			        anime({
				        targets: ani,
				        index: [this.lastAngle, totalAngle],
				        duration: 1000,
                        easing: 'easeInOutQuad',
				        update: (parm)=>{
				        	this.clear(ctx);
					        let totalAngle = ani.index;
					        for(let i=0;i < totalAngle-1;i++){
						        ctx.beginPath();
						        const symbol = isClockWise?1:-1;
						        let sa = this.degToRad(startAngle + i*symbol);
						        let ea = this.degToRad(startAngle + (i + 1)*symbol);
						        let r = startC.r + (endC.r-startC.r)/totalAngle*(i+1);
						        let g = startC.g + (endC.g-startC.g)/totalAngle*(i+1);
						        let b = startC.b + (endC.b-startC.b)/totalAngle*(i+1);
						        let a = startC.a + (endC.a-startC.a)/totalAngle*(i+1);
						        let color = `rgba(${r},${g},${b},${a})`;
						        ctx.arc(coordDel.x, coordDel.y, option.radius,sa,ea,!isClockWise);
						        ctx.strokeStyle = color;
						        ctx.closePath();
						        ctx.stroke();
					        }
					        if(option.rect){
						        this.drawRect(ani.index);
					        }
				        }
			        })
		        }
            },
			drawRect(deg) {
				const option = this.option;
				const ctx = this.ctx;
				if(option.rect === 'circle'){
                    const x = this.center.x + option.radius*Math.cos(this.degToRad(this.startAngle + deg));
                    const y = this.center.y + option.radius*Math.sin(this.degToRad(this.startAngle + deg));
					let color = option.rectShadowColor;
					const ca = color.match(/(\d(\.\d+)?)+/g);
					color = `rgba(${ca[0]},${ca[1]},${ca[2]},1)`;
					const radius = option.rectShadowSize + option.rectSize;
					ctx.beginPath();
					ctx.arc(x, y, radius, 0, 2 * Math.PI);
					ctx.fillStyle = `rgba(${ca[0]},${ca[1]},${ca[2]},0.1)`;
					ctx.closePath();
					ctx.fill();

					const radius2 = option.rectShadowSize/2 + option.rectSize;
					ctx.beginPath();
					ctx.arc(x, y, radius2, 0, 2 * Math.PI);
					ctx.fillStyle = `rgba(${ca[0]},${ca[1]},${ca[2]},0.4)`;
					ctx.closePath();
					ctx.fill();

					ctx.fillStyle = 'rgba(255,255,255,1)';
					ctx.beginPath();
					ctx.arc(x, y, option.rectSize, 0, 2 * Math.PI);
					ctx.closePath();
					// ctx.shadowBlur = option.rectShadowSize+ option.rectSize;
					// ctx.shadowColor = color;
					ctx.fill();

                }
            }
        },
	}
</script>

<style scoped>
.circlering{
    width: 100%;
    height: 100%;
}
</style>
