/// src/components/common/Layout.tsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar /> {/* handles its own state now */}

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}