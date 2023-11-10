let apikey = "1eea5cd13b45ef02982782ec6843507b"

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
 console.log(data)
})
.catch(function(error){
    console.log("Hay un error")
})