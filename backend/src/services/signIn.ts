// import { Request, Response } from "express";
// import { StatusCodes } from "http-status-codes";
// const bcrypt = require("bcrypt");
// import crypto from "crypto";
// import { createTokenPair } from "@/utils/authUtils";

// class SignInServices {
//   static signIn = async ({ body }: Request) => {
//     const { name, email, password } = body;
//     console.log(email);
//     // step1: check email exist??
//     const hodelEmail = await modelUser.findOne({ email }).lean();
//     if (hodelEmail) {
//       return {
//         code: "xxxx",
//         message: "User already registered",
//       };
//     }
//     const passwordHashed = await bcrypt.hash(password, 10);
//     const newUser = await modelUser.create({
//       name,
//       email,
//       password: passwordHashed,
//       role: ["USER"],
//     });

//     if (newUser) {
//       // create privateKey, publishKey
//       const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//         modulusLength: 4096,
//         publicKeyEncoding: {
//           type: "pkcs1",
//           format: "pem",
//         },
//         privateKeyEncoding: {
//           type: "pkcs1",
//           format: "pem",
//         },
//       });
//       console.log({ privateKey, publicKey });
//       const publicKeyString = await KeyTokenServices.createKeyToken({
//         userId: newUser._id,
//         publicKey,
//       });
//       if (!publicKeyString) {
//         return {
//           code: "xxx",
//           message: "publicKeyString error",
//         };
//       }
//       const publicKeyObject = await crypto.createPublicKey(publicKeyString);
//       const tokens = await createTokenPair(
//         { userid: newUser._id, email },
//         publicKeyObject,
//         privateKey
//       );
//       console.log(`create token successed::`, tokens);
//       return tokens;
//     }
//   };
// }
// export default SignInServices;
