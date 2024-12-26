// src/app/documentation/components/DocumentationSidebar.tsx
"use client";

import React from "react";
import styles from "./DocumentationSidebar.module.css";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

/** 
 * Definimos la estructura de cada ítem de menú 
 * con "label", "href" y opcionalmente "subItems".
 */
const menuData: SidebarItemProps[] = [
  {
    label: "Introduction",
    href: "/documentation/introduction"
  },
  {
    label: "Guide",
    subItems: [
      { label: "Getting Started", href: "/documentation/guide/getting-started" },
      { label: "Advanced", href: "/documentation/guide/advanced" }
    ]
  },
  {
    label: "Themes",
    subItems: [
      { label: "Docs Theme", href: "/documentation/docs-theme" },
      { label: "Blog Theme", href: "/documentation/blog-theme" }
    ]
  },
  {
    label: "More",
    subItems: [
      { label: "About Nextra", href: "/documentation/about-nextra" }
    ]
  }
];

export default function DocumentationSidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuData.map((item, idx) => (
            <SidebarItem key={idx} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
