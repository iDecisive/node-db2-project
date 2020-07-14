const express = require('express');

const server = express();

server.use(express.json());

const PORT = 8000;

const db = require('./data/dbConfig.js');

//crud

server.post('/api/cars', (req, res) => {
	console.log(req.body);

	db('car-dealer')
		.insert(req.body, 'vin')
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
