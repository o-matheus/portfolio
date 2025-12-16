import { Route, Routes } from "react-router-dom";
import Hero from "./componentes/Hero";
import About from "./componentes/About/Index";
import Project from "./componentes/Projects";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ContactPage from "./pages/ContactPage";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/projetos/:id" element={<ProjectDetailsPage />} />
        <Route path="/contato" element={<ContactPage />} />
    </Routes>
)

export default Rotas;