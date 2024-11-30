
// export const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];


// export const scheduleData = {
//   'Lundi': [
//     { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
//     { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" }
//   ],
//   'Mardi': [
//     { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
//     { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ],
//   'Mercredi': [
//     { time: '8h30 à 10h00', subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
//     { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LI 06" },
//     { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Atelier Base de Données Avancée", teacher: "Mohamed TOUMI", salle: "LI 06" }
//   ],
//   'Jeudi': [
//     { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
//     { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Haithem HAFSI", salle: "LI 06" },
//     { time: '11h50 à 13h20', subject: "Technique de recherche d'emploi et marketing de soi", teacher: "Rayen BEN SALAH", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ],
//   'Vendredi': [
//     { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
//     { time: '10h10 à 11h40', subject: "Atelier SOA", teacher: "Rayen BEN SALAH", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ]
// };

// export const timeSlots = [
//   '8h30 à 10h00',
//   '10h10 à 11h40',
//   '11h50 à 13h20',
//   '14h30 à 16h00',
//   '16h10 à 17h40',
// ];

// export  const teachers = [
//   "Mariem JERIDI", "Wahid HAMDI", "Ahmed NEFZAOUI", "Mohamed TOUMI", "Hamed BENNEJI", "Rayen BEN SALAH", "Maher RHOUMA", "Dziriya ARFAOUI", "Haithem HAFSI", "Soufiene BEN MAHMOUD"
// ];

// export const salles = [
//   "SI 01", "SI 02", "SI 03", "LG 04", "LI 06"
// ];








export const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export const timeSlots = [
  '8h30 à 10h00',
  '10h10 à 11h40',
  '11h50 à 13h20',
  '14h30 à 16h00',
  '16h10 à 17h40',
];

export const teachers = [
  "Mariem JERIDI", "Wahid HAMDI", "Ahmed NEFZAOUI", "Mohamed TOUMI", "Hamed BENNEJI", 
  "Rayen BEN SALAH", "Maher RHOUMA", "Dziriya ARFAOUI", "Haithem HAFSI", "Soufiene BEN MAHMOUD"
];

export const salles = [
  "SI 01", "SI 02", "SI 03", "LG 04", "LI 06"
];

type ScheduleEntry = {
  time: string;
  subject: string;
  teacher: string;
  salle: string;
};

type DaySchedule = ScheduleEntry[];

type WeekSchedule = {
  [key: string]: DaySchedule;
};

export const scheduleData: {
  students: { [key: string]: WeekSchedule };
  teachers: { [key: string]: WeekSchedule };
  classrooms: { [key: string]: WeekSchedule };
} = {
  students: {
    "DSI 31": {
      'Lundi': [
        { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
        { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
        { time: '11h50 à 13h20', subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
        { time: '14h30 à 16h00', subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" }
      ],
      'Mardi': [
        { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
        { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
        { time: '11h50 à 13h20', subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
        { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
      ],
      'Mercredi': [
        { time: '8h30 à 10h00', subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
        { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LI 06" },
        { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
        { time: '14h30 à 16h00', subject: "Atelier Base de Données Avancée", teacher: "Mohamed TOUMI", salle: "LI 06" }
      ],
      'Jeudi': [
        { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
        { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Haithem HAFSI", salle: "LI 06" },
        { time: '11h50 à 13h20', subject: "Technique de recherche d'emploi et marketing de soi", teacher: "Rayen BEN SALAH", salle: "LI 06" },
        { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
      ],
      'Vendredi': [
        { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
        { time: '10h10 à 11h40', subject: "Atelier SOA", teacher: "Rayen BEN SALAH", salle: "LG 04" },
        { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" }
      ],
      'Samedi': []
    }
  },
  teachers: {
    "Mariem JERIDI": {
      'Lundi': [
        { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" }
      ],
      'Mardi': [
        { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" }
      ],
      'Mercredi': [],
      'Jeudi': [],
      'Vendredi': [],
      'Samedi': []
    },
    // Add other teachers' schedules here
  },
  classrooms: {
    "SI 03": {
      'Lundi': [
        { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" }
      ],
      'Mardi': [
        { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" }
      ],
      'Mercredi': [],
      'Jeudi': [],
      'Vendredi': [],
      'Samedi': []
    },
    // Add other classrooms' schedules here
  }
};