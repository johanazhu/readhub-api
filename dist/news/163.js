"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch163News = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
// 网易 365 天新闻 https://www.163.com/dy/media/T1603594732083.html
async function fetch163News() {
    try {
        let result = await axios_1.default.get("https://www.163.com/dy/media/T1603594732083.html");
        let news_list = [];
        let all_list = [];
        let weiyu = "";
        const $ = cheerio_1.default.load(result.data);
        const href = $("a.title").attr("href");
        // console.log(href);
        let resultDetail = await axios_1.default.get(href);
        const $$ = cheerio_1.default.load(resultDetail.data);
        const day_news = $$("div.post_body");
        const list_all = day_news.html().split("<br>");
        for (let i of list_all) {
            if (i.includes("↑")) {
                continue;
            }
            if (!i.includes("<") && !i.includes(">") && i !== "") {
                i = i.replace("\u200b", "");
                if (i.includes("、") || i.includes(".")) {
                    let new_str = i.split("、")[1];
                    if (!new_str) {
                        new_str = i.split(". ")[1];
                    }
                    if (new_str.includes("微语")) {
                        weiyu = new_str;
                    }
                    if (new_str && !new_str.includes("微语")) {
                        news_list.push(new_str);
                    }
                }
                all_list.push(i);
            }
        }
        return { weiyu, news_list, all_list };
    }
    catch (error) {
        console.log(error);
    }
}
exports.fetch163News = fetch163News;
// fetch163News();
