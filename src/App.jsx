import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Home from './pages/Home';


function App() {
 

  return (
    <>
    <TopHeader/>
     <Header/>
     <Home />
    </>
  )
}

export default App;
