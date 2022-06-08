import './App.scss';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Research from './components/Research'

function App() {
  return (
    <>
    <Routes>
      <Route path="https://cmglmsr.github.io/" element={<Layout />}>
      <Route path="https://cmglmsr.github.io/" index element={<Home />} />
      <Route path="https://cmglmsr.github.io/about" element={<About />} />
      <Route path="https://cmglmsr.github.io/contact" element={<Contact />} />
      <Route path="https://cmglmsr.github.io/research" element={<Research />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
