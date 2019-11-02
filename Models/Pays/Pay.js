class pay {
    #id;
    #amount;
    #referencerNum;

    constructor(amount, referencerNum, id) {
        this.#amount = amount;
        this.#referencerNum = referencerNum;
    }

    get id() {
        return this.#id;
    }
}

module.exports = {
    pay
}