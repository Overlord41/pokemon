import Axios from 'axios';

export const AXIOS_POKEMON_REQUEST = 'AXIOS_POKEMON_REQUEST';
export const AXIOS_POKEMON_SUCCESS = 'AXIOS_POKEMON_SUCCESS';
export const AXIOS_POKEMON_ERROR = 'AXIOS_POKEMON_ERROR';

//actions

export const axiosPoquemonRequest = () => {
    return {
        type: AXIOS_POKEMON_REQUEST
    }
}

export const axiosPoquemonSuccess = () => {
    return {
        type: AXIOS_POKEMON_SUCCESS,
        payload: Pokemon
    }
}


export const axiosPoquemonError = () => {
    return {
        type: AXIOS_POKEMON_ERROR,
        payload: error
    }
}

const axiosPokemon = (value) => {
    return async(dispatch) => {
        dispatch(xiosPoquemonRequest());
        Axios.get('http://localhost:3000/pokemons')
            .then(response => {
                dispatch(axiosPoquemonSuccess([response.data]));
            })
            .catch(error => {
                dispatch(axiosPoquemonError('No se encontró el Pokémon'))
            })
    }
}

export default axiosPokemon;