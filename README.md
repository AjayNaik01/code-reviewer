# 🧠 Code Reviewer AI

This project is an AI-powered code reviewer that uses **Google Gemini 2.0 Flash** to analyze and provide structured feedback on code quality. The AI acts as a professional senior software engineer with 50 years of experience.

---

## 📌 Project Description

The Code Reviewer AI takes source code as input and responds with:

- A detailed review summary
- A rating out of 10
- Detected bugs or issues
- Highlights of good practices
- Suggestions for improvements
- Optional corrected code snippets

The system is designed to be **strict, precise, and constructive** to help developers write better code.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **AI API**: Google Generative AI (`@google/generative-ai`)
- **Environment Config**: dotenv

---

## 🔑 Environment Variables

Create a `.env` file in the `backend/` directory:

````env
GoogleGenerativeAI=your_google_api_key_here
PORT=port_number

Create a `.env` file in the `frontend/` directory:


```env
REACT_APP_API_URL = http://localhost:3000/ai/get-review

````
