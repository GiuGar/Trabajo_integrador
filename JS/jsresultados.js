let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let nombre = querystring.get("busqueda")
let columnas = document.querySelector(".columnas")
let resultados = document.querySelector(".resultados")

resultados.innerText = `Resultados de búsqueda para: ${nombre}`


fetch(`https://api.themoviedb.org/3/search/movie?query=${nombre}&api_key=${apikey}`)
.then(function(resp) {
    return resp.json()
})
.then(function(datos){
    console.log(datos)
    let array = datos.results
    for (let i = 0; i < array.length; i++){
        columnas.innerHTML += `
        <article class="peli"> 
        <a href="./detallepeli.html?id=${array[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}"/></a>
        <p class="titulo"><strong>${array[i].title}</p>
        <p class="estreno"><strong>Estreno: ${array[i].release_date}</p>
        </article>
        `
    }
})
.catch(function(error){
    console.log("Hay un error")
})


fetch(`https://api.themoviedb.org/3/search/tv?query=${nombre}&api_key=${apikey}`)
.then(function(resp) {
    return resp.json()
})
.then(function(datos){
    console.log(datos)
    let array = datos.results
    for (let i = 0; i < array.length; i++){
        columnas.innerHTML += `
        <article class="peli"> 
        <a href="./detalleserie.html?id=${array[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}"/></a>
        <p class="titulo"><strong>${array[i].name}</p>
        <p class="estreno"><strong>Estreno: ${array[i].first_air_date}</p>
        </article>
        `
    }
})
.catch(function(error){
    console.log("Hay un error")
})