import { Model, TacheAvancee } from './model.js';
import { View } from './view.js';

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.logiqueAffichageClick((description, categorie) => {
            const nouvelleTache = new TacheAvancee(description, categorie);
            model.addTache(nouvelleTache);
            view.afficherTaches(model.getTaches());
        });
    }

    init() {
        this.view.afficherTaches(this.model.getTaches());
    }
}

const controller = new Controller(new Model(), new View());
controller.init();
