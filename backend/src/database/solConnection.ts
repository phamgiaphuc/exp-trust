const solanaWeb3 = require("@solana/web3.js");
// Connect to the Solana devnet
const connection = new solanaWeb3.Connection(
  "http://127.0.0.1:8899",
  "confirmed"
)
export default connection;

// // Generate sender and receiver keypairs
// const sender = solanaWeb3.Keypair.generate();
// const receiver = solanaWeb3.Keypair.generate();

// (async () => {
//   // Airdrop SOL to the sender for testing purposes
//   const airdropSignature = await connection.requestAirdrop(
//     sender.publicKey,
//     solanaWeb3.LAMPORTS_PER_SOL
//   );
//   await connection.confirmTransaction(airdropSignature);

//   // Send 0.1 SOL from the sender to the receiver
//   const transaction = new solanaWeb3.Transaction().add(
//     solanaWeb3.SystemProgram.transfer({
//       fromPubkey: sender.publicKey,
//       toPubkey: receiver.publicKey,
//       lamports: 0.1 * solanaWeb3.LAMPORTS_PER_SOL, // 0.1 SOL in lamports
//     })
//   );

//   // Sign and send the transaction
//   const signature = await solanaWeb3.sendAndConfirmTransaction(
//     connection,
//     transaction,
//     [sender]
//   );
//   console.log("Transaction signature:", signature);

//   // Check the balance of the receiver
//   const balance = await connection.getBalance(receiver.publicKey);
//   console.log(`Receiver balance: ${balance} lamports`);
// })();
