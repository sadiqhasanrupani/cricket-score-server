import { Router } from 'express';

// controller
import MatchController from '../controllers/match.controller';

import schema from '../validations/match.validation';
import validation from '../middleware/validation.middleware';

const router = Router();

const matchController = new MatchController();

router.post('/', [validation(schema)], matchController.createMatch);

const matchRoute = router;
export default matchRoute;
