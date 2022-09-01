const  express = require('express')
const app = express();
const gateway = require('fast-gateway');
const port = 3500

const auth = (req,res,next) =>{
  if(req.headers.token){
    next();
  }
 else{
  res.send({
    status:401,
    message:"Invalid Auth"
  })
 }
};

const server = gateway({
  routes: [{
    prefix: '/user',
    target: 'http://localhost:3001/',
    middlewares:[auth]
  },
  {
    prefix: '/seller',
    target: 'http://localhost:3000/'
  },
  {
    prefix: '/cart',
    target: 'http://localhost:3002/'
  }]
});

server.get('/gateway',(req,res)=>{
 try{
  res.send({
    status:200,
    message: "Gateway Running"
  });
 }catch(e){
  res.send(e);
 }
})
  server.start(port).then(server=>{
    console.log(`GateWay Running on ${port} PORT`);
  }).catch((e)=>{
    console.log(`GatWay not work`);
  })
