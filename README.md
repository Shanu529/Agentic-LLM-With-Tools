<h2> Agentic LLM With Tools </h2>

This is a simple Agentic AI chatbot built using Groq LLM and Tavily Web Search API.

The project demonstrates how to build a chatbot that can:

Maintain conversation memory

Call external tools (Web Search)

Handle tool-calling logic correctly

Run in an interactive CLI environment

Use environment variables securely

Tech Stack

TypeScript

Groq SDK

Tavily API

dotenv

Readline (CLI)

How It Works

User enters input in the CLI.

The message is stored in memory.

The Groq LLM decides whether to respond directly or call a tool.

If needed, the webSearch tool calls Tavily API.

The tool result is added back to memory.

The LLM generates the final response.

Setup
1. Clone the repository
git clone https://github.com/Shanu529/Agentic-LLM-With-Tools.git
cd Agentic-LLM-With-Tools
2. Install All dependencies to run TypeScript
npm install
3. Create a .env file

Create a file named .env in the root folder and add:

GROQ_API_KEY=your_groq_api_key <br>
TAVILY_KEY_API=your_tavily_api_key
4. Run the project <br>
npm run dev

or

npx tsx src/app.ts

This project is built for learning and experimenting with Agentic AI systems and tool-calling in LLMs.
