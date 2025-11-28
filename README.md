# Installations

### Core Project Setup
- **Vite (React + TypeScript template)**  
  ```bash
  npm create vite@latest my-app -- --template react-ts
  cd my-app
  npm install
  ```

- **React + ReactDOM** (comes with Vite template)  
  - `react`  
  - `react-dom`

---

### Styling & Utilities
- **Tailwind CSS**  
  ```bash
  (npm install -D tailwindcss postcss autoprefixer)
  npx tailwindcss init -p
  ```
  **this one did not work I used the one in the Recent Tailwind docs I will update this README**

  - Configured in `tailwind.config.js`  
  - Global styles in `src/index.css`

- **shadcn/ui CLI**  
  ```bash
  npx shadcn-ui init
  ```
  - Generates `shadcn.json`  
  - Adds `src/lib/utils.ts`  
  - Configures CSS variables in `src/index.css`

- **shadcn/ui Components** (added via CLI)  
  ```bash
  npx shadcn-ui add button input card dialog table form
  ```
  - Installed into `src/components/ui/`

---

###  Routing
- **React Router DOM**  
  ```bash
  npm install react-router-dom
  ```
  - Used in `App.tsx` and `main.tsx` for `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Outlet>`.

---

###  State Management & Hooks
- **Zustand (for stores)** *(based on your `/store` folder)*  
  ```bash
  npm install zustand
  ```
  - Used for `auth.store.ts`, `appointments.store.ts`, `user.store.ts`.


---


### Icons & Fonts
- **Lucide React** (shadcn default icon set)  
  ```bash
  npm install lucide-react
  ```

---

## Summary of Installed Packages
- `react`  
- `react-dom`  
- `vite`    
- `tailwindcss`  
- `autoprefixer`  
- `shadcn-ui` (CLI, generates components)  
- `react-router-dom`  
- `zustand`  
- `lucide-react`


