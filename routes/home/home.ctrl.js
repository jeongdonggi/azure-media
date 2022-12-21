"use strict"
const output ={
    hello: (req, res) => {
        res.render("home/index")
    },   
    login: (req, res) => {
        res.render("home/login")
    },
    video1: (req, res) =>{
        res.render("home/video1")
    },
    video2: (req, res) =>{
        res.render("home/video2")
    },
    video3: (req, res) =>{
        res.render("home/video3")
    },
    menu: (req, res) =>{
        res.render("home/menu")
    },
}

const process = {
    login: (req, res) =>{
        console.log(req.body)
    },
}

module.exports = {
    output,
    process,
}