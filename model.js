class BaseTache {
    constructor(description) {
        this.description = description;
    }
}

class TacheAvancee extends BaseTache {
    constructor(description, categorie) {
        super(description);
        this.categorie = categorie;
    }
}

class Model {
    constructor() {
        if (Model.instance) {
            return Model.instance;
        }

        this.taches = [];
        Model.instance = this;
    }

    addTache(tache) {
        this.taches.push(tache);
    }

    getTaches() {
        return this.taches;
    }
}

export { Model, TacheAvancee };
