

export interface User {
    id: string;
    clerkId: string;
    email?: string;
    username?: string;
    //TODO: Check preferences and enabledPacks compatibility
    preferences: Record<string, string> | null;
    enabledPacks: string[];

    createdAt: string;
    updatedAt: string;

}

export interface SnippetPack {
    id: string;
    identifier: string;
    name: string;
    language: string;
    sourceUrl: string;
    count: number;
    

    toggle: boolean;
}

// Interface for (Auth) DashBoard
export interface DashboardData {
    user: User;
    enabledPacks: SnippetPack[];
    
}

