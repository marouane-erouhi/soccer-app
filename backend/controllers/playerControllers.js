import mongoose from 'mongoose'
import { PlayerSchema } from "../models/PlayerModel"

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body)
    // transaction between the controller and db
    // save player to db
    newPlayer.save((err, Player)=>{

        if(err){
            res.send(err)
        }
        res.json(Player)
    })
}

export const GetPlayers = (req, res) => {

    Player.find({},(err, Player)=>{
        if(err){
            res.send(err)
        }

        res.json(Player)
    })
}

export const GetPlayerWithId = (req, res) => {

    Player.findById(req.params.PlayerId,(err, Player)=>{
        if(err){
            res.send(err)
        }
        
        res.json(Player)
    })
}

export const UpdatePlayer = (req, res) => {
    // {new:true} makes sure that the res contains the updated data
    Player.findOneAndUpdate({_id:req.params.PlayerId}, req.body, {new:true},(err, Player)=>{
        if(err){
            res.send(err)
        }
        
        res.json(Player)
    })
}

export const DeletePlayer = (req, res) => {

    Player.deleteOne({_id:req.params.PlayerId},(err, Player)=>{
        if(err){
            res.send(err)
        }
        
        res.json({message:"Player deleted"})
    })
}