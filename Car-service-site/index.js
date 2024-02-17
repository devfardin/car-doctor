const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser())


const logger= async(req, res, next)=>{
    console.log('colled', req.host, req.originalUrl);
    next()
}

const verifyToken=(req, res, next)=>{
    const token= req.cookies.token
    console.log('value of the meddialwere', token);
    if(!token){
        return res.status(401).send({message:'not Authorize'})
    }
    jwt.verify(token, process.env.Access_Token, (error, decoded)=>{
        if(error){
            return res.status(401).send({message: 'Unauthorazed access'})

        }
        req.user= decoded;
        next()
    })
    next()
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sdbmurj.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const serviceCollection = client.db('CarDoctor').collection('services')
        const bookingCollection = client.db('CarDoctor').collection('booking')


        // set token in Cookie 
        app.post('/jwt', logger,verifyToken, async (req, res) => {
            const user = req.body;
            const token = jwt.sign({user}, process.env.Access_Token, { expiresIn: '1h' });
            res.cookie('Token', token, {
                httpOnly: true,
                secure: false,
                // sameSite: 'none'
            }).send({ success: true })
        })


        app.get('/services', logger, async (req, res) => {
            const services = await serviceCollection.find().toArray()
            res.send(services)
        })

        app.get('/booking',verifyToken, logger, async (req, res) => {
            console.log('tokens', req.cookies.Token)
            var query = {};
            if (req.query?.email) {
                query = { email: req.query?.email }
            }
            const booking = await bookingCollection.find(query).toArray()
            res.send(booking)
        })

        app.post('/booking', logger, async (req, res) => {
            const booking = req.body
            const result = await bookingCollection.insertOne(booking)

            res.send(result)
        })
        app.delete('/booking/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await bookingCollection.deleteOne(query)
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Car Doctor is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})