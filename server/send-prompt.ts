#!/usr/bin/env node
//this is from our ai-1sb-prompts-send-prompt.ts
//import { OpenAIClient } from './openai-api';
import { LLMClient } from './llm-client';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config();

// get API keys
//const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
//const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY;


// Added both Claude and OpenAI
type LLMProvider = 'claude' | 'openai' | 'ollama';


async function main() {
  // Determine the provider from the command name
  const commandName = process.argv[1].split('/').pop() || '';
  let provider: LLMProvider;
  
  if (commandName.includes('claude')) {
    provider = 'claude';
  } else if (commandName.includes('openai')) {
    provider = 'openai';
  } else if (commandName.includes('ollama')) {
    provider = 'ollama';
  } else {
    // If not called directly as claude or openai, check for provider argument
    provider = process.argv[3]?.toLowerCase() as LLMProvider;
    
    if (!provider) {
      console.error('Error: Please specify an LLM provider');
      console.error('Usage: npx ts-node src/send-prompt.ts <prompt-file-path> <provider>');
      console.error('Supported providers: claude, openai, ollama');
      process.exit(1);
    }
  }
  
  // Get the prompt file path
  const promptFilePath = process.argv[2];
  
  if (!promptFilePath) {
    console.error('Error: Please provide a prompt file path');
    console.error('Usage: npm run claude <prompt-file-path>');
    console.error('   or: npm run openai <prompt-file-path>');
    console.error('   or: npm run ollama <prompt-file-path>');
    console.error('Example: npm run claude example-prompts/1-summarization.ts');
    process.exit(1);
  }

  const resolvedPath = path.resolve(process.cwd(), promptFilePath);
  // if no file exists
  if (!fs.existsSync(resolvedPath)) {
    console.error(`Error: File not found: ${resolvedPath}`);
    process.exit(1);
  }

  try {
    // Initialize LLM 
    let client: LLMClient;
    
    switch (provider) {
      case 'claude':
        if (!CLAUDE_API_KEY) {
          console.error('Error: CLAUDE_API_KEY environment variable is required for Claude');
          console.error('Please create a .env file with your Claude API key:');
          console.error('CLAUDE_API_KEY=your_api_key_here');
          process.exit(1);
        }
        client = new ClaudeClient({
          apiKey: CLAUDE_API_KEY
        });
        break;
      
      case 'openai':
        if (!OPENAI_API_KEY) {
          console.error('Error: OPENAI_API_KEY environment variable is required for OpenAI');
          console.error('Please create a .env file with your OpenAI API key:');
          console.error('OPENAI_API_KEY=your_api_key_here');
          process.exit(1);
        }
        client = new OpenAIClient({
          apiKey: OPENAI_API_KEY
        });
        break;

        case 'ollama':
            if (!OLLAMA_API_KEY) {
                console.error('Error: OLLAMA_API_KEY environment variable is required for Ollama');
                console.error('Please create a .env file with your Ollama API key:');
                console.error('OLLAMA_API_KEY=your_api_key_here');
                process.exit(1);
            }
            client = new OllamaClient({
                apiKey: OLLAMA_API_KEY
            });
            break;
      
      default:
        console.error(`Error: Unsupported provider: ${provider}`);
        console.error('Supported providers: claude, openai');
        process.exit(1);
    }

    // here's where we load the prompt file
    console.log(`Loading prompt from ${promptFilePath}...`);
    const prompt = LLMClient.loadPromptFromFile(resolvedPath);
    
    // Display prompt
    console.log('\n--- Prompt ---');
    console.log(prompt);
    console.log('--- End of Prompt ---\n');

    // Send prompt to LLM
    console.log(`Sending prompt to ${provider.toUpperCase()}...`);
    const response = await client.sendPrompt(prompt);
    
    // Display response
    console.log(`\n--- ${provider.toUpperCase()} Response ---`);
    console.log(response);
    console.log('--- End of Response ---\n');
    // catch dem errors
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main().catch(console.error);
