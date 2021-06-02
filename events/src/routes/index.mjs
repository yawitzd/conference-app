import Router from '@koa/router';
import { router as attendeesRouter } from './attendees.mjs';
import { router as badgesRouter } from './badges.mjs';
import { router as eventsRouter } from './events.mjs';
import { router as presentationsRouter } from './presentations.mjs';

export const router = new Router();

router.use('/api', attendeesRouter.routes(), attendeesRouter.allowedMethods());
router.use('/api', badgesRouter.routes(), attendeesRouter.allowedMethods());
router.use('/api', eventsRouter.routes(), eventsRouter.allowedMethods());
router.use('/api', presentationsRouter.routes(), presentationsRouter.allowedMethods());

