"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
// 知乎 新闻60s  API
async function fetchNews() {
    try {
        let result = await axios_1.default.get("https://www.zhihu.com/api/v4/columns/c_1261258401923026944/items");
        let all_list = [];
        let news_list = [];
        let weiyu = "";
        let $ = cheerio_1.default.load(result.data.data[0].content);
        const pTags = $("p");
        pTags.each((index, element) => {
            if ($(element).text()) {
                all_list.push($(element).text());
            }
            if ($(element).text().indexOf("、") > -1) {
                // console.log($(element).text());
                news_list.push($(element).text());
            }
            else if ($(element).text().indexOf("微语") > -1) {
                weiyu = $(element).text();
            }
        });
        // console.log("news_list", news_list);
        // console.log("all_list", all_list);
        return { weiyu, news_list, all_list };
    }
    catch (error) {
        console.log(error);
    }
}
// fetchNews();
exports.default = fetchNews;
