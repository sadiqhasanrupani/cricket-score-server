import ScoreRepository from '../repositories/score.repository';
import { IScore } from '../models/score.models';

class ScoreService {
  async createScore(scoreData: Partial<IScore>): Promise<IScore> {
    // Perform any additional logic (e.g., validation) before saving to the DB
    return ScoreRepository.new(scoreData);
  }

  async getAllScores(): Promise<IScore[]> {
    return ScoreRepository.getAllScores();
  }

  async updateScore(id: string, updateData: Partial<IScore>): Promise<IScore | null> {
    return ScoreRepository.updateScore(id, updateData);
  }

  async deleteScore(id: string): Promise<IScore | null> {
    return ScoreRepository.deleteScore(id);
  }
}

export default new ScoreService();
