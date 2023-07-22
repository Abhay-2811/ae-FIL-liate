
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from './components/Home';
import { Verify } from './components/Verify';
import { FCusers } from './components/FCusers';
import { MinaProof } from './components/MinaProof';
import { ZKproof } from './components/ZKproof';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/users" element={<FCusers/>}/>
        <Route path="/mina" element={<MinaProof/>} />
        <Route path="/zkproof" element={<ZKproof/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
