import React from 'react'

export default function EventList({setModal}) {
  return (
    <div className='container'>
      <div className='event-header'>
         <div>
          <h3>Proposals</h3>
          <input type="search" placeholder='Search projects'/>
         </div>
         <div>
          <button>create</button>
         </div>
      </div>
      <div className='event-details'>
       <div>
        <h4>Event Name</h4>
        <p>paragraph .,kjkl' ..................................</p>
       </div>
      </div>
    </div>
  )
}
