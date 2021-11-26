const express = require('express')
const app = express()
const port = 4880
const userRouters = require('./app/routers/home')
const loginRouters = require('./app/routers/login')
const registroRouters = require('./app/routers/registro')

app.use(userRouters)
app.use(loginRouters)
app.use(registroRouters)

app.listen(port, () => {
    console.log('La aplicación esta en linea');
})