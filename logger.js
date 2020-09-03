const {
    createLogger,
    transports,
    format
} = require("winston");
const { isPrime } = require("./prime");

const logger = createLogger({

    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(),format.simple())
        }),

        new transports.File({

            filename: 'prime.log',
            level: 'info',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
});

module.exports = logger;