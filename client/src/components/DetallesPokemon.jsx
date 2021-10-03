import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './DetallesPokemon';
import CardDetalle from './CardDetalle';

const DetallesPokemon = () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const obtenerPokemon = async() => {
            const dataPokemon = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            setPokemon(dataPokemon.data);
        }
        obtenerPokemon();
    }, []);
    return  (
        <div>
            <CardDetalle
                data={pokemon}/>
        </div>
    )
}

export default DetallesPokemon
