//import OpenAI SDK, also need to install openai package before using
//
import dotenv from 'dotenv';
dotenv.config();

import { Ollama } from "ollama";

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
  },
});

const response = await ollama.chat({
  model: "gpt-oss:120b",
  messages: [{ role: "user", content: "Explain quantum computing" }],
  stream: true,
});

for await (const part of response) {
  process.stdout.write(part.message.content);
}



// The following is an example of a custom OpenAI client class that could be used in a larger application.
// It is commented out to avoid redundancy since the above code demonstrates basic usage.


// import OpenAI from 'openai';
// import { LLMClient, LLMOptions } from './llm-client';

// /**
//  * OpenAI API client for sending prompts to OpenAI
//  */
// export class OpenAIClient extends LLMClient {
//   private client: OpenAI;
//   private defaultModel = 'phi3';

//   constructor(options: LLMOptions) {
//     super(options);
//     this.client = new OpenAI({
//       baseURL: 'http://localhost:11434/v1',
//       apiKey: this.apiKey,
//     });
//   }

//   /**
//    * Send a prompt to OpenAI and get the response
//    * @param prompt The prompt to send to OpenAI
//    * @returns The response from OpenAI
//    */
//   async sendPrompt(prompt: string): Promise<string> {
//     try {
//       const response = await this.client.chat.completions.create({
//         model: this.defaultModel,
//         messages: [
//           {
//             role: 'user',
//             content: prompt
//           }
//         ],
//         max_tokens: 4096,
//         temperature: 0.7
//       });

//       return response.choices[0].message.content || '';
//     } catch (error) {
//       console.error('OpenAI API Error:', error);
//       throw error;
//     }
//   }
// }
