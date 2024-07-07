import fs from "fs";
import solanaWeb3 from "@solana/web3.js";
import crypto from "crypto";
// Connect to the Solana devnet
import connection from "@/database/solConnection";
import { buffer } from "stream/consumers";

const storeDataToBC = async (certiData: any) => {
    try {
      // Load keypairs for issuer and recipient
      const issuerSecretKey = JSON.parse(
        fs.readFileSync("src/services/issuer.json", "utf8")
      );
      const recipientSecretKey = JSON.parse(
        fs.readFileSync("src/services/recipient.json", "utf8")
      );
      const issuer = solanaWeb3.Keypair.fromSecretKey(
        new Uint8Array(issuerSecretKey)
      );
      const recipient = solanaWeb3.Keypair.fromSecretKey(
        new Uint8Array(recipientSecretKey)
      );

      // Certificate data
      const certificateData = {
        recipient: recipient.publicKey.toBase58(),
        ...certiData,
        issuer: issuer.publicKey.toBase58(),
      };
      const hasCerti = btoa(JSON.stringify(certificateData));
      const sha256Certi = crypto
        .createHash("sha256")
        .update(JSON.stringify(hasCerti))
        .digest("base64");
      console.log(sha256Certi);
      // Create an account to store the certificate data
      const certificateAccount = solanaWeb3.Keypair.generate();

      // Log or save the public key of the new account
      console.log(
        "Certificate Account Public Key:",
        certificateAccount.publicKey.toBase58()
      );
      const createAccountTransaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.createAccount({
          fromPubkey: issuer.publicKey,
          newAccountPubkey: certificateAccount.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(256),
          space: 256,
          programId: solanaWeb3.SystemProgram.programId,
        })
      );
      await solanaWeb3.sendAndConfirmTransaction(
        connection,
        createAccountTransaction,
        [issuer, certificateAccount]
      );
      const createDataTransaction = new solanaWeb3.Transaction().add({
        keys: [
          {
            pubkey: certificateAccount.publicKey,
            isSigner: false,
            isWritable: true,
          },
        ],
        programId: solanaWeb3.SystemProgram.programId,
        data: Buffer.from(sha256Certi), // Assuming data is a string, adjust accordingly
      });
      // Sign and send the transaction
      await solanaWeb3.sendAndConfirmTransaction(
        connection,
        createDataTransaction,
        [issuer]
      );

      console.log(
        "Certificate stored at:",
        certificateAccount.publicKey.toBase58()
      );
    } catch (error) {
        console.log(error)
    }
  
};

export default storeDataToBC;
