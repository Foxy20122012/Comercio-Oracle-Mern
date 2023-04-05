const{Router}= require('express');

const router = Router();
const DB = require('../config/config.js');


router.get('/productos', async (req,res)=>{
    const productos=[];
    sql="select * from articulos";

    let result = await DB.Open(sql,[],false);
     console.log(result.rows);
     console.log(productos)
     result.rows.map(produc=>{
        let userSchema ={
            "ID_ARTICULO": produc[0],
            "ARTICULO": produc[1],
            "UNIDADES": produc[2],
            "PRECIO": produc[3]
        }
        productos.push(userSchema)
     });
     res.json({productos});
});

module.exports = router;