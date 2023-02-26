const path = require('path');
const fs = require('fs');

const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const logPath = path.join(__dirname, '../logs');

module.exports = {
    init: () => {
        if (!fs.existsSync(logPath)) {
            fs.mkdirSync(logPath, { recursive: true });
        }

        global.logger = {
            info: (module, message, ...args) => {
                console.log(`[${date.green}] [${'INFO'.green}] ${module.yellow}: ${message}`, ...args);
            },
            error: (module, message, ...args) => {
                console.log(`[${date.red}] [${'ERROR'.red}] ${module.yellow}: ${message}`, ...args);
                fs.appendFileSync(path.join(logPath, 'error.log'), `[${date}] [ERROR] ${module}: ${message}\r\n`);
            },
            warn: (module, message, ...args) => {
                console.log(`[${date.yellow}] [${'WARN'.yellow}] ${module.yellow}: ${message}`, ...args);
                fs.appendFileSync(path.join(logPath, 'warn.log'), `[${date}] [WARN] ${module}: ${message}\r\n`);
            }
        };
    }
};