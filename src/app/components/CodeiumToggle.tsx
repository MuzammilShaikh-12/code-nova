import { Button } from "@/components/ui/button";
import { CodeIcon, Badge} from "lucide-react";



export default function CodeiumToggle() {

    //TODO: Implement CodeiumToggle sync with the backend

    return (
        <div className="flex items-center justify-between bg-secondary p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <CodeIcon className="h-5 w-5 text-primary" />
        <div>
          <h3 className="font-medium">Codeium AI</h3>
          <p className="text-sm text-muted-foreground">Intelligent code suggestions</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge className="bg-primary/10 text-primary">Enabled</Badge>
        <Button variant="outline" size="sm">Configure</Button>
      </div>
    </div>
    )

}