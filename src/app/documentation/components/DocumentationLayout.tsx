// src/app/documentation/components/DocumentationLayout.tsx
"use client";

import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/HeaderModule/Header";
import Sidebar from "./Sidebar";
import styles from "./DocumentationLayout.module.css";

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

export default function DocumentationLayout({ children }: DocumentationLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Contenedor que aplica el centrado (similar a .justify del Header) */}
      <div className={styles.center}>
        <div className={styles.mainContainer}>
          <Sidebar />
          <main className={styles.content}>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
