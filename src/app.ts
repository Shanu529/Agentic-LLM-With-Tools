import dotenv from "dotenv";
// const {tavily} from "@tavily/core";
import readline from "readline";
import { tavily } from "@tavily/core";
dotenv.config();

import { Groq } from "groq-sdk";
import { log } from "console";

const tvly = tavily({ apiKey: process.env.TAVILY_KEY_API });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const messages: any[] = [
  {
    role: "system",
    content: `
                  You are the Marvel Multiverse AI.
                  You can switch personalities between:
                  - JARVIS
                  - Loki
                  - Thor
                  - Captain America
                  - Hulk
                  - Spider-Man
                  - Captain Marvel
                  - Doctor Strange
                  - Tony Stark

                  If user says "switch to Tony Stark", change personality.
                  If user asks about real-world data, call webSearch.
                  the current Datetime ${new Date().toUTCString()}`,
  },
  // {
  //   role: "user",
  //   content: "What is the latest AI news?",
  // },
];
const tools: any[] = [
  {
    type: "function",
    function: {
      name: "webSearch",
      description:
        "Search the web for real-time or latest information like news, weather, trends, stock prices.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "The search query to look up on the internet",
          },
        },
        required: ["query"],
      },
    },
  },
];

async function main(): Promise<void> {
  try {
    while (true) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      while (true) {
        // const question = await rl.question("You :");

        const question: string = await new Promise((resolve) => {
          rl.question("You: ", (answer) => {
            resolve(answer);
          });
        });

        // bye
        if (question === "bye") {
          break;
        }
        messages.push({
          role: "user",
          content: question,
        });

        const completion = await groq.chat.completions.create({
          temperature: 1,
          tool_choice: "auto",
          // max_completion_tokens: 5, // length
          // response_format: { type: "json_object" },

          model: "llama-3.1-8b-instant",
          messages,
          tools,
        });

        messages.push(completion.choices[0].message);

        console.log("AI running...");

        const toolCalls = completion.choices[0].message.tool_calls;

        if (!toolCalls) {
          console.log(`Assistance : ${completion.choices[0].message.content}`);
          break;
          // return;
        }

        for (const tool of toolCalls) {
          console.log("tool : ", tool);
          const functionName = tool.function.name;
          const funcParams = tool.function.arguments;

          if (functionName === "webSearch") {
            const toolResult = await webSearch(JSON.parse(funcParams));
            console.log("tool Result byMe:", toolResult);

            messages.push({
              tool_call_id: tool.id,
              role: "tool",
              name: functionName,
              content: toolResult,
            });
          }
        }

        // console.log(JSON.stringify(completion.choices[0].message, null, 2));

        const finalRes = await groq.chat.completions.create({
          model: "llama-3.1-8b-instant",
          messages,
        });
        messages.push(finalRes.choices[0].message);
        console.log("Assistant:", finalRes.choices[0].message.content);
      }

      rl.close();
    }
  } catch (error) {
    console.error("ERROR OCCURRED:");
    console.error(error);
  }
}

main();

// creating web Tool
async function webSearch({ query }: any) {
  console.log("Calling web Searching...");
  const res = await tvly.search(`${query}`);

  // const finalResult = res.results
  //   .map((result: any) => result.content)
  //   .join("\n\n");

  // return finalResult;
  return res.results[0].content;
  
}
