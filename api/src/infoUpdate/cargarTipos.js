const axios = require('axios');
const { Tipo } = require('../db');

const cargarTipos = async () => {
    const poketipo = await axios.get('https://pokeapi.co/api/v2/type');
    const webTipo = poketipo.data.results.map( async(e) => {
        let agregarT = await axios.get(`${e.url}`);
             Tipo.findOrCreate({
                 where: { name: agregarT.data.names[4].name }
             })
    });
}

module.exports = {
    cargarTipos
}