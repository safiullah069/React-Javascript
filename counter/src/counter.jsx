import './App.css'
import { useState } from 'react'

function Counter() {

    let [count, setCounter] = useState(15)
    return(
        <>
        <h2>counter {count}</h2>
        <button onClick={() => {
            if(count >= 20){
                return false
            }
            setCounter(count + 1)
            console.log(count)
        }}>
            Increement
        </button>
        <br />
        <button onClick={() => {
            if (count <= 0) {
                return false
            }
            setCounter(count - 1)
            console.log(count);

        }}>
            Decreement
        </button>
        </>
    )
}

export default Counter