import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchReadhubNews } from "../news/readhub";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { weiyu, news_list, all_list }: any = await fetchReadhubNews();

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
