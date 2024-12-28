// src/app/documentation/components/Sidebar/SidebarData.ts
import { SidebarItemProps } from "./SidebarItem";

export const menuData: SidebarItemProps[] = [
  {
    label: "Introduction",
    href: "/documentation/introduction", // Enlace directo
  },
  {
    label: "How To Start", // ← Título (no clickeable, sin subItems, sin href)
  },
  {
    label: "Table of Contents", // Submenú con items
    subItems: [
      { label: "What is Forex", href: "#" },
      { label: "Algorithmic Trading", href: "#" },
      { label: "Getting Started", href: "#" },
      { label: "Platforms", href: "#" },
      { label: "Resources", href: "#" },
    ],
  },
  {
    label: "Infrastructure",
    subItems: [
      { label: "Virtual Private Server", href: "#" },
      { label: "Cybersecurity and Scams", href: "#" },
    ],
  },
  {
    // Ejemplo de enlace directo, si lo deseas
    label: "Best Brokers",
    href: "#", 
  },
  {
    label: "Specifications", // ← Título (no clickeable, sin subItems, sin href)
  },
  {
    label: "Another Page", // Submenú expandible
    subItems: [
      { label: "Some Detail", href: "#" },
      { label: "Another Detail", href: "#" },
    ],
  },
  {
    label: "More", // ← Título (no clickeable, sin subItems, sin href)
  },
  {
    label: "Another Link Under More",
    href: "#",
  },
  {
    label: "Some Expandable Stuff",
    subItems: [
      { label: "Help Center", href: "#" },
      { label: "Terms and Conditions", href: "#" },
    ],
  },
];

