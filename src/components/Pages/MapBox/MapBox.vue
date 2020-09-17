<template>
    <div class="map-box">
        <div id="map" ref="map"></div>
    </div>
</template>

<script>
    import mapboxgl,{Map} from 'mapbox-gl'
    import * as turf from '@turf/turf'
    let map;
    export default {
        name: "MapBox",
        data(){
            return{
                token: 'pk.eyJ1Ijoid3pqOTI3MTIiLCJhIjoiY2pxNXphMmgyMjl4dzN4c3oxZTczaXFuNCJ9.7iqkAVOCgYhh4vdW-hmz4g',
                center: [106.52365, 29.38311],
                bearing: 18.399999999999864,
                pitch: 0,
                zoom: 10.173304164426996,
            }
        },
        methods:{
            initMap(){
                mapboxgl.accessToken = this.token;
                map = new Map({
                    container: this.$refs.map,
                    // style: style,
                    style:'mapbox://styles/mapbox/dark-v9',
                    center: this.center,
                    zoom: this.zoom,
                    // maxZoom:20,
                    // minZoom: 10,
                    bearing: this.bearing,
                    pitch: this.pitch,
                });
                map.on('click',(e)=>{
                    console.log(e.lngLat)
                })
                console.log('turf',turf)
            }
        },
        mounted() {
            this.initMap()
        }
    }
</script>

<style scoped lang="scss">
    .map-box{
        width: 1920px;
        height: 1080px;
        #map{
            width: 1920px;
            height: 1080px;
        }
    }
</style>