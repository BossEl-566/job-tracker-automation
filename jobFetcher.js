const Parser = require("rss-parser");
const parser = new Parser();

// RSS job sources (safe & public)
const JOB_FEEDS = [
  {
    name: "RemoteOK",
    url: "https://remoteok.com/remote-dev-jobs.rss"
  },
  {
    name: "WeWorkRemotely",
    url: "https://weworkremotely.com/categories/remote-programming-jobs.rss"
  }
];

// Keywords you care about
const KEYWORDS = ["intern", "junior", "software", "developer", "frontend", "backend"];

function matchesKeywords(text) {
  return KEYWORDS.some(keyword =>
    text.toLowerCase().includes(keyword)
  );
}

async function fetchJobs() {
  let results = [];

  for (const feed of JOB_FEEDS) {
    try {
      const data = await parser.parseURL(feed.url);

      data.items.forEach(item => {
        const content = `${item.title} ${item.contentSnippet || ""}`;

        if (matchesKeywords(content)) {
          results.push({
            source: feed.name,
            title: item.title,
            link: item.link,
            datePosted: item.pubDate
          });
        }
      });

    } catch (error) {
      console.error(`❌ Failed to fetch from ${feed.name}`);
    }
  }

  return results;
}

module.exports = fetchJobs;
