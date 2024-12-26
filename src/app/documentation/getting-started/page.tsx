// src/app/documentation/getting-started/page.tsx
import React from "react";
import DocumentationLayout from "../components/DocumentationLayout";

export default function GettingStartedPage() {
  return (
    <DocumentationLayout>
      <h1>Getting Started</h1>
      <p>
        Esta sección te ayudará a comenzar rápidamente con la configuración.
      </p>

      <h2>Introducción</h2>
      <p>Contenido de introducción...</p>

      <h2>Instalación</h2>
      <p>Contenido de instalación...</p>

      <h2>Quickstart</h2>
      <p>Contenido de quickstart...</p>
    </DocumentationLayout>
  );
}
