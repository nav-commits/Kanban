# Kanban Project Management Dashboard

## Overview
This project is a **Kanban-style project management dashboard** built with **Next.js**, **TypeScript**, and **TailwindCSS**. It recreates a web UI based on the provided **Figma design** and allows users to drag and drop tasks across multiple lanes.

[Figma Design](https://www.figma.com/community/file/1073116958099793906/project-management-dashboard)

## Features
- Pixel-perfect recreation of the Figma design (spacing, fonts, colors, layout)
- Responsive design for multiple screen widths
- Kanban board with draggable items between columns
- State persistence when navigating between sections (using in-memory state)
- Modular and reusable components

## Tech Stack
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [@dnd-kit/core](https://docs.dndkit.com/) (for drag-and-drop)
- [Zustand / React Context](https://github.com/pmndrs/zustand) (for state management)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repo-url>
cd kanban
npm install
npm run dev

