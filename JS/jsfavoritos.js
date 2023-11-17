let apikey = "1eea5cd13b45ef02982782ec6843507b"

let favoritos = document.querySelector('contenedor-productos')

for(let i = 0; i < productos.data.length; i++){
    contenedor.innerHTML +=
    <article>
        <h2>
            ${productos.data[i].nombre}
        </h2>
        <h4>
            ${productos.data[i].nombre} 
        </h4>
        <button>Agregar a favoritos</button>
    </article>
}
