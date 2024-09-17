import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>MOF Chatbot</CardTitle>
          <CardDescription>Ask me about tax</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex gap-3 text-sm">
            <Avatar>
              <AvatarFallback>YO</AvatarFallback>
              <AvatarImage src="https://github.com/yogiifr.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-semibold text-gray-400">Human:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum corrupti exercitationem vel quidem reprehenderit fugiat quaerat ratione. Laborum distinctio mollitia cumque debitis nemo deleniti dolor alias
              doloremque. Iusto, facere.
            </p>
          </div>

          <div className="flex gap-3 text-sm">
            <Avatar>
              <AvatarFallback>YO</AvatarFallback>
              <AvatarImage src="https://github.com/bot2.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-semibold text-gray-400">Human:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum corrupti exercitationem vel quidem reprehenderit fugiat quaerat ratione. Laborum distinctio mollitia cumque debitis nemo deleniti dolor alias
              doloremque. Iusto, facere.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Input placeholder="How can I help?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
