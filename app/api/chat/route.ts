import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

// Create Google provider instance
const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: Request) {
  const { messages, videoId } = await req.json();

  const model = googleProvider("gemini-2.0-flash-thinking-exp-01-21", {
    safetySettings: [
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_LOW_AND_ABOVE",
      },
    ],
  });

  try {
    const result = await streamText({
      model,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate response",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
