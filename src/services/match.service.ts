import Match, { MatchSchema } from '../models/match.models';

export default class MatchService {
  match: Partial<MatchService>;

  constructor(match: Partial<MatchSchema>) {
    this.match = match as Partial<MatchService>;
  }

  // Create a new match
  async createMatch(): Promise<MatchSchema> {
    const newMatch = new Match(this.match);
    return await newMatch.save();
  }
}
