"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>MOF Chatbot</CardTitle>
          <CardDescription>Ask me about tax</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {messages.map((message) => {
            return (
              <div key={message.id} className="flex gap-3 text-sm">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>YO</AvatarFallback>
                    <AvatarImage src="https://github.com/yogiifr.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AA</AvatarFallback>
                    <AvatarImage src="https://github.com/aidanazkafaro.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-semibold text-gray-400">{message.role === "user" ? "User: " : "AI"}</span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
