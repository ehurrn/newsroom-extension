import { spawn } from 'child_process';
import readline from 'readline';

const serverProcess = spawn('node', ['server.js']);

const rl = readline.createInterface({
  input: serverProcess.stdout,
  terminal: false
});

let initialized = false;

rl.on('line', (line) => {
  try {
    const msg = JSON.parse(line);
    // Handle initialization response
    if (msg.id === 1 && msg.result) {
      initialized = true;
      console.log('✅ Server initialized successfully');
      
      // Send initialized notification
      serverProcess.stdin.write(JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized'
      }) + '\n');

      // Call the get-skill tool
      console.log('🚀 Calling get-skill tool...');
      serverProcess.stdin.write(JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'get-skill',
          arguments: { name: 'investigative-journalist' }
        }
      }) + '\n');
    }
    
    // Handle tool call response
    if (msg.id === 2 && msg.result) {
      console.log('✅ Tool get-skill executed successfully');
      console.log('Result preview:');
      const text = msg.result.content[0].text;
      console.log(text.substring(0, 150) + '...\n');
      console.log('🎉 MCP Server test passed!');
      serverProcess.kill();
      process.exit(0);
    }
    
    if (msg.error) {
      console.error('❌ Error from server:', msg.error);
      serverProcess.kill();
      process.exit(1);
    }
  } catch (e) {
    // Ignore non-JSON output
  }
});

serverProcess.stderr.on('data', (data) => {
  console.error(`Server Error: ${data}`);
});

// Send initialization request
serverProcess.stdin.write(JSON.stringify({
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'test-client', version: '1.0.0' }
  }
}) + '\n');

setTimeout(() => {
  console.error('❌ Test timed out');
  serverProcess.kill();
  process.exit(1);
}, 3000);