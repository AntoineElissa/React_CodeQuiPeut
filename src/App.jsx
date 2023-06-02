import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* Import des composants */
import Titre from './Components/Titre/Hero'
import Hero from './Components/Titre/Hero'
import Content from './Components/main/Content/Content'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>

    <Titre/>
    <Hero/>
    <Content/>

    </>
  )
}

export default App
