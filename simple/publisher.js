const amqp = require('amqplib');
const q = 'tasks';
let i = 0;

function publishTasks(ch) {
  ch.sendToQueue(q, Buffer.from(`task ${++i}`));
}

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q)
    .then(ok => setInterval(publishTasks.bind(null, ch), 5000))
  )
  .catch(console.warn);
