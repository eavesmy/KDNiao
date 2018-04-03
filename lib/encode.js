const crypto = require("crypto");
const queryString = require("querystring");

let encrypt = (str, key) => {

    let md5 = crypto.createHash("md5");
    md5.update(str);
    md5.update(key);
    return Buffer.from(md5.digest("hex")).toString("base64");
};

module.exports = (data, config) => {

    data.RequestData = JSON.stringify(data.RequestData);
    data.DataSign = encodeURI(encrypt(data.RequestData, config.AppKey));
    data = queryString.stringify(data);

    return data;
}
