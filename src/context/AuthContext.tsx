"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { apiLogin, apiRegister, getUser, apiLogout } from "@/services/authService";

interface AuthContextProps {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string,email: string,password: string,password_confirmation: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadUser = async () => {
    try {
      const data = await getUser();
      setUser(data.user || data);
    } catch (e) {
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    await apiLogin(email, password);
    await loadUser();
  };

  const register = async (name:string,email:string,password:string,password_confirmation:string) => {
    setLoading(true);
    await apiRegister(name,email,password,password_confirmation);
    await loadUser();
  };

  const logout = async () => {
    await apiLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
