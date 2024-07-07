import ExpCard from "@/models/expCardModel";
import { Request, Response } from "express";
import storeDataToBC from "./storeDataToBC";
import decodeData from "./decodeData";

const uploadRequest = async (req: Request) => {
  if (req) {
    const { companyName, representative, compEmail, role, startDate, endDate } =
      req.body;
      console.log("newcard ::", role);

    const newStartDate = new Date(startDate);
    const newEndDate = endDate ? new Date(endDate) : new Date();
    const exp: number = newEndDate.getFullYear() - newStartDate.getFullYear();

    const newExpCard = await ExpCard.create({
      verify: "pending",
      role,
      exp,
      companyName,
      startDate,
    });
    const [certificateData] = await ExpCard.find().sort({ createdAt: -1 });
    console.log(certificateData);
    await storeDataToBC(certificateData);
    // await decodeData(publicKey);
  }
  return {
    message: 'abc'
  }
};

export default uploadRequest;
