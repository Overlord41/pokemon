const axios = require('axios');

var arreglo1 = [];
var arregloPoke = [];
async function cargarPokemon(){
    await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
    .then(function(res){
        arreglo1.push(res.data.results);
    })
    .then(()=>{
        arreglo1[0].map(e => {
            agregarPokemon(e.url);
        })
    })
}

async function agregarPokemon(URL){
    await axios.get(`${URL}`)
    .then(function(res){
        arregloPoke.push({
            num_order: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other["official-artwork"].front_default,
            imgif: `https://pkparaiso.com/imagenes/xy/sprites/animados/${res.data.name}.gif`,
            hp: res.data.stats[0].base_stat,
            attack:res.data.stats[1].base_stat,
            defense:res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            height: res.data.height,
            weight:res.data.weight,
            tipos: res.data.types.map(el => {
                return { name: el.type.name }
            })
        })
    })
}

module.exports = {
    cargarPokemon,
    arregloPoke
}