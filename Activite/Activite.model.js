const mongoose = require('mongoose');

const ActiviteSchema = new mongoose.Schema({
  utilisateur_id: {
    type: int,
    required: true,
  },
  tache_id: {
    type: int,
    required: true,
  },
  
});

module.exports = mongoose.model('Activite', ActiviteSchema);