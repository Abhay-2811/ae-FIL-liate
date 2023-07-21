
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from './components/Home';
import { Verify } from './components/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
