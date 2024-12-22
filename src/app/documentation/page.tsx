// src/app/documentation/page.tsx
import React from "react";
import styles from "./DocumentationPage.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/HeaderModule/Header";

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
