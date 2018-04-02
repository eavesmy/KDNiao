const _encode = require("./encode");
const Request = require("./net");

const T_EORDER = {
    url: "",
    test_url: "",
    code: "1007"
}; // 电子面单

const T_ROUTE = {
    url: "http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx",
    test_url: "http://sandboxapi.kdniao.cc:8080/kdniaosandbox/gateway/exterfaceInvoke.json",
    code: "1002"
}; // 即时查询

const CONFIG = {
    AppKey: "",
    EBusinessID: "",
    IsTest: true,
};

const DATAMODEL = {
    DataType: "2"
}

exports.Set = (k, v) => {

    if (!v || !k || typeof v !== "string") return console.error("Parma error.");

    CONFIG[k] = v;
}

exports.Route = requestData => {

    let data = Object.assign({
        EBusinessID: CONFIG.EBusinessID
    }, DATAMODEL);

    data.RequestType = T_ROUTE;
    data.RequestData = requestData;

    return Request(T_ROUTE, CONFIG.IsTest, _encode(data, CONFIG))
}
