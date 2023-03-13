const{Router}= require('express');

const router = Router();
const DB = require('../config/config.js');

router.get('/',(req,res)=>{

    res.status(200).json({
        message:"Este mensaje es desde el servidor"
    });

});



router.get('/fromoracle', async (req,res)=>{
    const personas=[];
    sql="select * from empleados";

    let result = await DB.Open(sql,[],false);
    //  console.log(result.rows);
     console.log(personas)
     result.rows.map(person=>{
        let userSchema ={
            "id": person[0],
            "NOMBRE": person[1],
            "APELLIDO": person[2],
            "CORREO": person[3]
        }
        personas.push(userSchema)
     });
     res.json({personas});
});



module.exports = router;