const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const moment = require('moment');
const app = express();
app.use(cors());

app.options('*', cors());


const port = 8083 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// // ...

// app.post('/upload', upload.single('image'), (req, res) => {
//   const { filename, path } = req.file;
//   const { title, price, description } = req.body; // Destructure the body object

//   // Prepare SQL query to insert data into the images table
//   const sql = 'INSERT INTO images (filename, path, title, price, description) VALUES (?, ?, ?, ?, ?)';
//   const values = [filename, path, title, price, description]; // Include all values in the array

//   // Execute the SQL query
//   db.query(sql, values, (err, result) => {
//       if (err) {
//           console.error("Error inserting into database:", err);
//           res.status(500).send('Internal server error');
//           return;
//       }
//       res.send('Image uploaded successfully.');
//   });
// });


// app.get('/image', (req, res) => {
//   const sql = "SELECT *  FROM images";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

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

app.post("/test", (req, res) => {
  const sql = "INSERT INTO usersdata3 (`username`,`userimg`,`date`) VALUES (?,?,?)";
  const values = [
    req.body.username,
    req.body.userimg,
    req.body.date,
  ];

  db.query(sql, values, (err, result) => {
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




  const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
  });
  
  const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Only image files are allowed"));
    }
  };
  
  const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
  });
  
  // register
  app.post("/register", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
  
    // Check if req.file exists
    if (!req.file || !fname) {
        return res.status(422).json({ status: 422, message: "Fill all the details" });
    }
  
    try {
        const { filename } = req.file;
        const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  
        db.query("INSERT INTO usersdata3 SET ?", { username: fname, userimg: filename, date: date }, (err, result) => {
            if (err) {
                console.error("Error inserting into database:", err);
                return res.status(500).json({ status: 500, message: "Internal server error" });
            } else {
                console.log("Data added successfully");
                return res.status(201).json({ status: 201, data: req.body });
            }
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(422).json({ status: 422, message: "Error processing request" });
    }
  });
  
// Get user data route
app.get("/getdata", (req, res) => {
  try {
    db.query("SELECT * FROM usersdata3",(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data get")
            res.status(201).json({status:201,data:result})
        }
    })
} catch (error) {
    res.status(422).json({status:422,error})
}
});
// delete
app.delete("/:id", (req, res) => {
  const {id} = req.params;
   try {
    db.query(`DELETE FROM usersdata3 WHERE id ='${id}'`,(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data delete")
            res.status(201).json({status:201,data:result})
        }
    })
   } catch (error) {
    res.status(422).json({status:422,error})
   }
});
  

app.listen(port,()=>{
    console.log("Server is running on port 8083");
})
