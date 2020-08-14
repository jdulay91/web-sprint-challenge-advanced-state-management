import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF'
export const GET_SMURF = 'GET_SMURF'


export const addSmurf = (newSmurf) => (dispatch) => {
   fetch('http://localhost:3333/smurfs',{
       method: 'POST',
       headers: {
           'content-type': 'application/json',
       },
       body: JSON.stringify(newSmurf),
   })
   .then((res)=>res.json())
   .then((post)=>
   dispatch({
       type: ADD_SMURF,
       payload:post
   }))
}

export const getSmurf = () => dispatch => {
    fetch('http://localhost:3333/smurfs')
    .then((res) =>res.json())
    .then((smurfs)=>
    dispatch({
        type:GET_SMURF,
        payload:smurfs
    }))
    .catch((err) => console.log(err))    
}
