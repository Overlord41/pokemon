import { AXIOS_POKEMON_ERROR, AXIOS_POKEMON_REQUEST, AXIOS_POKEMON_SUCCESS } from "../actions/buscarPokemon"

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state=initialState, action) => {
    switch(action.type){
        case AXIOS_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AXIOS_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case AXIOS_POKEMON_ERROR:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }

        default: return state
    }
}

export default buscador;