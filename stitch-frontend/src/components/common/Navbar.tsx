// src/components/common/Navbar.tsx

import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  onToggle: () => void; // for collapsible sidebar 
}

export default function Navbar({ onToggle }: NavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left side – Sidebar toggle + optional search */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="lg:hidden" // hide on large screens when sidebar is always visible
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Optional search  */}
        <div className="hidden md:block relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search anything..."
            className="pl-10 bg-gray-50 border-0 focus-visible:ring-1"
          />
        </div>
      </div>

      {/* Right side – Notifications + Avatar */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {/* Optional badge for unread count */}
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        {/* Avatar */}
        <Avatar className="h-9 w-9">
          {/*  Wayne Replace with real image when you have auth */}
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary text-white text-sm font-medium">
            DR
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}