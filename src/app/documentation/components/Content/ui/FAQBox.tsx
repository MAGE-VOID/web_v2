"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import styles from "./FAQBox.module.css";

interface FAQBoxProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

/**
 * FAQBox con título, subtítulo opcional, hover, y animación suave de apertura/cierre.
 */
export default function FAQBox({ title, subtitle, children }: FAQBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Ajustar la altura del contenedor de la respuesta (contenido)
  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const finalHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${finalHeight}px`;
      contentRef.current.style.opacity = "1";
    } else {
      contentRef.current.style.maxHeight = "0px";
      contentRef.current.style.opacity = "0";
    }
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`${styles.faqBox} ${isOpen ? styles.open : ""}`}>
      <button className={styles.header} onClick={handleToggle}>
        <div className={styles.titleWrapper}>
          <strong className={styles.title}>{title}</strong>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      </button>

      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  );
}
