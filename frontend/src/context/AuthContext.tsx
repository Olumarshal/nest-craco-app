import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IUser {
  accessToken: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (data: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (data: IUser) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
