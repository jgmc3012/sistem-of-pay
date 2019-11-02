const pay = require('./Pay');

class card extends pay {
    constructor(args) {
        super(...args)
    }
}

module.exports = {
    card
}