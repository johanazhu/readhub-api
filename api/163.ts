import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetch163News } from "../news/163";
// import { fetchNews as fetchReadhubNews } from "../news/readhub.js";
// import { fetchNews as fetch163News } from "../news/163.js";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { weiyu, news_list, all_list } = await fetch163News();

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
