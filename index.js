var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    let route = req.url.replace("/", "");

    let request_url = route === "" || route === "/" ? "index.html" : route;

    fs.exists(request_url, (exist) => {
      if (Boolean(exist) === false) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("Page Not Found");
        return null;
      }

      fs.readFile(request_url, function (err, data) {
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    });
  })
  .listen(3000);
