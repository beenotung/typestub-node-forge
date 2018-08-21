"use strict";
exports.__esModule = true;
var node_forge_1 = require("node-forge");
require("typestub-node-forge");
var ed25519 = node_forge_1.pki.ed25519;
// import SignOptions =ed25519.SignOptions;
var keypair = ed25519.generateKeyPair();
// let options: SignOptions = {privateKey: keypair.privateKey, message: 'the content', encoding: 'utf8'};
// let res = ed25519.sign(options)
var msg = "tr";
var signed = ed25519.sign({
    privateKey: keypair.privateKey,
    message: msg, encoding: "utf8"
});
var res = ed25519.verify({
    signature: signed,
    publicKey: keypair.publicKey,
    message: msg,
    encoding: "utf8"
});
console.log({ res: res });
