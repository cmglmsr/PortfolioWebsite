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
      <Route path="/" element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/research" element={<Research />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
