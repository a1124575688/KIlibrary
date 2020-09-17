
let tool = {
    //获取随机字符串
    randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    //获取一个min到max的随机数
    random(min, max, isZ = true){
        if (isZ){
            return Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            return Math.random() * (max - min + 1) + min;
        }
    },
    isType(type,target){
        const Tag = `[object ${type}]`;
        return Object.prototype.toString.call(target) === Tag
    },

};
export {tool}