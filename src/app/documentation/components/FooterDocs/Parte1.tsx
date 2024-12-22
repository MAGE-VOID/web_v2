import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import Info1 from "./Info1";

function Parte1() {
  return (
    <div>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image
            src="/Logos/Logo_white90.png"
            alt="Logo"
            width={300}
            height={300}
            priority
          />
        </Link>
      </div>
      <div className="w-4/5">
        <Info1 />
      </div>
    </div>
  );
}

export default Parte1;
