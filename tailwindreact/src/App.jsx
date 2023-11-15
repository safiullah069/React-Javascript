// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'




// eslint-disable-next-line react/prop-types
function App({username, age}) {


  console.log({username, age});

  return (

    <>

      <h2 className='bg-white text-black p-4 font-bold rounded-md cursor-pointer hover:bg-gray-400 flex flex-row space-x-3 m-3 w-auto' >Hi {username} Im {age} years Old
      
      </h2>
    </>
  )
}

export default App
