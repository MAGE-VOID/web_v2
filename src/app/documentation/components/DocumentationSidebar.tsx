// src/app/documentation/components/DocumentationSidebar.tsx
import React from "react";
import Link from "next/link"; // Si usas Next.js
import styles from "./DocumentationSidebar.module.css";

const DocumentationSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {/* Sección 1 */}
          <li>
            <details open>
              <summary className={styles.summary}>Getting Started</summary>
              <ul className={styles.submenu}>
                <li>
                  <Link href="/documentation/getting-started/intro">
                    Introducción
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/getting-started/installation">
                    Instalación
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/getting-started/quickstart">
                    Quickstart
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {/* Sección 2 */}
          <li>
            <details>
              <summary className={styles.summary}>Second Section</summary>
              <ul className={styles.submenu}>
                <li>
                  <Link href="/documentation/second-section/overview">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/second-section/advanced">
                    Advanced
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {/* Sección 3 */}
          <li>
            <details>
              <summary className={styles.summary}>Third Section</summary>
              <ul className={styles.submenu}>
                <li>
                  <Link href="/documentation/third-section/topic1">
                    Topic 1
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/third-section/topic2">
                    Topic 2
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DocumentationSidebar;
