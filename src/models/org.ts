import mongoose, { Document, Schema } from "mongoose";


const severityEnum = ["Critical", "Major", "Minor"] as const;
type Severity = typeof severityEnum[number];

interface IOrg extends Document {
  overspeeding: Severity;
  illegal_Parking: Severity;
  tampering: Severity;
  deviation: Severity;
  connection_Loss: Severity;
  Eco_driving: Severity;
}

const OrgSchema: Schema = new Schema(
  {
    overspeeding: { type: String, required: true, enum: severityEnum },
    illegal_Parking: { type: String, required: true, enum: severityEnum },
    tampering: { type: String, required: true, enum: severityEnum },
    deviation: { type: String, required: true, enum: severityEnum },
    connection_Loss: { type: String, required: true, enum: severityEnum },
    Eco_driving: { type: String, required: true, enum: severityEnum },
  },
  { timestamps: true }
);

const OrgModel = mongoose.model<IOrg>("Organization", OrgSchema);

export default OrgModel;
