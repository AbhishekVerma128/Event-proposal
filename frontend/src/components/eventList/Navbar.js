import React from 'react'
import './eventList.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
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