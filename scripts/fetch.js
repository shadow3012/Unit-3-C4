let  search= async (value)=>{
   
try {
    
let res = await fetch(value)
let data = res.json()
return data
    
} catch (error) {
    console.log(error)
}



}

let append=(data)=>{
    data.forEach(({author,content,urlToImage,description})=>{
    let div = document.createElement("div")
    div.className = "news"
    div.style.border = "1px solid teal"
    let h4 = document.createElement("h4")
    h4.innerText = description
    let con = document.createElement("p")
    con.innerText = content
    let data = {
        description,
        content,
        urlToImage
    }
    div.addEventListener("click",()=>{
        movetonews(data)
    })
    div.append(h4,con)
    document.getElementById("results").append(div)
    })
  
}
function movetonews(data){
    localStorage.setItem("news",JSON.stringify(data))
    window.location.href = "news.html"
}

export {search,append}