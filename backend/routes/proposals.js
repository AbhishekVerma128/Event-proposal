const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const eventSchema = require('../model/eventSchema');

router.post('/createProposal',requireLogin, async(req,res)=>{
try{
    const {eventName,place,proposalType,eventType,budget,date_from,date_to,description,
        images,food,events} = req.body;
    // console.log(eventName,place,proposalType,eventType,budget,date_from,date_to,description,
    //     images,food,events);
    if(!eventName){
        return res.status(404).json({
            status: "failed",
            error: "enter all fields"
        })
    }
    else{ 
        req.user       
        const proposal = await eventSchema.create({
            eventName,place,proposalType,eventType,budget,date_from,date_to,description,
            images,food,events,
            postedBy:req.user});
        console.log(proposal);
        res.status(200).json({
            status: "success",
            proposal
        })
    }
}
 catch(e){
    res.status(422).json({
        status:'failure',
        error : e.error
    })
 }   
})

router.get('/getProposals',requireLogin, async(req,res)=>{
    try{
        const proposals = await eventSchema.find({postedBy:req.user._id});
        // const proposals = await eventSchema.find();
            // console.log(proposal);
            res.status(200).json({
                status: "success",
                proposals
            })
       
    }
     catch(e){
        res.status(422).json({
            status:'failure',
            error : e.error
        })
     }   
    })
module.exports = router;