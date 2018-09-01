import { SET_GAMES, ADD_GAMES } from '../constants'
const games = (state=[],action)=>{
    switch(action.type){
        case SET_GAMES:
         return action.games;
        case ADD_GAMES:
        return [
            ...state,
            action.games
        ]
        default:
        return state;

    }
}

export default games;
