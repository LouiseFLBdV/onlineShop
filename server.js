const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const publicPath = './public';
    let body = null;
    try {
        body = fs.readFileSync(`${publicPath}${req.url}`);
    } catch (event){
        console.log(event);
        body = fs.readFileSync(`${publicPath}${req.url}/index.html`);
    }
    res.end(body);
})

server.listen(3000);

console.log('server started');
