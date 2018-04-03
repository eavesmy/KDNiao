const _encode = require("./encode");
const Request = require("./net");

const T_EORDER = {
    url: "http://api.kdniao.cc/api/EOrderService",
    test_url: "http://testapi.kdniao.cc:8081/api/EOrderService",
    code: "1007"
}; // 电子面单

const T_ROUTE = {
    url: "http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx",
    // test_url: "http://sandboxapi.kdniao.cc:8080/kdniaosandbox/gateway/exterfaceInvoke.json",
    test_url: "http://testapi.kdniao.cc:8081/api/EOrderService",
    code: "1002"
}; // 即时查询

const T_RESERVATION = {
    url: "http://api.kdniao.cc/api/oorderservice",
    test_url: "http://testapi.kdniao.cc:8081/api/oorderservice",
    code: "1001"
}

const CONFIG = {
    AppKey: "",
    IsTest: true,
    EBusinessID: "",
};

const DATAMODEL = {
    DataType: "2",
}

exports.Set = (k, v) => {

    if (!v || !k || typeof v !== "string") return console.error("Parma error.");

    CONFIG[k] = v;
}

exports.Route = requestData => {

    let data = Object.assign({}, DATAMODEL);

    data.RequestType = T_ROUTE.code;
    data.RequestData = requestData;
    data.EBusinessID = CONFIG.EBusinessID;

    return Request(T_ROUTE, CONFIG.IsTest, _encode(data, CONFIG))
}

exports.Order = requestData => {

    let data = Object.assign({}, DATAMODEL);

    data.RequestType = T_EORDER.code;
    data.RequestData = requestData;
    data.EBusinessID = CONFIG.EBusinessID;

    return Request(T_EORDER, CONFIG.IsTest, _encode(data, CONFIG));
};

exports.Reservation = requestData => {

    let data = Object.assign({}, DATAMODEL);

    data.RequestType = T_RESERVATION.code;
    data.RequestData = requestData;
    data.EBusinessID = CONFIG.EBusinessID;

    return Request(T_RESERVATION, CONFIG.IsTest, _encode(data, CONFIG));
};
