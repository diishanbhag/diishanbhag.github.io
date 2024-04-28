
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Gradient from "./components/Gradient.js";
import Skills from "./components/Skills";
import ExEd from "./components/ExEd";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#121212] text-white  scroll-smooth">
      <Navbar />
            <Gradient />
            <div className="container mx-auto px-9 md:px-24 py-4 text-white">
                <Hero/>
                <AboutSection  />
                <Skills/>
                <ExEd />
                <Projects/>
                <EmailSection />
            </div>
            <Footer />
      
    </main>
  );
}
