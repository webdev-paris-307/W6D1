# Express

- For now we start the server from scratch
- We wil use a boilerplate (a generator)
  - You did not have to start React from scratch

1. `npm init -y` This create a package.json file.
   1. This `package.json` file is used to install and reference installed packages.
   2. When you share your project with others, you will share this package.json (and package-lock.json) files.
   3. Those two files reference the packages version which are installed.
2. We can install express as a dependency:

```bash
npm install express
```

3. Install nodemon as a dev dependency:

```bash
npm i -D nodemon
```

---

```bash
npm install --save-dev nodemon
```

4. We now want to create some scripts in our package.json

```json
{
	//...
	"scripts": {
		//Allow you to execute npm run dev
		"dev": "nodemon app.js",
		"start": "node app.js"
	}
	//...
}
```

5. Create an app.js file

```bash
touch app.js
```

6. In the app.js file, we now need to create our Express application.

```javascript
// We need to import express
const express = require("express")
// We need to create the app.
const app = express()

// We will handle all of the routes just below :)

// We need our server to listen on a specific port.
app.listen(3000, () => console.log("Server running on http://localhost:3000"))
```

7. Don't forget to run your server.
8. We might want to create a test route (healthcheck route)

```js
/**
 * First argument: thePath
 * Second argument a callback, a controller, a route
 * This callback take three arguments:
 * - Request  (Client sent a request to the server for a specific endpoint)
 * - Response (What the server send back)
 * - Next (a function allowing me to go to the next middleware...)
 */
app.get("/", (req, res, next) => {
	res.json({ message: "Everything is working fine." })
})
```
