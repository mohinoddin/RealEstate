const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {   
   
    // if(req.headers.authorization){

    //     try{
    //         user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    //         propertyModal.find().then((propertyData) => {
    //             res.status(200).send(propertyData)
    //         })
        
    //     }catch(err){
           
    //             res.status(403).send("User not authorized")
           
    //     }

    // }else{

    // }

    console.log("get property list works")
    res.status(200).send("get property list works")
})


router.get("/:id", (req, res) => {

// if(req.headers.authorization){

    //     try{
    //         user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    //         propertyModal.find(_id).then((propertyData) => {
    //             res.status(200).send(propertyData)
    //         })
        
    //     }catch(err){
           
    //             res.status(403).send("User not authorized")
           
    //     }

    // }else{

    // }

    console.log("get property by id works")
    res.status(200).send("get property by id works")
})



module.exports = router;