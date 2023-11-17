let apikey = "1eea5cd13b45ef02982782ec6843507b"

let busqueda = location.search
let querystring = new URLSearchParams(busqueda)
let id = querystring.get("id")
let nombre = querystring.get("name")
let info = document.querySelector(".info")
let pelis = document.querySelector(".pelis")
let series = document.querySelector(".series")
let tit = document.querySelector(".tit")

tit.innerText += `${nombre}`
console.log(info)

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log("Peliculas", data)
    let largo = data.results
        for(let i = 0; i < largo.length; i++){
            pelis.innerHTML += `
            <article class="peli"> 
            <a href="./detallepeli.html?id=${data.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/></a>
            <p class="titulo"><strong>${data.results[i].title}</p>
            <p class="estreno"><strong>Estreno: ${data.results[i].release_date}</p>
            </article>
            `
        }
 })
.catch(function(error){
    console.log("Hay un error")
})

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_genres=${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log("Series", data)
    let largo = data.results
        for(let i = 0; i < largo.length; i++){
            series.innerHTML += `
            <article class="peli"> 
            <a href="./detalleserie.html?id=${data.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/></a>
            <p class="titulo"><strong>${data.results[i].name}</p>
            <p class="estreno"><strong>Estreno: ${data.results[i].first_air_date
            }</p>
            </article>
            `
        }
 })
.catch(function(error){
    console.log("Hay un error")
})