Meteor.methods({
    'getRpc':function(network){
        return Meteor.settings.env.rpc.testnet;
    }
})