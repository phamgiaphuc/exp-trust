import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import getCertiList from '@/services/getCertiList'
const encodeData = require("../../services/encodeData");
const router = Router();
router.get("/status", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: "ExpTrust Backend",
    success: true,
  });
});

router.post("/jsonify", async (req: Request, res: Response) => {
  encodeData(req, res);
});

router.get("/certi", async (req: Request, res: Response) => {
  return await res.status(StatusCodes.OK).json( await getCertiList(req, res));
});

export const apis_v1 = router;
