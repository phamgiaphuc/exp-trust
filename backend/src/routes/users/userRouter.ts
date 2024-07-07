import { Request, Response, Router } from "express";
// import SignInServices from "@/services/signIn";
import uploadRequest, { updateStatus } from "@/services/uploadRequest";
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

router.put("/update", async (req: Request, res: Response) => {
  await updateStatus(req);
  return res.status(StatusCodes.OK).json('update status success');
})

export const user = router;
