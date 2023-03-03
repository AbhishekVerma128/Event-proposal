import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./eventList.css"
import {MdSearch } from "react-icons/md";
import {MdFilterAlt} from 'react-icons/md'
import {MdDeleteOutline} from 'react-icons/md'
import {MdModeEditOutline} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
export default function ProposalList() {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState([]);
  useEffect( ()=>{
    const getItem = async () => {
      try {
        const resp = await fetch('http://localhost:5000/getProposals')
          .then(res => res.json())
          .then(data => {
            setProposal(data.data);
           console.log(data.data);
          })
      }
      catch (e) {
        console.log(e)
      }
    }
    getItem()
  }, [])
  // delete item
  const handleDelete = async(id)=>{
      await fetch(`http://localhost:5000/delete/${id}`,{
        method: 'delete',
      })
      .then(res=>res.json())
      .then(data=>{
        setProposal(proposal.filter(proposal => proposal.id!== id));
        window.location.reload()
      })
  }
  return (
    <>
    <Navbar/>
      <div className='container mt-3'>
     <div className='event-header'>
        <div>
         <h3>Proposals</h3>
         <MdSearch className='searchic mt-2 ms-3'/>
         <input className='ms-2 mt-0' style={{border: 'none', opacity: '0.5', outline: 'none'}} type="search" placeholder='Search projects'/>
        </div>
        <div>
          <span> <MdFilterAlt className='filteric mt-2'/> </span>
         <button className='create-btn' onClick={()=>navigate('/createProposal')}>Create</button>
        </div>
     </div>
      {
      proposal.map((item,index)=>{
          return(
            <>
            <div className='event-details mt-2 py-2 px-3'>
            <div>
       <h6>{item.eventName}</h6>
       <p>{item.description}</p>
      </div>
      <div className='event-main'>
           <div className='event-head'>
             <div>
               <p>
                 Event Type
               </p>
               <p>{item.eventType}</p>
             </div>
             <div>
               <p>
                 Proposal Type
               </p>
               <p>
                {item.proposalType}
               </p>
             </div>
             <div>
               <p>
                 Date From
               </p>
               <p>
                {item.date_from}
               </p>
             </div>
             <div>
               <p>
                 Date To
               </p>
               <p>
                {item.date_to}
               </p>
             </div>
             <div>
               <p>
                 Budget
               </p>
               <p>
               {item.budget}
               </p>
             </div>
           </div>
           <div className='d-flex gap-4'>
              <MdModeEditOutline className='editic' onClick={()=>navigate('/edit')}/>
              <MdDeleteOutline className='dltic' onClick={()=>{handleDelete(item._id)}}/>
           </div>
      </div>
            </div>
            </>
          )
      })
      }
   </div>
    </>
  )
}