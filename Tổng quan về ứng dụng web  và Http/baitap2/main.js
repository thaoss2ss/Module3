const http = require('http');
const fs = require('fs');
const qs = require('qs')

const server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.method === 'GET') {
        fs.readFile('./calculator.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data);
            fs.readFile('./calculator.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                } else {
                    let result;
                    switch (userInfo.math) {
                        case '+':
                            result= +userInfo.number1 + +userInfo.number2;
                            break;
                        case '-':
                            result = +userInfo.number1 - +userInfo.number2;
                            break;
                        case '*':
                            result = +userInfo.number1 * +userInfo.number2;
                            break;
                        case '/':
                            result = +userInfo.number1 / +userInfo.number2;
                            break;
                    }
                    datahtml = datahtml.replace('{results}', result);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(datahtml);
                    return res.end();
                }
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8888, function () {
    console.log('server running at localhost:8888 ')
});