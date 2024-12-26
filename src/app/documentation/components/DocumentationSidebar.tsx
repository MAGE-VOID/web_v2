"use client"
// src/app/documentation/components/DocumentationSidebar.tsx
import React, { useState } from "react";
import Link from "next/link";
import styles from "./DocumentationSidebar.module.css";

/* 
  SubMenu: componente reutilizable para cada 
  grupo colapsable (ej. "Guide", "Themes", etc.) 
*/
function SubMenu({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collapseSection}>
      {/* Encabezado (el "botón") */}
      <div
        className={`${styles.collapse__link} ${isOpen ? styles.rotate : ""}`}
        onClick={toggleSubmenu}
      >
        <span className={styles.collapse__title}>{title}</span>
        {/* Ejemplo de ícono con FontAwesome (o el que uses) */}
        <i className={`fas fa-chevron-down ${styles.collapse__icon}`}></i>
      </div>

      {/* Contenedor del submenú (links) */}
      <div
        className={`${styles.collapse__menu} ${isOpen ? styles.showCollapse : ""}`}
      >
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={styles.collapse__sublink}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function DocumentationSidebar() {
  // Aquí podrías tener otros links directos
  // o submenús de ejemplo
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {/* Link directo sin submenú */}
          <li>
            <Link href="/documentation/introduction" className={styles.navLink}>
              Introduction
            </Link>
          </li>

          {/* Ejemplo de SubMenu "Guide" */}
          <li>
            <SubMenu
              title="Guide"
              links={[
                { label: "Getting Started", href: "/documentation/guide/getting-started" },
                { label: "Advanced", href: "/documentation/guide/advanced" },
              ]}
            />
          </li>

          {/* Otro submenú, "Themes" */}
          <li>
            <SubMenu
              title="Themes"
              links={[
                { label: "Docs Theme", href: "/documentation/docs-theme" },
                { label: "Blog Theme", href: "/documentation/blog-theme" },
              ]}
            />
          </li>

          {/* Sección More */}
          <li className={styles.sectionHeading}>More</li>
          <li>
            <Link href="/documentation/about-nextra" className={styles.navLink}>
              About Nextra
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
