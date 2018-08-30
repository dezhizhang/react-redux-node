import React from 'react';
import PropTypes from 'prop-types';

const GameList = ({games})=>{
    const emptyMessage=(
        <p>暂无数据</p>
    );
    const gameList =(
        <p>list</p>
    )

    return (<div>
        { games.length ===0 ? emptyMessage: gameList}
    </div>)
}

GameList.propTypes={
    game:PropTypes.array.isRequired

}

export default GameList;
