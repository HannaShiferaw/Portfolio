import React from "react";
import { PROJECTS } from "../../constants";
import styles from "./Projects.module.css";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>Projects</p>
          {/* <h2 className={styles.title}>Projects</h2> */}
        </header>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.id} className={styles.card}>
              <a href={project.link} className={styles.imageWrap}>
                <img src={project.imageUrl} alt={project.title} />
              </a>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.link} className={styles.link}>
                    Demo <ArrowIcon />
                  </a>
                  <a href={project.github} className={styles.link}>
                    Code <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
