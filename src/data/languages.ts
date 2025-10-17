interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Français",
        level: "Langue maternelle",
        description: "Langue maternelle, maîtrise parfaite à l'oral et à l'écrit",
        show: true
    },
    {
        name: "Anglais",
        level: "B2 (TOEIC)",
        description: "Niveau B2 certifié TOEIC, compétences professionnelles en anglais technique",
        show: true
    },
    {
        name: "Spanish",
        level: "Notions",
        description: "Quelques notions de base",
        show: false
    },
    {
        name: "Italian",
        level: "Débutant",
        description: "Niveau débutant",
        show: false
    }
];

export default languages;