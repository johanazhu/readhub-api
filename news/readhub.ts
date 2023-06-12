import axios from "axios";
import cheerio from "cheerio";

// readhub https://readhub.cn/daily
async function fetchNews() {
  try {
    let result = await axios.get("https://readhub.cn/daily");
    let news_list: any = [];
    const $ = cheerio.load(result.data);
    const articles = $('[class*="Daily_list"]');
    const allTitle = $(articles).find("a");
    allTitle.each((i, el) => {
      const title = $(el).text();
      // console.log(title);
      news_list.push(i + "、" + title);
    });
    return news_list;
  } catch (error) {
    console.error(error);
  }
}

fetchNews();

export default fetchNews;
