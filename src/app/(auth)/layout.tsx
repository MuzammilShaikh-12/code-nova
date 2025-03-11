

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


export default async function AuthLayout({ children}: { children: React.ReactNode }) {

    const authResult = await auth();
    const { userId } = authResult;

    if(!userId) {
        redirect("/");
    }

    return (
        <>
        {children}
        </>
    )
}