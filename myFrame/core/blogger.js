/**
 * Created by Administrator on 2017/8/7.
 */
/**
 * log 模块
 * @module bfw
 * @author blank
 * @date   20150602
 * @version 1.0
 */

var log4js = require('log4js');
//var config 		= require('./bconfig');
//不使用express log 信息
//var morgan  	= require('morgan');

/**
 * 初始化log
 * @method init
 */
function init() {
    //修改为全局变量
    //var logconfig = config.C( 'logger' );
    var logconfig = BConfig.conf('logger');


    console.log('logger init config ...');
    log4js.configure({
        appenders: {
            xcLogFile: {
                type: "dateFile",
                filename: './logs/xcLogFile',//您要写入日志文件的路径
                alwaysIncludePattern: true,//（默认为false） - 将模式包含在当前日志文件的名称以及备份中
                //compress: true,//（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
                pattern: "-yyyy-MM-dd-hh.log",//（可选，默认为.yyyy-MM-dd） - 用于确定何时滚动日志的模式。格式:.yyyy-MM-dd-hh:mm:ss.log
                encoding: 'utf-8',//default "utf-8"，文件的编码
                maxLogSize: 10 //文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件xxx.log.1的序列自增长的文件
            },
            xcLogConsole: {
                type: 'console'
            },
            error: {
                type: 'dateFile', filename: 'logs/error', "pattern": "-dd.log", alwaysIncludePattern: true
            }
        },
        categories: {
            default: {
                appenders: ['xcLogFile'],
                level: 'all'
            },
            xcLogFile: {
                appenders: ['xcLogFile'],
                level: 'all'
            },
            normal: {
                appenders: ['xcLogConsole'],
                level: log4js.levels.ALL
            },//貌似上面已经可以输出全部东西了
            
            error: {
                appenders: ['error'],
                level: 'error'
            }
        }

    });

}

init();

//log 对象
var logger = log4js.getLogger('normal');
exports.logger = logger;

//设置中间件，设置整体log方案
exports.use = function (app) {
    //不使用express log 信息
    //app.use(morgan('dev'));
    //页面请求日志,用auto的话,默认级别是WARN
    app.use(log4js.connectLogger(logger, {
        level: 'debug',
        format: ':remote-addr - - ":method :url HTTP/:http-version" :status :content-length :response-time ":referrer" ":user-agent"'
    }));
}

/**
 * 打印debug信息
 * @method debug
 * @date 20150609
 */
exports.debug = function (msg) {
    if (BConfig.conf('isdebug')) {
        logger.debug(msg);
    }
}




