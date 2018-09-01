import { SET_GAMES,ADD_GAMES }  from '../constants';

export const setGames = (games) =>{
    return {
        type:SET_GAMES,
        games
    }
}

export const fetchGames = () => {
    return dispatch => {
      fetch('/api/games')
        .then(res => res.json())
    
    }

  };


const handleResponse = (response)=>{
    if(response.ok){
        return response.json()
    }else{
        let error = new Error(response.statusText);
        error.response=response;
        throw error;

    }
};

export const addGames = (games) =>{
    return {
        type:ADD_GAMES,
        games,
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
         }).then(handleResponse).then(data=> dispatch(addGames(data.games)));
     }
};
