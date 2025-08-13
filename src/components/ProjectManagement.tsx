"use client";

import React from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { UsersIcon, Menu } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { KanbanColumn } from "./KanbanColumn";
import { teamMembers } from "@/data/kanban-data";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { TaskCard } from "./TaskCard";

import Filter from "../assets/icons/filter.svg";
import ArrowDownButton from "../assets/icons/arrow-down-button.svg";
import FilterTwo from "../assets/icons/filter-two.svg";
import EditIcon from "../assets/icons/pencil.svg";
import Attachment from "../assets/icons/attach.svg";
import Plus from "../assets/icons/plus.svg";
import FilterIcon from "../assets/icons/filter-button.svg";
import Calender from "../assets/icons/calendar.svg";

import { useKanbanStore } from "../lib/store";

export const ProjectManagement: React.FC = () => {
  const kanbanData = useKanbanStore((state) => state.kanbanData);
  const activeTask = useKanbanStore((state) => state.activeTask);
  const sidebarOpen = useKanbanStore((state) => state.sidebarOpen);

  const setKanbanData = useKanbanStore((state) => state.setKanbanData);
  const setActiveTask = useKanbanStore((state) => state.setActiveTask);
  const setSidebarOpen = useKanbanStore((state) => state.setSidebarOpen);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: any) => {
    const { id } = event.active;
    const sourceCol = kanbanData.columns.find((col) =>
      col.tasks.some((task) => task.id === id)
    );
    const task = sourceCol?.tasks.find((task) => task.id === id) || null;
    setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over || active.id === over.id) return;

    setKanbanData((prev) => {
      const newColumns = prev.columns.map((col) => ({ ...col, tasks: [...col.tasks] }));
      const sourceCol = newColumns.find((col) =>
        col.tasks.some((task) => task.id === active.id)
      );
      const targetCol = newColumns.find((col) => col.id === over.id);
    
      if (!sourceCol || !targetCol) return prev;
    
      const taskIndex = sourceCol.tasks.findIndex((t) => t.id === active.id);
      const [movedTask] = sourceCol.tasks.splice(taskIndex, 1);
      targetCol.tasks.push(movedTask);
    
      return { columns: newColumns };
    });
    
    
  };

  return (
    <div className="bg-[#E7E8EA] min-h-screen flex flex-col relative pb-10">
      {/* Main Layout */}
      <div className="flex justify-center py-4 px-2 sm:py-10 sm:px-5">
        <div className="bg-[#e6e7e9] flex flex-col rounded-2xl shadow-lg w-full">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden relative">
            
            {/* Mobile Hamburger Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b">
              <Button
                variant="ghost"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2"
              >
                <Menu className="w-6 h-6" />
              </Button>
              <h2 className="font-semibold text-lg">Project</h2>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 md:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:block`}
            >
              <Sidebar />
            </div>

            {/* Backdrop overlay for mobile */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/30 z-10 md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <Separator orientation="vertical" className="hidden md:block" />

            {/* Main Content */}
            <main className="flex flex-col flex-grow">
              <Header />
              <Separator />

              {/* Title Section */}
              <section className="flex flex-wrap gap-4 justify-between items-center p-4 sm:pt-4 sm:pl-8">
                <div className="flex items-center gap-2">
                  <h1 className="font-semibold text-[#0d062d] text-2xl sm:text-4xl">
                    Mobile App
                  </h1>
                  <EditIcon />
                  <Attachment />
                </div>

                {/* Invite Section */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 font-medium text-[#5030e5]">
                    <Plus />
                    Invite
                  </button>
                  <div className="flex -space-x-2 pr-2">
                    {teamMembers.map((member, index) => (
                      <Avatar key={index}>
                        <AvatarImage src={member.src} alt={member.alt} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="w-9 h-9 bg-[#f3d7da] rounded-full border-2 border-white flex items-center justify-center">
                      <span className="font-medium text-[#d15b67] text-sm">
                        +2
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Filters */}
              <section className="flex flex-wrap gap-2 justify-between items-center p-4 sm:pl-8">
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    className="h-10 gap-2 text-[#787486] border-[#787486]"
                  >
                    <FilterIcon />
                    Filter
                    <ArrowDownButton />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 gap-2 text-[#787486] border-[#787486]"
                  >
                    <Calender />
                    Today
                    <ArrowDownButton />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="h-10 gap-2 text-[#787486] border-[#787486]"
                  >
                    <UsersIcon className="w-4 h-4" />
                    Share
                  </Button>
                  <Separator orientation="vertical" className="h-7 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Button className="w-10 h-10 bg-[#5030e5] p-0">
                      <Filter />
                    </Button>
                    <FilterTwo />
                  </div>
                </div>
              </section>

              {/* Kanban */}
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <section className="flex flex-col sm:flex-row gap-4 p-4 sm:p-8 overflow-x-auto">
                  {kanbanData.columns.map((col) => (
                    <KanbanColumn key={col.id} column={col} />
                  ))}
                </section>

                <DragOverlay>
                  {activeTask && (
                    <div className="w-[320px]">
                      <TaskCard task={activeTask} isDragging />
                    </div>
                  )}
                </DragOverlay>
              </DndContext>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 right-5 sm:right-20">
        <p className="text-sm sm:text-xl">www.nickelfox.com</p>
      </div>
    </div>
  );
};
