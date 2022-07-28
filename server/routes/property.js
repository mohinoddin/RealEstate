const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const router = express.Router();
const signupModal = require("../models/signup-Modal")


router.get("/", (req, res) => {

    if (req.headers.authorization) {

        try {
            user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            signupModal.find({ email: user_mail }).then((userData) => {

                if (userData.length) {
                    console.log(user_mail)
                    res.status(200).send("get property list works")

                    //          propertyModal.find().then((propertyData) => {
                    //     res.status(200).send(propertyData)
                    // })

                } else {
                    res.status(403).send("No such user exist with the mentioned email id")
                }

            }).catch((err) => {
                res.status(403).send(err.message)
            })
        } catch (err) {
            res.status(403).send("User not authorized", err)
        }

    } else {
        res.status(200).send("header is empty please add header")
    }


})


router.get("/:id", (req, res) => {

    if (req.headers.authorization) {

        try {
            user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            signupModal.find({ email: user_mail }).then((userData) => {

                if (userData.length) {
                    console.log(user_mail)
                    res.status(200).send("get property list works")

                    //          propertyModal.find(_id).then((propertyData) => {
                    //     res.status(200).send(propertyData)
                    // })

                } else {
                    res.status(403).send("No such user exist with the mentioned email id")
                }

            }).catch((err) => {
                res.status(403).send(err.message)
            })
        } catch (err) {
            res.status(403).send("User not authorized", err)
        }

    } else {
        res.status(200).send("header is empty please add header")
    }

})



module.exports = router;