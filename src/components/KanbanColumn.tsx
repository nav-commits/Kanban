"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Column } from "@/types/kanban";
import { DraggableTask } from "./DraggableTask";

export const KanbanColumn: React.FC<{ column: Column }> = ({ column }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div
      ref={setNodeRef}
      className={`w-[354px] bg-neutral-100 rounded-t-lg p-5 flex flex-col transition-colors ${
        isOver ? "bg-neutral-200" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 ${column.color} rounded`} />
          <span className="font-medium text-[#0d062d]">{column.title}</span>
        </div>
        <Badge variant="secondary" className="bg-[#e0e0e0] text-[#615e6d]">
          {column.tasks.length}
        </Badge>
      </div>
      <Separator className={`h-0.5 ${column.color} mb-6`} />

      <div className="flex-grow space-y-3">
        {column.tasks.map((task, index) => (
          <DraggableTask key={task.id} task={task} index={index} />
        ))}
      </div>
    </div>
  );
};
