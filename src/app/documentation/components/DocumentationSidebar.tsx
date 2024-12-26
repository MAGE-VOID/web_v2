"use client";

import React, { useState, useEffect } from "react";
import styles from "./DocumentationSidebar.module.css";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

/** 
 * Definimos la estructura de cada ítem de menú
 */
const menuData: SidebarItemProps[] = [
  {
    label: "Introduction",
    href: "/documentation/introduction",
  },
  {
    label: "Guide",
    subItems: [
      { label: "Getting Started", href: "/documentation/guide/getting-started" },
      { label: "Advanced", href: "/documentation/guide/advanced" },
    ],
  },
  {
    label: "Themes",
    subItems: [
      { label: "Docs Theme", href: "/documentation/docs-theme" },
      { label: "Blog Theme", href: "/documentation/blog-theme" },
    ],
  },
  {
    label: "More",
    subItems: [
      { label: "About Nextra", href: "/documentation/about-nextra" },
    ],
  },
];

export default function DocumentationSidebar() {
  // Objeto: { [label_menu]: boolean }
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // 1) Leer localStorage una sola vez al montar
  useEffect(() => {
    const saved = localStorage.getItem("openMenus");
    if (saved) {
      setOpenMenus(JSON.parse(saved));
    }
    setIsLoading(false); // Ya cargamos la info
  }, []);

  // 2) Guardar los cambios en localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("openMenus", JSON.stringify(openMenus));
    }
  }, [openMenus, isLoading]);

  // 3) Función para abrir/cerrar un menú. No cierra los demás.
  function handleToggle(label: string) {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  // Hasta que no hayamos cargado la info de localStorage, evitamos mostrar el menú
  if (isLoading) {
    return null; 
    // Opcional: podrías renderizar un loader en lugar de null
  }

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuData.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              isOpen={!!openMenus[item.label]}
              onToggle={() => handleToggle(item.label)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
