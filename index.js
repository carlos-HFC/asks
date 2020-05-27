const express = require("express")

const conn = require("./database")
const routes = require('./routes')

const app = express()

conn
   .authenticate()
   .then(() => console.log("deu bom"))
   .catch(err => console.log(err))

//dizer ao express usar o EJS como view engine
app.set("view engine", "ejs")
//usar a pasta public como estática
app.use(express.static("public"))
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(8080, () => console.log("Servidor no ar!"))
