import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

async function main() {
  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "user",
        content: "",
      },
    ],
    temperature: 1,
    max_completion_tokens: 8192,
    top_p: 1,
    reasoning_effort: "medium",
    stream: true,
    stop: null,
  });

  for await (const chunk of completion) {
    console.log(chunk.choices[0]?.delta?.content || "");
  }
}

function addMessage(message, sender) {
  const chatContainer = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender;
  messageDiv.innerHTML = message; // contains LaTeX
  chatContainer.appendChild(messageDiv);

  // Re-render LaTeX
  MathJax.typesetPromise();
}

MathJax.typesetPromise();
renderMathInElement(chatContainer);

main();