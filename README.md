🚀 Agentic LLM With Tools

An Agentic AI Chatbot built using Groq LLM + Tavily Web Search API with dynamic tool-calling capability.

This project demonstrates how to build a real LLM Agent that can:

💬 Maintain conversation memory

🧠 Switch personalities (Marvel Multiverse Mode)

🌐 Call external tools (Web Search)

🔄 Handle tool-calling loop correctly

🛠 Work in a CLI interactive environment

🧠 Features

✅ Groq LLM Integration (llama-3.1-8b-instant)

✅ Tool Calling (Function Calling)

✅ Tavily Real-Time Web Search

✅ Conversation Memory

✅ Interactive CLI Chat

✅ TypeScript Implementation

✅ Secure .env handling


Architecture

User Input (CLI)
        │
        ▼
Conversation Memory (messages[])
        │
        ▼
Groq LLM (Decision Phase)
        │
        ├── Direct Response
        │
        └── Tool Call (webSearch)
                │
                ▼
           Tavily API
                │
                ▼
        Tool Result Added to Memory
                │
                ▼
        Groq LLM (Final Response Phase)
                │
                ▼
           Assistant Output


<img width="817" height="375" alt="image" src="https://github.com/user-attachments/assets/f3fce515-3df7-459a-837d-98e0ea6fb3cb" />

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/Shanu529/Agentic-LLM-With-Tools.git
cd Agentic-LLM-With-Tools

Install all required dependencies for this TypeScript small GenAI project
npm install

3️⃣ Create .env File

Create a file named .env in root:

GROQ_API_KEY=your_groq_api_key
TAVILY_KEY_API=your_tavily_api_key


4️⃣ Run Development Mode
npm run dev
or
npx tsx src/app.ts



Tavily API

Readline (CLI Interface)
