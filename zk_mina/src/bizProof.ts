/*
This contract will be used to prove that user has Github acc with age more than 180 days and registered 
business more than 2 months

Flow: 

1. User Auths on frontend
{if selected proof by mina}

2. Admin (us) would update unconfirmed state from P(n-1) => P(n) [P : Poseidon Hash, n: Current user]
@important: P(n) = Poseidon(P(n-1), GA+BA)

3. P(n-1) would be provided to user, using P(n-1) as secret user can use GA, BA and 
generate new P(n) this should match current unconfirmed state that was updated by us.

4. All asserts would happen here and finally if unconfirmed state and state provided by user matches we change state of original
p_state 

5. VOILAAA !!! as p_state and p_unconfirmed state are equal that means user has been verified


*/


import {
    Field,
    SmartContract,
    state,
    State,
    method,
    Poseidon
  } from 'snarkyjs';

export class bizProof extends SmartContract{
    @state(Field) p_state  = State<Field>(); //state of chain i.e P(n-1) 
    @state(Field) p_unconfirmed_state = State<Field>(); // sttate when the user isn't confirmed yet

    init() {
        super.init();
        this.p_state.set(Field(0));
        this.p_unconfirmed_state.set(Field(0));
    }

    // update state by owner before user can verify himself
    // GA: Github age in days, BA: Business age/ months since incorporated
    // new state i.e P(n) = P(P(n-1), GA+BA) // P() is Poseidon hash
    @method updateByOwner(keySecret: Field, GA: Field, BA: Field){
        keySecret.assertEquals(Field(12345));
        this.p_state.assertEquals(this.p_state.get());
        this.p_unconfirmed_state.assertEquals(this.p_unconfirmed_state.get());
        this.p_unconfirmed_state.set(Field(Poseidon.hash([this.p_state.get(), Field(GA).add(Field(BA))])));
    }

    @method proveByUser(salt: Field, GA: Field, BA: Field){
        this.p_state.assertEquals(this.p_state.get());
        this.p_unconfirmed_state.assertEquals(this.p_unconfirmed_state.get());
        salt.assertEquals(this.p_state.get());
        GA.assertGreaterThanOrEqual(Field(180)); // github account greater than 180 days
        BA.assertGreaterThanOrEqual(Field(2)); // Business incorporated more than 2 months ago
        const state_as_per_user = Field(Poseidon.hash([salt, Field(GA).add(Field(BA))]));
        state_as_per_user.assertEquals((this.p_unconfirmed_state.get()));
        this.p_state.set(this.p_unconfirmed_state.get());
    }
}