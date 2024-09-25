import mongoose, { Schema } from 'mongoose';

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['batsman', 'bowler'],
    required: true,
  },
  stats: {
    runs: { type: Number, default: 0 },
    ballsFaced: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    runsConceded: { type: Number, default: 0 },
    extras: {
      noballs: { type: Number, default: 0 },
      wides: { type: Number, default: 0 },
      byes: { type: Number, default: 0 },
      legbyes: { type: Number, default: 0 },
    },
  },
});

const Player = mongoose.model('Player', playerSchema);
export default Player;
