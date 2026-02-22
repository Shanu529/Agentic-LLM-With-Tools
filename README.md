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

✅ Function / Tool Calling

✅ Tavily Real-Time Web Search

✅ Conversation Memory

✅ Interactive CLI Chat

✅ TypeScript Implementation

✅ Secure .env Handling

🏗 Architecture
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
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/Shanu529/Agentic-LLM-With-Tools.git
cd Agentic-LLM-With-Tools
2️⃣ Install Dependencies

Install all required dependencies for this TypeScript GenAI project:

npm install
3️⃣ Create .env File

Create a file named .env in the root directory:

GROQ_API_KEY=your_groq_api_key
TAVILY_KEY_API=your_tavily_api_key

⚠️ Never push your .env file to GitHub.

4️⃣ Run Development Mode
npm run dev

OR

npx tsx src/app.ts
🛠 Tech Stack

Groq SDK

Tavily API

TypeScript

Node.js

Readline (CLI Interface)

dotenv

🔄 How It Works

User types input in CLI.

Message is stored in memory.

LLM decides whether to respond directly or call a tool.

If tool is called → Tavily API fetches real-time data.

Tool result is added back into conversation.

LLM generates final intelligent response.
