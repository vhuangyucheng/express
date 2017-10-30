/**
 * Created by Administrator on 2017/8/3.
 */
/**
 * 配置文件模块
 * @author blank
 * @date 20150601
 *
 */
module.exports = {

    api_address_list: {

        inf: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                userLogin: 'user/testLogin',
                postLogin: 'user/postLogin'
            }
        },
        shop: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                //商品等级
                saveShopLevel: 'shop/conf/grade/saveShopLevel',
                getShopLevelList: 'shop/conf/grade/getShopLevelList',
                getShopLevelDetail: 'shop/conf/grade/getShopLevelDetail',

                //商品类型
                saveShopClass: 'shop/conf/class/saveShopClass',
                getShopClassList: 'shop/conf/class/getShopClassList',
                getShopClassDetail: 'shop/conf/class/getShopClassDetail',
                updateDecoState: 'shop/decoration/updateDecoState',//停用、启用店铺装修接口
                getDecoDetailByStoreId: 'shop/decoration/getDecoDetailByStoreId',

                //商家入驻
                saveJoinin: 'shop/store/joinin/saveJoinin',
                getJoininList: 'shop/store/joinin/getJoininList',
                getJoininDetail: 'shop/store/joinin/getJoininDetail',

                //商家
                saveShop: 'shop/store/shop/saveShop',
                getShopList: 'shop/store/shop/getShopList',
                getShopDetail: 'shop/store/shop/getShopDetail',

                //商家明细
                getShopInfo: 'shop/store/joinin/getShopInfo',

                /*------------------------店铺分类 -------------------------------------------*/
                getShopGoodsClassList: 'shop/conf/goodsclass/getShopGoodsClassList',
                //获取当前分类及父级分类，直到顶级分类
                getShopGoodsClassChain: 'shop/conf/goodsclass/getGoodsClassChain',
                //保存分类信息
                saveShopGoodsClass: 'shop/conf/goodsclass/saveShopGoodsClass',
                //删除分类
                //deleteShopGoodsClass:'shop/conf/goodsclass/deleteShopGoodsClass',
                //deleteShopGoodsClass:'shop/conf/goodsclass/deleteShopGoodsClassItgra',
                //改变分类的排序
                sortShopGoodsClass:'shop/conf/goodsclass/sortShopGoodsClass',
                /*---------------------------------------------------------------------------*/


                //商家登录
                login: 'shop/store/login',

                //保存商家信息
                saveShopInfo: 'shop/store/joinin/saveShopInfo',
                //店铺 图片相册添加
                saveAlbum: 'shop/decoration/album/saveAlbum',
                //店铺 图片相册详情
                getAlbumDetail: 'shop/decoration/album/getAlbumDetail',
                //店铺 图片相册列表
                getAlbumList: 'shop/decoration/album/getAlbumList',
                //店铺 图片相册列表
                delShopDecorationAlbum: 'shop/decoration/album/delShopDecorationAlbum',
                //保存店铺装修页面
                saveDecoration: 'shop/decoration/saveDecoration',
                //店铺装修页面列表
                getDecorationList: 'shop/decoration/getDecorationList',
                //店铺装修页面删除
                delDecoration: 'shop/decoration/delDecoration',
                //店铺装修页面明细
                getDecorationDetail: 'shop/decoration/getDecorationDetail',

                openOrClose:'shop/decoration/openOrClose',
                //店铺收益
                ///getDecorationDetail: 'shop/decoration/getDecorationDetail'

                getSupplierList: 'shop/supplier/getSupplierList', // 联拓 -- 供应商信息
                getSupplierDetail: 'shop/supplier/getSupplierDetail' ,// 联拓 -- 供应商详情

                setPasswordQuestions: 'shop/store/setPasswordQuestions' ,   //设置密保
                getSellerInfo: 'shop/store/getSellerInfo' ,//店铺密保成功回显
                updatePassword: 'shop/store/updatePassword', //修改密码
                checkInfo: 'shop/store/checkInfo', //绑定手机验证身份
                saveShopSeller: 'shop/store/saveShopSeller', //绑定手机验证身份修改
                checkAccount: 'shop/store/checkAccount',  //登陆页登录账号校验
                checkMobile: 'shop/store/checkMobile',  // 登陆页手机号校验

                checkPasswordQuestions: 'shop/store/checkPasswordQuestions', //密保校验

                getShopTag: 'shop/shopTagItgra/getShopTag', //商家标签列表展示
                setShowTag: 'shop/shopTagItgra/setShowTag', //装修手机端标签
                getShopDecTag: 'shop/shopTagItgra/getShopDecTag', //展示商家装修接口

                getShopJoininInfo: 'shop/store/joinin/getShopJoininInfo',  //店铺信息
                joininauthApply: 'shop/store/joinin/authApply',  //提现申请认证
                saveShopInfo: 'shop/store/joinin/saveShopInfo', // 保存店铺信息

            }
        },
        //商品组合接口
        goodsGroup: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                deleteShopGoodsClass: 'shop/conf/goodsclass/deleteShopGoodsClassItgra',//删除商品分类
                getShopsDetail: 'shop/userShops/getShopsDetail', //店铺详情
                getActivityGoods: 'ingra/activity/getActivityGoods' //店铺装修根据活动ID获取商品列表
            }
        },
        member: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getMemberList: 'member/um/getUrsMemberList',
                test: 'member/um/saveUrsMember',
                getAllProvince: 'admin/area/getAllProvince',
                getProvince: 'admin/area/getProvince',//获取所有省
                getCities: 'admin/area/getAreaByParentId'//获取所有市
            }
        },
        ////////////////////////////////////
        /////// 商品接口           //////////
        ////////////////////////////////////
        goods: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getGoodsList: 'shop/goods/getGoodsList',
                getCategoryList: 'shop/goods/getCategoryList',
                //saveCategory: 'shop/goods/saveCategory',
                getSpecificationList: 'shop/goods/getSpecificationList',

                //保存商品
                saveGoods: 'shop/goods/saveGoods',
                //商品上下架状态
                setOnOffSelves: 'shop/goods/setOnOffSelves',
                //商品删除
                markDelete: 'shop/goods/markDelete',
                //获取当前分类
                getGoodsClassChain: 'shop/goods/getGoodsClassChain',

                //获取平台分类的的规信息
                getCategorySpecification:'shop/goods/getCategorySpecification',

                //运费模板
                saveTransport: "shop/carriagefee/saveTransport",//保存运费模板
                getTransportList: "shop/carriagefee/getTransportList",//获取运费模板名称列表
                getTransportExtList: "shop/carriagefee/getTransportExtList",//获取运费模板列表
                deleteTransport: "shop/carriagefee/deleteTransport",//删除运费模板


                getSpecIdList:"shop/goods/getSpecIdList", //巨轮查商品分类

                getLiantuoGoodsUpList: 'goods/goodsUp/getLiantuoGoodsUpList', //联拓资料上传列表
                getLiantuoGoodsUpDetail: 'goods/goodsUp/getLiantuoGoodsUpDetail', //联拓资料详情
                updateGoodsCommisRate:'shop/goods/updateGoodsCommisRate',//设置商品佣金
                getGoodsChangeLevelList: "shop/goods/getGoodsChangeLevelList", //获取商品积分等级列表接口
                getGoodsPropty:'shop/goods/getGoodsPropty',   //获取规格对应的销售价
                getSpecGoodsList:'shop/goods/getSpecGoodsList',   //获取有库存的规格商品
                getGoodsListByIds:'shop/goods/getGoodsListByIds'
            }
        },
        goodsIngra: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getGoodsDtl: "ingra/goods/getGoodsDtl",
                getGoodsCommentList:"ingra/user/getGoodsCommentList",
                getScoreGoodsList:'ingra/user/getScoreGoodsList',  //获取积分商品列表
                getShopGoodsClassList :'shop/conf/goodsclass/getShopGoodsClassList'   //带商品数据的分类
            }
        },
        ////////////////////////////////////
        /////// 组合服务常用公共接口           //////////
        ////////////////////////////////////
        common: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getList: "common/getList",
                getListTree: "common/getListTree",
                getListBox: "common/getListBox",
                changeState: "common/changeState",
                areaList:"admin/area/getAreaProvice",

                getMoneyCount: 'ingra/count/getMoneyCount' // 联拓 -- 资金统计列表
            }
        },
        ////////////////////////////////////
        /////// 组合服务接口           //////////
        ////////////////////////////////////
        integrate: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                selectGoodsAuctionList:'ingra/goods/selectGoodsAuctionList',//拍卖品
                selectGoodsList:'ingra/goods/selectGoodsList',
                getCommentList: 'ingra/comment/getCommentList',
                getOrderDetail:'ingra/order/getOrderDetail',
                orderDetail:'ingra/activityOrder/getOrderDetail',  //获取订单详情  （区分活动商品）
                getSystemHome: 'ingra/count/getSystemHome',  // 首页管理
                addCommentList:'ingra/comment/saveSuperComment',//添加假评论
                selectScoreGoodsList:'ingra/goods/selectScoreGoodsList',   //选择产品 (积分商城)
                saveScoreClass:'ingra/activity/saveGoodsChangeLevel', //兑换等级
                deleteScoreClass:'ingra/activity/deleteGoodsChangeLevel',
                getUrsAcctBalanceList: 'ingra/account/getUrsAcctBalanceList', //获取账户余额列表
                getDistHistoryDetailList: 'ingra/urit/getDistHistoryDetailList', //获取账目详情列表
                getOrderListByTuanId:'ingra/activityOrder/getOrderListByTuanId', //获取订单的拼团详情
                checkInfo: 'ingra/message/checkInfo', //绑定手机号获取验证码
                getAddressList: 'ingra/urit/getAddressList', // 获取商家通讯录
                getZCInfo:'ingra/activity/getZCInfo',   //获取众筹活动进度
                saveUrsMember: 'ingra/urit/saveUrsMember', // 用户注册
                applyCash: 'ingra/cash/applyCash' //申请提现
            }
        },
        ////////////////////////////////////
        /////// 商品评论接口           //////////
        ////////////////////////////////////
        comment: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                delComment:'comment/gc/delComment',//删除商品评论
            }
        },
        ////////////////////////////////////
        /////// 订单接口           //////////
        ////////////////////////////////////
        order: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getOrderList: 'order/od/getOrderList',//订单列表
                cancelOrder: 'order/od/cancelOrder',//取消订单
                deliverGoods: 'order/od/doFahuo',//发货
                getOrderAddressDetail: 'order/od/getOrderAddressDetail',//修改地址
                saveAddress: 'order/od/saveAddress',//提交修改后的地址
                updateOrderCommon:'orderCommon/od/updateOrderCommon',//商家备注
                showOrderMessage:'orderCommon/od/showOrderMessage',//买家留言
                deleteOrder:'order/od/deleteOrder',//删除订单
                validateShopExplain:'orderCommon/od/validateShopExplain',//判断商家是否已经备注
                getRefundReturnDetail:'order/orr/getRefundReturnDetail',//退款退货详情
                //shopRefuseRefund:'order/orr/shopRefuseRefund',//退款退货的拒绝退款理由
                getShopAddressDetail:'order/orr/getShopAddressDetail',//商家退款地址详细
                sendRefundAddress:'order/orr/sendRefundAddress',//发送商家地址

                ///////巨轮项目//////
                updateJuLunOrderStateById:'order/od/updateJuLunOrderStateById',//巨轮：修改订单交易状态根据订单id
                getJuLunOrderStateDetailById:'order/od/getJuLunOrderStateDetailById',//巨轮：根据订单id获取订单备货状态详细
                updateOrderAmonut:'order/oi/updateOrderAmonut',  //待付款修改订单金额
                sellerRecive:'order/orr/sellerRecive'  //卖家确认收货
            }
        },
        orderIngra: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getOrderDetail: 'ingra/order/getOrderDetail',//订单详情
                doRefundReturn: 'ingra/order/doRefundReturn' //拒绝退款
            }
        },
        //省市级(订单修改收货地址)
        provinceCity:{
            host: '127.0.0.1',
            port:'8088',
            api:{
                province:'admin/area/getProvince',//获取省列表
                city:'admin/area/getAreaByParentId'//获取市列表
            }
        },
        //后台首页
        supindex:{
            host: '127.0.0.1',
            port:'8088',
            api:{
                getShopBusinessData:'shop/userShops/getShopBusinessData'//后台首页数据显示
            }
        },
        coupon:{
            host:'127.0.0.1',
            port:'8088',
            api:{
                saveVirtualMoney:'account/virtualMoney/saveVirtualMoney',  //添加/修改红包
                getCashList:'account/cash/getCashList',// 提现记录-列表接口
                getCashNum:'account/cash/getCashNum',//获取提现次数
                getShopAcctBalanceDetail:'account/sab/getShopAcctBalanceDetail',//获取商家提现金额
                saveOrUpdateCash:'account/cash/saveOrUpdateCash',//提交提现申请
                getVirtualMoneyAll:'account/virtualMoney/getVirtualMoneyAll',// 获取 红包or优惠券 列表
                getPromotionDetail:"account/virtualMoney/getPromotionDetail", //卡卷详情
                deletePromotion:"account/virtualMoney/deleteVirtualMoney", //删除卡卷
                updatePromotionState:"account/virtualMoney/updateVirtualMoneyState",//启用/禁用红包卡卷
                deletePromotionAll:"account/virtualMoney/deleteVirtualMoneyAll",//批量删除红包卡卷
                getPromotionList:"account/virtualMoney/getVirtualMoneyAll" //促销活动列表
            }
        },


        //admin
        admin:{
            host: '127.0.0.1',
            port:'8088',
            api:{
                getTyreTypeList:'admin/dict/getTyreTypeList', //拿到二级分类
                //getShopShare:'admin/shareUrl/getShareUrlDetail',//店铺分享设置
                //saveShopShare:'admin/shareUrl/saveShareUrl'//保存店铺分享
                getParamsDetailByParamName: 'admin/params/getParamsDetailByParamName'  //回显
            }
        },
        shopIngra: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                getProfitInfo: "shop/userShops/getShopProfit"//获取商家收益信息
            }
        },
        msg:{
            host: '127.0.0.1',
            port: '8088',
            api: {
                getMsgList: "msg/core/message/listPage",//获取商家收益信息
                addMsg:"msg/core/message/addOrUpdate",//添加消息
                getUnreadNum:"msg/core/message/getUnReadMessageNum",//获取商家未读消息数
                getMsgDetail:"msg/core/message/get",//获取消息详情
                delete:"msg/core/message/delete",//删除消息
                changeState:"msg/core/message/state",//消息已读
                saveMsgPublish: 'msg/msgPublish/saveMsgPublish', //发布消息
                getMsgPublishList: 'msg/msgPublish/getMsgPublishList', //已发布和未发布的消息列表
                getMsgPublishDetail: 'msg/msgPublish/getMsgPublishDetail', //发布消息详情
                deletePublishMsg: 'msg/msgPublish/deletePublishMsg', // 发布消息删除
            }
        },


        activity: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                moduleList: "activity/common/listModule", //活动模块列表
                activitylistReg: 'activity/register/listReg', //获取活动列表
                mainDetail: "activity/admin/selectActivity", //某个活动主体详情
                joinActivityCount:'activity/register/joinActivityCount',
                mainList: 'activity/register/listActivity',//活动主体列表
                getActivityGoodsDetail:'activity/register/getActivityGoodsDetail',
                getPintuanInfoDetail:'activity/pintuanInfo/getPintuanInfoDetail',   //获取拼团信息详情
                getActivityDetailByRegId:'activity/register/getActivityDetailByRegId'
            }
        },
        activityReg: {
            host: '127.0.0.1',
            port: '8088',
            api: {
                addActReg:"activity/register/addActReg",//活动参与
                mainDetail: "activity/admin/selectActivity",//某个活动主体详情
                selectModule:"activity/common/selectModule",
                checkReg:"activity/public/checkReg",//校验活动是否可参加
                detailReg: "activity/register/selectActReg",//活动参与者详情
                getRegDetail:'activity/public/getRegDetail',  //查看活动报名详情(带审核信息)
                listReg: "activity/register/listReg",//活动参与审核列表
                joinActivityCount:'activity/register/joinActivityCount',
                mainList: 'activity/register/listActivity',//活动主体列表
                listNewActivity:'activity/register/listNewActivity'  //最新活动

            }
        },
        weixin:{
            host: '127.0.0.1',
            port: '8088',
            api: {
                getShopShare:'weixin/shareUrl/getShareUrlDetail',//店铺分享设置
                saveShopShare:'weixin/shareUrl/saveShareUrl',//保存店铺分享
                getList:'weixin/wxm/getList',//获得微信的信息
                saveForm:'weixin/wxm/saveWeixinForm',//保存或者修改微信信息
                getOne:'weixin/wxm/getWeixinInfoMainDetail'//获得一个人的微信信息
            }
        }

    }
};
