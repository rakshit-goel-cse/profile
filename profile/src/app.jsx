import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={viteLogo} class="logo" alt="Vite logo" />
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
      </div>
      <h1>Rakshit Test</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Will Update code also soon..
        </p>
      </div>
    </>
  )
}
