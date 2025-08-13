import { Task, Column, Project, TeamMember } from "@/types/kanban";
import { SettingsIcon } from "lucide-react";
import FilterTwo from "../assets/icons/filter-two.svg";
import Message from "../assets/icons/message.svg";
import TasksIcon from "../assets/icons/task.svg";
import Profile from "../assets/icons/profile-2user.svg";

export const navigationItems = [
  { icon: FilterTwo, label: "Home" },
  { icon: Message, label: "Messages" },
  { icon: TasksIcon, label: "Tasks" },
  { icon: Profile, label: "Members" },
  { icon: SettingsIcon, label: "Settings" },
];
export const projects: Project[] = [
  { name: "Mobile App", color: "bg-[#7ac555]", active: true },
  { name: "Website Redesign", color: "bg-[#ffa500]", active: false },
  { name: "Design System", color: "bg-[#e4ccfd]", active: false },
  { name: "Wireframes", color: "bg-[#76a4ea]", active: false },
];

export const teamMembers: TeamMember[] = [
  {
    src: "/images/team-member-one.png",
    alt: "Team member 1",
  },
  {
    src: "/images/team-member-two.png",
    alt: "Team member 2",
  },
  {
    src: "/images/team-member-three.png",
    alt: "Team member 3",
  },
  {
    src: "/images/team-member-four.png",
    alt: "Team member 4",
  },
];

export const todoTasks: Task[] = [
  {
    id: "task-1",
    title: "Brainstorming",
    description:
      "Brainstorming brings team members' diverse experience into play.",
    priority: "Low",
    priorityColor: "bg-[#dfa87433] text-[#d58c48]",
    comments: 12,
    files: 0,
    avatars: [teamMembers[0].src, teamMembers[1].src, teamMembers[2].src],
  },
  {
    id: "task-2",
    title: "Research",
    description: "User research helps you to create an optimal product for users.",
    priority: "High",
    priorityColor: "bg-[rgba(216,114,125,0.1)] text-[#d8727d]",
    comments: 10,
    files: 3,
    avatars: [teamMembers[0].src, teamMembers[1].src],
  },
  {
    id: "task-3",
    title: "Wireframes",
    description: "Low fidelity wireframes include the most basic content and visuals.",
    priority: "High",
    priorityColor: "bg-[rgba(216,114,125,0.1)] text-[#d8727d]",
    comments: 12,
    files: 0,
    avatars: [teamMembers[0].src, teamMembers[1].src, teamMembers[2].src],
  },
];

export const inProgressTasks: Task[] = [
  {
    id: "task-4",
    title: "Onboarding Illustrations",
    description: "",
    priority: "Low",
    priorityColor: "bg-[#dfa87433] text-[#d58c48]",
    comments: 14,
    files: 15,
    avatars: [teamMembers[1].src, teamMembers[2].src, teamMembers[0].src],
    image: "../../public/images/flowers.png",
  },
  {
    id: "task-5",
    title: "Moodboard",
    description: "",
    priority: "Low",
    priorityColor: "bg-[#dfa87433] text-[#d58c48]",
    comments: 9,
    files: 10,
    avatars: [teamMembers[1].src],
    images: ["../../public/images/plants.png", "../../public/images/dog.png"],
  },
];

export const doneTasks: Task[] = [
  {
    id: "task-6",
    title: "Mobile App Design",
    description: "",
    priority: "Completed",
    priorityColor: "bg-[#83c29d33] text-[#67b266]",
    comments: 12,
    files: 15,
    avatars: [teamMembers[3].src, teamMembers[1].src],
    image: "../../public/images/mobile.png",
  },
  {
    id: "task-7",
    title: "Design System",
    description: "It just needs to adapt the UI from what you did before",
    priority: "Completed",
    priorityColor: "bg-[#83c29d33] text-[#67b266]",
    comments: 12,
    files: 15,
    avatars: [teamMembers[0].src, teamMembers[1].src, teamMembers[2].src],
  },
];

export const columns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-[#5030e5]",
    tasks: todoTasks,
    count: todoTasks.length,
  },
  {
    id: "progress",
    title: "On Progress",
    color: "bg-[#ffa500]",
    tasks: inProgressTasks,
    count: inProgressTasks.length,
  },
  {
    id: "done",
    title: "Done",
    color: "bg-[#76A5EA]",
    tasks: doneTasks,
    count: doneTasks.length,
  },
];
