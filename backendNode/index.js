const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());

app.options('*', cors());


const port = 8083 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    return res.json("From BAckend Side");
});

// login employee
app.post("/loginemp", (req, res) => {
  const sql = "SELECT * FROM employees WHERE `username` = ? and password = ?";
  const values = [req.body.name, req.body.password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error during database query:', err);
      return res.json({ Message: "Error inside server" });
    }

    if (result.length > 0) {
      if (result[0].password === req.body.password) {
        return res.json({ Message: "Logged in successfully" });
      } else {
        return res.json({ Message: "Wrong password" });
      }
    } else {
      return res.json({ Message: "User not found" });
    }
  });
});
 




// employee
app.get('/clothes',(req,res)=>{
    const sql = "SELECT *  FROM clothes";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


// app.get('/cartitem',(req,res)=>{
//   const sql = 'SELECT * FROM productscart'
//   sql.query(sql,(err,data)=>{
//     if(err) return res.json(err);
//     return res.json(data);
//   })
// })

// home
app.get("/home",(req,res)=>{
    if(req.session.username){
        return res.json({valid:true , username:req.session.username})
    }else{
        return res.json({valid:false})
    }
})

// signup
app.post('/signup', (req, res) => {
    const checkIfExistsQuery = "SELECT * FROM signup WHERE email = ?";
    
    db.query(checkIfExistsQuery, [req.body.email], (err, result) => {
      if (err) {
        return res.json({ Message: "Error in Node" });
      }
  
      if (result.length > 0) {
        return res.json({ Message: "User already exists" });
      } else {
        const password = req.body.password;
        bcrypt.hash(password.toString(), 10, (hashErr, hash) => {
          if (hashErr) {
            return res.json({ Message: "Error hashing password" });
          }
  
          const sql = "INSERT INTO signup (`username`,`email`,`password`,`number`,`country`) VALUES (?, ?, ?, ? , ?)";
          const values = [
            req.body.username,
            req.body.email,
            hash,
            req.body.number,
            req.body.country,
          ];
  
          db.query(sql, values, (insertErr, result) => {
            if (insertErr) {
              return res.json({ Message: "Error in Node" });
            }
            return res.json(result);
          });
        });
      }
    });
  });


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

app.post("/product", (req, res) => {
  const userEmail = req.body.email;
  const sql = "INSERT INTO clothes (`name`,`email`,`image`,`result`,`quantity`,`size`,`number`) VALUES (?)";
  const values = [
    req.body.name,
    userEmail,
    req.body.image,
    req.body.result,
    req.body.quantity,
    req.body.size,
    req.body.number,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json({ Message: "error in Node" });
    return res.json(result);
  });
});


// add to cart post

app.post('/addtocart', (req, res) => {
  const userEmail = req.body.email;
  const values = req.body.data.map(item => [
      userEmail,
      item.img,
      item.title,
      item.number,
      item.discount,
      item.price,
  ]);

  const sql = 'INSERT INTO productscart (email, img, title, number, discount, price) VALUES ?';


  if (!db) {
      return res.status(500).json({ error: 'Internal Server Error', message: 'Database connection not established' });
  }

  db.query(sql, [values], (err, result) => {
      if (err) {
          console.error('Error inserting into database:', err);
          return res.status(500).json({ success: false, error: 'Internal Server Error', message: 'Error inserting into database', details: err.message });
      }

      const lastInsertedId = result.insertId;
      return res.status(200).json({ success: true, message: 'Data Inserted Successfully', lastInsertedId });
  });
});


// remove id product clothes

app.delete("/remove/:id",(req,res)=>{
    const id  = req.params.id;
    const sql = "DELETE FROM clothes WHERE id = ?"
   
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json({Message :"error in Node"})
        return res.json(data );
    })
})


// remove id product add to cart

app.delete("/removeCart/:id",(req,res)=>{
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
app.post("/loginUser", (req, res) => {
    const email =req.body.email;
    const password = req.body.password;
  
    const sql = "SELECT * FROM signup WHERE `email` = ?";
    db.query(sql, [email], (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
  
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (err) {
            return res.json({ Message: "Error comparing passwords" });
          }
          if (response) {
            return res.json({ Message: "Logged in successfully" });
          } else {
            return res.json({ Message: "Wrong password" });
          }
        });
      } else {
        return res.json({ Message: "User not found" });
      }
    });
  });
  

app.listen(port,()=>{
    console.log("Server is running on port 8083");
})
