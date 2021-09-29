import React from 'react'
import ButtonForm from './ButtonForm';
import './InicioPoke.css';
import pokelife from '../img/pokelife.png';

const InicioPoke = () => {
    return (
        <>
        <div className="Contain_init">
        <audio src="micancion.mp3" controls="controls"></audio>
            <div>
                <img src={pokelife}/>
            </div>
            <div>
                <ButtonForm props="Ingresar" link="/pokemons"/>
            </div>
        </div>

        </>
    )
}

export default InicioPoke
