import React, { useState, useEffect } from 'react'
import CardPoke from './CardPoke'
import Axios from 'axios';
import './ContainPoke.css'
import Paginacion from './Paginacion';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ContainPoke = () => {
    const { order } = useParams();
    const [dataPoke, setdataPoke] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginaActual, setpaginaActual] = useState(1);
    const [cantPokPage, setcantPokPage] = useState(12);

    console.log(order);

    useEffect(() => {
        const obtenerDatos = async() => {
            const datoPok = await Axios.get(`http://localhost:3001/pokemons?order=${order}`)
            // console.log(datoPok.data)
            setdataPoke(datoPok.data);
            setLoading(false);
        }
        obtenerDatos();
    }, [order])

    //Paginacion
    const indexPaginacionF = paginaActual * cantPokPage;
    const indexPrimeraP = indexPaginacionF - cantPokPage;
    const pgActual = dataPoke.slice(indexPrimeraP,indexPaginacionF);

    const paginate = pageNumber => setpaginaActual(pageNumber);


    return (
        <div className="contain-Pokemons">
            <div className="Img_fondo">
                <br/>
            <Link to="/pokemons/ASC/#"><button>Asendente</button></Link>
            <Link to="/pokemons/DES/#"><button>Descendente</button></Link>
            <Link to="/pokemons/A-Z/#"><button>A-Z</button></Link>
            <Link to="/pokemons/Z-A/#"><button>Z-A</button></Link>
                <Paginacion
                    cantPokPage={cantPokPage}
                    totalCards={dataPoke.length}
                    paginate={paginate}
                    order={order}
                />
                <div className="flex-container">
                    <CardPoke
                        posts={pgActual}
                        loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default ContainPoke
