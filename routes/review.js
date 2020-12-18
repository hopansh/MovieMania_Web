<<<<<<< HEAD
const   express = require("express"),
        router = express.Router();

router.get("/newReview",(req,res)=>{
    res.render("newEvent");
})
router.post("/newReview",(req,res)=>{
    res.redirect("/");
})
module.exports = router;
=======
const   express = require("express"),
        router = express.Router();

router.get("/newReview",(req,res)=>{
    res.render("newEvent");
})
router.post("/newReview",(req,res)=>{
    res.redirect("/");
})
module.exports = router;
>>>>>>> 0b23a85... Adding Screenshots
