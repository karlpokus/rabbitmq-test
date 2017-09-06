const amqp = require('amqplib');
const q = 'task_queue6';

function doAck(ch, msg, content) {
  console.log(content, 'done');
  ch.ack(msg);
}

function doWork(ch, msg) {
  const content = msg.content.toString();
  const delay = Number(content) * 1000;

  console.log(content, 'Received');
  setTimeout(doAck.bind(null, ch, msg, content), delay);
}

console.log('worker online');

amqp.connect('amqp://localhost')
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q, { durable: true })
    .then(ok => ch.consume(q, doWork.bind(null, ch))) // { noAck: true }
  )
  .catch(console.warn.bind(console));
