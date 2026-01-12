# 📌 Job Application Tracker & Recruiter Email Automation

This project is a **Node.js–based automation system** designed to help job seekers **track job applications** and **automatically send professional follow-up emails** to recruiters after a defined period.

It solves a common real-world problem:
👉 *forgetting to follow up on job applications* — while also avoiding spam or duplicate emails.

The system checks how many days have passed since an application was submitted and sends a **polite, personalized follow-up email** if no response has been received after **7 days**.

---

## ✨ Key Features

* Track job applications (company, role, recruiter email, date applied)
* Automatically identify applications that need follow-up
* Send personalized follow-up emails using Nodemailer
* Prevent duplicate follow-ups
* Secure credential handling with environment variables
* Clean and extensible project structure
* Ready for AI and database integration

---

## 🛠️ Tech Stack

* **Node.js**
* **Nodemailer**
* **dotenv**
* **Gmail SMTP**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
job-tracker-automation/
├── index.js            # Main automation logic
├── applications.js     # Job application data
├── emailTemplates.js   # Email content templates
├── .env                # Environment variables (ignored by Git)
├── .gitignore
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
EMAIL_PASS=your_gmail_app_password
```

> ⚠️ Use a **Gmail App Password** (not your normal Gmail password).
> Never commit the `.env` file to GitHub.

---

## ▶️ Usage

Run the automation script:

```bash
node index.js
```

The script will:

* Load job applications
* Check how many days have passed since submission
* Send follow-up emails for applications older than 7 days
* Mark applications as followed up to prevent duplicates

---

## 🎯 Who This Is For

This project is ideal for:

* Students and early-career professionals
* Developers learning automation
* Job seekers managing multiple applications
* Anyone wanting to showcase **real-world Node.js skills**

---

## 🚀 Planned Enhancements

* Persist data using JSON or MongoDB
* Schedule automatic daily runs (cron jobs)
* Attach CVs and cover letters
* Add an AI-powered follow-up email generator
* Scrape job postings automatically
* Build a web dashboard (React + Node)
* CI/CD integration with GitHub Actions

---

## 👤 Author

**Elliot**
Computer Science Student | Software Engineer



