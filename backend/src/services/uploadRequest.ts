import ExpCard from "@/models/expCardModel";
import { Request, Response } from "express";
import storeDataToBC from "./storeDataToBC";
import decodeData from "./decodeData";

const uploadRequest = async (req: Request) => {
  const {companyName, representative, compEmail, role, startDate, endDate, name, phoneNumber, email, proof_file, note} = req.body;
  try {
    let total_experience = 0;
    if (!endDate) {
      total_experience = new Date().getFullYear() - new Date(startDate).getFullYear();
    }
    total_experience = new Date(endDate).getFullYear() - new Date(startDate).getFullYear();
    const userTicket = {
      name: name,
      email: email,
      phone_number: phoneNumber,
      position: role,
      total_experience: total_experience,
      begin_date: new Date(startDate),
      end_date: new Date(endDate),
      note: note,
      proof_file: proof_file
    }
    const newExpCard = await ExpCard.create(userTicket);
    const [certificateData] = await ExpCard.find().sort({ createdAt: -1 });
    console.log(certificateData);
    await storeDataToBC(certificateData);
    return newExpCard;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateStatus = async (req: Request) => {
  const ids = req.body;
  try {
    const promiseUpdateAll = ids.map(async (id: string) => {
      return await ExpCard.findByIdAndUpdate(id, {
        status: 'verified'
      });
    });
    await Promise.all(promiseUpdateAll);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default uploadRequest;
