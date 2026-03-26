const mockBuilds = [
    {
        id: 1,
        className: "Iop",
        element: "Terre",
        title: "Iop Terre Dommages Poussée Lv. 200",
        description: "Un build classique et dévastateur basé sur les dommages de poussée et la Colère de Iop.",
        author: "Huzounet",
        link: "https://huzounet.fr/builds/iop-terre"
    },
    {
        id: 2,
        className: "Cra",
        element: "Feu",
        title: "Crâ Feu Retrait PM Lv. 200",
        description: "Excellent pour le contrôle à distance avec Flèche Explosive et un bon retrait PM.",
        author: "DofusBook User",
        link: "https://www.dofusbook.net/fr/equipements/12345-cra-feu"
    },
    {
        id: 3,
        className: "Feca",
        element: "Eau",
        title: "Féca Eau Distance/Bottes de Classe Lv. 200",
        description: "Le fameux Féca Eau avec une énorme portée et des dégâts de zone constants.",
        author: "Gamosaurus",
        link: "https://www.gamosaurus.com/jeux/dofus/dofus-guide-stuff-feca-eau"
    },
    {
        id: 4,
        className: "Sram",
        element: "Air",
        title: "Sram Air Poison/Réseau Lv. 200",
        description: "Jouez avec les poisons et un réseau d'Arnaque mortel. Très mobile.",
        author: "Skyyart",
        link: "https://www.dofusbook.net/fr/equipements/67890-sram-air"
    },
    {
        id: 5,
        className: "Pandawa",
        element: "Multi",
        title: "Pandawa Multi Do Cri Tank Lv. 200",
        description: "Le couteau suisse absolu, capable de tanker tout en infligeant de lourds dégâts critiques.",
        author: "Huzounet",
        link: "https://huzounet.fr/builds/panda-multi"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const buildForm = document.getElementById("build-form");
    const classSelect = document.getElementById("class-select");
    const elementSelect = document.getElementById("element-select");
    const resultsSection = document.getElementById("results-section");

    buildForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const selectedClass = classSelect.value;
        const selectedElement = elementSelect.value;

        if (!selectedClass || !selectedElement) {
            alert("Veuillez sélectionner une classe et un élément.");
            return;
        }

        searchBuilds(selectedClass, selectedElement);
    });

    function searchBuilds(className, element) {
        // Nettoyer les résultats précédents
        resultsSection.innerHTML = "";

        // Filtrer les builds
        const filteredBuilds = mockBuilds.filter(
            (build) => build.className === className && build.element === element
        );

        if (filteredBuilds.length > 0) {
            // Afficher les builds trouvés
            renderBuilds(filteredBuilds);
        } else {
            // Afficher le message d'erreur et les liens de secours
            renderFallback(className, element);
        }
    }

    function renderBuilds(builds) {
        const title = document.createElement("h2");
        title.textContent = `Builds trouvés (${builds.length}) :`;
        resultsSection.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "builds-grid";

        builds.forEach((build) => {
            const card = document.createElement("div");
            card.className = "build-card";

            card.innerHTML = `
                <div class="build-card-header">
                    <h3>${build.title}</h3>
                    <span class="badge badge-${build.element.toLowerCase()}">${build.element}</span>
                </div>
                <div class="build-card-body">
                    <p>${build.description}</p>
                    <p><strong>Auteur :</strong> ${build.author}</p>
                </div>
                <div class="build-card-footer">
                    <a href="${build.link}" target="_blank" rel="noopener noreferrer" class="btn-link">Voir le build en détail</a>
                </div>
            `;

            grid.appendChild(card);
        });

        resultsSection.appendChild(grid);
    }

    function renderFallback(className, element) {
        const fallbackContainer = document.createElement("div");
        fallbackContainer.className = "fallback-container";

        fallbackContainer.innerHTML = `
            <h2>Oups ! Aucun build trouvé.</h2>
            <p>Nous n'avons pas encore de build spécifique pour <strong>${className} ${element}</strong> dans notre base de données.</p>
            <p>Ne vous inquiétez pas, vous pouvez sûrement trouver votre bonheur sur ces sites de référence de la communauté Dofus :</p>

            <div class="external-links">
                <a href="https://www.dofusbook.net/fr/equipements" target="_blank" rel="noopener noreferrer" class="external-link db-link">
                    Rechercher sur DofusBook
                </a>
                <a href="https://huzounet.fr/" target="_blank" rel="noopener noreferrer" class="external-link huz-link">
                    Voir les builds de Huzounet
                </a>
                <a href="https://www.gamosaurus.com/jeux/dofus/dofus-guides-stuff" target="_blank" rel="noopener noreferrer" class="external-link gamo-link">
                    Guides Stuff Gamosaurus
                </a>
            </div>
        `;

        resultsSection.appendChild(fallbackContainer);
    }
});
