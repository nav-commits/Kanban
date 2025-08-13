export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High" | "Completed";
  priorityColor: string;
  comments: number;
  files: number;
  avatars: string[];
  image?: string;
  images?: string[];
  color?: string; 
  
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
  count: number;
  color?: string; 
}

export interface Project {
  name: string;
  color: string;
  active: boolean;
}

export interface TeamMember {
  src: string;
  alt: string;
}

export interface KanbanData {
  columns: Column[];
}
