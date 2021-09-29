import React, { Fragment, useState } from 'react'

const typs = [
    "Ninguno",
    "Acero",
    "Agua",
    "Bicho",
    "Dragón",
    "Eléctrico",
    "Fantasma",
    "Fuego",
    "Hada",
    "Hielo",
    "Lucha",
    "Normal",
    "Planta",
    "Psíquico",
    "Roca",
    "Siniestro",
    "Tierra",
    "Veneno",
    "Volador",
    "???",
]



const AgregarPoke = () => {



    const [datos, setDatos] = useState({
        num_order: 0,
        name: "",
        image: "",
        imgif: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        tipos: []
      });

    const cargarPokes = (e) => {
        e.preventDefault();
    }

    const type1Change = e => {
        setDatos({
            ...datos,
            tipos : [ {"name" : e.target.value}]
        })
    }

    const type2Change = e => {
        setDatos({
            ...datos,
            tipos : [ {"name" : e.target.value}]
        })
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
                    <input type="number" value={datos.num_order} disabled={true}/>
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
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gif </label>
                    <input
                        type="file"
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
                        name="attack"
                        onChange={handleChange}
                    />
                    <label>defensa</label>
                    <input
                        type="number"
                        min="0" max="500"
                        placeholder="0"
                        name="defense"
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
                    <select onChange={type1Change}>
                        {
                            typs.map((e,index) =>
                                <option key={index}>{e}</option>
                            )
                        }
                    </select>
                    <br/>
                    <label>tipo 2 </label>
                    <select onChange={type2Change}>
                        {
                            typs.map((el,ind) =>
                                <option key={ind}>{el}</option>
                            )
                        }
                    </select>
                    </div>
                </div>
                <div>
                   <button type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    )
}

export default AgregarPoke
