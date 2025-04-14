class View {
    constructor() {
        this.listeTacheRajouter = document.getElementById('liste-des-taches');
        this.tacheRajouter = document.getElementById('la-tache-rajouter');
        this.boutonRajouterTache = document.getElementById('bouton-ajouter');
    }

    afficherTaches(taches) {
        this.listeTacheRajouter.innerHTML = '';
        taches.forEach(tache => {
            const li = document.createElement('li');
            li.textContent = tache;
            this.listeTacheRajouter.appendChild(li);
        });
    }

    getTacheRajouter() {
        return this.tacheRajouter.value.trim();
    }

    logiqueAffichageClick(callback) {
        this.boutonRajouterTache.addEventListener('click', () => {
            const description = this.getTacheRajouter();
            if (description) {
                callback(description);
                this.tacheRajouter.value = '';
            }
        });
    }
}
