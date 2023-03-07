import React from 'react'
import './eventList.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
const navigate = useNavigate()
    const logout =()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LOGO</a>
                <div >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className="navbar-text me-4 text-primary">
                        {localStorage.getItem("user")}
                    </span>
                    <span className='me-5'><img src={require('../../images/image1.jpeg')} alt="" style={{borderRadius: '50%'}} height="30px" width="30px" /></span>
                    <span><button onClick={()=>logout()}>Logout</button></span>
                </div>
            </div>
        </nav>
    )
}