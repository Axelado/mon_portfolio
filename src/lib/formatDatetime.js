const formatDatetime = (datetime) => {
    const d = new Date(datetime);
    return d.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
    });
};

export default formatDatetime;