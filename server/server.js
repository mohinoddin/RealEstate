const express = require("express")
const app= express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/addnewproperty', (req, res) => {
    const newProperty = PropertyDetailsModel({
        propertyType: req.body.propertyType,
        price: req.body.price,
        propertyAge: req.body.propertyAge,
        propertyDiscription: req.body.propertyDiscription,
        negotiable: req.body.negotiable,
        ownership: req.body.ownership,
        propertApproved: req.body.propertApproved,
        bankLoan: req.body.bankLoan,
        length: req.body.length,
        breadth: req.body.breadth,
        totalArea: req.body.totalArea,
        areaUnit: req.body.areaUnit,
        noOfBHK: req.body.noOfBHK,
        noOfFloor: req.body.noOfFloor,
        attached: req.body.ttached,
        westernToilet: req.body.westernToilet,
        furnished: req.body.furnished,
        carParking: req.body.carParking,
        lift: req.body.lift,
        electricity: req.body.electricity,
        facing: req.body.facing,
        name: req.body.name,
        mobile: req.body.mobile,
        postedBy: req.body.postedBy,
        saleType: req.body.saleType,
        featuredPackage: req.body.featuredPackage,
        PPDPackage: req.body.PPDPackage,
        email: req.body.email,
        city: req.body.city,
        area: req.body.area,
        pincode: req.body.pincode,
        address: req.body.address,
        landmark: req.body.landmark,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        views: 0, // default is 0
        Status: "Unsold", // default is unsold
        daysLeft: 10, //Defalt is 10
    })
    newProperty.save().then(() => {
        res.send('property added');
    }).catch(err => console.log(err));
});

app.listen(3001,(err)=>{
    if(!err){
        console.log("server started")
    }else{
        console.log(err)
    }
})

