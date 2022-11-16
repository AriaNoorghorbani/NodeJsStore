const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<header><title>Input Message</title></header>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk)
        })

        return req.on('end', () => {
            parsedBody = Buffer.concat(body).toString()
            message = parsedBody.split('=')[1]
            console.log(message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<header><title>My first nodeJs</title></header>')
    res.write('<body><h1>Hello from first nodeJs app</h1></body>')
    res.write('</html>')
    res.end()
}

// module.exports = requestHandler

exports.handler = requestHandler