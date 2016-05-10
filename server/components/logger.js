var winston = require('winston');

var customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};


var logger = new(winston.Logger)({
  level: 'debug',
  levels: customLevels.levels,
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './server/logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true
    })
  ]
});

var datalogger = new (winston.Logger) ({
    level: 'info',
    transports: [
        new (winston.transports.File) ({
            filename: './server/logs/project-data.log',
            maxsize: 1024 * 1024 * 10 // 10MB
        })
    ]
});

// make winston aware of your awesome colour choices
winston.addColors(customLevels.colors);

var Logging = function() {
    var loggers = {};

    // always return the singleton instance, if it has been initialised once already.
    if (Logging.prototype._singletonInstance) {
        return Logging.prototype._singletonInstance;
    }

    this.getLogger = function(name) {
        return loggers[name];
    }

    Logging.prototype.get = this.getLogger;

    loggers['project-debug.log'] = logger;
    loggers['project-data.log'] = datalogger;

    Logging.prototype._singletonInstance = this;
};

exports.Logging = Logging;
//module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};