import React from 'react';
import PropTypes from 'prop-types';
import CameCard from './CameCard'

const GameList = ({games})=>{
    const emptyMessage=(
        <p>暂无数据</p>
    );
    const gameList =(
       <div className='ui four card'>
         {
             games.map(game=><CameCard game={game} key={game._id}/>)
         }
       </div> 
    )

    return (<div>
        { games.length ===0 ? emptyMessage: gameList}
    </div>)
}

GameList.propTypes={
    game:PropTypes.array.isRequired

}

export default GameList;
