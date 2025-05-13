import STATUS from '../constant/constant.js';
import severityModel from '../models/severity.js';
import type { Request, Response, NextFunction } from 'express';

//express validator

const createOrganizationSeverity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      overspeeding,
      illegalParking,
      tampering,
      deviation,
      connectionLoss,
      ecoDriving,
    } = req.body;
    const newOrg = new severityModel({
      overspeeding: overspeeding,
      illegalParking: illegalParking,
      tampering: tampering,
      deviation: deviation,
      connectionLoss: connectionLoss,
      ecodriving: ecoDriving,
    });

    const savedOrg = await newOrg.save();
    res.status(201).json({ title: 'Severity Created', savedOrg });
  } catch (error) {
    const customError = new Error(
      'Failed to create Organization severity'
    ) as Error & { statusCode?: number };
    customError.statusCode = STATUS.INTERNAL_SERVER_ERROR;

    return next(customError);
  }
};

export default createOrganizationSeverity;
