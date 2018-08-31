import { SET_GAMES}  from '../constants/index';

export const setGames = (games) =>{
    return {
        type:'SET_GAMES',
        games
    }
}

export const fetchGames = () =>{
    return dispatch => {
        return fetch('/api/games').then(res=>res.json()).then(data=>dispatch(setGames(data.games)))
    }
}

const handleResponse = (response)=>{
    if(response.ok){
        return response.json()
    }else{
        let error = new Error(response.statusText);
        error.response=response;
        throw error;

    }
}

export const saveGames = (data) =>{
     return dispatch => {
        return fetch('/api/games',{
             method:'post',
             body:JSON.stringify(data),
             headers:{
                 'Content-Type':'application/json'
             }
         }).then(handleResponse)
     }
}