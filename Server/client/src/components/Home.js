import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

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
    return (<>
        <div className="sideBar">
        {
            val && val.map((value)=>{
                return(
                    <Link to={`/header/${value._id}`} className='inner2Div' key={value._id}>
                        
                        <p>{value.header}</p>
                 
                    </Link>
                )
            })
        }
        </div>
        <div className='homeDiv' >
    
        {
            val && val.map((value)=>{
                return(
                    <div className='innerDiv' key={value._id}>
                        <h1>{value.header}</h1>
                        <p>{value.content}</p>
                 
                    </div>
                )
            })
        }
         </div>

         </>
    )
}

export default Home