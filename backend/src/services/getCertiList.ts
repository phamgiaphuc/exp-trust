import { Request, Response } from "express";
import ExpCard from "@/models/expCardModel";

const getCertiList = (req: Request, res: Response) => {
    const result = ExpCard.find().lean();
    return result
}

export default getCertiList;