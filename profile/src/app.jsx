import { useState } from 'preact/hooks'
import './app.css'
import MenuBar from './components/menubar'
import MainPage from './components/MainPage'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuBar/>
      <MainPage/>
    </>
  )
}
