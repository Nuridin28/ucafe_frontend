import { createContext, useState, ReactNode, useEffect } from "react";

export interface AuthContextType {
  isAuth: boolean;
  role: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setIsAuth(true);
        setRole(decodedToken.role);
      } catch (error) {
        console.error("Ошибка декодирования токена:", error);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setIsAuth(true);
      setRole(decodedToken.role);
    } catch (error) {
      console.error("Ошибка декодирования токена:", error);
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setRole(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
