"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HomeIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ expanded, setExpanded }: any) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: "Projects", href: "/dashboard/projects", icon: FolderIcon },
    { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardDocumentListIcon },
    { name: "Users", href: "/dashboard/users", icon: UsersIcon },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-[#0f172a] text-white shadow-lg transition-all duration-300 
        ${expanded ? "w-64" : "w-20"}
      `}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="p-5 font-bold text-2xl">
        {expanded ? "TeamFlow" : "TF"}
      </div>

      <nav className="mt-5">
        <ul className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-4 px-4 py-2 rounded-lg mx-2
                    ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}
                  `}
                >
                  <Icon className="w-6 h-6" />
                  {expanded && <span className="text-lg">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}