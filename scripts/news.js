// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar")

nav.innerHTML= navbar()


let news = JSON.parse(localStorage.getItem("news"))
console.log(news)
let img = document.createElement("img")

img.src = news.urlToImage
let des = document.createElement("h2")
des.innerText = news.description
let h3 = document.createElement("h3")
h3.innerText = news.content
document.getElementById("detailed_news").append(img,des,h3)

document.getElementById("search_input").addEventListener("keydown",getResult)
function getResult(){
   let value = document.getElementById("search_input").value
    if(event.key=="Enter"){
        window.location.href = "search.html"
    }
}

