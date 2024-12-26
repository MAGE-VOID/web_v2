"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SidebarItem.module.css";

export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
}

export default function SidebarItem({ item }: { item: SidebarItemProps }) {
  const { label, href, subItems } = item;
  const pathname = usePathname();

  // Clave en localStorage (ej: "sidebarOpen-Guide")
  const localStorageKey = `sidebarOpen-${label}`;

  // `isOpen` puede ser `true`, `false` o `null` (mientras no sabemos su valor)
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  // Altura animada del submenú
  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  // 1. Al montar en cliente, leemos localStorage para definir isOpen real.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(localStorageKey);
    if (stored !== null) {
      // "true" o "false" en string
      setIsOpen(stored === "true");
    } else {
      // Si no existe en localStorage, por defecto => true (o false, como prefieras)
      setIsOpen(true);
    }
  }, [localStorageKey]);

  // 2. Cada vez que isOpen cambie (y sea != null), guardamos en localStorage.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen !== null) {
      localStorage.setItem(localStorageKey, isOpen.toString());
    }
  }, [isOpen, localStorageKey]);

  // 3. Calcular altura del submenú cuando cambia isOpen
  useEffect(() => {
    if (subMenuRef.current && isOpen !== null) {
      setMenuHeight(isOpen ? subMenuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // 4. Mientras isOpen === null, no renderizamos nada (evitamos flicker)
  if (isOpen === null) {
    return null; // o un pequeño "loading..."
  }

  // Caso: no hay subItems => es un link directo
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

  // Caso: Sí hay submenú
  const toggleSubmenu = () => setIsOpen(!isOpen);

  const isOpenClass = isOpen ? styles.iconOpen : "";

  return (
    <li className={styles.item}>
      {/* Encabezado que abre/cierra */}
      <div className={styles.collapseHeader} onClick={toggleSubmenu}>
        <span>{label}</span>
        {/* Flecha inline SVG */}
        <svg
          className={`${styles.arrowIcon} ${isOpenClass}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Contenedor animado */}
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
