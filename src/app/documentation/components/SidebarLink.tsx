import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SidebarItem.module.css";

interface SidebarLinkProps {
  href: string;
  label: string;
}

export default function SidebarLink({ href, label }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.directLink} ${isActive ? styles.active : ""}`}
    >
      {label}
    </Link>
  );
}
