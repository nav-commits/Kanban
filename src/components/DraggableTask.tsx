'use client';

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";
import { Task } from "@/types/kanban";

interface DraggableTaskProps {
  task: Task;
  index: number;
  isOver?: boolean; 
}

export const DraggableTask: React.FC<DraggableTaskProps> = ({ task, index, isOver }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex-1">
      <TaskCard task={task} isDragging={isDragging} isOver={isOver} />
    </div>
  );
};
