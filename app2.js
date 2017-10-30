/**
 * Created by Administrator on 2017/8/4.
 */
/**
 * 爆款项目
 * server framework框架
 * @author blank
 * @date   20150630
 * @version 1.0
 */

//设置项目ID
var projectid = process.env.APP_PROJECTID || 'shop';

// 运行框架
/*
 require('./framework/bfw').run(projectid);
 */
// 运行框架
require('./myFrame/bfw').run(0, '虎鱼--商家后台',3000, 'views',"huyuDefault");