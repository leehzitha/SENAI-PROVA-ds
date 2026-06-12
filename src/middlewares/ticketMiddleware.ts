import { NextFunction, Request, Response} from "express";
import { Priority, Sector, Status } from "../generated/prisma/enums.ts";
import { createTicketDTO, statusDTO } from "../dtos/ticket.ts";
import { showTicketById } from "../services/ticket.service.ts";

// ticketMiddleware.ts
export const validateCreate = (req: Request, res: Response, next: NextFunction)=>{
    const data: createTicketDTO = req.body;

    if (!data.title || !data.title || !data.description || !data.priority) {
        return res.status(400).send({ erros: "Preencha os campos necessários antes de prosseguir!"})
    }

    if (data.title.length < 10) {
        return res.status(400).send({ erros: "O título precisa ter ao menos 10 caracteres!"})
    }

    next()

}
export const validateUpdate = (req: Request, res: Response, next: NextFunction)=>{
    validateCreate(req, res, next)
    next()
}

export const validateDelete = (req: Request, res: Response, next: NextFunction)=>{
}