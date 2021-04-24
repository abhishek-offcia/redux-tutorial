import React, {useState} from 'react'

function HookCounter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const increment = (data) =>{
        console.log(data)
        setCount((prevCount) => prevCount + 5)

    }
    return (
        <div>
            <button onClick={()=> increment('myva')}>Count {count}</button>

        </div>
    )
}

export default HookCounter
