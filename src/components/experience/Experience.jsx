import React from "react";
import styles from "./Experience.module.css";

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Commercial Bank of Ethiopia",
    period: "December 2025 — Present",
    // description:
    //   "Building and maintaining core banking systems and internal tools.",
  },
  {
    role: "B.Sc. Computer Science",
    company: "Unity University",
    period: "May 2021 — February 2025",
    // description: "Graduated with a degree in Computer Science.",
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>Career</p>
          {/* <h2 className={styles.title}>Experience</h2> */}
        </header>

        <div className={styles.timeline}>
          <div className={styles.line} />
          <div className={styles.items}>
            {EXPERIENCE.map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.dot} />
                <article className={styles.card}>
                  <p className={styles.period}>{item.period}</p>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.desc}>{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
