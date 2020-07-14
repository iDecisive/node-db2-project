const express = require('express');

const server = express();

server.use(express.json());

const PORT = 8000;

const db = require('./data/dbConfig.js');

//crud

server.post('/api/cars', (req, res) => {

	db('car-dealer')
		.insert(req.body)
		.then((returned) => {
            if (returned > 0) {
			res.status(201).json(returned);
            } else {
                res.json({message: "Record not created.", returnedValue: returned});
            }

		})
		.catch((err) => {
			res.status(500).json({message: "Server error. Check if VIN is unique! ", error: err});
		});
});

server.get('/api/cars', (req, res) => {

	db('car-dealer')
		.then((returned) => {
			res.status(201).json(returned);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

server.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
