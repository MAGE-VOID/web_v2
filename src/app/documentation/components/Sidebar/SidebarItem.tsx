import React from "react";
import styles from "./SidebarItem.module.css";
import SidebarLink from "./SidebarLink";
import SidebarSubMenu from "./SidebarSubMenu";

export interface SidebarItemProps {
  label: string;
  href?: string;
  subItems?: SidebarItemProps[];
  isTitle?: boolean; // <-- NUEVO: marca si es solo título
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
  const { label, href, subItems, isTitle } = item;

  // 1) Si es un TÍTULO (no tiene href ni subItems, o no quieres submenú)
  //    Renderiza un <div> especial (blanco, negrita, sin hover).
  //    * Si quieres que al hacer clic no haga nada, ni expanda menú, 
  //      lo dejamos como un div sin onClick.
  if (isTitle) {
    return (
      <li className={styles.item}>
        <div className={styles.titleHeader}>{label}</div>
      </li>
    );
  }

  // 2) Si NO tiene subItems => es un link simple
  if (!subItems || subItems.length === 0) {
    return (
      <li className={styles.item}>
        <SidebarLink href={href || "#"} label={label} />
      </li>
    );
  }

  // 3) De lo contrario, es un submenú expandible
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
