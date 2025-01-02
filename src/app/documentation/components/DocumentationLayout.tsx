// src/app/documentation/components/DocumentationLayout.tsx
"use client";

import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/HeaderModule/Header";
import Sidebar from "./Sidebar";
import styles from "./DocumentationLayout.module.css";

// 1) IMPORTAMOS LA FUENTE 'INTER' (misma que usa Nextra)
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

export default function DocumentationLayout({ children }: DocumentationLayoutProps) {
  return (
    // 2) Envolvemos todo con una <div> que use inter.className
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Header />

      <div className={styles.center}>
        <div className={styles.mainContainer}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
