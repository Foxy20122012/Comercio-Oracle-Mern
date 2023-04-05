const{Router}= require('express');

const router = Router();
const DB = require('../config/config.js');




router.get('/',(req,res)=>{

    res.status(200).json({
        message:"Este mensaje es desde el servidor"
    });

});



module.exports = router;