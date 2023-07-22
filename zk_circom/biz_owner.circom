include "node_modules/circomlib/circuits/comparators.circom";
include "node_modules/circomlib/circuits/bitify.circom";


template githubVerify() {

    // Declaration of signals.
    signal input ageOfAcc; //input : Life of github account
    signal output _out;

    // check if greater than required i.e 180 days
    component gtDays = GreaterEqThan(9);
    gtDays.in[0] <== ageOfAcc;
    gtDays.in[1] <== 180;
    gtDays.out ==> _out ;
    _out === 1;

}

template bizAge() {

    // @info: age in months

    // Declaration of signals.
    signal input ageOfBiz;
    signal output _out;

    // CHECK IF business was incorporated before 2 monnths
    component bizMonths = GreaterEqThan(9);
    bizMonths.in[0] <== ageOfBiz;
    bizMonths.in[1] <== 2;

    bizMonths.out ==> _out;
    _out === 1;
}

template aFILliate() {

    // input signals: Private
    signal input gitAcc;
    signal input bizData;

    // Public output
    signal output _out;


    component git = githubVerify();
    git.ageOfAcc <== gitAcc; 
    component biz = bizAge();
    biz.ageOfBiz <== bizData;

    var result = git._out*biz._out;

    result === 1;

    _out <== 1;

}

component main = aFILliate();