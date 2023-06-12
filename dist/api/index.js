"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zhihu_1 = __importDefault(require("../news/zhihu"));
// import { fetchNews as fetchReadhubNews } from "../news/readhub.js";
// import { fetchNews as fetch163News } from "../news/163.js";
async function handler(request, response) {
    const { weiyu, news_list, all_list } = await (0, zhihu_1.default)();
    // const { news_list: readhubNewList } = await fetchReadhubNews();
    // const { news_list: readhubNewList } = await fetch163News();
    return response.send({
        code: 200,
        time: new Date().getTime(),
        data: {
            title: all_list[0],
            date: all_list[1],
            news: news_list,
            weiyu,
        },
        all_data: all_list,
    });
}
exports.default = handler;
// // 定时任务，每天早上6点更新一次，每天8点钟发送到企业微信中
// //
// // function crontab() {
// //   schedule.scheduleJob(`00 00 18 * * *`, mainTask);
// // }
// // 任务
// // function mainTask(){...}
