import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

web3 = new Web3(); // settings.json

// Meteor.call('getRpc',function(err,rpcAddr){
//
// web3 = new Web3(new Web3.providers.HttpProvider(rpcAddr)); // settings.json
//
// });
