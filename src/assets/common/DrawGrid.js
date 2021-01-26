class drawGrid{
    /**
     * list为二维数组,
     * 颜色只可传rgb和Hex十六进制(不支持传rgba,因为透明度是作为单独衡量权重的值,透明度在list列表里面有体现)
     * 注:在地图加载完成后调用
     * */
    constructor(options) {
        this.map = options.map; //必传
        this.list = [];
    }
    /**
     * 多边形
    * */
    initPolygon(){
        this.map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [[]]
                    }
                }
            },
            'layout': {},
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.8
            }
        });
    }


}
export default drawGrid
