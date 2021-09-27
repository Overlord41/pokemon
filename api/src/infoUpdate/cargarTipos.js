const axios = require('axios');
const { Tipo } = require('../db');

//Cargar tipos con nombres en español
// const cargarTipos = async () => {
//     const poketipo = await axios.get('https://pokeapi.co/api/v2/type');
//     poketipo.data.results.map( async(e) => {
//         let agregarT = await axios.get(`${e.url}`);
//              Tipo.findOrCreate({
//                  where: { name: agregarT.data.names[4].name }
//              })
//     });
// }

//Cargar tipos con nombres en inglés
const cargarTipos = async () => {
    const poketipo = await axios.get('https://pokeapi.co/api/v2/type');
    poketipo.data.results.map((e) => {
             Tipo.findOrCreate({
                 where: { name: e.name }
             })
    });
}

module.exports = {
    cargarTipos
}