let http = require("http");
let https = require("https");

const url = require("url");

const Options = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    }
}

const Post = (protocol, options, data) => {

    return new Promise((re, rj) => {
				
        let req = protocol.request(options, res => {

            let chunk = "";

            res.on("data", data => {
                chunk += data;
            });

            res.on("end", () => {
                re(chunk);
            });

        });

        req.write(data);
        req.on("error", rj);

        req.end();

    })
}

module.exports = (config, isTest, data) => {

    let options = Object.assign({}, Options);
    options.headers["Content-Length"] = Buffer.from(data).length;

    let request_url = isTest ? config.test_url : config.url;

    let urlData = url.parse(request_url);

    return Post((urlData.protocol === "https:" ? https : http), Object.assign(options, urlData), data);
}
