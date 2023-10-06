import './App.css';
import './clues.css'
import ClueCards from './components/Homepage/ClueCards';
import Navbar from './components/Homepage/Navbar';
import Login from './components/Login'; 
import Hero from './components/Hero';
// import Homepage from './views/Homepage'
import Question from './views/Question.jsx'
import Test from './testing/Test'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Test></Test> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Hero />} />
          <Route exact path="/ClueCards" element={<ClueCards/>} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;