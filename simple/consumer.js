const amqp = require('amqplib');
const q = 'tasks';

function logger(msg) {
  const ch = this;
  if (msg) {
    console.log(msg.content.toString());
    ch.ack(msg);
  }
}

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q)
    .then(ok => ch.consume(q, logger.bind(ch)))
  )
  .catch(console.warn);
