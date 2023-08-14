const express = require("express")
const logger = require("morgan")
const app = express()
const students = require("./data.json")

/**
 * Let's talk about middlewares
 */
app.use(logger("dev"))

/**
 * Let's create our own middleware
 */

app.use((req, res, next) => {
	console.log("In the middleware")
	req.user = { name: "Loop", animal: "horse", status: "cat" }
	next()
})

function isAdmin(req, res, next) {
	if (req.user.status === "admin") {
		next()
	} else {
		res.status(401).json({ message: "Denied." })
	}
}

app.get("/", (req, res, next) => {
	console.log("In the / route")
	console.log(req.user)
	res.json({ message: "Everything is working.", students: students })
})

// app.use(isAdmin)
/**
 * We can leverage the fact that routes are in order
 * use a middleware like the isAdmin before the subsequent routes
 * -> all of the suibsequent routes are accesible only if you are an admin.
 *
 * -> Granularity
 */

app.get("/private", isAdmin, (req, res, next) => {
	res.json({ accountDetails: { quantity: 1_000_000_000, currency: "€" } })
})

app.get("/super-private", isAdmin, (req, res, next) => {
	res.json({ secret: "I kind of like Mac computers now..." })
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
