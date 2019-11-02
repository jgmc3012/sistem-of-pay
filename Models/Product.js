class product {
    #id;
    #value;
    #name;

    constructor(id,value,name) {
        this.#id = id;
        this.#name = name;
        this.#value = value;
    }

    get name() {
        return this.#name;
    }

    get value() {
        return this.#value;
    }
}

module.exports = {
    product
}