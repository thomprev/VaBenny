document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vue par défaut : grille mensuelle
        locale: 'fr', // Locale en français
        events: [
            {
                title: 'Réservé',
                start: '2024-11-20', // Date de réservation
                end: '2024-11-20',
                color: '#ff5733' // Couleur pour les dates réservées
            },
            {
                title: 'Réservé',
                start: '2024-11-25',
                end: '2024-11-25',
                color: '#ff5733'
            },
            // Tu peux ajouter plus de dates réservées ici
        ]
    });

    calendar.render();
});
