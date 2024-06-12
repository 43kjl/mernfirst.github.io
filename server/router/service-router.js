const express= require("express");
//const contactForm = require("../controllers/contact-controller");
const services=require("../controllers/service-controller");

const router = express.Router();



router.route("/service").get(services);

module.exports = router;