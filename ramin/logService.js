const fs = require('fs-extra');
const path = require('path');
const pino = require('pino');
const { setInterval } = require('timers');

const logDir = path.join(__dirname, 'logs');
const currentHour = new Date().getHours();

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const streams = [
  { stream: pino.transport({
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
      },
    }), },
  { stream: pino.destination({
      dest: path.join(logDir, `log-${new Date().toISOString().slice(0, 13).replace(/:/g, '-')}.log`),
      sync: false
    }) 
  },
];

const logger = pino({ level: 'info' }, pino.multistream(streams));


setInterval(() => {
  const now = new Date();
  
  const timestamp = now.toISOString().slice(0, 13).replace(/:/g, '-');
  const newLogFile = path.join(logDir, `log-${timestamp}.log`);
  
  if (newLogFile !== currentHour) {
    logger.info(`Changing log file to: ${newLogFile}`);
    logger.streams[1].stream = pino.destination({ dest: newLogFile, sync: false });
  }
  
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).getTime();
  fs.readdirSync(logDir).forEach(file => {
    const filePath = path.join(logDir, file);
    if (fs.statSync(filePath).mtime.getTime() < twoHoursAgo) {
      fs.unlinkSync(filePath);
      logger.info(`Deleted log file: ${filePath}`);
    }
  });
}, 60 * 60 * 1000); 
setInterval(() => {
  const logLevels = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
  const randomLevel = logLevels[Math.floor(Math.random() * logLevels.length)];
  logger[randomLevel](`Logging at level: ${randomLevel}`);
}, 10 * 1000); 
