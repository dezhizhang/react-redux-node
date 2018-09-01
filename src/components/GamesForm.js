import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGames } from '../actions/index'
import { Redirect } from 'react-router-dom';

class GamesForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            cover:'',
            done:false,
            loading:false,
            errors:{}
        }
    }
    handleSubmit=(ev)=>{
        ev.preventDefault();
        let errors={};
        if(this.state.title==='') errors.title="Can't is empty";
        if(this.state.cover==='') errors.cover="Can't is empty";
        this.setState({errors});

        const isValide = Object.keys(errors).length===0;
        if(isValide){
            const { cover,title } = this.state;
            this.setState({
                loading:true
            })
            this.props.saveGames({ title,cover }).then(
                ()=>{ this.setState({ done: true})},
                (err)=>err.response.json().then(({errors})=>this.setState({errors,loading:false}))
            )

        }
        this.setState({done:true});

        
    }
    handleChange=(ev)=>{
        if(!!this.state.errors[ev.target.name]){
            let errors=Object.assign({},this.state.errors);
            delete errors[ev.target.name];
            this.setState({
                [ev.target.name]:ev.target.value,
                errors,

            })
        }else{
            this.setState({
                [ev.target.name]:ev.target.value
            })
        }
        
    }
    render(){
        console.log(this.state.done);

        let form=(
            <div>
                <form className={ classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>add mew games</h1>
                <div className={ classnames('field',{error:!!this.state.errors.title})}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
                    {this.state.errors.title}
                </div>
                <div className={ classnames('field',{error:!!this.state.errors.cover})}>
                    <label htmlFor='cover'>Cover Url</label>
                    <input type='text' value={this.state.cover} onChange={this.handleChange} name='cover'/>
                    <span>{this.state.errors.cover}</span>
                </div>
                <div className='field'>
                    {this.state.cover !='' && <img src={this.state.cover} alt='cover' className='ui small bordered image'/>}
                </div>
                <div className='field'>
                    <button className='ui primary button'>Save</button>
                </div>

                </form>
            </div>
        )
        return (
          <div>
              { this.state.done ? <Redirect to='/games'/>: form}
          </div>
        )
    }
}

export default connect(null,{ saveGames })(GamesForm);

