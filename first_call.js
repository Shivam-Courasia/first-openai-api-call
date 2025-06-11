require('dotenv').config();    
const { OpenAI } = require('openai');

// Initialize the OpenAI client
let openai;
try {
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    console.log('✅ Successfully connected to OpenAI API');
} catch (error) {
    console.error('❌ Error initializing OpenAI client:', error.message);
    process.exit(1);
}

// Fixed system prompt
const systemPrompt = "You are a helpful assistant that provides clear and concise responses.";

async function getChatCompletion() {
    try {
        // Get user input
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Enter your prompt: ', async (userPrompt) => {
            console.log("User prompt: ", userPrompt);

            // Make the API call
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt }
                ]
            });

            // Display the response
            console.log("\nAssistant's Response:");
            console.log(completion.choices[0].message.content);

            // Display token usage
            console.log("\nToken Usage:");
            console.log("Total tokens:", completion.usage.total_tokens);
            console.log("Prompt tokens:", completion.usage.prompt_tokens);
            console.log("Completion tokens:", completion.usage.completion_tokens);

            readline.close();
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the function
getChatCompletion();