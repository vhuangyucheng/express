/**
 * Created by Administrator on 2017/8/16.
 */
var bhttp = {};

var urlutil = require('url');
var querystring = require('querystring');
var request = require('request');

//允许请求列表
var methodlist = ['get', 'post'];

//入口参数
var utilparam = {
    req: null,
    res: null,
    method: 'GET',
    url: '',
    json: false,
    params: null,
    headers: null,
    callback: function (error, response, data) {
    }
};

//错误返回数据
var errresult = {
    code: -1,
    num: 0,
    mes: '',
    data: '',
    version: '1.0'
};

/**
 * http 工具方法
 * @method httputil
 */
function httputil(param) {
    //先导入一个空白的，然后用参数替代他
    var p = {};
    _.extend(p, utilparam);
    _.extend(p, param);
    // BLog.info(p.params);
    var options = getOptions(p.method, p.url, p.params, p.headers, p.req, p.json, p.flag);

    //发送一次http请求，body就是返回的数据
    request(options, function (error, response, body) {
        var data;
        console.log("options" + JSON.stringify(options));
        if (!error && response.statusCode == 200) {
            if (p.json) {
                try {
                    //json处理返回数据
                    data = JSON.parse(body);
                } catch (e) {
                    data = errresult;
                    data.mes = e;
                    data.data = body;
                }
            } else {
                data = body;
            }
        } else {
            if(p.json){
                data = errresult;
                data.code = response.statusCode;
            }else {
                data = "";
            }
        }
        p.callback(data, error, response, p.req, p.res);
    });
}

function getOptions(method, url, params, headers, req, isjson, flag) {
    var options = {
        headers: {
            //'User-Agent'	: req['headers'][ 'user-agent' ],
            //'cookie'        : req.headers.cookie,
            //request中发送json数据用post方式发送Content-type用application/json;charset=utf-8方式发送的话，
            // 直接用springMVC的@RequestBody标签接收后面跟实体对象就行了，
            // spring会帮你自动拼装成对象，
            // 如果Content-type设置成application/x-www-form-urlencoded;charset=utf-8就不能用spring的东西了，
            // 只能以常规的方式获取json串了
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    method = method || 'get';
    method = method.toUpperCase();

    //带UA 和 cookie 到头里面去
    if (_.isObject(req)) {
        //其实没有进去的
        options.headers['User-Agent'] = req['headers']['user-agent'];
        options.headers['cookie'] = req.headers.cookie;
    }

    options.method = method;
    options.url = url;
    // BLog.info(method == "POST");
    if (params) {
        //大概不会用get，我这里没看
        if (method == 'GET') {
            // console.log(">>>>>>>>>>>>>>>>>>");//不走
            var urlinfo = urlutil.parse(url);
            //var tmpquery = urlinfo.query;

            var urlstr = urlinfo.protocol + '//' + urlinfo.host + urlinfo.pathname;
            // console.error(urlinfo.protocol);//貌似不走这里
            // console.error(urlinfo.host);
            // console.error(urlinfo.pathname);
            var paramsstr = querystring.stringify(_.extend(querystring.parse(urlinfo.query), params));

            if (flag == 0) {
                options.url = urlstr + '?' + paramsstr;
            }
            else {
                options.url = urlstr + '/' + params;
            }
            //console.log("options.url"+options.url);
            console.log(urlinfo);

        } else if ((method == 'POST')) {
            BLog.info(">>>>>>>>>>>");
            //由于前面params转换过json，所以else
            if (_.isObject(params)) {//不走这里
                options.form = params;
                // console.errer(params);
            } else {
                // console.log("<<<<<<<<<<<<<<<<<<<<<<<");//走这里
                // BLog.info(params);
                options.body = params;
                // BLog.info(options.body);
            }
        }
    }

    if (headers) {
        options.headers = _.extend(option.headers, headers);
    }
    //如果用 isjson 格式
    if (isjson == true) {
        options.headers['Content-Type'] = 'application/json;charset=utf-8';
    }

    return options;
}

//除了这个官方指定方法外还有
bhttp.requestjson = function (param) {
    param.method = param.method || 'get';
    param.json = true;
    httputil(param);
}
/**
 * http get方法
 * @method get
 */
bhttp.get = function (param) {
    param.method = 'GET';
    httputil(param);
}

/**
 * http post方法
 * @method post
 */
bhttp.post = function (param) {
    param.method = 'POST';
    httputil(param);
}

/**
 * http 指定方法请求
 * @method request
 */
bhttp.request = function (param) {
    param.method = param.method || 'get';
    if (_.indexOf(methodlist, param.method) == -1) {
        param.method = 'get';
    }
    httputil(param);
}

/**
 * http getjson方法
 * @method getjson
 */
bhttp.getjson = function (param) {
    param.method = 'GET';
    param.json = true;
    httputil(param);
}

/**
 * http postjson方法
 * @method postjson
 */
bhttp.postjson = function (param) {
    param.method = 'POST';
    param.json = true;
    httputil(param);
}


exports.bhttp = bhttp;