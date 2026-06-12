import express from 'express';
import TicketController from '../controllers/TicketController.ts';
import { validateCreate, validateDelete, validateUpdate } from '../middlewares/ticketMiddleware.ts';

const route = express.Router();

route
    .post('/create', validateCreate,TicketController.create)
    .get('/show',TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id',validateUpdate, TicketController.update)
    .delete('/delete/:id', validateDelete, TicketController.delete)
    .patch('/start/:id', TicketController.start)
    .patch('/finish/:id', TicketController.finish)

    .get('/show/priority/:priority', TicketController.showByPriority)
    .get('/show/status/:status', TicketController.showByStatus)
    .get('/show/sector/:sector', TicketController.showBySector)

export default route
