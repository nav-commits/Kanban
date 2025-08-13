import { create } from "zustand";
import { KanbanData, Task } from "@/types/kanban";
import { columns as initialColumns } from "@/data/kanban-data";

interface KanbanStore {
  kanbanData: KanbanData;
  activeTask: Task | null;
  sidebarOpen: boolean;
  setKanbanData: (updater: KanbanData | ((prev: KanbanData) => KanbanData)) => void;
  setActiveTask: (task: Task | null) => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useKanbanStore = create<KanbanStore>((set) => ({
  kanbanData: { columns: initialColumns },
  activeTask: null,
  sidebarOpen: false,
  setKanbanData: (updater) =>
    set((state) => {
      const newData =
        typeof updater === "function"
          ? (updater as (prev: KanbanData) => KanbanData)(state.kanbanData)
          : updater;
      return { kanbanData: newData };
    }),
  setActiveTask: (task) => set({ activeTask: task }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));
