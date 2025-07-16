import { useAuth } from "./useAuth";

export const useCurrentUser = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return { email: null, username: null };

  const emailList = JSON.parse(
    localStorage.getItem("registeredEmails") || "[]"
  );
  const email = emailList.length > 0 ? emailList[0] : null;
  const username = email ? email.split("@")[0] : null;

  return { email, username };
};
