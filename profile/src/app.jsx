import { useState } from 'preact/hooks'
import './app.css'
import MenuBar from './components/MenuBar'
import MainPage from './components/MainPage'
import { PAGE_OPTION } from './components/constants/constant';

export function App() {
  const [page, setPage] = useState(PAGE_OPTION.HOME);

  return (
    <>
      <MenuBar setPage={setPage}/>
      <MainPage page={page} setPage={setPage}/>
    </>
  )
}
