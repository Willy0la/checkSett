import express from "express"
import { createOrganizationSeverity } from "../controllers/orgController"
const severityRoute = express.Router()

 severityRoute.post("/create", createOrganizationSeverity );
 
 export default severityRoute;
