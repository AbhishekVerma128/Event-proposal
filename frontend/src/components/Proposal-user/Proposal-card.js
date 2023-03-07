import React from 'react';
import vendorImage from "../../images/vendor-1.jpg"
import "./ProposalCard.css"
import { Link } from 'react-router-dom';
const ProposalCard = ({ proposal }) => {
  return (
    <>
      {
        proposal.map((item, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
               <Link to={"/details/"+item._id}>
              <img className="card-img-top" src={item.images[0].array[0]} alt="vendor" />
              <div className="card-body">
                <h5 className="card-title">Vendor Name</h5>
                <p className="card-text txtdeco">Place - {item.place}</p>
                <p className="card-text txtdeco">Budget - {item.budget}</p>
              </div>
              </Link>
            </div>
          )
        })
      }
    </>

  )
}

export default ProposalCard