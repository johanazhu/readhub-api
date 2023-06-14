import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchZhihuNews } from "../news/zhihu";
// import { fetchNews as fetchReadhubNews } from "../news/readhub.js";
// import { fetchNews as fetch163News } from "../news/163.js";

// export default async function handler(req) {
//   const { searchParams } = new URL(req.url)
//   const email = searchParams.get('email')
//   return new Response(email)
// }

// http://localhost:3000/api?origin=zhihu
// http://localhost:3000/api?origin=163
// http://localhost:3000/api?origin=readhub

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { weiyu, news_list, all_list } = await fetchZhihuNews();

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
