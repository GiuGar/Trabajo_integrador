let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let id = querystring.get("id")
let detalle = document.querySelector(".detalle")

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 detalle.innerHTML += `
    <article class="izquierda">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
    <a href="./trailerpelicula.html" class="trailer"> 🎬 Ver Trailer </a>
    </article>

    <article class="info">
    <h1>${data.title}</h1>
    <h2>Sinopsis</h2>
    <p class="sinopsis">${data.overview}</p>
    <div class="detalles"> 
        <p class="texto"><strong>Calificación: ${data.vote_average}</strong></p>
        <p class="texto"><strong>Fecha de estreno:</strong> ${data.release_date}</p>
        <p class="texto"><strong>Duración:</strong> ${data.runtime} mins</p>
        <p class="texto"><strong>Género:</strong> <a class="texto1" href="./detallegeneros.html">${data.genres[0].name}</a></p>
    </div>
    <div class="favs">
        <a href="favoritos.html" class="corazon fa-regular fa-heart fa-2xl"></a>
    </div>
    </article>
    `
 })
.catch(function(error){
    console.log("Hay un error")
})