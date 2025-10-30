# Mini CRM / Analytics Dashboard (React + Vite)

This project provides a modern setup to build a responsive **dashboard web app** using **React** and **Vite**.  
It demonstrates authentication, protected routes, reusable UI components, and dynamic data visualization.

Currently, this project includes features like:

-  **Authentication (Login / Logout)** using React Context & localStorage  
- **Protected Routes** using React Router DOM  
- **Analytics Dashboard** with charts (Recharts)  
- **Modular Components** for Layout, Cards, and Loaders  
- **Skeleton Loader** integration for improved UX  

---

## Authentication System

Implements a simple login form with email and password fields.  
- Uses mock authentication or connects to a basic API.  
- Saves user session in `localStorage`.  
- Protects dashboard routes and redirects unauthenticated users.  

Concepts Learned: Context API, localStorage, Protected Routes, Form Handling  

---

## Dashboard Layout

Includes a responsive dashboard design with:  
- Sidebar navigation (Dashboard, Users, Reports, Settings)  
- Topbar (Search bar, user avatar, logout button)  
- Main content area with dynamic rendering  

Concepts Learned: Routing, Layout Composition, Component Reusability  

---

## Analytics Overview

Displays summary cards and charts with mock or API data.  
- Total Users  
- Revenue  
- Conversion Rate  
- Bar, Line, and Pie charts with **Recharts**

Concepts Learned: State management, Chart visualization, API integration  

---

## Skeleton Loader

A reusable `SkeletonLoader.jsx` component enhances UX during data fetch.  
Uses **react-loading-skeleton** to show animated placeholders before rendering content.

Concepts Learned: Conditional rendering, loading state management  

---

## Folder Structure

```
src/
 ├── components/
 │   ├── ProtectedRoute.jsx
 │   └── common/
 │       └── SkeletonLoader.jsx
 ├── context/
 │   └── AuthContext.jsx
 ├── pages/
 │   ├── Login.jsx
 │   ├── Login.css
 │   ├── Dashboard.jsx
 │   ├── Users.jsx
 │   ├── Reports.jsx
 │   └── Settings.jsx
 ├── App.jsx
 └── main.jsx
```

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint for code quality checks |

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React 19 |
| Build Tool | Vite |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Charts | Recharts |
| Loader | react-loading-skeleton |
| Linting | ESLint |
| Styling | CSS |

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mini-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## React Concepts Used

- React Context API  
- Route protection  
- Conditional rendering  
- Data visualization with Recharts  
- Local storage session handling  
- Modular component structure  

---

## Author

**Vidhi Shah**  

