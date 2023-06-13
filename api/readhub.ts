import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchReadhubNews } from "../news/readhub";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const news_list = await fetchReadhubNews();

  return response.send({
    code: 200,
    time: new Date().getTime(),
    data: {
      title: "在这里，每天60秒读懂世界！",
      date: new Date(),
      news: news_list,
      weiyu: "【微语】万物之中 希望至美",
    },
    // all_data: all_list,
  });
}
