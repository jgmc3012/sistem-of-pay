class people {

    #id;
    #name;
    #document;
    
    get UserId() {
        return this.#id;
    }
}

module.exports = {
    people
}