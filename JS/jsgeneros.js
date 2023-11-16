let apikey = "1eea5cd13b45ef02982782ec6843507b"
let pelis = document.querySelector(".peliss")
let series = document.querySelector(".seriess")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < data.genres.length; i++){
    pelis.innerHTML += `
    <a class="cuadro" href="./detallegeneros.html?id=${data.genres[i].id}">${data.genres[i].name}</a>
        `
 }
})
.catch(function(error){
    console.log("Hay un error")
})


fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i < data.genres.length; i++){
    series.innerHTML += `
    <a class="cuadro" href="./detallegeneros.html?id=${data.genres[i].id}">${data.genres[i].name}</a>
        `
 }
})
.catch(function(error){
    console.log("Hay un error")
})
