
//thrinath changes

const signupModal = require("./models/signup-Modal");

const bcrypt =require("bcryptjs")
const checkExistinguser = async (email) => {
    let existinguser = false
    await signupModal.find({ email: email }).then((userData) => {
        if (userData.length) {
            existinguser = true
        }
    })
    return existinguser
};

const generatePasswordHash = (password) => {
    console.log(password)
    const salt = 10;
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(salt).then((saltHash) => {
            console.log(saltHash)
            bcrypt.hash(password, saltHash).then((passwordHash) => {
                console.log(passwordHash)
                resolve(passwordHash)
            })
        })


    })

}
module.exports = { checkExistinguser, generatePasswordHash }