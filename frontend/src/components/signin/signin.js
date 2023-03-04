import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import "./signin.css"
//import { useNavigate } from "react-router-dom"


const SignIn = () => {
    const [data, updatelogin] = useState({ contact: "", password: "" })
    const [msg, updatemsg] = useState();
//    const navigate = useNavigate();

    const handlesignin = async () => {
        const formdata = new FormData()
        formdata.append("contact", data.contact)
        formdata.append("password", data.password)
        const response = await fetch("http://localhost:5000/signin", {
            method: "POST",
            body: formdata
        })
    
    const resp = await response.json();
    if (resp.status === "failure") {
        updatemsg(<div className="msg2">user not found</div>)
    } else if (resp.status === "failure2") {
        updatemsg(<div className="msg2">Invalid Password</div>)
    }
    }
return (
    <div className="main">
        <div className="logo">
            <h2>LOGO</h2>
        </div>
        <div className="container">

            <h2 className="heading">Sign in Your Account</h2>
            <div>
                <Tabs defaultActiveKey="second">
                    <Tab eventKey="first" title="Vendor">

                        <form method="POST">
                            <div className="inputDiv">
                                <input className="form-control" type="number" placeholder="Phone Number" value={data.contact} onChange={(e) => { updatelogin({ ...data, contact: e.target.value }) }} />
                            </div>
                            <div className="inputDiv">
                                <input className="form-control" type="password" placeholder="Enter Password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} />
                            </div>
                            <div>
                                <p>Forget Password?</p>
                            </div>
                            <div className="button">
                                <p>Create Account</p>
                                <button className="btn btn-primary" onClick={handlesignin}>Sign in</button>
                            </div>
                            {msg}

                        </form>
                    </Tab>
                    <Tab eventKey="second" title="User">

                        <form method="POST">
                            <div className="inputDiv">
                                <input className="form-control" type="number" placeholder="Phone Number" value={data.contact} onChange={(e) => { updatelogin({ ...data, contact: e.target.value }) }} />
                            </div>
                            <div className="inputDiv">
                                <input className="form-control" type="password" placeholder="Enter Password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} />
                            </div>
                            <div>
                                <p>Forget Password?</p>
                            </div>
                            <div className="button">
                                <p>Create Account</p>
                                <button className="btn btn-primary" onClick={handlesignin}>Sign in</button>
                            </div>

                        </form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </div>
)
}
export default SignIn