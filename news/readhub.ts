import axios from "axios";
import cheerio from "cheerio";

// readhub https://readhub.cn/daily
export async function fetchReadhubNews() {
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
    const all_list = ["在这里，每天60秒读懂世界！", new Date(), ...news_list];
    const weiyu = "【微语】万物之中 希望至美";
    return { weiyu, news_list, all_list };
  } catch (error) {
    console.error(error);
  }
}

// fetchReadhubNews();
