import { 
    addNewPlayer, 
    GetPlayers,
    GetPlayerWithId,
    UpdatePlayer,
    DeletePlayer
} from '../controllers/playerControllers'


const routes = (app) =>{
    app.route('/players')
    .get(GetPlayers)//Get endpoint
    .post(addNewPlayer)//POST endpoint


    // use the same var name from the controller for the player id (PlayerId)
    app.route('/player/:PlayerId')
    .get(GetPlayerWithId) //get a player
    .put(UpdatePlayer) // update a player
    .delete(DeletePlayer) // delete player 
}

export default routes