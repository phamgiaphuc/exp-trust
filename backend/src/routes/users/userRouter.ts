import { Request, Response, Router } from "express";
// import SignInServices from "@/services/signIn";
import uploadRequest from "@/services/uploadRequest";
import { StatusCodes } from "http-status-codes";
const router = Router();

// router.post("/signin", async (req: Request, res: Response) => {
//     const result = await SignInServices.signIn(req);
//   return res.status(StatusCodes.OK).json(result);
// });
router.post("/upload", async (req: Request, res: Response) => {
  const result = await uploadRequest(req);
  return res.status(StatusCodes.OK).json(result);
});
export const user = router;
