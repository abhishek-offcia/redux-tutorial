import React, {useState, useEffect} from 'react'

 const HooksObj = () => {
    const [count, setcount] = useState({firstName : '', lastName : ''})
    const [testCount, setTestcount] = useState(0)
    const [name, setName] = useState("")

    const changeName = (e,name) =>{
        console.log(e);
        console.log(name);
        setcount({ ...count, [name]: e.target.value})

    }
    useEffect(() =>{
         console.log('Console log');
         document.title = `You clicked ${testCount} times`
    },[testCount])
    return (
        <div>
            <input type="text" value={count.firstName} onChange = {(e)=> changeName(e,'firstName')} />
            <input type="text" value={count.lastName} onChange = {(e)=> changeName(e,'lastName')} />
            <h2>Name : {count.firstName}</h2>
            <h2>Surname: {count.lastName}</h2>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() =>setTestcount(testCount + 1)}>Count {testCount} </button>
        </div>
    )
}

 
export default HooksObj