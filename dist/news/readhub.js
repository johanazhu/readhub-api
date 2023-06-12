"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
// readhub https://readhub.cn/daily
async function fetchNews() {
    try {
        let result = await axios_1.default.get("https://readhub.cn/daily");
        let news_list = [];
        const $ = cheerio_1.default.load(result.data);
        const articles = $('[class*="Daily_list"]');
        const allTitle = $(articles).find("a");
        allTitle.each((i, el) => {
            const title = $(el).text();
            // console.log(title);
            news_list.push(i + "、" + title);
        });
        return news_list;
    }
    catch (error) {
        console.error(error);
    }
}
fetchNews();
exports.default = fetchNews;
