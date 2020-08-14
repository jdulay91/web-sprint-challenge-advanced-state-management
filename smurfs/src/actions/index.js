export const ADD_SMURF = 'ADD_SMURF'

export const addSmurf = newSmurf => {

    return{
        type:ADD_SMURF,
        payload:newSmurf
    }
}