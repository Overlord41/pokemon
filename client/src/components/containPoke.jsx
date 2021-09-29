import React, { useState, useEffect, Fragment } from 'react'
import CardPoke from './CardPoke'
import Axios from 'axios';
import './ContainPoke.css'
import Paginacion from './Paginacion';


const ContainPoke = () => {

    const [dataPoke, setdataPoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginaActual, setpaginaActual] = useState(1);
    const [cantPokPage, setcantPokPage] = useState(12);

    useEffect(() => {
        const obtenerDatos = async() => {
            const datoPok = await Axios.get('http://localhost:3001/pokemons')
            // console.log(datoPok.data)
            setdataPoke(datoPok.data);
            setLoading(false);
        }
        obtenerDatos();
    }, [])

    //Paginacion
    const indexPaginacionF = paginaActual * cantPokPage;
    const indexPrimeraP = indexPaginacionF - cantPokPage;
    const pgActual = dataPoke.slice(indexPrimeraP,indexPaginacionF);

    const paginate = pageNumber => setpaginaActual(pageNumber);

    return (
        <>
            <h1>Aca van los props</h1>
            <Paginacion
                cantPokPage={cantPokPage}
                totalCards={dataPoke.length}
                paginate={paginate}
            />
            <div className="flex-container">
                <CardPoke
                    posts={pgActual}
                    loading={loading} />
            </div>
        </>
    )
}

export default ContainPoke
