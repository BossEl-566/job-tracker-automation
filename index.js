const fetchJobs = require("./jobFetcher");

(async () => {
  const jobs = await fetchJobs();

  if (jobs.length === 0) {
    console.log("❌ No matching jobs found.");
  } else {
    console.log(`🔥 Found ${jobs.length} matching jobs:\n`);
    jobs.forEach(job => {
      console.log(`• ${job.title}`);
      console.log(`  Source: ${job.source}`);
      console.log(`  Link: ${job.link}\n`);
    });
  }
})();
