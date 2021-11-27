const express = require('express')
const app = express()
const port = 3001
const homeRouters = require('./app/routers/home')
const loginRouters = require('./app/routers/login')
const registroRouters = require('./app/routers/registro')
const contraseñaRouters = require('./app/routers/contraseña')
const serviciosRouters = require('./app/routers/servicios')
const useradminRouters = require('./app/routers/useradmin')
const userplantRouters = require('./app/routers/userplant')
const usermecRouters = require('./app/routers/usermec')
const citasRouters = require('./app/routers/citas')
const gestiservRouters = require('./app/routers/gestiserv')

app.use(homeRouters)
app.use(loginRouters)
app.use(registroRouters)
app.use(contraseñaRouters)
app.use(serviciosRouters)
app.use(useradminRouters)
app.use(userplantRouters)
app.use(usermecRouters)
app.use(citasRouters)
app.use(gestiservRouters)

app.listen(port, () => {
    console.log('La aplicación esta en linea');
})