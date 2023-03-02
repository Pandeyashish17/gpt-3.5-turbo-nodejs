const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (prompt) => {
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{ role: "user", content: prompt }],
});
console.log(response["data"]["choices"][0]["message"]["content"]);
};

chapGPT("what are some theories on what is one piece?")