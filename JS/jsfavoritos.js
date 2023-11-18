let apikey = "1eea5cd13b45ef02982782ec6843507b"

let favoritosP = JSON.parse(localStorage.getItem("favoritosP"))
console.log(favoritosP)
let favoritosS = JSON.parse(localStorage.getItem("favoritosS"))
console.log(favoritosS)
let columnas = document.querySelector(".columnas")
let tit = document.querySelector(".tit")

//for(let i = 0; i < favoritos.length; i++){
for(let i = 0; i < favoritosP.length; i++){
    let idP = favoritosP[i]
    fetch(`https://api.themoviedb.org/3/movie/${idP}?api_key=${apikey}`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        columnas.innerHTML += `
        <article class="peli"> 
        <a href="./detallepeli.html?id=${data.id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.poster_path}"/></a>
        <p class="titulo"><strong>${data.original_title}</p>
        <p class="estreno"><strong>Estreno: ${data.release_date}</p>
        </article>
            `
    })
    .catch(function(error){
        console.log("Hay un error", error)
    })
}

for(let i = 0; i < favoritosS.length; i++){
    let idS = favoritosS[i]
    fetch(`https://api.themoviedb.org/3/tv/${idS}?api_key=${apikey}`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        columnas.innerHTML += `
        <article class="peli"> 
        <a href="./detalleserie.html?id=${data.id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${data.poster_path}"/></a>
        <p class="titulo"><strong>${data.name}</p>
        <p class="estreno"><strong>Estreno: ${data.first_air_date}</p>
        </article>
            `
    })
    .catch(function(error){
        console.log("Hay un error", error)
    })
}


let favs = favoritosP.concat(favoritosS)
console.log(favs)

if (favs.length > 0){
    tit.innerText = `Borrar favoritos`
    tit.addEventListener("click", function() {
        localStorage.clear()
        columnas.innerHTML = ``
        tit.innerText = `Se han borrado los favoritos`
    })
}


