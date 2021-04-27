import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import routes from './routes/SoccerRoutes'

const app = express()
const PORT = 4000

//mongoose connection to db
mongoose.Promise = global.Promise
//this is where u put db ULR
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//pobyparser settup
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(cors())

// include all our routes in the app
routes(app)

//default route
app.get("/", (req,res) =>{
    res.send(`App running at port what ${PORT}`)

})


app.listen(PORT, ()=>{
    console.log(`App running at port blah ${PORT}`)
})