// src/app/documentation/page.tsx
import React from "react";
import styles from "./DocumentationPage.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/HeaderModule/Header";

// Importa tu nuevo sidebar
import DocumentationSidebar from "./components/DocumentationSidebar";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Contenedor principal para sidebar + contenido */}
      <div className={styles.mainContainer}>
        {/* Sidebar a la izquierda */}
        <DocumentationSidebar />
      </div>

      <Footer />
    </div>
  );
}
