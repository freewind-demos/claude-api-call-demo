import axios from 'axios';
import dotenv from 'dotenv';
import * as readline from 'readline';

dotenv.config();

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const API_URL = 'https://chat.cloudapi.vip/v1/chat/completions';

if (!CLAUDE_API_KEY) {
  console.error('请设置 CLAUDE_API_KEY 环境变量');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function sendMessage(content: string) {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'claude-3-sonnet-20240229',
        messages: [{ role: 'user', content }],
        temperature: 0.7,
        max_tokens: 1024
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CLAUDE_API_KEY}`,
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API 错误:', error.response?.data || error.message);
    } else {
      console.error('发生错误:', error);
    }
    return null;
  }
}

async function chat() {
  while (true) {
    const question = await new Promise<string>((resolve) => {
      rl.question('你: ', resolve);
    });

    if (question.toLowerCase() === 'exit') {
      console.log('再见！');
      rl.close();
      break;
    }

    const response = await sendMessage(question);
    if (response) {
      console.log('Claude:', response);
    }
  }
}

chat(); 