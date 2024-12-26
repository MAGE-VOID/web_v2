// src/app/documentation/page.tsx
import React from "react";
import DocumentationLayout from "./components/DocumentationLayout";

export default function DocumentationMainPage() {
  return (
    <DocumentationLayout>
      <h1>Documentación - Página Principal</h1>
      <p>
        Bienvenido a la documentación general. Aquí encontrarás
        una guía rápida, referencias y enlaces a otras secciones.
      </p>
      {/* Más contenido... */}
    </DocumentationLayout>
  );
}
