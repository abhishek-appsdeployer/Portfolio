import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter, Routes, Route,HashRouter} from "react-router-dom";
import Introduce from './component/Introduce';
import Skills from './component/Skills';
import Certificate from './component/Certificate';
import Contact from './component/Contact';
import Resumes from './component/Resumes';
function App() {
  return (
   <>
    {/* <Header/>
    <Home/> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/cer" element={<Certificate/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/resume" element={<Resumes/>}></Route>
       

      </Routes>
    </HashRouter>
   </>
  );
}

export default App;
