import OpenAI from 'openai';
import { LLMClient, LLMOptions } from './llm-client';

/**
 * OpenAI API client for sending prompts to OpenAI
 */
export class OpenAIClient extends LLMClient {
  private client: OpenAI;
  private defaultModel = 'phi3';

  constructor(options: LLMOptions) {
    super(options);
    this.client = new OpenAI({
      baseURL: 'http://localhost:11434/v1',
      apiKey: this.apiKey,
    });
  }

  /**
   * Send a prompt to OpenAI and get the response
   * @param prompt The prompt to send to OpenAI
   * @returns The response from OpenAI
   */
  async sendPrompt(prompt: string): Promise<string> {
    try {
      const response = await this.client.chat.completions.create({
        model: this.defaultModel,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4096,
        temperature: 0.7
      });

      return response.choices[0].message.content || '';
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }
}
