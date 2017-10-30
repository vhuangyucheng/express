/**
 * Created by Administrator on 2017/8/7.
 */
//先获得配置文件
require(['../../public/js/config'], function () {
    require(['jquery', 'template'], function ($, template) {
        $.ajax({
            url: "/member/memberList/getList",
            type: "post",
            data: {

            },
            dataType: "json",
            beforeSend: function (XMLHttpRequest) {
                console.log("before ++++++++++++");
            },
            success: function (data) {
                // console.log(data);
                var list = [];
                $(data.data).each(function (i, o) {
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
                // pageHtml = template('jsPage', pageData);
                // $("#pageInfo").html(pageHtml);
                $(".dataList").html(template('dataList', _data));
                //分页
                // $("#pagination").find(".pagination").pagination(pagination.total, {
                //     num_edge_entries: 1, //边缘页数
                //     num_display_entries: 4, //主体页数
                //     items_per_page: pagination.pagesize, //每页显示数项
                //     current_page: pagination.pageindex - 1,
                //     prev_text: "上一页",
                //     next_text: "下一页",
                //     callback: function (page_index, jq) {
                //         $("#pagination").find(".pagination").find("a").on("click", function () {
                //             page = $("#pagination").find(".pagination").find(".current").html();
                //             if (page == "上一页") {
                //                 page = 1;
                //             }
                //             reqData(page, memberGrade, memberMobile, memberName, startTime, endTime);
                //         })
                //     }
                // });

            }

        });
    });
});



















