import React from 'react';
import './Paginacion.css';

const Paginacion = ({ cantPokPage, totalCards, paginate, order }) => {
    const NumPaginas = [];

    for(let i = 1;i <= Math.ceil(totalCards / cantPokPage); i++){
        NumPaginas.push(i);
    }

    return (
        <nav>
            <ul>
                {
                    NumPaginas.map(numero =>(
                        <li key={numero}>
                            <a onClick={() => paginate(numero)} href={`/pokemons/${order}/#`}>
                                {numero}
                            </a>
                        </li>
                        )
                    )
                }

            </ul>
        </nav>
    )
}

export default Paginacion
