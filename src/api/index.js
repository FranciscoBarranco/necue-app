const cors =require('cors'),
    express = require('express'),
    app = express()
    
    indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// routes
app.use(indexRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})