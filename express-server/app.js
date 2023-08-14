/**
 * In a node (express) Server, you need to use require to import a file / a package.
 */

// import express from 'express'
// const toto = require("express")

// // express is a function that returns an ob ject (app) with various methods
// const tata = toto()

// tata.get("/", (thing, stuff, oups) => {
// 	stuff.send("<h1>homepage</h1>")
// })

// tata.get("/students", (req, res, next) => {})

// tata.listen(3000, () => console.log("Server running on http://localhost:3000"))

const allStudents = [
	{ name: "Bob", age: 24 },
	{ name: "Alice", age: 26 },
	{ name: "Cassandre", age: 30 },
]

const express = require("express")

const app = express()

//Setting our default folder for the static files
app.use(express.static("public"))

app.get("/", (req, res, next) => {
	res.send("Homepage")
})

// app.get('/students', (req, res, next) => {})

app.get("/students", displayStudents)

function displayStudents(req, res, next) {
	// To send out JSON data, we can use res.json(AJSONFormattedObject)
	res.json(allStudents)
}

// __dirname is the absolute path toward app.js, we need it because your absolute path is not the same
// As the one in the depoyed server
app.get("/about", (req, res, next) => {
	console.log(__dirname)
	res.sendFile(__dirname + "/views/about.html")
})

// 404 PAGE
app.get("*", (req, res, next) => {
	res.status(404)
	// res.send("<h1>This is a 404 page</h1>")
	res.json({ message: `The route ${req.originalUrl} does not exist.` })
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
