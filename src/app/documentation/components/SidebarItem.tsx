import React from "react";
import styles from "./SidebarItem.module.css";
import SidebarLink from "./SidebarLink";
import SidebarSubMenu from "./SidebarSubMenu";

export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
}

export default function SidebarItem({ item }: { item: SidebarItemProps }) {
  const { label, href, subItems } = item;

  // Si NO tiene subItems, renderiza un link directo
  if (!subItems || subItems.length === 0) {
    return (
      <li className={styles.item}>
        <SidebarLink href={href || "#"} label={label} />
      </li>
    );
  }

  // Caso contrario, renderiza un submenú
  return (
    <li className={styles.item}>
      <SidebarSubMenu label={label} subItems={subItems} />
    </li>
  );
}
