import mongoose, { Document, Schema } from "mongoose";

const severityEnum = ['Critical','Major','Minor'] as const
type Severity = (typeof severityEnum)[number]
//any object that looks like SeverityData will have 6 properties and each must be one of the Severity union type 
// structuring how the properties will be in db and ensuring it most consist at least one of the enum values
interface SeverityData extends Document {
overspeeding:Severity,
illegalParking:Severity,
tampering:Severity,
deviation:Severity,
connectionLoss:Severity,
ecoDriving:Severity,
}




const severitySchema: Schema = new Schema(
  {
    overspeeding: { type: String, required: true, enum: severityEnum,default:"Critical"},
    illegalParking: { type: String, required: true, enum: severityEnum, default:"Critical"},
    tampering: { type: String, required: true, enum: severityEnum, default:"Critical"},
    deviation: { type: String, required: true, enum: severityEnum, default:"Major"},
    connectionLoss: { type: String, required: true, enum: severityEnum, default:"Major"},
    ecoDriving: { type: String, required: true, enum: severityEnum, default:"Minor"},
  },
  { timestamps: true }
);
//   mongoose model includes the data , i structured in the severityData
const severityModel = mongoose.model<SeverityData>("Severity", severitySchema);
console.log(severitySchema)
export default severityModel;
