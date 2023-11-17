let apikey = "1eea5cd13b45ef02982782ec6843507b"

let columnas = document.querySelector(".columnas")

fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < 30; i++){
    columnas.innerHTML += `
    <article class="peli"> 
    <a href="./detalleserie.html?id=${data.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/></a>
    <p class="titulo"><strong>${data.results[i].name}</p>
    <p class="estreno"><strong>Estreno: ${data.results[i].first_air_date}</p>
    </article>
        `
 }
})
.catch(function(error){
    console.log("Hay un error")
})
