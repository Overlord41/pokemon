const { Router } = require('express');
const axios = require('axios');
const {arregloPoke} = require('./cargarinfo');
const { conn, Tipo, pokemon } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async(req, res) => {
    arregloPoke.sort(function(a, b){
        return a.num_order - b.num_order;
    });

    res.json(arregloPoke);
});

// router.post('/DB', async(req, res) => {
//     await arregloTipos.forEach(e => {
//         try{
//             var newTipo = Tipo.create({
//                 "name": e.name
//             })
//             res.json(newTipo);
//         }catch(error){
//             res.send(error);
//         }
//     })
//     res.send(arregloTipos);
// })


router.get('/tipos', async(req, res) => {
    // const poketipo = await axios.get('https://pokeapi.co/api/v2/type');
    // const webTipo = poketipo.data.results.map( async(e) => {
    //     let agregarT = await axios.get(`${e.url}`);
    //          Tipo.findOrCreate({
    //              where: { name: agregarT.data.names[4].name }
    //          })
    // });

    res.json('nice')
})

router.post('/enviar/:tipoP', async(req, res) => {
    const tipoP = req.params.tipoP;
    try{
        const newTipo = await Tipo.create({
            "name": tipoP
        })
        res.json(newTipo);
    }catch(error){
        res.send(error);
    }
});





module.exports = router;

