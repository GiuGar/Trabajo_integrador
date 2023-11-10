let apikey = "1eea5cd13b45ef02982782ec6843507b"
let imagen = document.querySelectorAll(".imagen")

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
 for(let i = 0; i <= 5; i++)
    imagen.innerHTML = `
        <img src=${data.results[i].poster_path}/>
        `
})
.catch(function(error){
    console.log("Hay un error")
})