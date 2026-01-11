require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendJobAlert(jobs) {
  if (jobs.length === 0) return;

  const jobList = jobs
    .map(job => `• ${job.role}\n  ${job.link}`)
    .join("\n\n");

  await transporter.sendMail({
    from: `"Job Alert Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🔥 ${jobs.length} New Job Opportunities Found`,
    text: `New jobs matching your profile:\n\n${jobList}`
  });

  console.log("📧 Job alert email sent.");
}

module.exports = sendJobAlert;
