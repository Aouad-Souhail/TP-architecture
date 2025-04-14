class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        view.logiqueAffichageClick(desc => {
            model.addTache(desc);
            view.afficherTaches(model.getTaches());
        });
    }

    init() {
        this.view.afficherTaches(this.model.getTaches());
    }
}

const controller = new Controller(new Model(), new View());
controller.init();
