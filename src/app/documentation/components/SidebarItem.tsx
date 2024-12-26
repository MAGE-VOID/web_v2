// src/app/documentation/components/SidebarItem.tsx

"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./SidebarItem.module.css";

/** Estructura que describe un ítem (puede tener subItems o no) */
export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
}

/**
 * SidebarItem:
 * - Muestra un link directo si no hay subItems
 * - Muestra un "button" + submenú colapsable si hay subItems
 */
export default function SidebarItem({ item }: { item: SidebarItemProps }) {
  const { label, href, subItems } = item;

  // Submenús abiertos por defecto
  const [isOpen, setIsOpen] = useState(true);

  // Para animar la altura
  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      if (isOpen) {
        const scrollHeight = subMenuRef.current.scrollHeight;
        setMenuHeight(scrollHeight);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isOpen]);

  if (!subItems || subItems.length === 0) {
    // Enlace directo
    return (
      <li className={styles.item}>
        <Link href={href || "#"} className={styles.directLink}>
          {label}
        </Link>
      </li>
    );
  }

  const toggleSubmenu = () => setIsOpen(!isOpen);

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
        {subItems.map((sub, idx) => (
          <Link key={idx} href={sub.href || "#"} className={styles.subMenuLink}>
            {sub.label}
          </Link>
        ))}
      </div>
    </li>
  );
}
