"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SidebarItem.module.css";

/** Estructura que describe un ítem (puede tener subItems o no) */
export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
}

export default function SidebarItem({ item }: { item: SidebarItemProps }) {
  const { label, href, subItems } = item;

  // 1. Detectar ruta actual para marcar "active"
  const pathname = usePathname();

  // 2. Nombre único para el submenú en localStorage (basado en label)
  const localStorageKey = `sidebarOpen-${label}`;

  // 3. Estado "isOpen" se inicializa leyendo de localStorage.
  //    Si no existe, por defecto lo dejamos "false" o "true" como tú prefieras
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(localStorageKey);
      if (stored !== null) return stored === "true"; 
    }
    // Si no hay nada en localStorage, 
    // escoge si quieres iniciar abierto (true) o cerrado (false).
    return true;
  });

  // 4. Para animar la altura del contenedor
  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      setMenuHeight(isOpen ? subMenuRef.current.scrollHeight : 0);
    }

    // Guardar estado actual en localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, isOpen.toString());
    }
  }, [isOpen, localStorageKey]);

  // Caso: ítem sin submenú => link directo
  if (!subItems || subItems.length === 0) {
    const isActive = pathname === (href || "#");
    return (
      <li className={styles.item}>
        <Link
          href={href || "#"}
          className={`${styles.directLink} ${isActive ? styles.active : ""}`}
        >
          {label}
        </Link>
      </li>
    );
  }

  // Caso: ítem con submenú
  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.item}>
      <div
        className={`${styles.collapseHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleSubmenu}
      >
        <span>{label}</span>
        <i className={`fas fa-chevron-down ${styles.icon}`}></i>
      </div>

      <div
        className={styles.subMenuContainer}
        ref={subMenuRef}
        style={{ height: `${menuHeight}px` }}
      >
        {subItems.map((sub, idx) => {
          const isSubActive = pathname === (sub.href || "#");
          return (
            <Link
              key={idx}
              href={sub.href || "#"}
              className={`${styles.subMenuLink} ${
                isSubActive ? styles.active : ""
              }`}
            >
              {sub.label}
            </Link>
          );
        })}
      </div>
    </li>
  );
}
