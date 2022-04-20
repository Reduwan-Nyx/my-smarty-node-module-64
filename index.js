const express = require('express');
var cors = require("cors");
const app = express()

const port = process.env.PORT || 5000;

app.get('/' , (req, res)=>{
    res.send(' hello from  my personal over smarty pant!!')
});

app.use(cors())
app.use(express.json());

const users = [
    {id:1, name: 'sabana', email: 'sabana@gmail.com', phone: '017888888'},
      {id:2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '017888888'}, 
     {id:3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '017888888'},
      {id:4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '017888888'}, 
     {id:5, name: 'sraboni', email: 'sraboni@gmail.com', phone: '017888888'}, 
     {id:6, name: 'sabila noor', email: 'sabila@gmail.com', phone: '017888888'},  
    {id:7, name: 'sohana', email: 'sabanaohanal.com', phone: '017888888'},  
]

app.get('/users', (req, res) => {
    // filter by search query parameter
   if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(u => u.name.toLowerCase().includes(search))
    res.send(matched)
   }
   else{
     res.send(users)
   }
   
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port, () =>{
    console.log('listening to port', port);
})