const sdk = require("./index");

sdk.Set("AppKey", "9e885369-ad1a-4642-a144-984a8f1d8c17");
sdk.Set("EBusinessID", "test1330136");

// ShipperCode    SF
// LogisticCode   单号
sdk.Route({
        ShipperCode: "SF",
        LogisticCode: "789943975213"
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
