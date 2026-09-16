"use client";

import Link from "next/link";
import { useEffect } from "react";

import { navigation } from "@/data/navigation";

import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  pathname,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <span />
        <span />
      </button>

      <div className={styles.content}>
        <nav className={styles.navigation}>
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`${styles.navLink} ${
                  active ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.divider} />

        <div className={styles.social}>
          <a
            href="#"
            aria-label="Instagram"
          >
            Instagram
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <p className={styles.quote}>
          Fotografar é guardar
          <br />
          o que o tempo não pode levar.
        </p>
      </div>
    </div>
  );
}