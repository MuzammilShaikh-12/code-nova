"use client"

import Link  from "next/link";
import { JSX } from "react";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Code,  Tag, Settings, Link2 } from "lucide-react";
import { usePathname } from "next/navigation";


type MenuItem = {
    icon: JSX.Element;
    label: string;
    href: string;
}


export default function SideBar() {

    const pathname = usePathname();

    const mainMenu: MenuItem[] = [
        { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/dashboard" },
        { icon: <Code size={18} />, label: "Editor", href: "/dashboard/Editor" },
      ];
      
      const workspaceMenu: MenuItem[] = [
        { icon: <Tag size={18} />, label: "Snippets", href: "/dashboard/snippets" },
        { icon: <Link2 size={18} />, label: "Codeium", href: "/dashboard/codeium" },
      ];
      
      const accountMenu: MenuItem[] = [
        { icon: <Settings size={18} />, label: "Settings", href: "/dashboard/settings" },
      ];


    return (
        <aside className="w-60 h-screen bg-card border-r border-border flex-shrink-0 overflow-y-auto hidden md:block">
      <div className="p-4">
        <MenuSection title="Main" items={mainMenu} pathname={pathname} />
        <MenuSection title="Additional" items={workspaceMenu} pathname={pathname} />
        <MenuSection title="Account" items={accountMenu} pathname={pathname} />
      </div>
    </aside>
    )

}

function MenuSection({
    title, items, pathname
}: {
    title: string;
    items: MenuItem[];
    pathname: string;
}) {
    return (
        <div className="mb-6">
      <h3 className="text-xs uppercase text-muted-foreground font-semibold px-3 mb-2">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              pathname === item.href
                ? "bg-primary/10 text-primary border-l-2 border-primary font-medium"
                : "hover:bg-secondary/50"
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
    )
}