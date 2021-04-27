import './App.css';

import PlayerList from './Player/PlayerList'
import PlayerSingle from './Player/PlayerSingle'
import PlayerForm from './Player/PlayerForm'

// import Player from './Player/Player'
import React from 'react';
import axios from 'axios'

import Modal from './Modal'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      players: [],
      currentPlayer: {}
    }

    this.add_player_model = 'add_player_model'

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  componentDidMount(){
    const url = 'http://localhost:4000/players'
    axios.get(url)
      .then((response)=>{
        this.setState({
          players: response.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  updateCurrentPlayer(item){
    this.setState({
      currentPlayer:item
    })
  }

  render(){
    return (
      <div className="container-fluid">
        
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red modal-trigger" data-target={this.add_player_model} onClick={()=>console.log('add pressed')}>
            <i className="large material-icons">add</i>
          </a>
        </div>
        {/* <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Modal
        </a> */}
        <Modal triggerName={this.add_player_model} />
      
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="#" className="brand-logo">Soccer Managment</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer}/></div>
          <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm/></div>
        </div>
      </div>
    );
  }
}

export default App;
