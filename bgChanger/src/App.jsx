import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className='w-full h-screen m-0 relative' style={{backgroundColor: color}}>
      <div className='absolute bottom-10 w-auto m-8 rounded-3xl inset-x-0 p-2 bg-white'>
        <div className='bg-white flex flex-row flex-wrap space-x-12 justify-center'>

          <button className=' px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'green'}}  onClick={() => {setColor("green")}}>Green</button>
          <button className=' px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'blue'}}  onClick={() => {setColor("blue")}}>Blue</button>
          <button className=' px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'yellow'}}  onClick={() => {setColor("yellow")}}>Yellow</button>
          <button className='px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'brown'}}  onClick={() => {setColor("brown")}}>Brown</button>
          <button className='px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'olive'}}  onClick={() => {setColor("olive")}}>Olive</button>
          <button className=' px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'black'}}  onClick={() => {setColor("black")}}>Black</button>
          <button className=' px-6 py-2 rounded-3xl text-white font-sans shadow-xl ' style={{backgroundColor: 'red'}}  onClick={() => {setColor("red")}}>Red</button>
          
        </div>

      </div>
    </div>
    </>
  )
}

export default App
