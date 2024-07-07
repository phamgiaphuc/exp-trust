const solanaWeb3 = require("@solana/web3.js");
const fs = require("fs");

// Connect to the local validator
import connection from "@/database/solConnection";

const decodeData = async (publicKey:any) => {
  // The public key of the account where the certificate is stored
  const certificateAccountPublicKey = new solanaWeb3.PublicKey(JSON.stringify(publicKey))
  // Retrieve account info
  const accountInfo = await connection.getAccountInfo(
    certificateAccountPublicKey
  );

  // Decode and verify certificate data
  const certificateData = JSON.parse(accountInfo.data.toString());

  // Verification (replace with actual verification logic)
  if (certificateData.recipient === "recipient_public_key") {
    // Replace with actual recipient public key
    console.log("Certificate is valid");
  } else {
    console.log("Certificate is invalid");
  }
};

export default decodeData;

