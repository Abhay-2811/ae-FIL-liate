import { bizProof } from './bizProof.js';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
} from 'snarkyjs';

await isReady;

console.log('SnarkyJS loaded');

const useProof = false;

const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);

// deployerAccount: Admin
const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } = Local.testAccounts[1];


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

// ----------------------------------------------------

// get the initial state of p-state after deployment
const p_state_initial = zkAppInstance.p_state.get();
console.log('p-state after init:', p_state_initial.toString());


// get the initial state of p-unconfirmed-state after deployment
const p_unconfirmed_state_initial = zkAppInstance.p_unconfirmed_state.get();
console.log('p-unconfirmed-state after init:', p_unconfirmed_state_initial.toString());

// ----------------------------------------------------

// update p-unconfirmed-state by owner after auth is completed 
const txn1 = await Mina.transaction(deployerAccount,()=>{
  zkAppInstance.updateByOwner(Field(12345),Field(190),Field(3));
})
await txn1.prove();
await txn1.sign([deployerKey]).send();

const p_unconfirmed_state_change_1 = zkAppInstance.p_unconfirmed_state.get();
console.log('p-unconfirmed-state after txn1:', p_unconfirmed_state_change_1.toString());

// proof generated by user in his local device

const txn2 = await Mina.transaction(senderAccount,()=>{
  zkAppInstance.proveByUser(zkAppInstance.p_state.get(),Field(190),Field(3));
})
await txn2.prove();
await txn2.sign([senderKey]).send();

const p_confirmed_state_change_1 = zkAppInstance.p_state.get();
console.log('p-state after txn2:', p_confirmed_state_change_1.toString());

if(p_unconfirmed_state_change_1 === p_confirmed_state_change_1){
  console.log("User proof generated succesfully");
}



console.log('Shutting down');

await shutdown();