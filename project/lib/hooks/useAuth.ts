"use client";

import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (user: { name: string; email: string }) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));