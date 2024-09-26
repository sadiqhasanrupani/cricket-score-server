import { Request, Response, NextFunction } from 'express';

// match service
import MatchService from '../services/match.service';
import { MatchSchema } from '../models/match.models';
import { HttpStatus } from '../utils/http-status';

export default class MatchController {
  // Create a new match
  async createMatch(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    try {
      const body: MatchSchema = req.body;
      const matchService = new MatchService(body);
      const match = await matchService.createMatch();

      return res.status(HttpStatus.CREATED).json(match);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create match', error });
    }
  }
}
