const EventEmitter = require('events');

class Pulse extends EventEmitter {
  pulse() {
    this.emit('pulse');
  }

  start(n) {
    this.id = setInterval(() => this.pulse(), n);
  }

  stop() {
    clearInterval(this.id);
  }
}

const pulse = new Pulse();

let i = 0;
pulse.on('pulse', () => {
  i++;
  console.log(`pulse ${i}`);

  if (i === 3) {
    pulse.stop();
  }
});

pulse.start(1000);
