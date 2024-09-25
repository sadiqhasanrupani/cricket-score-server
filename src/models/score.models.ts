import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the Score interface extending Mongoose's Document
export interface IScore extends Document {
  type:
  | 'normal'
  | 'overthrow'
  | 'bye'
  | 'bye with overthrow'
  | 'legbye'
  | 'legbye with overthrow'
  | 'noball'
  | 'noball with overthrow'
  | 'noball with bye'
  | 'noball with bye and overthrow'
  | 'noball with legbye'
  | 'noball with legbye and overthrow'
  | 'wide'
  | 'wide with overthrow'
  | 'wide with bye'
  | 'wide with bye and overthrow'
  | 'wide with legbye'
  | 'wide with legbye and overthrow'
  | 'wicket';
  runs: number;
  timestamp: Date;
  extras?: {
    wide?: boolean;
    noball?: boolean;
    bye?: boolean;
    legbye?: boolean;
    overthrow?: boolean;
    wicket?: boolean;
  };
  affectedPlayers: {
    batsman: mongoose.Schema.Types.ObjectId;
    bowler: mongoose.Schema.Types.ObjectId;
  };
}

// Define the Score schema
const ScoreSchema = new Schema<IScore>({
  type: {
    type: String,
    enum: [
      'normal',
      'overthrow',
      'bye',
      'bye with overthrow',
      'legbye',
      'legbye with overthrow',
      'noball',
      'noball with overthrow',
      'noball with bye',
      'noball with bye and overthrow',
      'noball with legbye',
      'noball with legbye and overthrow',
      'wide',
      'wide with overthrow',
      'wide with bye',
      'wide with bye and overthrow',
      'wide with legbye',
      'wide with legbye and overthrow',
      'wicket',
    ],
    required: true,
  },
  runs: { type: Number, required: true },
  extras: {
    wide: { type: Boolean, default: false },
    noball: { type: Boolean, default: false },
    bye: { type: Boolean, default: false },
    legbye: { type: Boolean, default: false },
    overthrow: { type: Boolean, default: false },
    wicket: { type: Boolean, default: false },
  },
  affectedPlayers: {
    batsman: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    bowler: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  },
  timestamp: { type: Date, default: Date.now },
});

// Export the model
const ScoreModel: Model<IScore> = mongoose.model<IScore>('Score', ScoreSchema);
export default ScoreModel;
