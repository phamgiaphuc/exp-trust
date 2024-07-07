const solanaWeb3 = require("@solana/web3.js");

// Connect to the Solana devnet
import connection from "@/database/solConnection";

// The public key of the account where the certificate is stored
const certificateAccountPublicKey = new solanaWeb3.PublicKey(
  "CERTIFICATE_ACCOUNT_PUBLIC_KEY"
); // Replace with actual public key

(async () => {
  // Retrieve account info
  const accountInfo = await connection.getAccountInfo(
    certificateAccountPublicKey
  );
  if (accountInfo === null) {
    console.log("Certificate not found");
    return;
  }

  // Decode and verify certificate data (simplified for demonstration purposes)
  // In a real-world scenario, you would parse and verify the data stored in the account
  const certificateData = {
    recipient: "RECIPIENT_PUBLIC_KEY", // Replace with actual public key
    course: "Blockchain Development",
    date: "2024-07-07",
    issuer: "ISSUER_PUBLIC_KEY", // Replace with actual public key
  };

  console.log("Certificate data:", certificateData);

  // Verify the certificate
  const isValid = certificateData.recipient === "RECIPIENT_PUBLIC_KEY"; // Replace with actual public key
  if (isValid) {
    console.log("Certificate is valid");
  } else {
    console.log("Certificate is invalid");
  }
})();
