import * as path from 'path';

/**
 * Base interface for LLM client options
 */
export interface LLMOptions {
  apiKey: string;
}

/**
 * Base class for LLM clients
 */
export abstract class LLMClient {
  protected apiKey: string;

  constructor(options: LLMOptions) {
    this.apiKey = options.apiKey;
  }

  /**
   * Send a prompt to the LLM and get the response
   * @param prompt The prompt to send to the LLM
   * @returns The response from the LLM
   */
  abstract sendPrompt(prompt: string): Promise<string>;

  /**
   * Load a prompt from a TypeScript file
   * @param filePath Path to the TypeScript file containing the prompt
   * @returns The prompt string
   */
  static loadPromptFromFile(filePath: string): string {
    try {
      // Use require to load the TypeScript file with ts-node/register

      // Ensure we have the full path
      const fullPath = path.resolve(process.cwd(), filePath);

      // Delete the module from cache if it exists to ensure we get fresh content
      delete require.cache[require.resolve(fullPath)];

      // Import the module
      const promptModule = require(fullPath);

      if (!promptModule.promptToRun) {
        throw new Error('Could not find promptToRun in file. Make sure your prompt file exports a variable named "promptToRun".');
      }

      return promptModule.promptToRun;
    } catch (error) {
      console.error(`Error loading prompt from ${filePath}:`, error);
      throw error;
    }
  }
}
