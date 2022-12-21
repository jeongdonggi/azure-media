"use strict"
//import i from "./sqltest.js"
//import ps from "./sqltest.js"

const id = document.querySelector("#id")
const password = document.querySelector("#password")
const loginButton = document.querySelector("button")
           
loginButton.addEventListener("click",login)

function login(){
    const req = {
        method: "POST",
        Headers: {
            "Content-Type": "application/json"
        },
        id: id.value,
        password: password.value,
    };
    //console.log(req , JSON.stringify(req)) //JSON은 문자열
    if (i == id & ps == password){
        console.log("들어옴")
        //router.get('/video', ctrl.output.video)
    }
}
