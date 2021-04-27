import React from 'react'


const PlayerSingle = ({player}) => {
    return ( 
        
    <div className="row">
        <div className="col s12">
            <div className="card">
                <div className="card-image">
                    <img src="soccer.jpeg" />
                    <span className="card-title">{player.firstName} {player.lastName}</span>
                </div>
                <div className="card-content">
                    <p>Phone: {player.phone || "N/A"} - Email: {player.email}</p>
                </div>
                <div className="card-action">
                    Team: {player.team || "N/A"}
                </div>
            </div>
        </div>
    </div>
          
    );
}
 
export default PlayerSingle;