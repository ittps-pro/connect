import * as http from 'http';
import { createProxy } from 'proxy';



let port = 5462
const server = createProxy(http.createServer());


let route  = []
server.listen(port, () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});
