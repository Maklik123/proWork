const express = require('express'),
      next = require('next'),
      mongoose = require('mongoose');

const secret = require('./config/secret');
const User = require('./config/user');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


mongoose.connect(secret.database,function(err){
  if(err){
    console.log("Database didn't Connect");
  }else {
    console.log("Database is Connected");
  }
});

// var user = new User();

app.prepare().then(()=>{
  const server = express();
  //
  // server.use(bodyParser.json());
  // server.use(bodyParser.urlencoded({extended: false}));

  server.get('/',(req,res)=>{
    return app.render(req,res, '/index',req.query);
  });

  server.get('*', (req, res) => {
      return handle(req, res)
    });

  server.listen(5000,(err)=>{
    if(err)  throw err;
    console.log("The Server is running on port 5000");
  });
})
