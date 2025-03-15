import { syncUser } from "@/lib/prisma";
import { redirect } from "next/navigation";


export default async function Layout({ children}: { children: React.ReactNode }) {

    const user = await syncUser();

    if(!user?.username) {
        redirect("/onboarding");
    }
    return (
        <>
        {children}
        </>
    )
}