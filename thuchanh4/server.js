let http = require('http');
let fs = require('fs');
let formidable = require('formidable');

let users = [];

let server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {

        let form = new formidable.IncomingForm();

        form.uploadDir = "upload/"
        form.parse(req, function (err, fields, files) {

            let userInfo = {
                name: fields.name,
                email: fields.email,
                password: fields.password,
            };

            if (err) {

                console.error(err);
                return res.end(err);
            }

            let tmpPath = files.avatar.filepath;

            let newPath = form.uploadDir + files.avatar.originalFilename;

            userInfo.avatar = newPath;

            fs.rename(tmpPath, newPath, (err) => {
                if (err) throw err;
                let fileType = files.avatar.mimeType;
                let mimeTypes = ["image/jpeg", "image/jpg", "image/png"];
                if (mimeTypes.indexOf(fileType) === -1) {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    return res.end('The file is not in the correct format: png, jpeg, jpg');
                }
            });
            users.push(userInfo);
            console.log(users)
            return res.end('Register success!');
        });
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});