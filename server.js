import { createServer } from "http";
const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const url = new URL(req.url, "http://localhost:8080");
  const body = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Node.js Demo</title>
</head>
<body>
<h1 style="color:green">Hello World ${url.searchParams.get("name")}</h1>
</body>
</html>`;
  res.end(body);
});
server.listen(8080, () =>
  console.log(`Server is listenx to http://localhost:${server.address().port}`)
);
