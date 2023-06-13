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
      title: "没有",
      date: "没有",
      news: news_list,
      weiyu: "你好",
    },
    // all_data: all_list,
  });
}
