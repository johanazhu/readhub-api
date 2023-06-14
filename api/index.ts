import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchZhihuNews } from "../news/zhihu";
import { fetchReadhubNews } from "../news/readhub";
import { fetch163News } from "../news/163";

// http://localhost:3000/api?origin=zhihu
// http://localhost:3000/api?origin=163
// http://localhost:3000/api?origin=readhub

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { origin = "zhihu" } = request.query;
  console.log("origin", origin);
  let weiyu: any, news_list: any, all_list: any;
  switch (origin) {
    case "zhihu":
      const zhihuResult = await fetchZhihuNews();
      weiyu = zhihuResult.weiyu;
      news_list = zhihuResult.news_list;
      all_list = zhihuResult.all_list;
      break;
    case "163":
      const wangyiResult = await fetch163News();
      weiyu = wangyiResult.weiyu;
      news_list = wangyiResult.news_list;
      all_list = wangyiResult.all_list;
      break;
    case "readhub":
      console.log("readhub");
      const readhubResult: any = await fetchReadhubNews();
      console.log("readhubResult", readhubResult);
      weiyu = readhubResult.weiyu;
      news_list = readhubResult.news_list;
      all_list = readhubResult.all_list;
      break;
  }
  // console.log("111", all_list);
  return response.send({
    code: 200,
    time: new Date().getTime(),
    data: {
      title: all_list[0],
      date: all_list[1],
      news: news_list,
      weiyu: weiyu,
    },
    all_data: all_list,
  });
}
