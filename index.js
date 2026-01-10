const applications = require("./applications");

// helper function to calculate days difference
function daysSince(dateString) {
  const appliedDate = new Date(dateString);
  const today = new Date();

  const diffTime = today - appliedDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

// find applications that need follow-up
const followUpsNeeded = applications.filter(app => {
  return (
    app.status === "applied" &&
    app.followUpSent === false &&
    daysSince(app.dateApplied) >= 7
  );
});

// output result
if (followUpsNeeded.length === 0) {
  console.log("✅ No follow-ups needed today.");
} else {
  console.log("📬 Follow-ups needed for:");
  followUpsNeeded.forEach(app => {
    console.log(
      `- ${app.company} | ${app.role} | ${app.recruiterEmail}`
    );
  });
}
