"use client";

import { useEffect, useState } from "react";
import styles from "./animated-background.module.css";

export default function AnimatedBackground() {
  return (
    <div className={styles.background}>
      <div className={styles.gradientLayer} />
    </div>
  );
}