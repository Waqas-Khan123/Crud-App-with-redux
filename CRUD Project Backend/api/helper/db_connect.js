const mongoose=require('mongoose');
const url='mongodb+srv://waqas123:waqas321@cluster0.tg2veud.mongodb.net/?retryWrites=true&w=majority'
const db=()=>{
    console.log("DataBase is Successfully connected")
    mongoose.set("strictQuery", false);
      return mongoose.connect(url, {
        useNewUrlParser:true, 
        useUnifiedTopology:true,
      })
    };
    
    module.exports =db;
    