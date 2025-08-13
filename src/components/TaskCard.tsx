"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Task } from "@/types/kanban";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquareIcon, MoreHorizontalIcon } from "lucide-react";
import { cn } from "../lib/utils";
import Image from "next/image";
import Message from "../assets/icons/message-two.svg";
interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
  isOver?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, isDragging }) => {
  return (
    <Card
      className={cn(
        "bg-white rounded-2xl border-0 shadow-sm transition-transform transition-shadow duration-200 ease-out hover:shadow-md mb-4 cursor-grab active:cursor-grabbing",
        isDragging && "opacity-50 rotate-3 scale-105 shadow-lg"
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          {task.priority && (
            <Badge
              className={`${task.priorityColor} text-xs px-1.5 py-1 rounded`}
            >
              {task.priority}
            </Badge>
          )}
          <MoreHorizontalIcon className="w-4 h-4 text-[#0d062d]" />
        </div>

        <h3 className="font-semibold text-[#0d062d] text-lg mb-2">
          {task.title}
        </h3>

        {task.description && (
          <p className="font-normal text-[#787486] text-xs mb-6">
            {task.description}
          </p>
        )}

        {task.image && (
          <Image
            src={
              task.image.startsWith("http")
                ? task.image
                : `/${task.image.replace(/^(\.\.\/)+public\//, "")}`
            }
            alt={task.title}
            width={300}
            height={150}
            className="w-full h-[110px] mb-4 object-cover rounded"
          />
        )}
        {task.images && task.images.length > 0 && (
          <div className="flex gap-2 mb-4">
            {task.images.map((img, idx) => {
              if (!img) return null;
              const src = img.startsWith("http")
                ? img
                : `/${img.replace(/^(\.\.\/)+public\//, "")}`;

              return (
                <Image
                  key={idx}
                  src={src}
                  alt={task.title}
                  width={131}
                  height={79}
                  className="object-cover rounded"
                />
              );
            })}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex -space-x-1">
            {task.avatars.map((avatar, idx) => (
              <Avatar key={idx} className="w-6 h-6 border border-white">
                <AvatarImage src={avatar} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-[#787486]">
            <div className="flex items-center gap-1">
             <Message/>
              <span>{task.comments ?? 0} comments</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquareIcon className="w-4 h-4" />
              <span>{task.files ?? 0} files</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
