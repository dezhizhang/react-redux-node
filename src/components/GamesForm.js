import React from 'react';

class GamesForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            cover:'',
        }
    }
    handleSubmit=(ev)=>{
        ev.preventDefault();
        
    }
    handleChange=(ev)=>{
        this.setState({[ev.target.name]:ev.target.value})
    }
    render(){
        return (<div>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <h1>add mew games</h1>
              <div className='field'>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
              </div>
              <div className='field'>
                <label htmlFor='cover'>Cover Url</label>
                <input type='text' value={this.state.cover} onChange={this.handleChange} name='cover'/>
              </div>
              <div className='field'>
                {this.state.cover !='' && <img src={this.state.cover} alt='cover' className='ui small bordered image'/>}
              </div>
              <div className='field'>
                <button className='ui primary button'>Save</button>
              </div>

            </form>
        </div>)
    }
}

export default GamesForm;
