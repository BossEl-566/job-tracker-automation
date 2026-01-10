require("dotenv").config();
const nodemailer = require("nodemailer");
const applications = require("./applications");
const { followUpTemplate } = require("./emailTemplates");

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Calculate days since application
function daysSince(dateString) {
  const appliedDate = new Date(dateString);
  const today = new Date();
  const diffTime = today - appliedDate;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Find applications needing follow-up
const followUpsNeeded = applications.filter(app => {
  return (
    app.status === "applied" &&
    app.followUpSent === false &&
    daysSince(app.dateApplied) >= 7
  );
});

// Send follow-up emails
async function sendFollowUps() {
  if (followUpsNeeded.length === 0) {
    console.log("✅ No follow-ups needed today.");
    return;
  }

  for (const app of followUpsNeeded) {
    try {
      await transporter.sendMail({
        from: `"Delali" <${process.env.EMAIL_USER}>`,
        to: app.recruiterEmail,
        subject: `Follow-up on ${app.role} Application`,
        text: followUpTemplate(app)
      });

      app.followUpSent = true;
      console.log(`📨 Follow-up sent to ${app.company}`);
    } catch (error) {
      console.error(
        `❌ Failed to send follow-up to ${app.recruiterEmail}`,
        error.message
      );
    }
  }
}

sendFollowUps();
