import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <SocialLinks />
      <main style={{ flex: 1, paddingRight: "3rem" }}>
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
