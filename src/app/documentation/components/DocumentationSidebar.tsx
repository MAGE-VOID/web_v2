// src/app/documentation/components/DocumentationSidebar.tsx
import React from "react";
import Link from "next/link"; // si usas Next.js
import styles from "./DocumentationSidebar.module.css";

const DocumentationSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/documentation/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link href="/documentation/second-section">Second Section</Link>
          </li>
          <li>
            <Link href="/documentation/third-section">Third Section</Link>
          </li>
          {/* Agrega aquí más enlaces según las secciones de tu doc */}
        </ul>
      </nav>
    </aside>
  );
};

export default DocumentationSidebar;
