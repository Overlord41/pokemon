import React, { Fragment, useState } from 'react'
import axios from 'axios';

const typs = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "fire",
    "water",
    "steel",
    "ghost",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow"
]



const AgregarPoke = () => {


    const [type1, setType1] = useState();
    const [type2, setType2] = useState();
    const [cantidadPoke, setCantidadPoke] = useState(40);
    const [datos, setDatos] = useState({
        "order": 42,
        "name": "",
        "img": "",
        "imgif": "",
        "hp": 0,
        "atk": 0,
       "def": 0,
        "speed": 0,
        "height": 0,
        "weight": 0,
        "tipo": [
            { "name": "rock"},
            { "name": "water"}
        ]
      });



    const cargarPokes = async(e) => {
        e.preventDefault();
        try{
            axios({
                method: 'post',
                url: 'http://localhost:3001/pokemons',
                data: {
                        order: datos.order,
                        name: datos.name,
                        img: datos.img,
                        imgif: datos.imgif,
                        hp: datos.hp,
                        atk: datos.atk,
                        def: datos.def,
                        speed:datos.speed,
                        height: datos.height,
                        weight:datos.weight,
                        tipo: [
                            {name: type1[0].name || null},
                            {name: type2[0].name || null}
                        ]
                }
              })
            console.log(type1[0].name);
            console.log([...type1,...type2]);
        }catch(error){
            console.log(error);
    }}

    const typeChange1 = e => {
        setType1([...[],{"name" : e.target.value}])
    }

    const typeChange2 = e => {
        setType2([...[],{"name" : e.target.value}]
        )
    }



    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    };
    return (
        <Fragment>
            <h1>Agregando pokémon</h1>
            <form onSubmit= {cargarPokes}>
                <div>
                    <label>N° orden </label>
                    <input type="number" value={datos.order} disabled={true}/>
                </div>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Imagen </label>
                    <input
                        type="text"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gif </label>
                    <input
                        type="text"
                        name="imgif"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Puntos de Vida</label>
                    <input
                        type="number"
                        min="0"max="500"
                        placeholder="0"
                        name="hp"
                        onChange={handleChange}
                    />
                    <label>ataque</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="atk"
                        onChange={handleChange}
                    />
                    <label>defensa</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="def"
                        onChange={handleChange}
                    />
                    <label>velocidad</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="speed"
                        onChange={handleChange}
                    />
                    <label>tamaño</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="height"
                        onChange={handleChange}
                    />
                    <label>peso</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="weight"
                        onChange={handleChange}
                    />
                    <div>
                    <label>tipo 1 </label>
                    <select onChange={typeChange1}>
                        {
                            typs.map((e,index) =>
                                <option key={index}>{e}</option>
                            )
                        }
                    </select>
                    <br/>
                    <label>tipo 2 </label>
                    <select onChange={typeChange2}>
                        {
                            typs.map((el,ind) =>
                                <option key={ind}>{el}</option>
                            )
                        }
                    </select>
                    </div>
                </div>
                <div>
                   <button>Enviar</button>
                </div>
            </form>
        </Fragment>
    )
}

export default AgregarPoke
