"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden bg-gray-100 min-h-screen flex">

      {/* Sidebar */}
      <Sidebar expanded={expanded} setExpanded={setExpanded} />

      {/* Dynamic content area */}
      <div
        className={`
          transition-all duration-300 w-full
          ${expanded ? "ml-64" : "ml-20"}
        `}
      >
        <Navbar />

        <main className="p-7">{children}</main>
      </div>
    </div>
  );
}