"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.header}>
      <div className={styles.justify}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src="/Logos/Logo_white90.png"
              alt="Logo"
              width={250}
              height={250}
              priority
            />
          </Link>
        </div>

        {/* Menú de enlaces */}
        <div className={styles.linkdiv}>
          <Link
            href="/documentation"
            passHref
            className={
              isActive("/documentation")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Documentation
          </Link>

          <Link
            href="/products"
            passHref
            className={
              isActive("/products")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Products
          </Link>

          <Link
            href="/contact"
            passHref
            className={
              isActive("/contact")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Contact
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
