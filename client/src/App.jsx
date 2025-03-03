import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>
      set class to &lt;color&gt; to set the color
    </h2>
      <div class="designColor dark-white">
        #f7f8fa <br></br>
        dark-white
      </div>
      <div class="designColor white">
        #f6fbf7 <br></br>
        white
      </div>
      <div class="designColor light-blue">
        #5e8bb5 <br></br>
        light-blue
      </div>
      <div class="designColor blue">
        #1d3d64 <br></br>
        blue
        </div>
      <div class="designColor dark-blue">
        #1d3d64 <br></br>
        dark-blue
      </div>
      <div class="designColor dark-grey">
        #66696e <br></br>
        dark-grey
      </div>
      <div class="designColor grey">
        #b0b5b9 <br></br>
        grey
      </div>
      <div class="designColor black">
        #010302 <br></br>
        black
        </div>
    </>
  )
}

export default App
