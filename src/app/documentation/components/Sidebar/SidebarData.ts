// src/app/documentation/components/Sidebar/SidebarData.ts
import { SidebarItemProps } from "./SidebarItem";

export const menuData: SidebarItemProps[] = [
  {
    label: "Introduction",
    href: "/documentation/introduction",
  },
  {
    label: "Guide",
    subItems: [
      { label: "Getting Started", href: "/documentation/guide/getting-started" },
      { label: "Advanced", href: "/documentation/guide/advanced" },
    ],
  },
  {
    label: "Themes",
    subItems: [
      { label: "Docs Theme", href: "/documentation/docs-theme" },
      { label: "Blog Theme", href: "/documentation/blog-theme" },
    ],
  },
  {
    label: "More",
    subItems: [
      { label: "About Nextra", href: "/documentation/about-nextra" },
    ],
  },
];
