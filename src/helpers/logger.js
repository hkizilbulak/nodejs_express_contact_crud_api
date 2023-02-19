const logger = require("pino");
const dayjs = require("dayjs");

const log = logger({
  target: "pino-pretty",
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

module.exports = log;
