const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
var arreglo1 = [];
var arregloPoke = [];
async function cargarPokemon(){
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(function(res){
        arreglo1.push(res.data.results);
    })
    arreglo1[0].map(e => {
        agregarPokemon(e.url);
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
            weight:res.data.wheight
        })
    })
}


cargarPokemon();

router.get('/',async(req, res) => {
//   axios.get('https://pokeapi.co/api/v2/pokemon/venusaur')
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//     res.send(response);
//   });
    console.log(arreglo1[0]);
    res.send(arregloPoke);
})





module.exports = router;

