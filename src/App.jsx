import { useState } from 'react'
import Footer from './Components/Footer.jsx';
import './App.css'
import LetterViewer from './Components/letterHero.jsx';
import Nax from './Components/nav-bar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nax/>
    <LetterViewer/>
      <Footer/>
    </>
  )
}

export default App;
