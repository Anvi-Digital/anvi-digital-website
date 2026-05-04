"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function AITheme() {
  const { setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "ai-agents");
    setTheme("ai-agents");
    return () => {
      document.documentElement.removeAttribute("data-theme");
      setTheme(null);
    };
  }, [setTheme]);

  return null;
}
