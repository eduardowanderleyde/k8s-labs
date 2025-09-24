const http = require('http');
const port = 3000;
const pod = process.env.POD_NAME || 'unknown';
const msg = process.env.MESSAGE || 'Hello Kubernetes! 🚀';

const server = http.createServer((req, res) => {
  if (req.url === '/health') return res.end('ok');
  res.end(`${msg} | pod=${pod}`);
});
server.listen(port, () => console.log(`Server on ${port}`));
