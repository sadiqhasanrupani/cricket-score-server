import { Router } from 'express';
import ScoreController from '../controllers/score.controller';

const router = Router();

// Routes
router.post('/', ScoreController.createScore); // Create a new score
router.get('/', ScoreController.getAllScores); // Get all scores
router.put('/:id', ScoreController.updateScore); // Update a specific score
router.delete('/:id', ScoreController.deleteScore); // Delete a specific score

export default router;
