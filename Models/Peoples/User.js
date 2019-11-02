const people = require('./People').people

class user extends people {

    #paymentControl;

    constructor(paymentControl) {
        this.#paymentControl = paymentControl
    }
}

module.exports = {
    user
}