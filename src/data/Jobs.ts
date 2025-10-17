/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Ingénieur R&D en Computer Vision (Stage)",
        startDate: "2025-03-01",
        endDate: "2025-09-30",
        company: "FittingBox",
        location: "Toulouse, France",
        description: "Développement d'outils Python temps réel pour la mesure de paramètres oculaires sur images 2D et le positionnement dynamique de lunettes sur avatars 3D.",
        goals: [
            "Conception de pipelines temps réel en Python/OpenCV pour le traitement et la détection oculaire",
            "Implémentation algorithmique pour l'estimation précise de paramètres visuels",
            "Développement d'interfaces graphiques et la visualisation des résultats",
            "Optimisation du code et synchronisation des traitements en temps réel"
        ],
        currentJob: true,
    },
    {
        title: "Ingénieur Conception Robotique (Stage)",
        startDate: "2024-04-01",
        endDate: "2024-07-31",
        company: "YELLOLAB INPHB",
        location: "Yamoussoukro, Côte d'Ivoire",
        description: "Conception d'un robot mobile sous ROS 2: SLAM, localisation, commande et intégration embarquée sous contraintes temps réel.",
        goals: [
            "Développement de systèmes SLAM pour la navigation autonome",
            "Intégration embarquée avec Raspberry Pi et microcontrôleurs",
            "Programmation en C++ et Python pour ROS 2",
            "Tests et validation des systèmes robotiques"
        ],
        currentJob: false,
    },
    {
        title: "Technicien en Laboratoire Électrique (Stage)",
        startDate: "2023-07-01",
        endDate: "2023-08-31",
        company: "TRESCAL",
        location: "Toulouse, France",
        description: "Vérification et étalonnage d'appareils de mesure électrique (métrologie).",
        goals: [
            "Étalonnage d'instruments de mesure électrique",
            "Vérification de conformité des équipements",
            "Rédaction de rapports de métrologie",
            "Maintenance préventive des équipements"
        ],
        currentJob: false,
    },
    {
        title: "Programmeur Électronique (Freelance)",
        startDate: "2022-10-01",
        endDate: "2023-01-31",
        company: "GEN'ETHIC",
        location: "Abidjan, Côte d'Ivoire",
        description: "Schéma électronique pour une station mobile de recharge d'ordinateur, dimensionnement et validations.",
        goals: [
            "Conception de schémas électroniques avec Eagle",
            "Dimensionnement des composants électroniques",
            "Tests et validations des prototypes",
            "Documentation technique des solutions"
        ],
        currentJob: false,
    },
    {
        title: "Responsable/Technicien d'Équipement",
        startDate: "2021-11-01",
        endDate: "2023-02-28",
        company: "NALCO WATER",
        location: "Abidjan, Côte d'Ivoire",
        description: "Mise en service et maintenance d'équipements automatisés et connectés.",
        goals: [
            "Installation et configuration d'équipements industriels",
            "Maintenance préventive et corrective",
            "Programmation d'automates et systèmes connectés",
            "Formation des équipes techniques"
        ],
        currentJob: false,
    },
    {
        title: "Responsable Projet Robotique & Électronique",
        startDate: "2020-03-01",
        endDate: "2021-10-31",
        company: "Côte d'Ivoire Drone (CI-Drone)",
        location: "Abidjan, Côte d'Ivoire",
        description: "Pilotage d'une équipe (6 personnes) sur deux projets: robot et cabine de désinfection. Intégration embarquée, communication et essais terrain.",
        goals: [
            "Management d'équipe de 6 développeurs",
            "Conception de robots de désinfection COVID-19",
            "Développement de drones autonomes pour reboisement",
            "Intégration de systèmes embarqués et communications"
        ],
        currentJob: false,
    },
];
export default workExperience;