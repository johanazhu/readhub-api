import axios from "axios";
import cheerio from "cheerio";

// 网易 365 天新闻 https://www.163.com/dy/media/T1603594732083.html
async function fetchNews() {
  try {
    let result = await axios.get(
      "https://www.163.com/dy/media/T1603594732083.html"
    );
    let news_list = [];
    const final_list = [];
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
        i = i.replace("\u200b", "");
        if (i.includes("、") || i.includes(".")) {
          let new_str = i.split("、")[1];
          if (!new_str) {
            new_str = i.split(". ")[1];
          }
          if (new_str && !new_str.includes("微语")) {
            news_list.push(new_str);
          }
        }
        final_list.push(i);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

fetchNews();
