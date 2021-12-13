var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const port = 3000

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var perfil_plantaRouter = require('./routes/perfil_planta');
var perfil_mecanicoRouter = require('./routes/perfil_mecanico');
var serviciosRouter = require('./routes/servicios');
var citasRouter = require('./routes/citas');
var reporteRouter = require('./routes/reporte');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/perfil_planta', perfil_plantaRouter);
app.use('/perfil_mecanico', perfil_mecanicoRouter);
app.use('/servicios', serviciosRouter);
app.use('/citas', citasRouter);
app.use('/reporte', reporteRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;