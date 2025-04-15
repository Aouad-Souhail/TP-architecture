class TaskRenderer {
    render(tache) {
        throw new Error("Méthode abstraite non implémentée");
    }
}

class TravailRenderer extends TaskRenderer {
    render(tache) {
        const li = document.createElement('li');
        li.textContent = tache.description;
        li.style.backgroundColor = '#ffdddd';
        return li;
    }
}

class MaisonRenderer extends TaskRenderer {
    render(tache) {
        const li = document.createElement('li');
        li.textContent = tache.description;
        li.style.backgroundColor = '#ddeeff';
        return li;
    }
}

class DiversRenderer extends TaskRenderer {
    render(tache) {
        const li = document.createElement('li');
        li.textContent = tache.description;
        li.style.backgroundColor = '#ddffdd';
        return li;
    }
}

class RienRenderer extends TaskRenderer {
    render(tache) {
        const li = document.createElement('li');
        li.textContent = tache.description;
        li.style.backgroundColor = '#ffccff';
        return li;
    }
}

class View {
    constructor() {
        this.listeTacheRajouter = document.getElementById('liste-des-taches');
        this.tacheRajouter = document.getElementById('la-tache-rajouter');
        this.boutonRajouterTache = document.getElementById('bouton-ajouter');
        this.selectCategorie = document.getElementById('categorie-select');
    }

    getTacheRajouter() {
        return this.tacheRajouter.value.trim();
    }

    getCategorieSelectionnee() {
        return this.selectCategorie.value;
    }

    logiqueAffichageClick(callback) {
        this.boutonRajouterTache.addEventListener('click', () => {
            const description = this.getTacheRajouter();
            const categorie = this.getCategorieSelectionnee();

            if (description && categorie) {
                callback(description, categorie);
                this.tacheRajouter.value = '';
            }
        });
    }

    afficherTaches(taches) {
        this.listeTacheRajouter.innerHTML = '';

        taches.forEach(tache => {
            let renderer;

            switch (tache.categorie) {
                case 'travail':
                    renderer = new TravailRenderer();
                    break;
                case 'maison':
                    renderer = new MaisonRenderer();
                    break;
                case 'divers':
                    renderer = new DiversRenderer();
                    break;
                case 'perso':
                    renderer = new RienRenderer();
                    break;
            }

            const li = renderer.render(tache);
            this.listeTacheRajouter.appendChild(li);
        });
    }
}

export { View };
