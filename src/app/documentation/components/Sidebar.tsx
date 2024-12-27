"use client";

import React, { useState, useEffect } from "react";
import styles from "./Sidebar/Sidebar.module.css";
import SidebarItem from "./Sidebar/SidebarItem";

/*
 Definimos la estructura de cada ítem de menú
*/
import { menuData } from "./Sidebar/SidebarData";


export default function Sidebar() {
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

  // Renderiza un sidebar "fantasma" mientras no cargamos la config
  if (isLoading) {
    return (
      <aside
        className={styles.sidebar}
        style={{
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />
    );
  }

  // Una vez que isLoading es false, pintamos el sidebar real
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
