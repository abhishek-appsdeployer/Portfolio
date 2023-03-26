import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter, Routes, Route,HashRouter} from "react-router-dom";
import Introduce from './component/Introduce';
import Skills from './component/Skills';
import Certificate from './component/Certificate';
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
       

      </Routes>
    </HashRouter>
   </>
  );
}

export default App;
