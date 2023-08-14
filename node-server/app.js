const http = require("http")

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.write("<h1>Hello world of servers</h1>")
		response.end()
	} else if (request.url === "/categories") {
		response.write(`
      <ul>
      <li>Cats</li>
      <li>Dogs</li>
      <li>Parrot</li>
      <li>Bonsai</li>
      </ul>
    `)
		response.end()
	} else {
		response.statusCode = 404
		response.write("Weird things happen with statusCode in a node server")
		response.end()
	}
})

server.listen(3000)
