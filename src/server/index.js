const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')
const volleyball = require('volleyball')

const staticFoler = path.join(__dirname, "..", "..", "static")
const distFolder = path.join(__dirname, "..", "..", "dist")


// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(staticFoler))
app.use(express.static(distFolder))

// api routes
// app.use('/api', require('./api))

// all else
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../static/index.html'))
})

// error
app.use((err, req, res, next) => {
  if(process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'INTERNAL SERVER ERRORRRRR')
})

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`))