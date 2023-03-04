import React from 'react'
import "./vendorDetails.css"
import vendorImage from"../../images/vendor-1.jpg";
const Deatils = () => {
  return (
    <div className="vendorDetailsMain">
      <div className='headingDiv'>
      <p id='proposalDetail'>Proposals <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i> <span id='vendorName'> John Contract</span></p>
      <button>Select</button>
      </div>
      <div className="row" style={{height:"50%"}}>
        <div className="col 1stCard">
        <div className="card" >
          <img className="card-img-top" src={vendorImage} alt="vendor"/>
          <p id='ID'>ID: <span>0001</span></p>
          <div className="card-body" style={{borderBottom:"1px solid lightgray"}}>
            <p className='Lable'>Name: <span className='lableDetails'>VendorName</span></p>
            <p className='Lable'>Email: <span className='lableDetails'>SampleEmail@gmail.com</span></p>
          </div>
          <div className="card-body eventDate"style={{borderBottom:"1px solid lightgray"}}>
            <p className='Lable'>StartDate: <span className='lableDetails'>25/07/2020</span></p>
            <p className='Lable'>EndDate: <span className='lableDetails'>25/07/2020</span></p>
          </div>
          <div className="card-body eventType">
            <div>
              <h6>Event Type</h6>
              <h6 id='eventType'>Marriage</h6>
            </div>
            <div>
              <h6>Event Class</h6>
              <h6>Class A</h6>
            </div>
          </div>
          
          </div>
        </div>
        <div className="col-md-5">
          <div class="card">
            <div class="card-body secondCard">
              <h5 class="card-title">Venue and Arrangements</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita eaque laboriosam sequi pariatur fugit cumque, deleniti voluptatum excepturi mollitia facilis nemo accusamus 
                veritatis est necessitatibus totam dicta doloribus deserunt. Id.</p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                <p>
                Itaque, quisquam assumenda. Culpa odit inventore veniam consequatur sit eos reprehenderit ea
                repellendus fuga magni, rem, consectetur, perferendis earum enim officia! Quibusdam.
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Consequuntur nemo nulla placeat aliquid molestias? Optio corporis quia, reprehenderit distinctio assumenda et! 
                Itaque consequatur aliquid nesciunt aspernatur error molestias dicta aperiam!
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div class="card">
            <div class="card-body secondCard">
              <h5 class="card-title">Venue and Arrangements</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita eaque laboriosam sequi pariatur fugit cumque, deleniti voluptatum excepturi mollitia facilis nemo accusamus 
                veritatis est necessitatibus totam dicta doloribus deserunt. Id.</p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                <p>
                Itaque, quisquam assumenda. Culpa odit inventore veniam consequatur sit eos reprehenderit ea
                repellendus fuga magni, rem, consectetur, perferendis earum enim officia! Quibusdam.
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Consequuntur nemo nulla placeat aliquid molestias? Optio corporis quia, reprehenderit distinctio assumenda et! 
                Itaque consequatur aliquid nesciunt aspernatur error molestias dicta aperiam!
                </p>
            </div>
          </div>
        </div>

      </div>
      <div className="row" style={{height:"304px"}}>
            <div className="col-md-3" style={{height:"304px"}}>
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">My Albums</h5>
                  <div className='imgDiv'>
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    <img src={vendorImage} alt="vendor" style={{width:"100px",height:"100px"}} />
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{width:"605px",height:"304px"}}>
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Contacts|12</h5>
                  <div style={{display:"flex",padding:"15px",justifyContent:"space-between"}}>
                    <div>
                      <div style={{width:"97px",height:"96px",border:"1px solid lightGray",borderRadius:"48.5px",display:"flex",flexDirection:"column",marginLeft:"7px"}}></div>
                      <h5 className='contactName'>Contact 1</h5>
                      <h6 className='contactDetails'>+91 XXXXXXXXXX</h6>
                    </div>
                    <div>
                      <div style={{width:"97px",height:"96px",border:"1px solid lightGray",borderRadius:"48.5px",display:"flex",flexDirection:"column",marginLeft:"7px"}}></div>
                      <h5 className='contactName'>Contact 1</h5>
                      <h6 className='contactDetails'>+91 XXXXXXXXXX</h6>
                    </div>
                    <div>
                      <div style={{width:"97px",height:"96px",border:"1px solid lightGray",borderRadius:"48.5px",display:"flex",flexDirection:"column",marginLeft:"7px"}}></div>
                      <h5 className='contactName'>Contact 1</h5>
                      <h6 className='contactDetails'>+91 XXXXXXXXXX</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col md-4" style={{width:"605px",height:"304px"}}>
            <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Events</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iusto sequi asperiores expedita velit accusantium beatae. 
                    Placeat adipisci rem, aperiam illo similique aliquam neque quae in fugiat et mollitia? Similique, fugit?</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iusto sequi asperiores expedita velit accusantium beatae. 
                    Placeat adipisci rem, aperiam illo similique aliquam neque quae in fugiat et mollitia? Similique, fugit?</p>

                </div>
              </div>
            </div>
      </div>

      
    </div>
  )
}

export default Deatils