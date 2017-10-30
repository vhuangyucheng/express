/**
 * Created by Administrator on 2017/8/17.
 */
require(['../../../public/js/config'], function () {
    require(['page','template','jquery', "loading",'amazeUI','tab','setTitle'], function (page, template,$,L) {
        // require(["page"]);
        /////////////////////
        //标签切换
        ////////////////////
        $('#doc-my-tabs').tabs();
        var appId = localStorage.getItem('appId');
        var wechatPage = sessionStorage.getItem("memberOrderPage");
        if (appId == '400') {
            $('.dismanage').hide();
        }
        reqData(wechatPage == null ? 1 : wechatPage, '', '', '');
        //请求会员列表
        function reqData(page, classId, wxappId, wxappName) {
            var loading = new L();
            // console.log(memberName + "000");//test_ok
            sessionStorage.setItem("wechatPage", page);
            $.ajax({
                url: "/wechat/wechat/getList",
                type: "post",
                data: {
                    page: page,
                    stcId: classId,
                    appId: appId,
                    wxappId: wxappId,
                    wxappName: wxappName
                },
                dataType: "json",
                beforeSend: function (XMLHttpRequest) {
                    loading.open();
                },
                success: function (data) {
                    // console.log(data);
                    var list = [];
                    $(data.data).each(function(i, o) {
                        list.push(o);
                    });
                    var pagination = data.pagination;
                    var html, pageHtml, data, pageData, num = true;
                    var _data = {
                        list: list
                    }
                    var pageData = {
                        pagination: pagination
                    }
                    pageHtml = template('jsPage', pageData);
                    $("#pageInfo").html(pageHtml);
                    $(".dataList").html(template('dataList', _data));
                    //分页
                    $("#pagination").find(".pagination").pagination(pagination.total, {
                        num_edge_entries: 1, //边缘页数
                        num_display_entries: 4, //主体页数
                        items_per_page: pagination.pagesize, //每页显示数项
                        current_page: pagination.pageindex - 1,
                        prev_text: "上一页",
                        next_text: "下一页",
                        callback: function (page_index, jq) {
                            $("#pagination").find(".pagination").find("a").on("click", function () {
                                page = $("#pagination").find(".pagination").find(".current").html();
                                if (page == "上一页") {
                                    page = 1;
                                }
                                reqData(page, classId, wxappId, wxappName);
                            })
                        }
                    });
                    // $(".goodsClassList option").eq(sessionStorage.getItem("goodsClassSelectedIndex")).prop("selected", true);
                    // sessionStorage.removeItem("goodsClassSelectedIndex");//销毁select当前选项记录


                    // }
                    loading.close();
                }

            })
        }
        //搜索商品
        $(document).on("click", ".id-search", function () {
            // classId = $(".goodsClassList option:selected").val();
            // goodsNum = $(".orderNumInput").val();
            var wxappId = $(".weixinId").val();
            var wxappName = $(".weixinName").val();
            console.log(wxappId);
            console.log(wxappName);
            // sessionStorage.setItem("goodsClassSelectedIndex", $(".goodsClassList option:selected").index());//保存select当前选项
            reqData(page, '', wxappId, wxappName);
        });

        //状态转换
        template.helper("wxappType", function (t) {
            var real = ['服务号', '订阅号', '企业服务号'];
            if(t == '10'){
                return real[0];
            } else if(t == '20'){
                return real[1]
            } else if(t == '30'){
                return real[2];
            }
        });

        template.helper("state", function (t) {
            var real = ['正常', '禁用'];
            if(t == '1'){
                return real[0];
            } else if(t == '0'){
                return real[1];
            }
        });

        template.helper("flag", function (t) {
            var real = ['平台微信', '店铺微信'];
            if(t == '1'){
                return real[0];
            } else if(t == '0'){
                return real[1];
            }
        });
    });
});
