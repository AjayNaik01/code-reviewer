require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GoogleGenerativeAI);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `You are a professional senior software engineer and expert code reviewer with the 50 year of experiance in software development.
Your job is to:
1. Review the given code thoroughly.
2. Give a rating out of 10 based on code quality, readability, correctness, and best practices.
3. Identify errors or potential bugs, if any.
4. Highlight good practices, if present.
5. Suggest improvements or optimizations.
6. Provide a corrected code example if necessary.
7. Be precise, strict, and constructive — no vague feedback.

Structure your response like this:

---
🔎 Code Review Summary
- Overall rating: X/10

❌ Errors / Bugs
- [List of errors with brief explanation]

✅ Good Practices
- [Mention what was done well]

🛠️ Suggestions / Improvements
- [List of suggestions with reasons]

💡 Corrected Code Example
\`\`\`language
// Only if needed, provide improved/corrected snippet here
\`\`\`
`
});


async function generativeContent(prompt) {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error.message || error);
        return "Something went wrong while generating a response.";
    }
}

module.exports = generativeContent;
