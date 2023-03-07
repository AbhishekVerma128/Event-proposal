import React, { useState } from 'react'
import "./signUp.css"
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate()
        const [vendor,setVendor] = useState({
        contact:"",
        password:"",
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
        const {contact,password} = vendor;
        const res = await fetch("http://localhost:8080/vendor/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer "+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({contact,password})
        })
        const data =  await res.json();
        console.log(data);
        if(res.status === 400 || !data){
            window.alert(" Error")
          }else{
            console.log("LogIn done")
            window.alert("LogIn successfull")
            localStorage.setItem("token",JSON.stringify(data.token))
            localStorage.setItem("user",JSON.stringify(data.data.name))
            navigate("/eventList")

            //setNavigate(true)
            // Navigate('/login')
          }
    }
    const [user,setUser] = useState({
        contactofUser:"",
        passwordofUser:"",
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
        const {contactofUser,passwordofUser} = user;
        const res = await fetch("http://localhost:8080/usersignin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({contactofUser,passwordofUser})
        })
        const data = await res.json();
        console.log(data)
        if(res.status === 400 || !data){
            window.alert("ragistration unsuccessfull")
          }else{
            console.log("ragistration done")
            window.alert("ragistration successfull")
            localStorage.setItem("user",JSON.stringify(data.data.name))
             navigate("/allProposals")
            //setNavigate(true)
            // Navigate('/login')
          }
    }
  return (
   <div className='main'>
    <h1 className='p-logo text-light'>Logo</h1>
    <div className="formContainer">
    <div className='content'>
    <h2 className='heading'>SignIn Your Account</h2>
         <div>
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Vendor">
                <form method='POST'onSubmit={PostVendorData} >
        <div className='inputDiv'>
        <input className="form-control"name='contact' type="number" placeholder="Mobile Number"onChange={HandleInputVendor} value={vendor.contact}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='password'type="password" placeholder="Password"onChange={HandleInputVendor} value={vendor.password}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button className="btn" style={{borderBottom:"1px solid blue",borderRadius:"none",color:"blue"}}
        
        onClick={()=>navigate("/")}>Register Your Account</button>
        <button type="submit"  className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
        </div>
    </form>
        </Tab>
                <Tab eventKey="second" title="User">
                <form method='POST'onSubmit={PostUserData} >
        <div className='inputDiv'>
        <input className="form-control"name='contactofUser' type="number" placeholder="Mobile Number"onChange={HandleInputUser} value={user.contactofUser}required={true}/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" name='passwordofUser'type="password" placeholder="Password"onChange={HandleInputUser} value={user.passwordofUser}required={true}/>
        </div>
        <div className='BtnContainer'>
        <button className="btn" style={{borderBottom:"1px solid blue",borderRadius:"none",color:"blue"}}
        onClick={()=>navigate("/")}>Register Your Account</button>
        <button type="submit"   className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
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
export default SignIn