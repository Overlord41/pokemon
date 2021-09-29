import React from 'react'
import ButtonForm from './ButtonForm';
import './InicioPoke.css';

const InicioPoke = () => {
    return (
        <>
        <div className="Contain_init">
        <audio src="micancion.mp3" controls="controls"></audio>
            <div>
                <img src="https://fontmeme.com/temporary/3299dd487f596d822aedc5504ab31715.png"/>
            </div>
            <div>
                <ButtonForm props="Ingresar" link="/pokemons"/>
            </div>
        </div>
            
        </>
    )
}

export default InicioPoke
