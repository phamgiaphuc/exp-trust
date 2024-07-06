import crypto from "crypto";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

function encodeData(req: Request, res: Response) {
  let CredInfo = JSON.stringify(req.body);
  let encodedCredInfo_64 = Buffer.from(JSON.stringify(CredInfo)).toString(
    "base64"
  );
  let encodedCredInfo_256 = crypto
    .createHash("sha256")
    .update(encodedCredInfo_64)
    .digest("base64url");
  console.log("req: " + CredInfo);
  console.log("Encoded Info: " + encodedCredInfo_64);
  console.log("Address of Public key: " + encodedCredInfo_256);
  return res.status(StatusCodes.OK);
}

module.exports = encodeData;
