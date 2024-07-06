import ExpCard from "@/models/expCardModel";
import { Request, Response } from "express";

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
  }
  return {
    message: 'abc'
  }
};

export default uploadRequest;
