import STATUS from "../constant/constant"
import severityModel from "../models/severity"
import { Request, Response, NextFunction } from "express"

//express validator

export const createOrganizationSeverity = async (req: Request, res: Response, next: NextFunction) => {

    try {
           const{ overspeeding,illegal_Parking,tampering,deviation,connection_Loss,Eco_driving,} = req.body;
           const newOrg = new severityModel({
            overspeeding:overspeeding,
            illegal_Parking:illegal_Parking,
            tampering:tampering,
            deviation:deviation,
            connection_Loss: connection_Loss,
            Eco_driving:Eco_driving,
          });

         const savedOrg = await newOrg.save()
         res.status(201).json({title:"Severity Created",savedOrg});

    } catch (error) {
        const customError = new Error("Failed to create Organization severity") as Error & { statusCode?: number };
        customError.statusCode = STATUS.INTERNAL_SERVER_ERROR;
        
        return next(customError)
    }
}