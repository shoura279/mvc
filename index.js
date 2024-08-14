import path from "path";
import express from "express";
import { connectDb } from "./db/connection.js";
import { Product } from "./db/models/product.model.js";
const app = express()
const port = 3000
connectDb()
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.get('/', async (req, res, next) => {
    const products = await Product.find()
    res.render("index.ejs", { products })
})
app.post('/addProduct', async (req, res) => {
    await Product.create(req.body)
    res.redirect('/')
})
app.get('/deleteProduct/:id', async (req, res, next) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.get('/update/:id', async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    res.render('update.ejs', { product })
})
app.post('/handelUpdate/:id', async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
})
app.listen(port, () => console.log('server is running'))