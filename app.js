require('dotenv').config();
const express = require('express');
const app=express();

app.use(express.json({
    limit:'500mb'
}));

app.use(express.urlencoded({ 
    extended: false 
}));

app.get("/",(req, res)=>{
    return res.status(200).json({
        message:'Hi, welcome'
    });
});









app.use('*', (req, res)=>{
  return res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    }
  });
});

module.exports = app;