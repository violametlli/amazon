const functions = require("firebase-functions");
const express= require("express");
const cors =require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IdXvxFCNhSEg9e7D9IElN9gXC5MLtvo9JACMZ43WiUNOiv1YC3eF8csPwCzbRzQWZ5i00BjQzMabCNesknSINTq00SXeO9iDw')

//API

//App config
const app=express();

//Middleware
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get("/",(request,response)=>response.status(200).send('hello'))
app.post("/payments/create",async (request,response)=>{
    const total=request.query.total;
    
    console.log('payment request recived', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",

    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});


//Listen commands
exports.api=functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/challenge-b40f5/us-central1/api