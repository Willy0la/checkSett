import mongoose, { Document, Schema } from "mongoose";
const severityEnum = ["Critical", "Major", "Minor"] as const;

// give me the typeof item in this array
type Severity = (typeof severityEnum)[number];

//any object that looks like SeverityData will have 6 properties and each must be one of the Severity union type 
//
interface SeverityData extends Document /* mongoose document*/  {
  overspeeding: Severity;
  illegalParking: Severity;
  tampering: Severity;
  deviation: Severity;
  connectionLoss: Severity;
  ecoDriving: Severity;
}

const severitySchema: Schema = new Schema(
  {
    overspeeding: { type: String, required: true, enum: severityEnum },
    illegalParking: { type: String, required: true, enum: severityEnum },
    tampering: { type: String, required: true, enum: severityEnum },
    deviation: { type: String, required: true, enum: severityEnum },
    connectionLoss: { type: String, required: true, enum: severityEnum },
    ecoDriving: { type: String, required: true, enum: severityEnum },
  },
  { timestamps: true }
);

const severityModel = mongoose.model<SeverityData>("Severity", severitySchema);

export default severityModel;
