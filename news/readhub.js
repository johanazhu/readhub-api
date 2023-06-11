const axios = require("axios");
const cheerio = require("cheerio");

// readhub https://readhub.cn/daily
async function fetchNews() {
  try {
    let result = await axios.get("https://readhub.cn/daily");
    let news_list = [];
    const $ = cheerio.load(result.data);
    const articles = $('[class*="Daily_list"]');
    const allTitle = $(articles).find("a");
    allTitle.each((i, el) => {
      const title = $(el).text();
      // console.log(title);
      news_list.push(title);
    });
    return news_list;
  } catch (error) {
    console.error(error);
  }
}

module.exports = fetchNews;
