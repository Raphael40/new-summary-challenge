const NewsClient = require("./newsClient");

class NewsModel {
  constructor(client) {
    this.client = client;
    this.news = null;
  }

  load(query) {
    return this.client.fetchNewsData(query).then(data => {
      this.news = data;
      // console.log(this.news)
    });
  }

  getNewsData() {
    return this.news;
  }
}

module.exports = NewsModel;