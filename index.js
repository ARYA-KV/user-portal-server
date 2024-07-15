//import json-server
const jsonServer=require('json-server')
//create server for user-portal app
const USServer =jsonServer.create()
//create middleware 
const middleware=jsonServer.defaults()
//set up route for json file in server
const route=jsonServer.router('db.json')
//set up port for running  server app
const PORT=3000 || process.env.PORT

USServer.use(middleware)
USServer.use(route)
USServer.listen(PORT,()=>{
    console.log(`media player started at port ${PORT} and waiting for client request`);
})