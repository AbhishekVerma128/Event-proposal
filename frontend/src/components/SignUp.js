import React, { useState } from 'react'
import leftArrow from"../images/left-arrow.svg"
import "./signUp.css"
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate()
    const [vendor,setVendor] = useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    let name,value
    const HandleInputVendor = (event)=>{
        name = event.target.name;
        value=event.target.value;
        console.log(name)
        console.log(value)
        setVendor({...vendor,[name]:value})
    }
    const PostVendorData = async (e)=>{
        e.preventDefault()
        const {name,contact,email,password,confirmPassword} = vendor;
        const res = await fetch("http://localhost:8080/vendor/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,contact,email,password,confirmPassword})
        })
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("ragistration unsuccessfull")
          }else{
            console.log("ragistration done")
            window.alert("ragistration successfull")
            //setNavigate(true)
            // Navigate('/login')
          }
    }
    const [user,setUser] = useState({
        nameofUser:"",
        contactofUser:"",
        emailofUser:"",
        passwordofUser:"",
        confirmPasswordofUser:""
    })
    const HandleInputUser = (event)=>{
        name = event.target.name;
        value=event.target.value;
        console.log(name)
        console.log(value)
        setUser({...user,[name]:value})
    }
    const PostUserData = async (e)=>{
        e.preventDefault()
        const {nameofUser,contactofUser, emailofUser,passwordofUser,confirmPasswordofUser} = user;
        const res = await fetch("http://localhost:8080/userregister",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({nameofUser,contactofUser, emailofUser,passwordofUser,confirmPasswordofUser})
        })
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("ragistration unsuccessfull")
          }else{
            console.log("ragistration done")
            window.alert("ragistration successfull")
            //setNavigate(true)
            // Navigate('/login')
          }
    }
  return (
   <div className='main'>
    <h1 className='p-logo text-light'>Logo</h1>
    <div className="formContainer">
    <div className='content'>
    <h2 className='heading'>Register In Your Account</h2>
         <div>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Vendor">
                <form method='POST' >
        <div className='inputDiv'>
        <input className="form-control"name='name' type="text" placeholder="Name"onChange={HandleInputVendor} value={vendor.name} required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='contact' type="number" placeholder="Mobile Number"onChange={HandleInputVendor} value={vendor.contact}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='email' type="email"onChange={HandleInputVendor} value={vendor.email} placeholder="Mail_Id"required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='password'type="password" placeholder="Password"onChange={HandleInputVendor} value={vendor.password}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='confirmPassword'type="password" placeholder="Confirm Password"onChange={HandleInputVendor} value={vendor.confirmPassword}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button type="submit"  className="btn"style={{color:"#4E94F4"}} 
        onClick={()=>navigate("/signin")}>Sign-In</button>
        <span>
            <button  className="btn" >
                <img src={leftArrow} alt="arrow" />
            </button>
            <button  onClick={PostVendorData} className="btn btn-primary">Register</button>
        </span>
        </div>
    </form>
        </Tab>
                <Tab eventKey="second" title="User">
                <form method='POST' >
        <div className='inputDiv'>
        <input className="form-control"name='nameofUser' type="text" placeholder="Name"onChange={HandleInputUser} value={user.name} required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='contactofUser' type="number" placeholder="Mobile Number"onChange={HandleInputUser} value={user.contactofUser}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='emailofUser' type="email"onChange={HandleInputUser} value={user.emailofUser} placeholder="Mail_Id"required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='passwordofUser'type="password" placeholder="Password"onChange={HandleInputUser} value={user.passwordofUser}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='confirmPasswordofUser'type="password" placeholder="Confirm Password"onChange={HandleInputUser} value={user.confirmPasswordofUser}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button type="submit"  className="btn"style={{color:"#4E94F4"}}
        onClick={()=>navigate("/signin")}>Sign-In</button>
        <span>
            <button  className="btn" >
                <img src={leftArrow} alt="arrow" />
            </button>
            <button  onClick={PostUserData} className="btn btn-primary">Register</button>
        </span>
        </div>
    </form>
                </Tab>
            </Tabs>
        </div>
    </div>
   </div>
   </div>
  )
}
export default SignUp