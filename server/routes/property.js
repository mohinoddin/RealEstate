const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {

    // propertyModal.find().sort({ _id: -1 }).then((propertyData) => {
    //     res.status(200).send(propertyData)
    // })

    console.log("get property list works")
    res.status(200).send("get property list works")
})


router.get("/:id", (req, res) => {

    //     propertyModal.find(_id).then((propertyData) => {
    //        res.status(200).send(propertyData)
    //    })

    console.log("get property by id works")
    res.status(200).send("get property by id works")
})



module.exports = router;