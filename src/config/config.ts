import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";

const mnemonic = "oil engine possible movie food garden mask weird absent barrel effort creek sick night library enable position account solution audit illegal cycle snow ability glow";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
