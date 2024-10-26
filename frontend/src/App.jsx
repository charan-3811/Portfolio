import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import './App.css'
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import ContactMe from './components/contact.jsx';
function App() {


  return (
   <>
   <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<ContactMe />} />
                </Routes>
            </Router>
   

   </>
  )
}

export default App
