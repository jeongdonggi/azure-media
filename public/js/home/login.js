"use strict"

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
    if (i == id & ps == password){
        console.log("들어옴")
    }
}
