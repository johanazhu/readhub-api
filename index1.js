// const express = require("express");
// const fetchNews = require("./news/zhihu");
// const getTime = require("./utils");

// const app = express();
// // app.get("/api", async (req, res) => {
// //   try {
// //     const { weiyu, news_list, all_list } = await fetchNews();
// //     res.json({
// //       code: 200,
// //       time: getTime(),
// //       data: {
// //         title: all_list[0],
// //         date: all_list[1],
// //         news: news_list,
// //         weiyu,
// //       },
// //       all_data: all_list,
// //     });
// //   } catch (error) {
// //     res.json({
// //       code: 500,
// //       time: getTime(),
// //       data: "数据获取失败",
// //       all_data: "数据获取失败",
// //     });
// //   }
// // });
// // app.listen(3001, () => {
// //   console.log("3001 端口启动");
// // });

// // 定时任务，每天早上6点更新一次，每天8点钟发送到企业微信中
// //
// // function crontab() {
// //   schedule.scheduleJob(`00 00 18 * * *`, mainTask);
// // }
// // 任务
// // function mainTask(){...}
