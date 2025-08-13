"use client";

import React from "react";
import { PlusIcon, MoreHorizontalIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import Logo from "../assets/icons/logo.svg";
import { projects } from "@/data/kanban-data";
import { navigationItems } from "@/data/kanban-data";
import Lamp from "../assets/icons/lamp.svg";
import Add from "../assets/icons/add.svg";

export const Sidebar = () => (
  <nav className="w-[250px] h-full flex flex-col  bg-white rounded-2xl">
    {/* Logo and Title */}
    <div className="flex items-center justify-between mb-10 mt-10 ml-5 mr-10">
      <div className="flex items-center gap-2">
        <Logo />
        <p className="font-semibold text-[#0d062d] text-xl select-none">
          Project M.
        </p>
      </div>
      <ArrowLeft className="w-6 h-6 text-gray-700" />
    </div>

    {/* Navigation */}
    <div className="flex flex-col space-y-6 mb-8 pl-5 pt-4 pr-3">
      {navigationItems.map(({ icon: Icon, label }, i) => (
        <div
          key={i}
          className="flex items-center gap-4 cursor-pointer select-none"
        >
          <Icon className="w-6 h-6 text-[#787486]" />
          <span className="text-[#787486]">{label}</span>
        </div>
      ))}
      <Separator />
    </div>

    {/* My Projects Header */}
    <div className="flex items-center justify-between mb-5 pr-3">
      <div className="font-bold text-[#787486] text-xs select-none pl-5">
        MY PROJECTS
      </div>
      <Add/>
    </div>

    {/* Project List */}
    <div className="flex flex-col space-y-5 mb-12 pl-3 pt-4 pr-3">
      {projects.map(({ color, active, name }, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 cursor-pointer select-none ${
            active ? "bg-[#5030e514] rounded-md px-4 py-2" : "px-3 py-1"
          }`}
        >
          <div className={`w-2 h-2 ${color} rounded-full`} />
          <span
            className={
              active ? "font-semibold text-[#0d062d]" : "text-[#787486]"
            }
          >
            {name}
          </span>
          {active && (
            <MoreHorizontalIcon className="w-4 h-4 text-[#787486] ml-auto" />
          )}
        </div>
      ))}
    </div>
    <Card className="bg-gray-100 border-0 flex-shrink-0 m-4 relative overflow-visible">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-14 bg-gray-100 rounded-t-full flex items-center justify-center">
        <div className="absolute w-12 h-12 bg-yellow-300/50 rounded-full blur-lg" />
        <Lamp />
      </div>

      <CardContent className="p-3 flex flex-col items-center justify-center pt-10">
        <div className="text-sm font-medium mb-2">Thoughts Time</div>
        <div className="text-xs text-center text-[#787486] px-4 mb-4">
          We don&apos;t have any notice for you, till then you can share your
          thoughts with your peers.
        </div>
        <Input
          placeholder="Write a message"
          className="w-[166px] bg-white border-0 text-sm text-center placeholder:text-[black]"
        />
      </CardContent>
    </Card>
  </nav>
);
