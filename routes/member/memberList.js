/**
 * Created by Administrator on 2017/8/1.
 */
module.exports = function (bfw, route) {
    route.get("/getList", function (req, res, next) {
        // logger = require("log4js").getlogger();
        // logger.debug("debug");
        res.render("member/memberList");
    });
    route.post("/getList", function (req, res, next) {
        var data = {
            header: {
                isByAppId: 0,
                appId: 1,
                appKey: "",
                method: "supindex",
                isByAppId: 0,
                appId: 1,
                appKey: "",
                session: "c7CAHw6jgzv0Vr46meZB5Zsa-m449Fvj",
                signMethod: "",
                format: "",
                v: "",
                simplify: "",
                sign: "",
                timestamp: "",
                appName: null,
                reqOrg: "pcShop",
                userFlag: 0,
                operType: "",
                operUserId: 1,
                operUserName: "admin",
                pageSumCount: 0,
                pageDisable: 0,
                page: 1,
                rows: 10,
                storeId: 1,
            },
            body: {
                memberName: ""
            }
        };
        BDubbo.post("member.getMemberList", data, function (result) {
            res.json(result);
        });
    });
};