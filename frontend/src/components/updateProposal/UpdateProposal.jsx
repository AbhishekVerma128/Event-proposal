import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../eventList/Navbar";
import '../CreatePropsal/CreateProposal.css'
const UpdateProposal = () => {
  const {id} = useParams()
  console.log(id);
  //console.warn("props",props);
    const navigate = useNavigate()
  // const navigate = useNavigate();
  const hiddenInputFile = useRef(null);
  const [eventName, setEventName] = useState('')
  const [place, setPlace] = useState('')
  const [proposalType, setProposalType] = useState('')
  const [eventType, setEventType] = useState('')
  const [budget, setBudget] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [description, setDescription] = useState('')
  const [food, setFood] = useState('')
  const [events, setEvents] = useState('')
  const [image, setImage] = useState('')
  console.log(budget);
  // // getting img from cloudinary
  const [imgurl, setImgurl] = useState({array:[]});
  //console.log(imgurl)
 // toast function
//  const notifyError = (msg) => toast.error(msg);
//  const notifyMsg = (msg)=>toast.success(msg);
console.log(place);
const [data,setData] = useState([])
  useEffect(()=>{
    const data = async ()=>{
      await fetch(`http://localhost:8080/proposal/${id}`,{
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data.data);
        setData(data.data);
        setEventName(data.data.eventName)
        setPlace(data.data.place)
        setProposalType(data.data.proposalType);
        setEventType(data.data.eventType);
        setDateFrom(data.data.date_from);
        setBudget(data.data.budget)
        setDateTo(data.data.date_to);
        setDescription(data.data.description);
        setFood(data.data.food);
        setEvents(data.data.events);
      })
    }
    data();
  },[])
  const updateData = async ()=>{
      // saving imageurl and caption in mongo
   await fetch(`http://localhost:8080/update/${id}`,{
      method:"put",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
        eventName: eventName,
        place:place,
        proposalType:proposalType,
        eventType:eventType,
        budget:budget,
        date_from:dateFrom,
        date_to:dateTo,
        description:description,
        food:food,
        events:events,
      })
    }).then(res =>res.json()).then(data=>
     { if(data.error){
      console.log(data.error)
      // notifyError(data.error)
      }
      else{
          console.log(data)
          // notifyMsg(data.message)
          navigate("/eventList")
      }
  }).catch(e=>console.log(e))
  
   }
//   upload pic in cloudnary
  const shareImage = () => {
    const data = new FormData();
    for (let i = 0; i < image.length; i++) {
      const uploadedImages = imgurl.array;
      data.append("file", image[i]);
    data.append("upload_preset", "ishita-insta-clone");
    data.append("cloud_name", "vermapreeti");
    fetch("https://api.cloudinary.com/v1_1/vermapreeti/image/upload", {
        method:"post",
        body:data
    }).then(res=>res.json()).then(data=>{ uploadedImages.push(data.secure_url);
      // console.log(data.secure_url);
      const newObj = {...imgurl,uploadedImages}
      setImgurl(newObj);
      console.log(imgurl);
      if (uploadedImages.length === image.length) {
        // updateData();
       }
    })
    .catch(e=>console.log(e))
    }
// console.log(localStorage.getItem("jwt"))
}
  // for preview of file
  const loadfile = (event) => {
    var output = document.getElementById('output');
    var imgs = output.files.length;
    for (let i = 0; i < imgs; i++) {
      var urls = URL.createObjectURL(event.target.files[i]);
      document.getElementById("galeria").innerHTML += '<img src="' + urls + '">';
    }
  }
  const handleclick = () => {
    hiddenInputFile.current.click()
  }
  // update
  return (
    <>
    <Navbar/>
    <div className="createPost-container"
    //  onClick={()=>setModal(false)}
    >
      <div className="form-main">
        <div className="form-div-header">
          <div className="modalHeader">
            <h5 className="heading">Create Proposal</h5>
          </div>
          <button className="closeBtn"
            onClick={()=>navigate('/eventList')}
          >x</button>
        </div>
        <hr style={{ width: "94%", margin: "5px auto", opacity: "0.8" }} />
        <div className="proposal-container">
          <div className="centered">
            <div className="form-div1">
              {/* modal content */}
              <div className="modalContent">
                <div>
                  <label htmlFor="Event Name">Event Name</label><br />
                  <input type="text" style={{ width: '85%' }} onChange = {(e)=>{setEventName(e.target.value)}} defaultValue={eventName} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label htmlFor="">place of event</label><br />
                    <select onChange = {(e)=>{setPlace(e.target.value)}} selected={place} defaultValue={place}>
                    <option value="">{place}</option>
                      <option value="Select">Select</option>
                      <option value="Kanpur">Kanpur</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="AGRA">Agra</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Proposal Type</label><br />
                    <select  onChange = {(e)=>{setProposalType(e.target.value)}} value={proposalType}>
                    <option value="">{proposalType}</option>
                      <option value="Select">Select</option>
                      <option value="Venue">Venue</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Event Type</label><br />
                    <select onChange = {(e)=>{setEventType(e.target.value)}} defaultValue={eventType}>
                    <option value="">{eventType}</option>
                      <option value="Select">Select</option>
                      <option value="Marrige">Marrige</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Tonsure">Tonsure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Budget</label><br />
                    <input type="number" placeholder="00000" onChange = {(e)=>{setBudget(e.target.value)}} defaultValue={budget}/>
                  </div>
                  <div>
                    <label htmlFor="">From</label><br />
                    <input type="date" onChange = {(e)=>{setDateFrom(e.target.value)}} defaultValue={dateFrom}/>
                  </div>
                  <div>
                    <label htmlFor="">To</label><br />
                    <input type="date" onChange = {(e)=>{setDateTo(e.target.value)}} defaultValue={dateTo}/>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Desription</label><br />
                  <textarea rows="4" placeholder="Desription" onChange = {(e)=>{setDescription(e.target.value)}} value={description}/>
                </div>
              </div>
            </div>
            <div className="form-div2">
              <div>
                <div className="image-div">
                  <p>Images</p>
                  <button onClick={handleclick}>Add</button>
                </div>
                {/* <img id="output" /> */}
                <input id="output" className="fileinp" multiple type="file" accept="image/*" onChange={(e) => { loadfile(e); setImage(e.target.files) }} ref={hiddenInputFile} style={{ display: "none" }} />
                <div id="galeria">
                </div>
              </div>
              <div>
                <label htmlFor="Event Name">Food preferences</label><br />
                <textarea rows="4" className="eve" placeholder="Food preferences" onChange = {(e)=>{setFood(e.target.value)}} defaultValue={food}/>
              </div>
              <div>
                <label htmlFor="Event Name">Events</label><br />
                <textarea rows="4" className="eve" placeholder="Events" onChange = {(e)=>{setEvents(e.target.value)}} defaultValue={events}/>
              </div>
            </div>
          </div>
          <hr style={{ width: "94%", margin: "15px auto", opacity: "0.8" }} />
          <div>
            <button className="postbtn" onClick={updateData}>Update</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default UpdateProposal;