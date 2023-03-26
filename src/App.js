import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter, Routes, Route,HashRouter} from "react-router-dom";
import Introduce from './component/Introduce';
import Skills from './component/Skills';
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
       

      </Routes>
    </HashRouter>
   </>
  );
}

export default App;
