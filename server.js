require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 9000;

app.post('/scan-url', async(req, res) =>{
    const {url} = req.body;

    try{
        const response = await axios.post(
            'https://api.cloudmersive.com/virus/scan/website',
            {Url: url},
            {headers: {'Apikey': API_KEY}}
        );
        res.json(response.data)
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})