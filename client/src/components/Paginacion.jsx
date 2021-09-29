import React from 'react'

const Paginacion = ({ cantPokPage, totalCards, paginate }) => {
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
                            <a onClick={() => paginate(numero)} href='/pokemons/!#'>
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
