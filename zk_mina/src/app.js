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
app.use(express.json())
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

    app.get('/states',(req,res)=>{
      const p_status = zkAppInstance.p_state.get();
      const p_unconfirmed_status = zkAppInstance.p_unconfirmed_state.get();
      res.status(200).send(JSON.parse(`{"p_status": ${p_status}, "p_unconfirmed_status": ${p_unconfirmed_status}}`));
    })

    // need key,gitAge,BizAge in req
    app.post('/updateOnlyOwner',async(req,res)=>{
      try {
        const txn1 = await Mina.transaction(deployerAccount,()=>{
          zkAppInstance.updateByOwner(Field(req.body.key),Field(req.body.git),Field(req.body.biz));
        })
        await txn1.prove();
        await txn1.sign([deployerKey]).send();
        res.status(200).send("Unconfirmed state updated")
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })

    app.post('/userUpdateMainState',async (req,res)=>{
      try {
        const txn2 = await Mina.transaction(userAccount1,()=>{
          zkAppInstance.proveByUser(zkAppInstance.p_state.get(),Field(req.body.git),Field(req.body.biz));
        })
        await txn2.prove();
        await txn2.sign([userKey1]).send();
        const p_status = zkAppInstance.p_state.get();
      const p_unconfirmed_status = zkAppInstance.p_unconfirmed_state.get();
        if(p_status === p_unconfirmed_status){
          res.status(200).send("Verified");
        }
        else{
          res.status(500).send("Verification Failed try again !!!")
        }
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
}



app.listen(6000, () => {
    console.log('server is running at port 6000');
    start();
}
);