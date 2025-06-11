# First-openai-api-call


This script demonstrates how to make a successful API call to OpenAI's GPT-3.5-turbo model using Node.js.  
It allows you to:
- Enter a prompt via the console.
- Sends your prompt (with a fixed system prompt) to the OpenAI API.
- Prints the assistant’s response.
- Displays token usage statistics for the request.

## How to Run

### 1. Clone or Download the Repository

```bash
git clone <your-repo-url>
cd first-openai-api-call
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

Install required packages:

```bash
npm install openai dotenv
```

### 3. Set Up Your OpenAI API Key

- Create a file named `.env` in the project root.
- Add your OpenAI API key to the file:

### 4. Run the Script

```bash
node first_call.js
```


**Troubleshooting:**  
If you see a quota or billing error, check your OpenAI account’s usage and billing settings.

---

## License

MIT