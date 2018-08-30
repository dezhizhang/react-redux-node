import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList'



class Games extends React.Component{
    render(){
        return(<div>
            <GameList games={this.props.games}/>
        </div>)
    }
}

Games.propTypes={
    games:PropTypes.array.isRequired
}

const mapSateToProps = (state) =>{
    return {
        games:state.games
    }
}

export default connect(mapSateToProps)(Games);


