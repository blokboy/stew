import React from "react";
import Navbar from "@/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col">
        <div className="w-full flex-none">
          <Navbar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }