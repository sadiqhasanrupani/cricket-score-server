import mongoose, { Schema, InferSchemaType } from 'mongoose';

const matchSchema = new Schema({
  teamA: {
    name: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  },
  teamB: {
    name: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  },
  overs: {
    type: Number,
    required: true,
    min: 1,
  },
  totalRuns: {
    type: Number,
    default: 0,
  },
  totalWickets: {
    type: Number,
    default: 0,
  },
  extras: {
    noballs: { type: Number, default: 0 },
    wides: { type: Number, default: 0 },
    byes: { type: Number, default: 0 },
    legbyes: { type: Number, default: 0 },
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed'],
    default: 'ongoing',
  },
  currentInnings: {
    type: Number,
    default: 1,
  },
  innings: [
    {
      team: { type: String, required: true },
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      overs: { type: Number, default: 0 },
      extras: {
        total: { type: Number, default: 0 },
        noballs: { type: Number, default: 0 },
        wides: { type: Number, default: 0 },
        byes: { type: Number, default: 0 },
        legbyes: { type: Number, default: 0 },
      },
      scoringEvents: [{ type: Schema.Types.ObjectId, ref: 'ScoringEvent' }],
    },
  ],
});

export type MatchSchema = InferSchemaType<typeof matchSchema>;

const Match = mongoose.model<MatchSchema>('Match', matchSchema);
export default Match;
