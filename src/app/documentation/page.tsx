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

      <div className={styles.mainContainer}>
        {/* Sidebar a la izquierda */}
        <DocumentationSidebar />

        {/* Área principal de contenido */}
        <main className={styles.content}>
          <h1>Documentación</h1>
          <p>Contenido de ejemplo...</p>
          {/* Más contenido */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
