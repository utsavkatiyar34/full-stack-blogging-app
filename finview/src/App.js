import React from 'react'
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
import { Pages } from './Routes/Routes';
import "./App.css"

function App() {
  return (
  <>
  <Navbar/>
  <Pages/>
  <Footer/>
  </>
  );
}

export default App;
