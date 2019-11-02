class paymentControl {
    #id;
    #lastPayment; //Esto es de tipo Product

    constructor(id, lastPayment) {
        this.#id= id;
        this.#lastPayment= lastPayment;
    }

    get lastPayment() {
        return this.#lastPayment;
    }

    set newPay(invoice) {
        return //bolean
    }
}

module.exports = {
    paymentControl
}