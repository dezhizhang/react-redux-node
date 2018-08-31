import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList'
import { fetchGames } from '../actions/index';


class Games extends React.Component{
    componentDidMount(){
        this.props.fetchGames();
    }
    
    render(){
        console.log(this.props.games);
        
        return(<div>
            <GameList games={this.props.games}/>
        </div>)
    }
}

Games.propTypes={
    games:PropTypes.array.isRequired,
    fetchGames:PropTypes.func.isRequired
}

const mapSateToProps = (state) =>{
    return {
        games:state.games
    }
}

export default connect(mapSateToProps,{ fetchGames })(Games);


