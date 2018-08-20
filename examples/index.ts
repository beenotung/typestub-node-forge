import {pki} from "node-forge";
import ed25519 =pki.ed25519;
// import SignOptions =ed25519.SignOptions;

let keypair = ed25519.generateKeyPair();
// let options: SignOptions = {privateKey: keypair.privateKey, message: 'the content', encoding: 'utf8'};
// let res = ed25519.sign(options)
let msg = 'tr';
let signed = ed25519.sign({privateKey: keypair.privateKey, message: msg, encoding: 'utf8'})
let res = ed25519.verify({
    signature: signed,
    publicKey: keypair.publicKey,
    message:msg,
    encoding:'utf8'
});
console.log({res})
