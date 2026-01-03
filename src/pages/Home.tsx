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
            <div id="home"><Hero /></div>
            <div id="projects"><ProjectSection /></div>
            <div id="skills"><SkillsSection /></div>
            <div id="about"><AboutMe /></div>
            <div id="contact"><ContactSection /></div>
            <Footer />
        </>
    )
}

export default Home