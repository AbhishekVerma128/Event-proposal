import React from 'react'
import './eventList.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LOGO</a>
                <div >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className="navbar-text me-4">
                        vendor name
                    </span>
                    <span className='me-5'><img src={require('../../images/image1.jpeg')} alt="" style={{borderRadius: '50%'}} height="30px" width="30px" /></span>
                </div>
            </div>
        </nav>
    )
}