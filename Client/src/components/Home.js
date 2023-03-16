import React, { useEffect, useState } from 'react'


const Home = () => {
    const [val, setVal] = useState()
    useEffect(() => {
        getFun()
    }, [])
    const getFun = async () => {
        let result = await fetch('http://localhost:5000', {
            method: 'get',
            headers: { 'content-type': 'application/json' },

        })
        result = await result.json()
        setVal(result)

    }
    return (

        <div className='homeDiv' >
    
        {
            val && val.map((value)=>{
                return(
                    <div className='innerDiv' key={value._id}>
                        <h1>{value.header}</h1>
                        <p>{value.content}</p>
                        <button>Read More</button>
                    </div>
                )
            })
        }
         </div>


    )
}

export default Home