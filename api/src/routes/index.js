const { Router } = require('express');
const axios = require('axios');
const {arregloPoke} = require('../infoUpdate/cargarinfo');
const { conn, Tipo, Pokemon } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async(req, res) => {
    res.send("Bienvenidos al Mundo Pokémon")
});


router.get('/pokemons', async(req, res) => {
    const { name } = req.query;
    //Si existe la query name
    if(name){
        if(!isNaN(name)){
            res.json("Nombre del pokémon inválido");
        }
        const pokenomAPI = arregloPoke.filter(e => {
            if(e.name === name){
                return e;
            }
        });
        if(pokenomAPI.length === 1){
            res.json(pokenomAPI);
        }else{
            const pokenomBD = await Pokemon.findOne(
                {
                where: { name: name},
                attributes: { exclude: ["id"] },
                include: {
                    model: Tipo,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            if(pokenomBD){
                res.json([...[],pokenomBD]);
            }else{
                res.json("El pokémon no se encontró");
            }
        }
    }
    //Si no ingresa la query name
    const listaPoke = await Pokemon.findAll(
        {
        attributes: { exclude: ["id"] },
        include: {
            model: Tipo,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    const ListP = [...arregloPoke,...listaPoke];
    ListP.sort(function(a, b){
        return a.num_order - b.num_order;
    });
    res.json(ListP);
    }
)

router.post('/pokemons', async(req, res) => {
    const newPokemon = req.body;
    try{
        const poke = await Pokemon.create({
            num_order: newPokemon.order,
            name: newPokemon.name,
            image: newPokemon.img,
            imgif: newPokemon.imgif,
            hp: newPokemon.hp,
            attack:newPokemon.atk,
            defense:newPokemon.def,
            speed:newPokemon.speed,
            height: newPokemon.height,
            weight:newPokemon.weight
        })
        newPokemon.tipo.map(async(e) => {
            let numTipo = await Tipo.findOne({ where: { name: e.name } });
            poke.addTipos(numTipo.dataValues.id);
        })
        res.send("AGREGADO");
    } catch(e){ res.send(e)}
})

router.get('/pokemons/:idPokemon', async(req, res) => {
    const idPokemon = Number(req.params.idPokemon);
    if(isNaN(idPokemon) || idPokemon<=0){
        res.json("Número inválido");
    }
    if(idPokemon>0 && idPokemon<=40){
        const pokeFoundAPI = arregloPoke.filter(e => {
            if(Number(e.num_order) === idPokemon){
                return e;
            }
        });
        if(pokeFoundAPI.length===1){
            res.json(pokeFoundAPI);
        }else{
            res.json("El pokémon no se encontró");
        }
    }else if(idPokemon>40){
        const pokeFoundBD = await Pokemon.findOne(
            {
            where: { num_order: idPokemon},
            attributes: { exclude: ["id"] },
            include: {
                model: Tipo,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })
        if(pokeFoundBD){
            res.json([...[],pokeFoundBD]);
        }else{
            res.json("El pokémon no se encontró");
        }
    }
})

router.get('/types', async(req, res) => {
    const typesPoke = await Tipo.findAll({
        attributes: { exclude: ["id"] }
    })
    res.json(typesPoke);
})

module.exports = router;
