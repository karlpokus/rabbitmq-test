const amqp = require('amqplib');
const q = 'tasks';

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q)
    .then(ok => {
      return ch.consume(q, msg => {
        if (msg) {
          console.log(msg.content.toString());
          ch.ack(msg);
        }
      });
    })
  )
  .catch(console.warn);
