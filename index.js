const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users =[
  {id:1,name:"Arafat",email:"mesbaharrafat.22@gmail.com"},
  {id:2,name:"Arafat",email:"mesbaharrafat.22@gmail.com"},
  {id:3,name:"Arafat",email:"mesbaharrafat.22@gmail.com"},
  {id:4,name:"Arafat",email:"mesbaharrafat.22@gmail.com"},
  {id:5,name:"Arafat",email:"mesbaharrafat.22@gmail.com"},
];
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.post('/users',(req,res)=>{
  console.log("POst API heatting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.get('/data',(req,res)=>{
    res.send("More data are comming soon");
})
app.get('/users',(req,res)=>{
  res.send(users);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })