import { Request, Response } from 'express';
import ScoreService from '../services/score.service';

class ScoreController {
  // Create a new score
  async createScore(req: Request, res: Response): Promise<Response> {
    try {
      const score = await ScoreService.createScore(req.body);
      return res.status(201).json(score);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create score', error });
    }
  }

  // Retrieve all scores
  async getAllScores(_req: Request, res: Response): Promise<Response> {
    try {
      const scores = await ScoreService.getAllScores();
      return res.status(200).json(scores);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve scores', error });
    }
  }

  // Update a specific score by ID
  async updateScore(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const updatedScore = await ScoreService.updateScore(id, req.body);
      if (!updatedScore) {
        return res.status(404).json({ message: 'Score not found' });
      }
      return res.status(200).json(updatedScore);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to update score', error });
    }
  }

  // Delete a specific score by ID
  async deleteScore(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletedScore = await ScoreService.deleteScore(id);
      if (!deletedScore) {
        return res.status(404).json({ message: 'Score not found' });
      }
      return res.status(200).json(deletedScore);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to delete score', error });
    }
  }
}

// Export an instance of the ScoreController
export default new ScoreController();
