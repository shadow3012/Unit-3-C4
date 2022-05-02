// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
import {append, search} from "./fetch.js"

let nav = document.getElementById("navbar")

nav.innerHTML= navbar()



let id = document.querySelectorAll("#sidebar>h3")
for(let x = 0;x<id.length;x++){
    id[x].addEventListener("click",function(){
        let target = event.target
        let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${target.id}`
        console.log(url)
        let result = search(url)
        .then((data)=>{
            let res = data.articles
            console.log(res)
            append(res)
        })
        
       
    })
}

document.getElementById("search_input").addEventListener("keydown",getResult)
function getResult(){
   let value = document.getElementById("search_input").value
    if(event.key=="Enter"){
        window.location.href = "search.html"
    }
}









