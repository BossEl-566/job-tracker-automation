const fs = require("fs-extra");
const path = require("path");

const DB_PATH = path.join(__dirname, "applications.js");

async function saveJobs(jobs) {
  let existingJobs = [];

  try {
    delete require.cache[require.resolve("./applications")];
    existingJobs = require("./applications");
  } catch {
    existingJobs = [];
  }

  const existingLinks = existingJobs.map(job => job.link);

  const newJobs = jobs.filter(job => !existingLinks.includes(job.link));

  const formattedJobs = newJobs.map(job => ({
    company: job.source,
    role: job.title,
    recruiterName: "Not specified",
    recruiterEmail: "not_available",
    link: job.link,
    dateApplied: null,
    status: "not_applied",
    followUpSent: false,
    dateAdded: new Date().toISOString().split("T")[0]
  }));

  const updatedJobs = [...existingJobs, ...formattedJobs];

  const fileContent =
    "module.exports = " + JSON.stringify(updatedJobs, null, 2);

  await fs.writeFile(DB_PATH, fileContent);

  return formattedJobs;
}

module.exports = saveJobs;
