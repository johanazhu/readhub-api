const axios = require("axios");
const cheerio = require("cheerio");

// 网易 365 天新闻 https://www.163.com/dy/media/T1603594732083.html
async function fetchNews() {
  try {
    let result = await axios.get(
      "https://www.163.com/dy/media/T1603594732083.html"
    );
    let news_list = [];
    const $ = cheerio.load(result.data);
    const news = $("ul.list_box").find(`div[data-date="2021-06-07"]`);
    const list_box = $(".list_box");
    $("list_box").find("li")[0];
    console.log("list_box", list_box);
  } catch (error) {
    console.log(error);
  }
}

fetchNews();
