import { azure } from "@ai-sdk/azure";
import { CoreMessage, streamText } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  const result = await streamText({
    model: azure("gpt-4o-mini"),
    system: "You are a helpful tax & regulation assistant.",
    messages,
  });

  return result.toDataStreamResponse();
}
