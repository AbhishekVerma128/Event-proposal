import "./CreateProposal.css"

const CreateProposal = ({setModal}) => {
  // const navigate = useNavigate()
  return (
    <div className="darkBg"
    //  onClick={()=>setModal(false)}
    >
     <div className="form-main">
     <div className="form-div-header">
      <div className="modalHeader">
              <h5 className="heading">Create Proposal</h5>
            </div>
            <button className="closeBtn"
             onClick={()=>setModal(false)}
            >x</button>
      </div>
      <hr/>
      <div className="proposal-container">
        <div className="centered">          
          <div className="form-div1">            
            {/* modal content */}
            <div className="modalContent">
              <div>
                <label htmlFor="Event Name">Event Name</label><br />
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">place of event</label><br />
                <select id="code-select">
                  <option value="">Select</option>
                  <option value="">Delhi</option>
                  <option value="">Lucknow</option>
                  <option value="">Kanpur</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Proposal Type</label><br />
                <select id="code-select">
                  <option value="">Select</option>
                  <option value="">Venue</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Event Type</label><br />
                <select id="code-select">
                  <option value="">Select</option>
                  <option value="">Marrige</option>
                  <option value="">Birthday</option>
                  <option value="">Tonsure</option>

                </select>
              </div>
              <div>
                <label htmlFor="">Budget</label><br />
                <input type="number" placeholder="00000" />
              </div>
              <div>
                <label htmlFor="">From</label><br />
                <input type="date" />
              </div>
              <div>
                <label htmlFor="">To</label><br />
                <input type="date" />
              </div>
              <div>
                <label htmlFor="">Desription</label><br />
                <textarea rows="4" cols="50" placeholder="Desription" />
              </div>
            </div>           
          </div>
          <div className="form-div2">
              <div>
                <label htmlFor="Event Name">Images</label><br />
                <input type="file" />
              </div>
              <div>
                <label htmlFor="Event Name">Food preferences</label><br />
                <textarea placeholder="Food preferences"/>
              </div>
              <div>
                <label htmlFor="Event Name">Events</label><br />
                <textarea rows="4" cols= "40" placeholder="Events"/>
              </div>
          </div>
        </div>
        <div>
          <button type = "submit">Post</button>              
        </div>
      </div>
     </div>
      
    </div>

  )
}

export default CreateProposal;