import React from "react";
import { TECHNICAL_SKILLS } from "../../constants";
import styles from "./About.module.css";

const skillCategories = [
  { label: "Backend", items: TECHNICAL_SKILLS.backend },
  { label: "Frontend (Supporting)", items: TECHNICAL_SKILLS.frontend },
  { label: "Tools", items: TECHNICAL_SKILLS.tools },
];

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>About</p>
          {/* <h2 className={styles.title}>About me</h2> */}
        </header>

        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <h3 className={styles.cardLabel}>Bio</h3> */}
            <p className={styles.bio}>
              I have a degree in Computer Science and currently work as a
              software developer. My interest in coding started in 2019 when I
              joined the AGCCI Summer Camp, where I was first introduced to
              programming, and that experience sparked my curiosity and love for
              building things with code. Since then, I’ve been growing as a
              developer, enjoying the process of solving problems, improving
              systems, and writing clean, understandable code. I’m always eager
              to learn, take on new challenges, and work on projects that make a
              real difference.
            </p>
          </div>
          <div>
            <h3 className={styles.skillsHeader}>Technical Skills</h3>
            <div className={styles.skillsList}>
              {skillCategories.map((cat) => (
                <div key={cat.label} className={styles.skillCard}>
                  <p className={styles.skillCat}>{cat.label}</p>
                  <div className={styles.pills}>
                    {cat.items.map((skill) => (
                      <span key={skill} className={styles.pill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
