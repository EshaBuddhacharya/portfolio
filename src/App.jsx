import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Contact from './pages/Contact';
import About from './components/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Hero page */}
        <Route path="/" element={<Hero />} />

        {/* Other pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />

        {/* Optional: Redirect any unknown paths to home */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
