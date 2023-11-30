// Import all packages
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express"

//Setup Express instance
const app = express()

// Setup Middleware
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes Go Here
import handlerFunctions from "./controller.js";
const {getInvoices, addInvoice, deleteInvoice, editInvoice} = handlerFunctions

app.get('/invoices', getInvoices)
app.post('/invoice', addInvoice)
app.delete('/invoice/:id', deleteInvoice)
app.put('/invoice/:id', editInvoice)

// Open door to server
ViteExpress.listen(app, 2319, () => console.log("2319 yo, what's chilling?"))