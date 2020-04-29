const express = require('express')
const dotenv = require('dotenv')

// Load Env Vars

dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000

//Testing Git

app.listen(
  PORT,
  console.log(`Server running in ${process.env.PORT} mode on port ${PORT}`)
)
