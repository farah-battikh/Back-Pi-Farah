const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  titre: String,
  description: String,
  lieu: String,
  organisateur: String,
  dateDebut: Date,        // Ajout de la date de début (utilisation du type Date)
  dateFin: Date,          // Ajout de la date de fin (utilisation du type Date)
  participants: [String], // Ajout de  liste des participants (tableau de chaînes)
});

module.exports = mongoose.model('Event', eventSchema);
