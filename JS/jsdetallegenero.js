let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let id = querystring.get("id")
let name = querystring.get("name")
let info = document.querySelector(".info")

console.log(name)

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_genres=${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log("Generos", data)
 info.innerHTML += `
    <h1>("name")</h1>
    <article class="datos"> 
    <p class="texto">La comedia se caracteriza por el uso del humor para transformar, exagerar y ridiculizar el drama para situaciones cómicas y generalmente tienen un desenlace feliz. Es una manera de representar los conflictos sencillos y cotidianos subrayando el lado divertido o ridículo de la vida. Se opone a la tragedia tanto en su finalidad como en los personajes y los temas que trata.</p>
    </article>
    `
 })
.catch(function(error){
    console.log("Hay un error")
})