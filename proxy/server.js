
const http = require("http")
//import { createProxy } from 'proxy';
const { createProxy } = require("../lib/proxy")
const { createProxyAgent } = require("http-proxy-agent")

const net = require("net")
// const config = getProxyConfig(request.ip)

const w = http.createServer()
const server = createProxy(w);


//server.on("event", onProxyEvent)

// ...Promise.resolve


server.listen(3128, () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});
