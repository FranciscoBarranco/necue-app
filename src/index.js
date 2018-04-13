const cors =require('cors'),
    express = require('express'),
    path = require('path'),
    app = express()
    
    // indexRoutes = require('./routes/index');
    endpointsRoutes = require('./routes/endpoints');

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('port', process.env.PORT || 3000)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// routes
// app.use(indexRoutes);
app.use('/api', endpointsRoutes);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})