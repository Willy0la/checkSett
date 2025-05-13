import express from 'express';
import createOrganizationSeverity from '../controllers/orgController.js';

const severityRoute = express.Router();

severityRoute.post('/create', createOrganizationSeverity);

export default severityRoute;
