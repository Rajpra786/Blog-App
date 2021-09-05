const express      = require('express');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const cookieParser = require('cookie-parser');
const cors         = require("cors");
const expressSession = require("express-session");
const morgan = require("morgan");

const userRoutes = require("./controllers/userControllers/userRoutes");
const blogRoutes = require("./controllers/blogControllers/blogRoutes");

const app = express();
require('dotenv').config();   // include configurations 
const PORT = process.env.PORT || 8081;


// to allow external urls
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(morgan("dev"));
// to allow sessions
app.use(expressSession({
    secret:process.env.KEY,
    store: new expressSession.MemoryStore(), 
    maxAge: 2 * 60 * 60 * 1000, // 2 hr
    resave: true,
    //secure: true, only works with https https://github.com/expressjs/session#options
    saveUninitialized: true
}));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
  
// Make connection with the MongoDB atlas
mongoose.Promise = global.Promise
mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connected to atlas!");
}).catch((err)=>{
    console.log("Index.js: line 20: ");
    console.log(err);
})



//Routes 
app.get('/',(req,res)=>{
    res.send('<h1>Hello Duniya!</h1>');
})

app.use('/api/users/',userRoutes);
app.use('/api/blogs/',blogRoutes);


// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
  