"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const toggleMenu = () => {
    // Cambiar el estado que controla la visibilidad del menú
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.justify}>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        &#9776; {/* Icono de hamburguesa */}
      </div>
      {/* Menú de enlaces */}
      <div className={styles.container}>
        <div className={`${styles.menudiv} ${isOpen ? styles.show : ""}`}>
          <Link
            href="/documentation"
            className={styles["menu-link"]}
            passHref
          >
            Documentation
          </Link>
          <Link href="/products" className={styles["menu-link"]} passHref>
            Products
          </Link>
          <Link href="/contact" className={styles["menu-link"]} passHref>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
