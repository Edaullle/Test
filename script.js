// Dictionnaire des images des classes (URLs génériques Ankama ou placeholders)
const classImages = {
    "Cra": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/9.png",
    "Ecaflip": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/6.png",
    "Eliotrope": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/16.png",
    "Eniripsa": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/7.png",
    "Enutrof": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/3.png",
    "Feca": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/1.png",
    "Forgelance": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/19.png",
    "Huppermage": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/17.png",
    "Iop": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/8.png",
    "Osamodas": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/2.png",
    "Ouginak": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/18.png",
    "Pandawa": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/12.png",
    "Roublard": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/13.png",
    "Sacrieur": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/11.png",
    "Sadida": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/10.png",
    "Sram": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/4.png",
    "Steamer": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/15.png",
    "Xelor": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/5.png",
    "Zobal": "https://s.ankama.com/www/static.ankama.com/dofus/www/game/classes/200/14.png"
};

const mockBuilds = [
    {
        id: 1,
        className: "Iop",
        element: "Terre",
        title: "Iop Terre Dommages Poussée Lv. 200",
        description: "Un build classique et dévastateur basé sur les dommages de poussée et la Colère de Iop.",
        author: "Huzounet",
        link: "https://huzounet.fr/builds/iop-terre",
        items: [
            { name: "Coiffe du Comte Harebourg", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/14207.png" },
            { name: "Cape au Logis", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13317.png" },
            { name: "Bêche Asse", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13813.png" },
            { name: "Dofus Pourpre", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/7000.png" }
        ]
    },
    {
        id: 2,
        className: "Cra",
        element: "Feu",
        title: "Crâ Feu Retrait PM Lv. 200",
        description: "Excellent pour le contrôle à distance avec Flèche Explosive et un bon retrait PM.",
        author: "DofusBook User",
        link: "https://www.dofusbook.net/fr/equipements/12345-cra-feu",
        items: [
            { name: "Masque Séculaire", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/14217.png" },
            { name: "Baguette Hernette", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10901.png" },
            { name: "Trophée Retrait PM", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16091.png" }
        ]
    },
    {
        id: 3,
        className: "Feca",
        element: "Eau",
        title: "Féca Eau Distance/Bottes de Classe Lv. 200",
        description: "Le fameux Féca Eau avec une énorme portée et des dégâts de zone constants.",
        author: "Gamosaurus",
        link: "https://www.gamosaurus.com/jeux/dofus/dofus-guide-stuff-feca-eau",
        items: [
            { name: "Coiffe de Danathor", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12431.png" },
            { name: "Bottes Antrin (Classe)", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/7733.png" },
            { name: "Arc en Racine d'Abraknyde", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/2206.png" }
        ]
    },
    {
        id: 4,
        className: "Sram",
        element: "Air",
        title: "Sram Air Poison/Réseau Lv. 200",
        description: "Jouez avec les poisons et un réseau d'Arnaque mortel. Très mobile.",
        author: "Skyyart",
        link: "https://www.dofusbook.net/fr/equipements/67890-sram-air",
        items: [
            { name: "Masque du Valet Veinard", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/18844.png" },
            { name: "Dagues d'Érysébil", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16279.png" },
            { name: "Dofus Émeraude", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23390.png" }
        ]
    },
    {
        id: 5,
        className: "Pandawa",
        element: "Multi",
        title: "Pandawa Multi Do Cri Tank Lv. 200",
        description: "Le couteau suisse absolu, capable de tanker tout en infligeant de lourds dégâts critiques.",
        author: "Huzounet",
        link: "https://huzounet.fr/builds/panda-multi",
        items: [
            { name: "Masque de Koutoulou", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17706.png" },
            { name: "Hache Chalœil", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/18029.png" },
            { name: "Dofus Turquoise", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12022.png" },
            { name: "Dofus Ocre", img: "https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23391.png" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const buildForm = document.getElementById("build-form");
    const classSelect = document.getElementById("class-select");
    const elementSelect = document.getElementById("element-select");
    const resultsSection = document.getElementById("results-section");
    const classPreviewImage = document.getElementById("class-preview-image");
    const classPreviewPlaceholder = document.getElementById("class-preview-placeholder");

    // Mise à jour de l'image de la classe lors de la sélection
    classSelect.addEventListener("change", (e) => {
        const selectedClass = e.target.value;
        const imageUrl = classImages[selectedClass];

        if (imageUrl) {
            classPreviewImage.src = imageUrl;
            classPreviewImage.alt = selectedClass;
            classPreviewImage.style.display = "block";
            classPreviewPlaceholder.style.display = "none";
        } else {
            classPreviewImage.style.display = "none";
            classPreviewPlaceholder.style.display = "flex";
        }
    });

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

                    <div class="build-items">
                        ${build.items ? build.items.map(item => `
                            <div class="item-slot" title="${item.name}">
                                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1.png'">
                            </div>
                        `).join('') : ''}
                    </div>
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
