import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
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
            href="/documentation/introduction"
            className={styles["info-link"]}
            passHref
          >
            Documentation
          </Link>
          <Link href="/products" className={styles["info-link"]} passHref>
            Products
          </Link>
          <Link href="/contact" className={styles["info-link"]} passHref>
            Contact
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
