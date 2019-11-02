class invoice {
    #id;
    #pay;
    #products;
    #user;
    #cashier
    #date;

    constructor(pay, products , user, cashier, date) {
        this.#pay= pay;
        this.#products = products;
        this.#user = user;
        this.#cashier = cashier;
        this.#date = date;

        this.#newInvoice()
    }

    #newInvoice() {
        return this.#id;
    }
}