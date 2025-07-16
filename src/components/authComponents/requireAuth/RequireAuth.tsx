import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/context/useAuth";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
export default RequireAuth;
