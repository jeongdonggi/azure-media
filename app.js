// express 사용
"use strict"

const express = require('express')
const app = express()
var cors = require('cors')
//host
const port = 3000

app.use(cors())

//앱세팅
app.set("views", "./views")
app.set("view engine", "ejs")

const home = require("./routes/home")
app.use("/",home) // use -> 미들 웨어 등록

app.use(express.static(`${__dirname}/public`)) //미들웨어

//listen: 포트 https: 443
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})