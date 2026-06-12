import { Priority, Sector, Status } from "../generated/prisma/enums.ts";

export interface createTicketDTO {
    title : string,
    description : string,
    sector: Sector,
    priority: Priority,
    status: Status
}

export interface statusDTO {
    status: string
}