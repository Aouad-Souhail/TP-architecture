class Model {
    constructor() {
        this.taches = [];
    }

    addTache(tacheDescription) {
        this.taches.push(tacheDescription);
    }

    getTaches() {
        return this.taches;
    }
}
