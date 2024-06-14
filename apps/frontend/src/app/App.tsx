import { useState } from 'react'
import reactLogo from '../assets/img/react.svg'
import viteLogo from '../assets/img/vite.svg'


export const App = () => {
  const [count, setCount] = useState(0)
  const url: string = 'https://fusiona.cl/blog/tecnologia/principios-solid-por-que-usarlos-en-tu-desarrollo-de-software/'

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ 
            async () => {
              window.open(url, '_blank')
            }
          }>
          CLICKéAME!!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
