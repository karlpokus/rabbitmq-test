# rabbitmq-test
Playing with a messaging system using the [tuts](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)

Notes:
- `ch.ack(msg)` to prevent loosing data if worker dies. This marks messages as done. Otherwise they will be re-sent.
- Set `durable` and `persistent` to true to persist the queue if rabbitMQ should die.
- `ch.prefetch(<num>)` to only send `num` messages at a time to a consumer. Note: this may cause a build-up.
- rabbitMQ runs on default port `5672`

### simple
```bash
# start publisher
$ node publisher.js
# run as many consumers as you like in each tab
$ node consumer.js
```

### workers
```bash
# run n times
$ node taskMaker.js [num]
$ node worker.js
```

# global todos
- [x] node api [docs](http://www.squaremobius.net/amqp.node/channel_api.html)
- [x] message durability
- [ ] [publisher confirms](https://www.rabbitmq.com/confirms.html)
- [ ] [consumer prefetch](https://www.rabbitmq.com/consumer-prefetch.html)
- [ ] [Acknowledging Multiple Deliveries at Once](https://www.rabbitmq.com/confirms.html)

# license
MIT
