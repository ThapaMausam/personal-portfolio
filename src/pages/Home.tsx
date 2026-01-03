import AboutMe from "../components/AboutMe"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import ProjectSection from "../components/ProjectSection"
import SkillsSection from "../components/SkillsSection"

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ProjectSection />
            <SkillsSection />
            <AboutMe />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home