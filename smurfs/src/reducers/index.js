import { ADD_SMURF, GET_SMURF } from '../actions'

const initialState ={
    smurfs:[],
    smurf:{}
}


export const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_SMURF:
            return{
                ...state,
                smurf:action.payload                
            }
        case GET_SMURF:
            return{
                ...state,
                smurfs:action.payload
            }
        default:
            return state
    }
}