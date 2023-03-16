import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    let data = localStorage.getItem('users')
data = JSON.parse(data)
const logoutFun=()=>{
    localStorage.clear('users')
}
  return (

    <div className='navDiv'>
        <ul className='navUl'>
            {!data?<><li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            </>:
            <>
           
            <li><Link to='/admin/product'>Product</Link></li>
            <li><Link to='/admin/addProduct'>addProduct</Link></li>
            <li className='logoutBtn' onClick={logoutFun}>Logout ({data.name} )</li>
            </>
            }
        </ul>
    </div>
  )
}

export default Nav