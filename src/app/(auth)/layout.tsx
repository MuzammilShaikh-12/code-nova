

import { syncUser } from "@/lib/syncUser";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


export default async function AuthLayout({ children}: { children: React.ReactNode }) {

    const authResult = await auth();
    const { userId } = authResult;
    const user = await syncUser();

    if(!userId || !user) {
        redirect("/");
    }

    return (
        <>
        {children}
        </>
    )
}