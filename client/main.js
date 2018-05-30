import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

web3 = new Web3(); // settings.json

// Meteor.call('getRpc',function(err,rpcAddr){
//
// web3 = new Web3(new Web3.providers.HttpProvider(rpcAddr)); // settings.json
//
// });

// web3 = new Web3(new Web3.providers.HttpProvider("http://159.89.159.139:8546")); // mainnet



