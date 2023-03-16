import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
    const navigate = useNavigate()
    const [val, setVal] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const changeFun = (e) => {
        const { value, name } = e.target;
        setVal((obj) => {
            return ({
                ...obj,
                [name]: value
            })
        })
    }
    const submitFun = async (e) => {
        e.preventDefault()
        let result = await fetch('http://localhost:5000/admin/signup', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(val)
        })
        result = await result.json()
        if(result){
            navigate('/admin')
        }
    }
    return (
        <div className='loginDiv'>
            <form onSubmit={submitFun} className='loginForm'>
            
                <input type="text" name="name" onChange={changeFun} placeholder='Enter your name' required/>
                <input type="email" name="email" onChange={changeFun} placeholder='Enter your email' required/>
                <input type="password" name="password" onChange={changeFun} placeholder='Enter the password ' required/>
                <input type="password" name="cpassword" onChange={changeFun} placeholder='Enter the confirm-password' required/>
                <button>SignUp</button>
            </form>

        </div>
    )
}

export default Signup