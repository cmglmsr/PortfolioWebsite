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
      <Route path="/PortfolioWebsite" element={<Layout />}>
      <Route path="/PortfolioWebsite" index element={<Home />} />
      <Route path="PortfolioWebsite/about" element={<About />} />
      <Route path="PortfolioWebsite/contact" element={<Contact />} />
      <Route path="PortfolioWebsite/research" element={<Research />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
