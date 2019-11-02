const pay = require('./Pay').pay;

class transfer extends pay {

    #bankName;
    #date;
    #checked;

    constructor(args) {
        super(args)
    }
}

module.exports = {
    transfer
}