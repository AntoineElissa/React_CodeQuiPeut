import { useState } from 'react'

import './App.css'

/* Import des composants */
import Titre from './Components/Header/Titre'
import Hero from './Components/Hero/Hero'
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
