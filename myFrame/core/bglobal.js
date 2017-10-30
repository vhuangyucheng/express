/**
 * Created by Administrator on 2017/8/3.
 */
/**
 *  装载全局模块
 * @module bfw
 * @author blank
 * @date   20150609
 * @version 1.0
 */
var path      = require( 'path' ) ;
var projectid = '' ;
var fs		  = require('fs');

exports.init = function( pid ){
    projectid = pid || '';

    // 工具类
    global._ 		= require( 'underscore' );

    //公用参数
    globalParam();

    //配置文件
    global.BConfig 	= require( './bconfig' );
    //BConfig.init( pid );

    //语言包
    // global.BLang   	= require( './blanguage' );


    // var berror     	= require( './berror' );
    //异常类型
    // global.BServerError 	= berror.BServerError;

    // global.BError 	= berror.createError;


    //log 工具
    global.BLog 	= require( './blogger' ).logger;

    // 通用函数
    global.BFunc    = require( './bfunction' );

    //父类model
    // global.BaseModel= BFunc.lib( 'bmodel' );

    //一些常量
    global.Bdefine = require('../../conf/define');

    // dubbo请求工具
    global.BDubbo   = require('./bdubbo');

    //工具类
    // global.BUtil    = require('../../core/butil');

    //静态类
    // global.BStatic    = require('./bstatic');

    // global.httpheader = require('./httpheader');

}

/**
 * 全局变量
 */
function globalParam(){
    //当前目录前两级，即（根目录，myapp下
    global.BASE_PATH = path.join(__dirname , '/../../' );
    //重新回到core
    global.CORE_PATH = BASE_PATH + 'myFrame/core/';
    // global.CORE_PATH = path.join(BASE_PATH, '/myFrame/core/');
    // //配置文件路径
    // //blank 20151027 修改路径
    // if(fs.existsSync('/apps/project/node/webapps/' + projectid + '/conf/' + 'config.js')){
    //     global.CONF_PATH = '/apps/project/node/webapps/' + projectid + '/conf/';
    // }else{
    //     global.CONF_PATH = BASE_PATH + '../conf/';
    // }
    global.CONF_PATH = BASE_PATH + 'conf/';
    // global.CONF_PATH = path.join(BASE_PATH, '/conf/');
    // console.log(CONF_PATH);
}


