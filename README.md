# 📌 Job Application Tracker & Email Follow-Up Automation

This project is a Node.js–based automation tool designed to help job seekers track their job applications and automatically send polite follow-up emails to recruiters after a set period of time. It solves a real-world problem by ensuring timely follow-ups without spamming recruiters.

The system checks how many days have passed since an application was submitted and automatically sends a follow-up email if no response has been received after 7 days.

---

## ✨ Features

* Track job applications (company, role, recruiter details)
* Automatically detect applications needing follow-up
* Send personalized follow-up emails using Nodemailer
* Prevent duplicate follow-ups
* Secure email credentials using environment variables
* Simple, extensible project structure

---

## 🛠️ Tech Stack

* Node.js
* Nodemailer
* dotenv
* Gmail SMTP

---

## 📂 Project Structure

```
job-tracker-automation/
├── index.js
├── applications.js
├── emailTemplates.js
├── .env
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/BossEl-566/job-tracker-automation.git
cd job-tracker-automation
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> ⚠️ Make sure to use a Gmail **App Password** and do not commit the `.env` file to GitHub.

---

## ▶️ Usage

Run the automation script:

```bash
node index.js
```

The script will:

* Check all applications
* Identify applications older than 7 days
* Send follow-up emails where needed
* Mark follow-ups as sent to avoid duplicates

---

## 🎯 Use Case

This project is ideal for students and early-career professionals who want to:

* Stay organized during job applications
* Follow up professionally
* Automate repetitive tasks
* Demonstrate real-world automation skills

---

## 🚀 Future Improvements

* Persist data using JSON or MongoDB
* Schedule daily execution (cron jobs)
* Add CV attachment support
* Build a web dashboard
* Integrate CI/CD with GitHub Actions

---

## 👤 Author

**Elliot**
Computer Science Student | Software Engineer

