const fs = require('fs-extra');
const path = require('path');
const pino = require('pino');
const pinoRoll = require('pino-roll');

const logDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const rollStream = pinoRoll({
  dest: path.join(logDir, 'log-%DATE%.log'),
  frequency: '1h',
  date_format: 'YYYY-MM-DD-HH',
  maxAge: '2h',
});

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

setInterval(() => {
  const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
  const randomLevel = logLevels[Math.floor(Math.random() * logLevels.length)];
  logger[randomLevel](`Logging at level: ${randomLevel}`);
}, 10 * 1000);
