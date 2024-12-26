import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SidebarItem.module.css";
import type { SidebarItemProps } from "./SidebarItem";

interface SidebarSubMenuProps {
  label: string;
  subItems: SidebarItemProps[];
}

export default function SidebarSubMenu({ label, subItems }: SidebarSubMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true); // Activa la animación a partir del primer clic
  };

  // Ajustar la altura del contenedor cuando cambia `isOpen`
  useLayoutEffect(() => {
    if (subMenuRef.current) {
      setMenuHeight(isOpen ? subMenuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const arrowClass = isOpen ? styles.iconOpen : "";

  return (
    <>
      <div className={styles.collapseHeader} onClick={toggleSubmenu}>
        <span>{label}</span>
        <svg
          className={`${styles.arrowIcon} ${arrowClass}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
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
      <div
        className={styles.subMenuContainer}
        ref={subMenuRef}
        style={{
          height: `${menuHeight}px`,
          overflow: "hidden",
          transition: hasInteracted ? "height 0.3s ease-in-out" : "none",
        }}
      >
        {subItems.map((subItem, idx) => {
          const isSubActive = pathname === (subItem.href || "#");
          return (
            <Link
              key={idx}
              href={subItem.href || "#"}
              className={`${styles.subMenuLink} ${
                isSubActive ? styles.active : ""
              }`}
            >
              {subItem.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
