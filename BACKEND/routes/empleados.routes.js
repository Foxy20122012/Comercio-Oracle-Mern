// const{Router}= require('express');

// const router = Router();
// const DB = require('../config/config.js');


// router.get('/empleados', async (req,res)=>{
//     const empleados=[];
//     sql="select * from empleados";

//     let result = await DB.Open(sql,[],false);
//     //  console.log(result.rows);
//      console.log(personas)
//      result.rows.map(person=>{
//         let userSchema ={
//             "ID": person[0],
//             "NOMBRE": person[1],
//             "APELLIDO": person[2],
//             "CORREO": person[3]
            
//         }
//         personas.push(userSchema)
//      });
//      res.json({empleados});
// });

// module.exports = router;