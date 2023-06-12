import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetchNews from "../news/zhihu";
// import { fetchNews as fetchReadhubNews } from "../news/readhub.js";
// import { fetchNews as fetch163News } from "../news/163.js";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { weiyu, news_list, all_list } = await fetchNews();
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

// // 定时任务，每天早上6点更新一次，每天8点钟发送到企业微信中
// //
// // function crontab() {
// //   schedule.scheduleJob(`00 00 18 * * *`, mainTask);
// // }
// // 任务
// // function mainTask(){...}
