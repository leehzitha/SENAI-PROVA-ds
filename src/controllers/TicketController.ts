import { Request, Response } from "express";
import { createTicketDTO } from "../dtos/ticket.ts";
import { createTicket, deleteTicket, finishTicket, showTicketById, showTickets, startTicket, updateTicket } from "../services/ticket.service.ts";
import { Status } from "../generated/prisma/enums.ts";

export default class TicketController{
    static async create(req: Request, res: Response){
        const data : createTicketDTO = req.body;

        try {
            await createTicket(data);
            return res.status(201).send({ message: "Ticket criado"})
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async show(req: Request, res: Response){
        try {
            const data = await showTickets();
            return res.status(200).send({ data })
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async showById(req: Request, res: Response){
        const id = req.params;

        try {
            const data = await showTicketById(Number(id));
            return res.status(200).send({ tickets: data })
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async update(req: Request, res: Response){
        const data: createTicketDTO = req.body;
        const id = req.params;

        try {
            await updateTicket(Number(id), data);
            return res.status(200).send({ message: "Atualizado"})
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async delete(req: Request, res: Response){
        const id = req.params;

        try {
            await deleteTicket(Number(id));
            return res.status(200).send({ message: "Deletado"})
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async start(req: Request, res: Response){
        const id = req.params;
        try {
            const data = await showTicketById(Number(id))
            if (data.status != Status.ABERTO) {
                return res.status(400).send({ message: "O ticket precisa estar em aberto"});
            }
        }

        catch {
            return res.status(500).send({ message: "Erro interno"})
        }

        try {
            await startTicket(Number(id));
            return res.status(200).send({ message: "Iniciado"})
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }
    static async finish(req: Request, res: Response){
        const id = req.params;
        try {
            const data = await showTicketById(Number(id))
            if (data.status != Status.EM_ANDAMENTO) {
                return res.status(400).send({ message: "O ticket precisa estar em andamento"});
            }
        }

        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
        

        try {
            await finishTicket(Number(id));
            return res.status(200).send({ finishedAt: Date.now()});
        }
        catch {
            return res.status(500).send({ message: "Erro interno"})
        }
    }

    static async showByPriority(req: Request, res: Response){}
    static async showByStatus(req: Request, res: Response){}
    static async showBySector(req: Request, res: Response){}
};