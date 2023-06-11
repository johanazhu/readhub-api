import axios from "axios";
import cheerio from "cheerio";

// 知乎 新闻60s  API
async function fetchNews() {
  try {
    let result = await axios.get(
      "https://www.zhihu.com/api/v4/columns/c_1261258401923026944/items"
    );
    let all_list = [];
    let news_list = [];
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
    return { weiyu, news_list, all_list };
  } catch (error) {
    console.log(error);
  }
}
export default fetchNews;
