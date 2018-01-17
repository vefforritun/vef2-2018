var net = require('net');

var server = net.createServer();
var clients = [];
var i = 0;

server.on('connection', function(client) {
  i++;
  var name = '#' + i;

  console.log('client', i, 'connected');
  clients.push(client);

  client.write('Hi there client ' + name + '\n');

  client.on('data', function(data) {
    clients.forEach(function (c) {
      c.write(name + ': ' + data.toString('utf8'));
    });
  });

  client.on('close', function () {
    console.log(name, 'left');
    clients.splice(clients.indexOf(client), 1);
  });
});

server.listen(9000);
