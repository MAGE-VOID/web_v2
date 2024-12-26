"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
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

  const [hasInteracted, setHasInteracted] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(() => {
    if (subItems && subItems.length > 0) {
      return subItems.some((sub) => pathname.startsWith(sub.href || ""));
    }
    return false;
  });

  useLayoutEffect(() => {
    if (subMenuRef.current) {
      setMenuHeight(isOpen ? subMenuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  const arrowClass = isOpen ? styles.iconOpen : "";

  if (!subItems || subItems.length === 0) {
    const isActive = pathname === (href || "#");
    return (
      <li className={styles.item}>
        <Link href={href || "#"} className={`${styles.directLink} ${isActive ? styles.active : ""}`}>
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <div className={styles.collapseHeader} onClick={toggleSubmenu}>
        <span>{label}</span>
        <svg className={`${styles.arrowIcon} ${arrowClass}`} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
        {subItems.map((sub, idx) => {
          const isSubActive = pathname === (sub.href || "#");
          return (
            <Link key={idx} href={sub.href || "#"} className={`${styles.subMenuLink} ${isSubActive ? styles.active : ""}`}>
              {sub.label}
            </Link>
          );
        })}
      </div>
    </li>
  );
}