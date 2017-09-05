const amqp = require('amqplib');
const q = 'tasks';

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q)
    .then(ok => ch.sendToQueue(q, Buffer.from('task A')))
  )
  .catch(console.warn);
