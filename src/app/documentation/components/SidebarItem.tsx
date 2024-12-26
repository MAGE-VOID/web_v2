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

  // Lógica para persistir estado en localStorage
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(localStorageKey);
      if (stored !== null) return stored === "true";
    }
    return true; // por defecto abierto
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

  // Enlace directo
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
        {/* Flecha inline SVG */}
        <svg
          className={`${styles.arrowIcon} ${isOpen ? styles.iconOpen : ""}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mismo path que "chevron-right" (heroicons, feather, etc.): */}
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
