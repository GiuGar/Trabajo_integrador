let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(queryStringObject)
let nombre = queryStringObject.get("busqueda")
let columnas = document.querystring(".columnas") // Está mal hecho, dice que no conoce el queryStringObj

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${nombre}`)
.then(function(resp) {
    return resp.jason()
})
.then(function(datos){
    let array = datos.results
    for (let i = 0; i < array.length; i++){
        columnas.innerHTML += `
        <article class="peli"> 
        <a href="./detallepeli.html?id=${array[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}"/></a>
        <p class="titulo"><strong>${array[i].name}</p>
        <p class="estreno"><strong>Estreno: ${array[i].first_air_date}</p>
        </article>
        `
    }
})
.catch(function(error){
    console.log("Hay un error")
})

// Falta el de series 