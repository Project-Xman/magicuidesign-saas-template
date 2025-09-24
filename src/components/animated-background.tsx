"use client";

import { useEffect, useState } from "react";
import styles from "./animated-background.module.css";

export default function AnimatedBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.gradientLayer} />
    </div>
  );
}