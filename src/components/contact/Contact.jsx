import React, { useState } from "react";
import { CONTACT_DETAILS } from "../../constants";
import styles from "./Contact.module.css";

const contactIcons = {
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ width: "1.25rem", height: "1.25rem" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),
  whatsapp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: "1.25rem", height: "1.25rem" }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: "1.25rem", height: "1.25rem" }}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: "1.25rem", height: "1.25rem" }}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  telegram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: "1.25rem", height: "1.25rem" }}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.83-.46-2.54-2.239-.704-.784-1.073-1.27-1.74-2.034-.6-.703-.944-.922-1.44-.96-.303-.023-.953.15-1.453.22-.472.064-1.36.156-1.98.16-.622.004-1.82-.084-2.71-.246-.446-.082-.765-.125-.735-.264.03-.14.376-.283 1.036-.43 1.32-.24 4.39-.877 4.54-.924.15-.047.26-.07.354-.07.1 0 .15.023.215.115.065.092.223.32.486.693.33.465.566.745.77.96.255.27.54.565.756.76.18.16.308.273.414.343.106.07.176.116.248.18.07.063.144.13.248.2.104.07.228.14.356.2.127.06.265.12.414.17.15.05.31.09.486.12.175.03.36.045.56.045.2 0 .405-.03.615-.09.21-.06.42-.15.63-.27.21-.12.405-.27.6-.45.195-.18.36-.39.51-.63.15-.24.27-.51.36-.81.09-.3.135-.63.135-.99 0-.36-.045-.75-.135-1.17-.09-.42-.24-.84-.45-1.26-.21-.42-.48-.81-.81-1.18-.33-.37-.72-.69-1.17-.96-.45-.27-.96-.48-1.53-.63-.57-.15-1.2-.22-1.89-.22-.69 0-1.41.07-2.16.22-.75.15-1.44.39-2.07.72-.63.33-1.17.72-1.62 1.17-.45.45-.81.96-1.08 1.53-.27.57-.405 1.17-.405 1.8 0 .63.135 1.23.405 1.8.27.57.63 1.08 1.08 1.53.45.45.99.84 1.62 1.17.63.33 1.32.57 2.07.72.75.15 1.47.22 2.16.22.69 0 1.32-.07 1.89-.22.57-.15 1.08-.36 1.53-.63.45-.27.84-.59 1.17-.96.33-.37.6-.78.81-1.18.21-.42.36-.84.45-1.26.09-.42.135-.81.135-1.17 0-.36-.045-.69-.135-.99-.09-.3-.21-.57-.36-.81-.15-.24-.315-.45-.51-.63-.195-.18-.405-.33-.6-.45-.21-.12-.42-.21-.63-.27-.21-.06-.42-.09-.615-.09z" />
    </svg>
  ),
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>Get in touch</p>
          {/* <h2 className={styles.title}>Contact</h2> */}
          {/* <p className={styles.subtitle}>
            Reach out via any channel below or send a message.
          </p> */}
        </header>

        <div className={styles.grid}>
          <div>
            <div className={styles.detailsCard}>
              <p className={styles.detailsLabel}>Direct links</p>
              <ul className={styles.detailsList}>
                {CONTACT_DETAILS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.icon === "email" ? undefined : "_blank"}
                      rel={
                        item.icon === "email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className={styles.detailLink}
                    >
                      <span className={styles.detailIcon}>
                        {contactIcons[item.icon] ?? null}
                      </span>
                      <div className={styles.detailText}>
                        <p className={styles.detailLabel}>{item.label}</p>
                        <p className={styles.detailValue}>{item.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className={styles.formCard}>
              <p className={styles.formLabel}>Send a message</p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label htmlFor="name" className={styles.fieldLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={styles.submit}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent"
                    : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
