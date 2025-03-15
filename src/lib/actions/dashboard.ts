
import { prisma } from "../db";
import { createApiError } from "@/lib/error";
import { Snippet, User } from "@prisma/client";
import { DashboardData } from "@/types";



function userDashboard(user: User) {
    return {
        id: user.id,
        clerkId: user.clerkId,
        email: user.email || undefined,
        username: user.username || undefined,
        preferences: user.preferences as Record<string, string> | null,
        enabledPacks: user.enabledPacks,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
    }
}

function mapSnippetPacks(snippets: Snippet[]) {
    return snippets.map(snippet => ({
        id: snippet.id,
        identifier: snippet.identifier,
        name: snippet.name,
        language: snippet.language,
        sourceUrl: snippet.sourceUrl,
        count: 0,
        toggle: true
      }));
}


export async function getDashboardData(userId: string): Promise<DashboardData> {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    });
    
    if (!user) {
      throw createApiError("User not found", 404);
    }
    
    const snippets = await prisma.snippet.findMany({
      where: {
        userId: user.id,
        identifier: {
          in: user.enabledPacks
        }
      }
    });
    
    return {
      user: userDashboard(user),
      enabledPacks: mapSnippetPacks(snippets)
    };
  }