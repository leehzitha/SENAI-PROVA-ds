import { createTicketDTO } from "../dtos/ticket.ts"
import { Priority, Status } from "../generated/prisma/enums.ts";
import { prisma } from "../lib/prisma.ts";

export const createTicket = async(data: createTicketDTO)=>{
    const { title, description, sector, priority, status} = data;
    return await prisma.ticket.create({
        data: {
            title,
            description,
            sector,
            priority,
            status
        }
    });
}
export const showTickets = async()=>{
    return await prisma.ticket.findMany({});
}
export const showTicketById = async(id: number)=>{
    return await prisma.ticket.findOne({ id })
}
export const updateTicket = async(id: number, data: createTicketDTO)=>{
    const {  title, description, sector, priority, status } = data;
    
    return await prisma.ticket.update({
        where: {
            id : id
        },

        data: {
            title,
            description,
            sector,
            priority,
            status
        }
    })
}
export const deleteTicket = async(id: number)=>{
    return await prisma.ticket.delete({
        where: {
            id : id
        }
    })
}
export const startTicket = async(id: number)=>{
    return await prisma.ticket.update({
        where: {
            id : id
        },

        data: {
            status : Status.EM_ANDAMENTO
        }
    })
}

export const finishTicket = async(id: number)=>{
    return await prisma.ticket.update({
        where: {
            id : id
        },

        data: {
            status : Status.FINALIZADO
        }
    })
}

export const showByPriority = async(priority : String)=>{
    return await prisma.ticket.findMany({
        where: {
            priority : priority
        }
    })
}

export const showBySector = async(status: String)=>{
    return await prisma.ticket.findMany({
        where: {
            status : status
        }
    })
}