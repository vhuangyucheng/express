/**
 * Created by Administrator on 2017/8/16.
 */
/**
 * dubbo请求服务模块
 * @module bfw
 * @author blank
 * @date 20151118
 * @version 1.0
 */

//获得配置文件
var config = global.BConfig.conf('api_address_list');
if (config == "") {
    config = {};
}

//http操作
var bhttp = BFunc.lib('bhttp').bhttp;

//错误返回数据
var errresult = {
    code: -1,
    num: 0,
    mes: '',
    data: '',
    version: '1.0'
};

function getUrl(api, param) {
    var url = "";
    var apiArray = api.split('.', 2);
    //buddo 具体请求的 ****.**** 这两段
    var dubbo = apiArray[0].trim();
    var dubboApi = apiArray[1].trim();

    //判断配置文件 的 api_list 是否有***.***前面那段的模块头
    if (dubbo == '' || !_.has(config, dubbo)) {
        return '';
    }

    //判断每个 模块头 是否 有"api"这个属性 和 属性的值是否对应得上
    if (dubboApi == '' || !_.has(config[dubbo], 'api') || !_.has(config[dubbo].api, dubboApi)) {
        return '';
    }

    var reg = new RegExp("^http://");
    if (!reg.test(config[dubbo].host)) {
        url = 'http://';
    }

    //判断是否使用统一地址
    if (BConfig.conf("ifUniteUrl") == true) {
        url += BConfig.conf('uniteUrl');
    } else {
        url += config[dubbo].host;
    }

    //加端口号
    if (_.has(config[dubbo], 'port') && (config[dubbo].port != '' || config[dubbo].port != 80)) {
        url += ':' + config[dubbo].port;
    }

    //加上尾部的路由
    url += "/" + config[dubbo].api[dubboApi];

    //暂时看不懂
    // console.error(url);
    if (_.isObject(param)) {
        for (var key in param) {
            // console.error(key);//head 和 body
            url = url.replace('{{' + key + '}}', param[key]);
            // console.error(">>>>>>>>>>>>" + param[key]);
            // console.log(param[key]);
            // console.error(">>>>>>>>>>>>" + param.head);
        }
    }
    // console.error(url);
    return url;
}
var requestDubbo = function (api, method, param, callback, req, res, flag) {
    var url = getUrl(api, param);
    method = method || "get";
    if (_.indexOf(methodlist, method) == -1) {
        method = 'get';
    }

    //如果是对象 直接转换成json作为参数
    if(_.isObject(param) && method != 'get'){
        param = JSON.stringify(param);
    }

    //暂时还不知道的flag
    if( flag == undefined){
        flag = 0;
    }
    // BLog.info(param);
    // console.log(param);
    bhttp.requestjson({
        url: url,
        method: method,
        params: param,
        callback: callback,
        req: req,
        res: res,
        flag: flag
    });
}

var methodlist = ['get', 'post'];

//****************** 对外接口 ************************

//post方法
exports.post = function (api, param, callback, req, res) {
    requestDubbo(api, 'post', param, callback, req, res);
}

//get方法
exports.get = function (api, param, callback, req, res) {
    requestDubbo(api, 'get', 'param', callback, req, res);
}

//request 请求,不知道为什么要写
exports.request = function (api, method, param, callback, req, res) {
    requestDubbo(api, method, param, callback, req, res);
}

//getRestful, 不知道为什么要写
exports.getRestful = function (api, param, callback, req, res) {
    requestDubbo(api, 'get', param, callback, req, res, '1');
}