// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar")

nav.innerHTML= navbar()

document.getElementById("search_input").addEventListener("keydown",getResult)
function getResult(){
   let value = document.getElementById("search_input").value
    if(event.key=="Enter"){
        localStorage.setItem("searchNews",JSON.stringify(value))
        window.location.href = "search.html"
    }
}
import {search,append} from "./fetch.js"
let results =JSON.parse(localStorage.getItem("searchNews"))
console.log(results)
let url = `https://masai-mock-api.herokuapp.com/news?q=${results}`

 search(results).then((data)=>{
     let res = data.articles
     append(res)
 })