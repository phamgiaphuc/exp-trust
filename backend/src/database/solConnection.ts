import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
