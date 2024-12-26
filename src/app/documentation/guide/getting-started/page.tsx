// src/app/documentation/guide/getting-started/page.tsx

import React from "react";
import DocumentationLayout from "../../components/DocumentationLayout";

export default function GettingStartedPage() {
  return (
    <DocumentationLayout>
      <h1>Getting Started</h1>
      <p>
        Esta sección te ayudará a comenzar rápidamente con la configuración 
        inicial de tu proyecto.
      </p>

      <h2>Requisitos</h2>
      <p>
        - Node.js 14+  
        - Una cuenta en el repositorio  
        - Etc...
      </p>

      <h2>Instalación</h2>
      <p>
        Pasos para instalar las dependencias...
      </p>

      <h2>Primeros Pasos</h2>
      <p>
        Cómo iniciar el servidor, configurar la base de datos, etc.
      </p>
    </DocumentationLayout>
  );
}
