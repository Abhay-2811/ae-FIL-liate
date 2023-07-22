
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from './components/Home';
import { Verify } from './components/Verify';
import { FCusers } from './components/FCusers';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { filecoinCalibration, filecoin } from 'wagmi/chains'

const chains = [filecoinCalibration, filecoin]
const projectId = '8a78cee3b2628612f1e1854e8798011b'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <BrowserRouter>
    <WagmiConfig config={wagmiConfig}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/users" element={<FCusers/>}/>
      </Routes>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
