"use client";

import React from "react";
import {
  SearchIcon,
  CalendarIcon,
  HelpCircleIcon,
  BellIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Logo from "../assets/icons/notification.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";
export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">
      {/* Search box with icon */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#787486]" />
        <Input
          placeholder="Search for anything..."
          className="w-[417px] h-11 bg-neutral-100 border-0 pl-14 text-sm text-[#787486]"
        />
      </div>

      {/* Right side: icons and user info */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-5 text-[#787486]">
          <CalendarIcon />
          <HelpCircleIcon />
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-base text-[#0d062d] font-medium">
              Anima Agrawal
            </div>
            <div className="text-sm text-[#787486]">U.P, India</div>
          </div>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/images/girl.png" alt="Anima Agrawal" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <ArrowDown/>
        </div>
      </div>
    </header>
  );
};
