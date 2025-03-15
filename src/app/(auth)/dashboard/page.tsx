"use client";

import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileIcon, Settings2, PlusCircleIcon, BoxesIcon, AlertCircleIcon } from "lucide-react";

import { Navbar } from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import CodeiumToggle from "@/app/components/CodeiumToggle";
import SnippetPacket from "@/app/components/SnippetPacket";


export default function Dashboard() {

 
    //TODO: Mock data for now
  const userName = "Alex";
  const aiSuggestionsLeft = 2;
  const aiSuggestionsTotal = 3;
  const enabledPacks = [
    { title: "React Hooks", description: "Common React hook patterns", count: 24, isNew: false },
    { title: "CSS Flexbox", description: "Flexbox layout utilities", count: 16, isNew: false },
    { title: "Node.js Utils", description: "Node.js helper functions", count: 31, isNew: false }
  ];
  

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex flex-grow ">

        
        <SideBar/>
        <div className="flex-grow p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {userName}!</h1>
          <p className="text-muted-foreground">Checkout Your Snippets</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary hover:bg-hoverbtn">
            <FileIcon className="mr-2 h-4 w-4" />
            Open Editor
          </Button>
          <Button variant="outline">
            <Settings2 className="h-4 w-4" />
          </Button>
          <UserButton />
        </div>
      </div>

      {/* Codeium Toggle */}
      <CodeiumToggle/>

      {/* Main Content */}
      <Tabs defaultValue="snippets" className="w-full">
        <TabsList className="grid grid-cols-4 w-full md:w-[400px]">
          <TabsTrigger value="snippets">Snippets</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        {/* Snippets Tab */}
        <TabsContent value="snippets" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Enabled Snippet Packs</h2>
            <Button variant="outline" size="sm">
              <BoxesIcon className="mr-2 h-4 w-4" />
              Manage Packs
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enabledPacks.map((pack, idx) => (
              <SnippetPacket key={idx} {...pack} />
            ))}
            <Card className="border-dashed flex items-center justify-center h-[124px]">
              <Button variant="ghost" className="flex flex-col h-full items-center justify-center gap-2">
                <PlusCircleIcon className="h-8 w-8 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Add New Pack</span>
              </Button>
            </Card>
          </div>
        </TabsContent>
        
        {/* AI Tab */}
        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Suggestions Usage</CardTitle>
              <CardDescription>Free plan includes 3 AI suggestions per day</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Your AI Usage</span>
                  <span className="text-sm font-medium">{aiSuggestionsLeft}/{aiSuggestionsTotal}</span>
                </div>
                <Progress value={(aiSuggestionsLeft / aiSuggestionsTotal) * 100} />
              </div>
              <Button className="w-full">Upgrade for Unlimited Suggestions</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent AI Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <AlertCircleIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <p className="mt-2 text-muted-foreground">No recent AI activity</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Settings Overview</CardTitle>
              <CardDescription>Quick access to your most important settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Theme</p>
                  <p className="text-sm text-muted-foreground">Dark Mode</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Active Snippet Packs</p>
                  <p className="text-sm text-muted-foreground">{enabledPacks.length} enabled</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">AI Suggestions</p>
                  <p className="text-sm text-muted-foreground">Enabled</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Editor Autosave</p>
                  <p className="text-sm text-muted-foreground">Every 30 seconds</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Settings2 className="mr-2 h-4 w-4" />
                Open Full Settings
              </Button>
            </CardFooter>
          </Card>
          
          {/* TODO: Future Update details */}
          
        </TabsContent>
      </Tabs>
    </div>
    </div>
    </div>

        
        
    )
}