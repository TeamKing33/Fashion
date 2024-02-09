const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const app = express();
app.use(cors());

app.options('*', cors());


const port = 8081 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

app.get('/',(re,res)=> {
    return res.json("hello From Backend ");
});


app.post("/addtocart", (req, res) => {
    const sql = "INSERT INTO productscart(`idProduct`,`img`,`title`,`number`,`discount`,`price`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.img,
        req.body.title,
        req.body.number,
        req.body.discount,
        req.body.price,
    ];
    const checkIfExistsQuery = "SELECT * FROM productscart WHERE idProduct = ?";
    db.query(checkIfExistsQuery, [req.body.id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in Node" });
        }
        if (result.length > 0) {
            return res.json({ Message: "Item is already added to cart" });
        }
        db.query(sql, [values], (err, result) => {
            if (err) {
                return res.json({ Message: "Error in Node" });
            }
            return res.json(result);
        });
    });
});

// select addtocart
app.get('/addtocart',(req,res)=>{
    const sql = "SELECT *  FROM productscart";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


// remove id 

app.delete("/remove/:id",(req,res)=>{
    const id  = req.params.id;
    const sql = "DELETE FROM productscart WHERE id = ?"
   
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json({Message :"error in Node"})
        return res.json(data );
    })
})


app.listen(port,()=>{
    console.log("Server is running on port 8083");
})
