import React,  { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components';
import { Home , Contract } from './Pages'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {TransactionProvider} from './context/ContractContext';

const App = () => {
  return (
      <BrowserRouter>
        <div className="bg-black sticky top-0 z-50">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vSYN2021" exact element={<Contract year="2021" />} />
          <Route path="vSYN2023" exact element={<Contract year="2023" />} />
          <Route path="vSYN2022" exact element={<Contract year="2022" />} />
          <Route path="SYN" exact element={<Contract year="SYN" />} />
        </Routes>
      </BrowserRouter>
  )
} 

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </TransactionProvider>
)

