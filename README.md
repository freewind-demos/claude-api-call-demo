# Claude 聊天程序

这是一个使用 TypeScript 编写的命令行 Claude API 聊天程序，通过 OpenAI 格式的 API 与 Claude 进行对话。

注意：这其实使用的是一个claude api的中转服务，向服务商发消息时使用的是OpenAI的格式，它那边底层会换成Claude的格式。

## 安装

1. 克隆此仓库：

```bash
git clone <repository-url>
cd claude-chat
```

2. 安装 pnpm（如果没有安装）：

```bash
npm install -g pnpm
```

3. 安装项目依赖：

```bash
pnpm install
```


4. 配置环境变量：
   - 复制 `.env.example` 文件为 `.env`
   - 在 `.env` 文件中设置你的 API 密钥：

```plaintext
CLAUDE_API_KEY=your-api-key-here
```


## 使用方法

1. 开发模式运行（推荐）：

```bash
pnpm dev
```


2. 或者先构建后运行：

```bash
pnpm build
pnpm start
```


3. 程序启动后：
   - 在命令行中输入你的问题，按回车发送
   - Claude 会返回对应的回答
   - 输入 "exit" 可以退出程序

## 配置说明

你可以在 `src/index.ts` 中修改以下配置：

- `model`: 使用的模型，默认为 'claude-3-sonnet-20240229'
- `temperature`: 回答的随机性，范围 0-1，默认为 0.7
- `max_tokens`: 最大回复长度，默认为 1024

## 注意事项

- 确保你有有效的 API 密钥
- 确保网络连接正常
- API 调用可能会产生费用，请注意使用频率
- 当前使用的是 OpenAI 格式的 API 接口

## 常见问题

1. 如果遇到 API 错误，请检查：
   - API 密钥是否正确设置
   - 网络连接是否正常
   - API 额度是否充足

2. 如果遇到安装错误，可以尝试：
   - 删除 node_modules 文件夹
   - 删除 pnpm-lock.yaml 文件
   - 重新运行 `pnpm install`

## 许可证

MIT