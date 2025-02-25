// import Image from "next/image";
import Link from "next/link";
import { AuthModal } from "./AuthModal";


export function Navbar() {

    return (
        <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center gap-2"/>
            {/* <Image src={Logo} alt="logo" className="size-12" /> TODO: Add Logo */}
            <h4 className="text-[#6247FF] text-3xl font-bold">
                CodeNova
            </h4>

            <div>
                {/* <ThemeToggle/>  */}
                {/* TODO: Add ThemeToggle */}
                <AuthModal/> 
                {/* TODO: FIX and Style Auth When setup Prisma */}
            </div>
        </div>
    )

}