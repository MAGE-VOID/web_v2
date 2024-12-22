// src/app/documentation/page.tsx
import React from "react";
import styles from "./DocumentationPage.module.css";
import Header from "./components/HeaderDocs/Header";
import Footer from "./components/FooterDocs/Footer";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      
      {/* Contenido principal dentro de "main" */}
      <main className={styles.main}>
        <h1>Documentación</h1>
        <p>Contenido de ejemplo...</p>
        {/* Resto del contenido */}
      </main>

      <Footer />
    </div>
  );
}



