import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeProvider = ({ initialState, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const rawSetTheme = (currentTheme) => {
    const root = window.document.documentElement;
    const isDark = currentTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(currentTheme);

    localStorage.theme = currentTheme;
  };
  // if (initialState) {
  //   rawSetTheme(initialState);
  // }
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
