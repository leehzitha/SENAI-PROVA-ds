import { Express } from 'express';
import express from 'express'
import ticket from './ticket.ts'

export default function (app: Express) {
app
    .use(express.json())
    .use('/api/ticket', ticket)
}