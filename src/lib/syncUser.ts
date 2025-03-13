import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";



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
                username: clerkUser.username,
            },
            create: {
                clerkId: clerkUser.id,
                email: clerkUser.primaryEmailAddress?.emailAddress,
                username: clerkUser.username,
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