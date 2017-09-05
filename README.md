# rabbitmq-test
Playing with a messaging system

Notes:
- if a consumer does not acknowledge delivery - the msg will still be delivered *and* stored for later delivery. Verify with `$ rabbitmqctl list_queues name messages_ready messages_unacknowledged`.

### simple
https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
https://github.com/squaremo/amqp.node
```bash
$ brew services run rabbitmq # runs on default port localhost:5672
# start publisher
$ node publisher.js
# run as many consumers as you like in each tab
$ node consumer.js
```

# todos
- [ ] [publisher confirms and consumer prefetch](https://www.rabbitmq.com/confirms.html)

# license
MIT
