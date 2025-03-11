import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SnippetPacket({
    title, description, count, isNew
    // TODO: Fix this after doing snippet packets
}: {
    title: string;
    description: string;
    count: number;
    isNew: boolean;
}) {

    return (
        <Card className="hover:border-primary/50 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base">{title}</CardTitle>
          {isNew && <Badge className="bg-primary">New</Badge>}
        </div>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-2 flex justify-between">
        <span className="text-xs text-muted-foreground">{count} snippets</span>
        <Button variant="ghost" size="sm" className="h-7 px-2">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
    )
}