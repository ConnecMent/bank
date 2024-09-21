const fs = require('fs-extra');
const path = require('path');
const pino = require('pino');
const pinoRoll = require('pino-roll');

const logDir = path.join(__dirname, 'logs');


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}


const rollStream = pinoRoll({
  dest: path.join(logDir, 'log.log'), // Make sure this is a correct path
  frequency: 3600000, 
  date_format: 'YYYY-MM-DD-HH', // Correct date format
  maxAge: '2h', // Keeps logs for 2 hours
});


// Create the logger instance
const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
    },
  },
}, rollStream);


// Log at different levels periodically
setInterval(() => {
  const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
  const randomLevel = logLevels[Math.floor(Math.random() * logLevels.length)];

  logger[randomLevel](`Logging at level: ${randomLevel}`);
  
  const now = new Date();
  const mesage = now + ` Logging at level: ${randomLevel}\n`;
  
  fs.appendFile('logs/log.log.1', mesage , (err) => {
    if (err) 
        throw Error;
});
}, 10 * 1000);
