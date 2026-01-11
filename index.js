const fetchJobs = require("./jobFetcher");
const saveJobs = require("./jobSaver");
const sendJobAlert = require("./jobAlertMailer");

(async () => {
  console.log("🔍 Checking for new jobs...");

  const jobs = await fetchJobs();
  const newJobs = await saveJobs(jobs);

  if (newJobs.length === 0) {
    console.log("✅ No new jobs found.");
  } else {
    console.log(`🔥 ${newJobs.length} new jobs saved.`);
    await sendJobAlert(newJobs);
  }
})();
