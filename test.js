const sdk = require("./index");

sdk.Set("AppKey", "9e885369-ad1a-4642-a144-984a8f1d8c17");
sdk.Set("EBusinessID", "1330136");
// sdk.Set("IsTest", false);

// ShipperCode    SF
// LogisticCode   单号

/*
sdk.Route({
        ShipperCode: "JD",
        LogisticCode: "72072225514"
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));

		*/
// sdk.Reservation
sdk.Order({
        ShipperCode: "JD",
        OrderCode: "72072225514",
        ThrOrderCode: "72072225514",
        PayType: 3,
        MonthCode: "7553045845",
        ExpType: 1,
        Receiver: {
            Name: "老毕",
            Tel: "",
            Mobile: "18603775088",
            ProvinceName: "北京市",
            CityName: "北京市",
            ExpAreaName: "朝阳区",
            Address: "国奥村东区C1 1单元 202",
        },
        Sender: {
            Name: "北京万美丹尼科技有限公司",
            Tel: "",
            Mobile: "18603775088",
            ProvinceName: "北京市",
            CityName: "北京市",
            ExpAreaName: "朝阳区",
            Address: "国奥村东区C1 1单元 202",
        },
        Commodity: [{
            GoodsName: "服装"
        }],
        Remark: "快快送达",
        IsNotice: 0,
        StartDate: "2018-04-03 15:00:00",
        EndDate: "2018-04-03 17:30:00",
        IsReturnPrintTemplate: "0",
				CustomerName:"010K0001"
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
