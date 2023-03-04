import React, { useState } from 'react'
import leftArrow from"../images/left-arrow.svg"
import "./signUp.css"
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const SignUp = () => {
    const [vendor,setVendor] = useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    let name,value
    const HandleInput = (event)=>{
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
  return (
   <div className='main'>
    <div className="formContainer">
    <div className='content'>
    <h2 className='heading'>Register In Your Account</h2>
         <div>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Vendor">
                <form method='POST' >
        <div className='inputDiv'>
        <input className="form-control"name='name' type="text" placeholder="Name"onChange={HandleInput} value={vendor.name} required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='contact' type="number" placeholder="Mobile Number"onChange={HandleInput} value={vendor.contact}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='email' type="text"onChange={HandleInput} value={vendor.email} placeholder="Mail_Id"required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='password'type="text" placeholder="Password"onChange={HandleInput} value={vendor.password}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='confirmPassword'type="text" placeholder="Confirm Password"onChange={HandleInput} value={vendor.confirmPassword}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button type="submit"  className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
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
        <input className="form-control"name='name' type="text" placeholder="Name"onChange={HandleInput} value={vendor.name} required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='contact' type="number" placeholder="Mobile Number"onChange={HandleInput} value={vendor.contact}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control"name='email' type="text"onChange={HandleInput} value={vendor.email} placeholder="Mail_Id"required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='password'type="text" placeholder="Password"onChange={HandleInput} value={vendor.password}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='confirmPassword'type="text" placeholder="Confirm Password"onChange={HandleInput} value={vendor.confirmPassword}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button type="submit"  className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
        <span>
            <button  className="btn" >
                <img src={leftArrow} alt="arrow" />
            </button>
            <button  onClick={PostVendorData} className="btn btn-primary">Register</button>
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