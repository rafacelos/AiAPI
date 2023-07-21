import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const create = (prompt) => openai.createChatCompletion ({
  model: "gpt-3.5-turbo",
  messages: [
    {"role": "system", "content": "Você é especialista em HTML, CSS e JavaScript."},
    {role: "user", content: prompt}],
  max_tokens: 50,
})
