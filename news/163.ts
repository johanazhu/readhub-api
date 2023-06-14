import axios from "axios";
import cheerio from "cheerio";

// 网易 365 天新闻 https://www.163.com/dy/media/T1603594732083.html
export async function fetch163News(): Promise<any> {
  try {
    let result = await axios.get(
      "https://www.163.com/dy/media/T1603594732083.html"
    );
    let news_list = [];
    let all_list = [];
    let weiyu = "";
    const $ = cheerio.load(result.data);
    const href: any = $("a.title").attr("href");
    // console.log(href);
    let resultDetail = await axios.get(href);
    const $$ = cheerio.load(resultDetail.data);

    const day_news: any = $$("div.post_body");
    const list_all = day_news.html().split("<br>");
    for (let i of list_all) {
      if (i.includes("↑")) {
        continue;
      }
      if (!i.includes("<") && !i.includes(">") && i !== "") {
        // i = i.replace("\u200b", "");
        if (i.includes("、") || i.includes(".")) {
          // console.log("new_str111", i);
          let new_str = i.replace(". ", "、");
          news_list.push(new_str);
        }
        if (i.includes("微语")) {
          // console.log("微语", i);
          weiyu = i;
        }
        all_list.push(i);
      }
    }

    return { weiyu, news_list, all_list };
  } catch (error) {
    console.log(error);
  }
}
// fetch163News();
