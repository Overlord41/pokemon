import React from 'react'
import ButtonForm from './ButtonForm';
import './InicioPoke.css';
import pokelife from '../img/pokelife.png';

const InicioPoke = () => {
    return (
        <>
        <div className="Contain_init">
            <div>
                <img src={pokelife}/>
            </div>
            <div>
                <ButtonForm props="Ingresar" link="/pokemons/ASC"/>
            </div>
        </div>

        </>
    )
}

export default InicioPoke
