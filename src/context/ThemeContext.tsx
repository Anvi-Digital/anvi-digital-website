"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextValue {
  theme: string | null;
  setTheme: (theme: string | null) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: null,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
