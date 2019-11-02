const pay = require('./Pay');

class cash extends pay {
    constructor(args) {
        super(...args)
    }
}

module.exports = {
    cash
}