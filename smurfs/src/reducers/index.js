import {ADD_SMURF} from '../actions'

const initialState ={
    smurfs:[
        {
            name:'',
            age:'',
            height:'',
            id:''
        }
    ]
}


export const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_SMURF:
            return{
                ...state,
                smurfs:[...state.smurfs,{
                    name:'',
                    age:'',
                    height:'',
                    id:''
                }]
            }
        default:
            return state
    }
}