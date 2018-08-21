import {pki} from "node-forge";
import 'typestub-node-forge'

const ed25519 = pki.ed25519;
// import SignOptions =ed25519.SignOptions;

const keypair = ed25519.generateKeyPair();
// let options: SignOptions = {privateKey: keypair.privateKey, message: 'the content', encoding: 'utf8'};
// let res = ed25519.sign(options)
const msg = "tr";
const signed = ed25519.sign({
    privateKey: keypair.privateKey,
    message: msg, encoding: "utf8",
});
const res = ed25519.verify({
    signature: signed,
    publicKey: keypair.publicKey,
    message: msg,
    encoding: "utf8",
});
console.log({res});
