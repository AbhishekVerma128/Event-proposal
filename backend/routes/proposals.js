const { response } = require('express');
const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const eventSchema = require('../model/eventSchema');

router.post('/createProposal', async(req,res)=>{
    try{
        const {eventName,place,proposalType,eventType,budget,date_from,date_to,description,
            images,food,events} = req.body;    
            
        if(!eventName){
            return res.status(404).json({
                status: "failed",
                error: "enter all fields"
            })
        }
        else{  
                 
            const proposal = await eventSchema.create({
                eventName,place,proposalType,eventType,budget,date_from,date_to,description,
                images,food,events
                });  
    
           return res.status(200).json({
                status: "success",
                proposal
            })
        }
    }
     catch(e){
        return res.status(422).json({
            status:'failure',
            message : e.message
        })
     }   
    })

router.get('/getProposals', async(req,res)=>{
    try{
        const data = await eventSchema.find();
        // const proposals = await eventSchema.find();
            // console.log(proposal);
            res.status(200).json({
                status: "success",
                data
            })
       
    }
     catch(e){
        res.status(422).json({
            status:'failure',
            error : e.error
        })
     }   
    })

  /// delete 
  router.delete('/delete/:id', async(req,res)=>{
    const data = await eventSchema.findByIdAndDelete({_id: req.params.id});
    res.status(200).json({
        message: "deleted successfully"
    })
  })  
module.exports = router;