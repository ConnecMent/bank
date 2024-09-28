const pino = require('pino');
const pinoRoll = require('pino-roll');


const rollStream = pinoRoll({
  frequency: 3600000, 
  maxAge: '2h',
  file: './empty', 
});


const logger = pino({
  level: 'info',
  transport: {
    
    targets: [
      { target: 'pino-pretty', },
      { target: 'pino/file', options: { destination: './logfile'}}
    ],
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
    },
  },
}, rollStream);

setInterval(() => {
  const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
  const randomLevel = logLevels[Math.floor(Math.random() * logLevels.length)];

  logger[randomLevel](`Logging at level: ${randomLevel}`);

}, 10 * 1000);
