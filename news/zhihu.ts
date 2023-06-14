import axios from "axios";
import cheerio from "cheerio";

// 知乎 新闻60s  API
export async function fetchZhihuNews(): Promise<any> {
  try {
    let result = await axios.get(
      "https://www.zhihu.com/api/v4/columns/c_1261258401923026944/items"
    );
    let all_list: any = [];
    let news_list: any = [];
    let weiyu = "";

    let $ = cheerio.load(result.data.data[0].content);
    const pTags = $("p");
    pTags.each((index, element) => {
      if ($(element).text()) {
        all_list.push($(element).text());
      }
      if ($(element).text().indexOf("、") > -1) {
        // console.log($(element).text());
        news_list.push($(element).text());
      } else if ($(element).text().indexOf("微语") > -1) {
        weiyu = $(element).text();
      }
    });
    // console.log("news_list", news_list);
    // console.log("all_list", all_list);
    return { weiyu, news_list, all_list };
  } catch (error) {
    console.log(error);
  }
}

// fetchNews();
