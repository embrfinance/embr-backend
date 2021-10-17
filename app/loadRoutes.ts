import { Express } from 'express';

export function loadRoutes(app: Express) {
    app.use('/health', (req, res) => res.sendStatus(200));
}