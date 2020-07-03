// const express = require('express')
import express from 'express'
import React from 'react'
import Home from './containers/Home/index'
import { renderToString } from 'react-dom/server'

const app = express()
const port = 3000
const content = renderToString(<Home />)

app.get('/', (req, res) => res.send(
  `
    <html>
    <title>ssr</title>
    <body>
      ${content}
    </body>
    </html>
 `
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))