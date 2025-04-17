import { Model, TacheAvancee } from './model.js';
import { View } from './view.js';

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.logiqueAffichageClick((description, categorie) => {
            const nouvelleTache = new TacheAvancee(description, categorie);
            model.addTache(nouvelleTache);
            this.mettreAJourTachesAffichees();
        });

        view.logiqueFiltrageCategorie(categorie => {
            this.categorieActive = categorie;
            this.mettreAJourTachesAffichees();
        });

        this.categorieActive = 'toutes'; // Par défaut
    }

    mettreAJourTachesAffichees() {
        const toutesLesTaches = this.model.getTaches();
        let tachesAffichees;

        if (this.categorieActive === 'toutes') {
            tachesAffichees = toutesLesTaches;
        } else {
            tachesAffichees = toutesLesTaches.filter(t => t.categorie === this.categorieActive);
        }

        this.view.afficherTaches(tachesAffichees);
    }

    init() {
        this.mettreAJourTachesAffichees();
    }
}

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        toggleButton.textContent = '☀️ Thème clair';
    } else {
        toggleButton.textContent = '🌙 Thème sombre';
    }
});

const controller = new Controller(new Model(), new View());
controller.init();
