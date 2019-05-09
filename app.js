const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const postRoutes = require('./routes/post'); 
const app = express();
dotenv.config();
//morgan is an middleware we can create our own middlewaere as well
app.use(morgan('dev'));
//ownMiddleware
const ownMiddleware = (req,res,next) =>{
    console.log("Middleware applied!!!");
    console.log(req.method +" "+ req.url);
    next();
}
app.use(ownMiddleware);
app.use('/',postRoutes);
app.use('/api/users',postRoutes);
const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`listing on port ${port}`);
});

