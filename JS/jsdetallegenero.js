let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let id = querystring.get("id")
let info = document.querySelector(".info")

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 info.innerHTML += `
    <h1>Comedia</h1>
    <article class="datos"> 
    <p class="texto">La comedia se caracteriza por el uso del humor para transformar, exagerar y ridiculizar el drama para situaciones cómicas y generalmente tienen un desenlace feliz. Es una manera de representar los conflictos sencillos y cotidianos subrayando el lado divertido o ridículo de la vida. Se opone a la tragedia tanto en su finalidad como en los personajes y los temas que trata.</p>
    </article>
    `
 })
.catch(function(error){
    console.log("Hay un error")
})