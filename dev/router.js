function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    var fs = require('fs');
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        fs.readFile('./hello.html', 'utf-8', function (err, data) {
            console.log(data);
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            response.write(data);

            response.end();
        });
    }
}

exports.route = route;
