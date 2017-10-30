/**
 * Created by Administrator on 2017/8/3.
 */

//定义bfw
var bfw = {
    appRootDir:"",
    express: require("express"),
    path: require('path'),

    //核心包路劲
    lib_path: './core/',

    //cookies 处理
    cookieParser: require('cookie-parser'),

    //bodyparse 插件
    bodyParser: require('body-parser'),

    layout: require('express-ejs-layouts'),

    routes: {},
    /**
     * 初始化程序
     * @method init
     */
    init: function () {
        this.app = this.express();
        //初始化环境，组件使用
        this.init_env();
        this.use();
    },

    /**
     * 初始化环境
     * @method init_env
     */
    init_env: function () {
        console.log("init_env...");
        //--------------------设置框架---------------
        // 设定views变量，意为视图存放的目录
        //__dirname变量值代表程序运行的根目录。即现在目录是view那里
        this.app.set('views', this.path.join(__dirname + '/../', this.appRootDir));
        // 设定view engine变量，意为网页模板引擎
        this.app.set('view engine', 'html');
        this.app.set('layout', 'layout');
        this.app.use(this.layout);
        this.app.engine('.html', require('ejs').__express);
        //设置静态文件路径。即是静态文件可以放在view那里
        this.app.use(this.express.static(__dirname + '/../' + this.appRootDir));

        //--------------------设置配置文件------------

        // 装载全局变量
        this.L('bglobal').init(this.projectid);
        //
        // //log模块
        // this.blogger = this.L('blogger');
        // this.logger = this.blogger.logger;
        //
        // //错误模块
        // this.berror = this.L('berror');
        //
        // //session
        // this.bsession = this.L('bsession');
        //
        // this.bhttp = this.L('bhttp').bhttp;
        //
        // this.bdubbo = this.L('bdubbo');
        //
        // this.bsession.use(this.app, this.appId);
        //
        // // body-parse
        // this.app.use(this.bodyParser.urlencoded({extended: false}));

        //加入domain捕捉异常
        this.app.use(function (req, res, next) {
            //console.log('use domain');
            var domain = require("domain");
            var d = domain.create();
            d.enter();
            d.on("error", function (error) {
                console.log('domain catch error:', error);
                res.statusCode = 200;
                res.json({state: false, message: '服务器异常', data: {}});
                d.dispose();
            });
            process.on('uncaughtException', function (err) {
                console.log("unknow error : ", err);
            });
            d.add(req);
            d.add(res);
            d.run(next);
        });

    },
    /**
     * 错误信息
     * @method error
     */
    error: function (message, code) {
        throw this.berror.createError(message, code);
    },
    /**
     * 组件使用，包括路由设置
     * @method use
     */
    use: function () {
        var thisobject = this;

        var controller = '';

        var routelist = this.C('routes');
        // BLog.debug(routelist);//ok
        if (routelist !== undefined) {
            for (var i = 0; i < routelist.length; i++) {
                try {
                    //require( '../routes/' + routelist[i] )(this);

                    this.addRouter(routelist[i]);

                } catch (ex) {
                    console.debug('err require ' + routelist[i]);
                    console.debug(ex);
                }
            }
        }
    },
    //-------------------------------------------------
    //-------------公共函数类---------------------------
    /**
     * 装载库文件
     * @method L
     */
    L: function (libname) {
        return require(this.lib_path + libname);
    },


    /**
     * 配置文件信息处理
     * @method C
     */
    C: function (key, value) {
        return BConfig.conf(key, value);
    },

    myRoute: function(){
        var route = this.express.Router();
        require("../routes/member/memberList")(this, route);
        this.app.use("/member/memberList", route);
    },

    /**
     * 添加路由
     * @param routename
     */
    addRouter: function (routename) {
        BLog.debug('../routes/' + routename);
        this.routes[routename] = this.express.Router() ;
        var rname = ( routename == 'index' ) ? '' : routename;
        require('../routes/' + routename)(this, this.routes[routename]);
        this.app.use('/' + rname, this.routes[routename]);
    },

    /**
     * 运行框架
     * @method run
     */
    run: function (appId, appName, appPort, appRootDir, pid) {

        // this.headerParam={
        //     "isByAppId":'1',//指定当前数据查询是否依赖appid,1是,0不是
        //     "appId":appId,
        //     "appKey":"",// 被调用的目标AppKey，仅当被调用的API为第三方ISV提供时有效。
        //     "session":"",// 用户登录授权成功后，TOP颁发给应用的授权信息，详细介绍请点击这里。当此API的标签上注明：“需要授权”，则此参数必传；“不需要授权”，则此参数不需要传；“可选授权”，则此参数为可选。
        //     "signMethod":"",// 签名的摘要算法，可选值为：hmac，md5
        //     "format":"",// API接口名称。
        //     "v":"",// API协议版本，可选值：2.0。
        //     "simplify":"",// 是否采用精简JSON返回格式，仅当format=json时有效，默认值为：false。
        //     "sign":"",// API输入参数签名结果
        //     "timestamp":"",//请求时间戳
        //     "appName":appName,//项目名称
        //     "reqOrg":"pcShop",//区分数据请求来源 {"mobile", "pcShop", "pcSys"}
        //     "userFlag":0,//考虑到不同平台可能共用一个方法,那么需要区分是系统后台(1),还是商家后台(0),其他用户(2)
        //     "operType":"",// 操作类型 add表示增加，edit表示修改
        //     "operUserId":"",// 操作用户id
        //     "operUserName":"",// 操作用户名称
        //     "pageSumCount":0,///**当分页时:1时只查询总记录数,2不查询总记录数,只返回列表数据, 其他值既查询总记录数又返回列表数据*/
        //     "pageDisable":0,/**当分页时:只查询数据,1不做分页*/
        //     "page":1,//分页参数
        //     "rows":10//行数
        // };
        this.port = appPort;
        this.appId = appId;
        this.appName = appName;
        this.appRootDir = appRootDir;
        this.projectid = pid || '';
        this.init();
        // this.myRoute();
        //监听端口 , 使用中间件 下面两个方法都行
        this.app.listen(this.port);
        console.log('Server is running on port ' + this.port);
        console.log('appId:' + appId);
        console.log('appName:' + appName);
        console.log('appPort:' + appPort);
        console.log('appRootDir:' + appRootDir);
        console.log('pid:' + pid);
    }

}
//导出运行时的环境
exports.run = function (appId, appName, appPort, appRootDir, pid){
    //运行run函数
    bfw.run(appId, appName, appPort, appRootDir, pid);
}