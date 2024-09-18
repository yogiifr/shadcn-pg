import { createAzure } from "@ai-sdk/azure";
import { convertToCoreMessages, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Create an Azure OpenAI client
const azure = createAzure({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  resourceName: process.env.AZURE_OPENAI_RESOURCE_NAME,
  baseURL: process.env.AZURE_BASEURL,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: azure("gpt-4o-mini"), // Replace with your actual deployment name
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
