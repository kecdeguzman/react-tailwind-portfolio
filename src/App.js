import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/contact' element={<Contact />}/>

    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
