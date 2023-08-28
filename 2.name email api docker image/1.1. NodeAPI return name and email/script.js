const http = require("http")

const PORT = 8006
const HOST = "0.0.0.0"

const server = http.createServer((req, res) => {
    const json_data = JSON.stringify({ name: "Amir Shrestha", email: "simbaamir55@gamil.com"})
    res.end(json_data)
})

server.listen(PORT, HOST, () => {
    console.log(`Server listening to HTTP-Request at https://${HOST}:${PORT}`)
})
