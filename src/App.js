import Header from './Components/Project/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

import './scss/main.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/SASS-website/" element={<Home />}></Route>
        <Route path="/SASS-website/about" element={<About />}></Route>
        <Route path="/SASS-website/projects" element={<Project />}></Route>
        <Route path="/SASS-website/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
