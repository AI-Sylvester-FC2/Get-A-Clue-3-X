#!/usr/bin/env node

// We don't need to get the file path explicitly
// It will be passed through process.argv[2]

// Execute the send-prompt.ts script with the file path and 'openai' as provider
process.argv[3] = 'openai';
require('./send-prompt');
