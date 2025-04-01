import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import the actual context

// Custom hook to access authentication context
export const useAuth = () => {
  const context = useContext(AuthContext); // Use the AuthContext here, not the type

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
