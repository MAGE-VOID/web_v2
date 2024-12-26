// src/app/documentation/components/SidebarItem.tsx
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

  const localStorageKey = `sidebarOpen-${label}`;

  // Lee de localStorage o inicia en 'true'
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(localStorageKey);
      if (stored !== null) return stored === "true";
    }
    return true;
  });

  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      setMenuHeight(isOpen ? subMenuRef.current.scrollHeight : 0);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey, isOpen.toString());
    }
  }, [isOpen, localStorageKey]);

  // Enlace directo (sin submenú)
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

  // Con submenú
  const toggleSubmenu = () => setIsOpen(!isOpen);

  return (
    <li className={styles.item}>
      <div
        className={`${styles.collapseHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleSubmenu}
      >
        <span>{label}</span>
        {/* Flecha: chevron-right por defecto */}
        <i
          className={`fas fa-chevron-right ${styles.icon} ${
            isOpen ? styles.iconOpen : ""
          }`}
        ></i>
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
