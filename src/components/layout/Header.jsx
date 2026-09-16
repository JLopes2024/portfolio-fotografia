"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/navigation";

import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

const hasOverlayHeader =
  pathname === "/" || pathname === "/portfolio";
  return (
    <>
      <header
        className={`${styles.header} ${
          hasOverlayHeader
            ? styles.homeHeader
            : styles.defaultHeader
        }`}
      >
        <div className={styles.container}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Larissa Fotografia - Página inicial"
          >
            <Image
              src="/images/logo.png"
              alt="Larissa Fotografia"
              width={180}
              height={70}
              priority
              className={`${styles.logoImage} ${
                hasOverlayHeader ? styles.homeLogo : ""
              }`}
            />
          </Link>

          <nav
            className={styles.navigation}
            aria-label="Navegação principal"
          >
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${
                    active ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}