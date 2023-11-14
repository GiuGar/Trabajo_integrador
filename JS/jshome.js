let apikey = "1eea5cd13b45ef02982782ec6843507b"

let columna1 = document.querySelector(".columna1")
let columna2 = document.querySelector(".columna2")
let columna3 = document.querySelector(".columna3")
let columna4 = document.querySelector(".columna4")

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < 5; i++){
    columna1.innerHTML += `
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
})

fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < 5; i++){
    columna2.innerHTML += `
    <article class="peli"> 
    <a href="./detallepeli.html?id=${data.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/></a>
    <p class="titulo"><strong>${data.results[i].name}</p>
    <p class="estreno"><strong>Estreno: ${data.results[i].first_air_date}</p>
    </article>
        `
 }
})
.catch(function(error){
    console.log("Hay un error")
})

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < 5; i++){
    columna3.innerHTML += `
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
})