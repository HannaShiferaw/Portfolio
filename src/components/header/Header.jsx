import React, { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "../../constants";
import Logo from "./Logo";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <div style={{ display: "flex", alignItems: "center", height: "4rem" }}>
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fafafa",
              textDecoration: "none",
            }}
            aria-label="Home"
          >
            <Logo className={styles.logo} />
          </a>
          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleMenu}
            className={styles.menuButton}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={styles.mobileLink}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
