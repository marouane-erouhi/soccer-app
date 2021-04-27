import React from 'react'
import axios from 'axios'

const PlayerList = ({players, updateCurrentPlayer}) => {


    //delete player with id
    const deletePlayer = (player) => {
        const url = `http://localhost:4000/player/${player._id}`
        axios.delete(url)
            .then(res =>{
                console.log(`player ${player.firstName} is deleted`)
            })
            .catch(err=>{
                console.log('axios error:', err)
            })
    }
    
    return ( <div>
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>Players</h4>
            </li>
            {players.map(item =>
                <a  href="#!" 
                    className="collection-item" 
                    key={item._id} 
                    onClick={updateCurrentPlayer.bind(this, item)}>
                        {item.firstName} {item.lastName}

                        <a  href="#!" 
                            className="secondary-content waves-effect waves-light" 
                            onClick={deletePlayer.bind(this, item)}>
                            <i className="material-icons">delete_forever</i>
                        </a>
                        <a  href="#!" 
                            className="secondary-content waves-effect waves-light" 
                            onClick={()=>console.log('edit pressed')}>
                            <i className="material-icons">edit</i>
                        </a>
                </a>
            )}
        </ul>
    </div> );
}
 
export default PlayerList;