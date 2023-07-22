/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import { config } from 'dotenv';
import { bizProof } from '../build/src/bizProof.js';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
} from 'snarkyjs';

const app = express();
config();

const start = async() => {
    console.log('SnarkyJS loaded');

    const useProof = false;
    
    const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
    Mina.setActiveInstance(Local);
    
    // deployerAccount: Admin
    const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
    const { privateKey: userKey1, publicKey: userAccount1 } = Local.testAccounts[1];
    const { privateKey: userKey2, publicKey: userAccount2 } = Local.testAccounts[2];
    const { privateKey: userKey3, publicKey: userAccount3 } = Local.testAccounts[3];  
    
    
    // Create a public/private key pair. The public key is your address and where you deploy the zkApp to
    const zkAppPrivateKey = PrivateKey.random();
    const zkAppAddress = zkAppPrivateKey.toPublicKey();
    
    // create an instance of bizProof - and deploy it to zkAppAddress
    const zkAppInstance = new bizProof(zkAppAddress);
    const deployTxn = await Mina.transaction(deployerAccount, () => {
      AccountUpdate.fundNewAccount(deployerAccount);
      zkAppInstance.deploy();
    });
    await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();

    const p_state_initial = zkAppInstance.p_state.get();
    console.log('p-state after init:', p_state_initial.toString());
}



app.listen(6000, () => {
    console.log('server is running at port 6000');
    start();
}
);