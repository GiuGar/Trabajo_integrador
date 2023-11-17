let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let id = querystring.get("id")
let detalle = document.querySelector(".detalle")
let rec = document.querySelector(".reco")
let titrec = document.querySelector(".titrec")
let verdad = false

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 let generosHtml = ""
 for(let i=0; i < data.genres.length; i++){
    console.log(data.genres[i])
    generosHtml += ` <p class="texto">
    <strong></strong> <a class="texto1" href="./detallegeneros.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a>
    </p>`
 }

 detalle.innerHTML += `
    <article class="izquierda">
    <img class="poster" src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
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
        <p class= "texto"><strong>Géneros:</strong></p>
        ${generosHtml}
    </div>
    <div class="favs">
        <span onClick='agregarysacardefavoritos(${data.id})' class="corazon fa-regular fa-heart fa-2xl"></span>
    </div>
    </article>
    `
 })
.catch(function(error){
    console.log("Hay un error")
})

titrec.addEventListener("click", function() {
    if (verdad == false) {
        verdad = true
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apikey}`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
        console.log("Recomendaciones", data)
        for(let i = 0; i < 5; i++){
            rec.innerHTML += `
                <article class="peli"> 
                <a href="./detallepeli.html?id=${data.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/></a>
                <p class="titulo"><strong>${data.results[i].original_title}</p>
                <p class="estreno"><strong>Estreno: ${data.results[i].release_date}</p>
                </article>
                `
        }
        })
        .catch(function(error){
            console.log("Hay un error")
        })}
    })
    function agregarysacardefavoritos(id){
        let favoritosStorage = localStorage.getItem("favoritos")
        if (favoritosStorage !== null){
            let favoritosParseado = JSON.parse(favoritosStorage)
            let posiciondemiid = favoritosParseado.indexOf(id)
            if (posiciondemiid >= 0){
                let favoritosSinElId = favoritosParseado.slice()
            } else {
                favoritosParseado.push(id)
                let favStringificado = JSON.stringify(favoritosParseado)
                localStorage.setItem("favoritos", favStringificado)
            }

        } else {
            let arrFavoritos = [id]
            let favoritoStringificado = JSON.stringify(arrFavoritos)
            localStorage.setItem('favoritos', favoritoStringificado)
            console.log('Funciona el boton')
        }
    }