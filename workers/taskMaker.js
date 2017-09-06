const amqp = require('amqplib');
const q = 'task_queue6';
const msg = process.argv[2] || 1;

function createTask(ch, ok) {
  ch.sendToQueue(q, Buffer.from(msg), { persistent: true });
  console.log('msg sent');
  //process.exit(0);
}

console.log('taskMaker online');

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q, { durable: true })
    .then(createTask.bind(null, ch))
  )
  .catch(console.warn);
