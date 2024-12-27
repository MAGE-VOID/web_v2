import React from "react";
import styles from "./SidebarItem.module.css";
import SidebarLink from "./SidebarLink";
import SidebarSubMenu from "./SidebarSubMenu";

export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
}

interface SidebarItemControlledProps {
  item: SidebarItemProps;
  isOpen: boolean;
  onToggle: () => void;
}

export default function SidebarItem({
  item,
  isOpen,
  onToggle,
}: SidebarItemControlledProps) {
  const { label, href, subItems } = item;

  // Si NO tiene subItems, es un link simple
  if (!subItems || subItems.length === 0) {
    return (
      <li className={styles.item}>
        <SidebarLink href={href || "#"} label={label} />
      </li>
    );
  }

  // De lo contrario, renderiza un submenú (abierto o cerrado)
  return (
    <li className={styles.item}>
      <SidebarSubMenu
        label={label}
        subItems={subItems}
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </li>
  );
}
