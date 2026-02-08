import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.label}>Hi, I am</p>
            <h1 className={styles.title}> Hanna Shiferaw</h1>
            <p className={styles.subtitle}>
              A software developer with a Computer Science background who enjoys
              building meaningful solutions through code.
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className={styles.btnPrimary}>
                View Projects
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Contact
              </a>
            </div>
          </div>
          <div className={styles.portraitWrap}>
            <div className={styles.portrait}>
              <img
                src="/portrait.jpg"
                alt="Profile"
                onError={(e) => {
                  e.target.src =
                    "/public/portrait.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
