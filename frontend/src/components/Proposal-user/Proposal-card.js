import React from 'react';
import vendorImage from"../../images/vendor-1.jpg"
import "./ProposalCard.css"
const ProposalCard = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={vendorImage} alt="vendor"/>
  <div className="card-body">
    <h5 className="card-title">Vendor Name</h5>
    <p className="card-text">Banglor</p>
    <p className="card-text">25000/-</p>
  </div>
</div>
  )
}

export default ProposalCard