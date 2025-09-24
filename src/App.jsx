import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './components/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';


function App() {
  return (
    <Router>
        <Routes>
          <Route path ="/" element ={<Hero/>}/>
          <Route path ="/contact" element ={<Contact/>}/>
          <Route path ="/hero" element ={<Hero/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path ="/skills" element ={<Skills/>}/>
          <Route path ="/experience" element ={<Experience/>}/>
      

        </Routes>
       </Router>
  );
}

export default App;
