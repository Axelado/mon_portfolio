interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Ingénieur en Systèmes Robotiques & Interactifs",
        startDate: "2022-02-01",
        endDate: "2025-09-30",
        school: "UPSSITECH — Univ. Toulouse III Paul Sabatier",
        location: "Toulouse, France",
        description: "Formation d'ingénieur spécialisée en robotique, conception logicielle, programmation embarquée et automatique. Cursus orienté vers le développement de systèmes robotiques industriels et interactifs.",
        currentUni: true,
    },
    {
        title: "Licence Électrotechnique & Automatismes Industriels — Mention Bien",
        startDate: "2017-09-01",
        endDate: "2020-08-31",
        school: "INPHB — Institut National Polytechnique F. Houphouët-Boigny",
        location: "Yamoussoukro, Côte d'Ivoire",
        description: "Formation en électrotechnique, automatisme, électronique et microcontrôleurs. Spécialisation dans les systèmes automatisés industriels et la programmation embarquée.",
        currentUni: false,
    },
    {
        title: "Baccalauréat Série S — Mention Assez bien",
        startDate: "2016-09-01",
        endDate: "2017-07-31",
        school: "Lycée",
        location: "Côte d'Ivoire",
        description: "Baccalauréat scientifique avec spécialisation en sciences physiques et mathématiques, base solide pour les études d'ingénieur.",
        currentUni: false,
    },
];

export default education;