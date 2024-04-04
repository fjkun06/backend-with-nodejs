import { createServer } from "http";
import { getList } from "./list.js";
import { addresses } from "./data.js";


createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const responseBody = getList(addresses)

  res.end(responseBody);
}).listen(8080, () =>
  console.log("\nAddress book reachable via http://localhost:8080\n")
);
