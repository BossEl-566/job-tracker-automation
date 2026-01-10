function followUpTemplate(app) {
  return `
Hello ${app.recruiterName},

I hope you are doing well.

I’m following up on my application for the ${app.role} position at ${app.company}. 
I remain very interested in the opportunity and would love to know if there are any updates.

Thank you for your time and consideration.

Kind regards,
Delali
`;
}

module.exports = { followUpTemplate };
