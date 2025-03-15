"use server"

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";

// For Onboarding Unique Username
export async function isUsernameUnique(username: string) {
    const existingUser = await prisma.user.findFirst({
      where: { username: username.trim() }
    });
    return !existingUser;
  }
// For Onboarding Username set
  export async function setOnboardingUsername(username: string) {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");
  
    return await prisma.user.update({
      where: { clerkId: user.id },
      data: { username: username.trim() }
    });
  }

// For Storing User in DB
export async function syncUser() {

    try{
        const clerkUser = await currentUser();
        if(!clerkUser) {
            return null;
        }

        return await prisma.user.upsert({
            where: {
                clerkId: clerkUser.id,
            },
            update: {
                email: clerkUser.primaryEmailAddress?.emailAddress,
                
            },
            create: {
                clerkId: clerkUser.id,
                email: clerkUser.primaryEmailAddress?.emailAddress,
                username: "",
                preferences: {},
                enabledPacks: []
            }
        });
    }
    catch(error){
        console.error("User sync failed", error);
        return null;
    }

}