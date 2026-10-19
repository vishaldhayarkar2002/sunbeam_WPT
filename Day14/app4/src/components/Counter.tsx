import React, { useState } from 'react'

function Counter() {
    //let count: number = 0

    // const arr = useState<number>(0)
    // console.log(arr[0])
    // console.log(arr[1])

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Count : {count}</h2>

            <button onClick={() => {
                setCount(count + 1)
                // console.log('Inside increment - ' + count)
            }}>increment</button>

            <button onClick={() => {
                setCount(count - 1)
                // console.log('Inside decrement - ' + count)
            }}>decrement</button>
        </div>
    )
}

export default Counter
