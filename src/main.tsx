import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "@/routes/AppRouter";
import { AuthProvider } from "@/context/AuthProvider";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
);
