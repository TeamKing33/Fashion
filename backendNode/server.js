const express = require('express');

const mysql = require('mysql');
const cors = require('cors');

const session = require('express-session');

const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');



const app = express();
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET","DELETE","PUT"],
    credentials:true
}));
app.options('*', cors());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secret:false,
        maxAge:1000 * 60 * 60 * 24
    }
}))
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"projectking"
})

app.get('/',(re,res)=> {
    return res.json("From BAckend Side");
});

// login employee

app.post("/loginemp",(req,res)=>{
    const sql = "SELECT * FROM employees WHERE `username` = ? and password = ?"
    db.query(sql,[req.body.name,req.body.password],(err,result)=>{
        if(err) return res.json({Message:"error inside server"})
        if(result.length > 0){
            req.session.name = result[0].name;
            console.log(req.session.name);
            return res.json({Login:true});
        }else{
            return res.json({Login:false})
        }
    })
})


// employee
app.get('/clothes',(req,res)=>{
    const sql = "SELECT *  FROM clothes";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// home
app.get("/home",(req,res)=>{
    if(req.session.username){
        return res.json({valid:true , username:req.session.username})
    }else{
        return res.json({valid:false})
    }
})

// signup
app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO signup (`username`,`email`,`password`,`number`,`country`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.number,
        req.body.country,
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json({Message :"error in Node"})
        return res.json(result);
    })
})

// send products 


// app.post('/sendorder',(req,res)=>{
//     const sql = "INSERT INTO orderuser (`img`,`title`,`discount`) VALUES (?)";
//     const values =[
//         req.body.img,
//         req.body.title,
//         req.body.discount
//     ]
//     db.query(sql,[values],(err,result)=>{
//         if(err) return res.json({Message :"error in Node"})
//         return res.json(result);
//     })
//  })  

// product

app.post("/product",(req,res)=>{
    const sql = "INSERT INTO clothes (`name`,`image`,`result`,`quantity`,`number`) VALUES (?)"
    const values =[
        req.body.name,
        req.body.image,
        req.body.result,
        req.body.quantity,
        req.body.number,
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json({Message :"error in Node"})
        return res.json(result);
    })
})


// add to cart post

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


// remove id 

app.delete("/remove/:id",(req,res)=>{
    const id  = req.params.id;
    const sql = "DELETE FROM productscart WHERE id = ?"
   
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json({Message :"error in Node"})
        return res.json(data );
    })
})


// update id

// app.put("/update/:id", (req, res) => {
//     const id = req.params.id;
//     const updatedNumber = req.body.number;
  
//     const sql = "UPDATE productscart SET `number` = ? WHERE id = ?";
//     const values = [updatedNumber, id];
  
//     db.query(sql, values, (err, data) => {
//       if (err) return res.json({ Message: "error in Node" });
//       res.json(data);
//     });
//   });
  
  

//add to cart get


app.get('/addtocart',(req,res)=>{
    const sql = "SELECT *  FROM productscart";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})



// login

app.post("/login",(req,res)=>{
    const sql = "SELECT * FROM signup WHERE `email` = ? and password = ?"
    db.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if(err) return res.json({Message:"error inside server"})
        if(result.length > 0){
            req.session.username = result[0].username;
            // console.log(req.session.username);
            return res.json({Login:true});
        }else{
            return res.json({Login:false})
        }
    })
})

app.listen(8083,()=>{
    console.log("Server is running on port 8083");
})
