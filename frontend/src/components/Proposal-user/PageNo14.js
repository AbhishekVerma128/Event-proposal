import React from 'react'
import backgroundImage from "../../images/private-party-venues@2x.jpg"
import ProposalCard from './Proposal-card'
import "./Proposal-user.css"
const ProposalPage = () => {
  return (
    <>
      <div>
      <img src={backgroundImage} alt="xyz" />
      </div>
      <div className='proposal-container'>
        <h2 className='proposalsHeading'>Proposals</h2>
        <div className="proposalsDiv">
          <ProposalCard/>
        </div>
      </div>
      
    </>
  )
}

export default ProposalPage