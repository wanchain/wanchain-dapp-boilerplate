Template.addressVerify.helpers({
    'verifyAttempt': function () {
        return Session.get('verifyAttempt');
    },
    'verified': function () {
        return Session.get('verified');
    },
    'wanchainAddress': function () {
        return Session.get('wanchainAddress');
    },
    'coinbase': function () {
        return Session.get('coinbase');
    }
});

Template.addressVerify.events({
    'keyup .verifyForm input': function (event, template) {
        Session.set('wanchainAddress', false);
        Session.set('verified', false);
        Session.set('verifyAttempt', false);
    },
    'submit .verifyForm': function (event, template) {
        event.preventDefault();
        var formObj = $(event.target).serializeArray();
        var verObj = {};
        var action = $(event.target).find('button').attr('action');

        _.each(formObj, function (e) {
            verObj[e.name] = e.value || false;
        });
        var hash = stripHexPrefix(verObj.address);
        if (verObj.address) {
            if (hash.length === 40) {
                
            } else {
                alert('invalid address length');
                return false
            }
        } else {
            alert('you must enter an address!');
            return false;
        }

        var wanchain_address = toChecksumAddress(verObj.address, web3);

        if (action === "verify") {
            Session.set('verifyAttempt', true);
            if (verObj.converted == wanchain_address) {
                //alert('hey')
                Session.set('verified', true);
                Session.set('wanchainAddress', wanchain_address);
            } else {
                Session.set('verified', false);
                Session.set('wanchainAddress', false);

            }
        } else {

            Session.set('verifyAttempt', false);
            Session.set('verified', false);
            Session.set('wanchainAddress', wanchain_address);
        }


    }
});

Template.addressVerify.onCreated(function () {
    stripHexPrefix = require('strip-hex-prefix');


});

Template.addressVerify.onRendered(function () {


    toChecksumAddress = function (address) {
        address = stripHexPrefix(address).toLowerCase();
        var hash = web3.sha3(address).toString('hex');
        // Fix web3 0.14.0 and 0.20.0 incompatibility
        hash = stripHexPrefix(hash);
        var ret = '0x';

        for (var i = 0; i < address.length; i++) {
            if (parseInt(hash[i], 16) < 8) {
                ret += address[i].toUpperCase();


            } else {

                ret += address[i];
            }
        }


        return ret;
    }


    web3.eth.getCoinbase(function (err, resp) {
        console.log('COINBASE', resp);
        Session.set('coinbase', resp);
    });

    Session.set('verifiedAddress', false);
    Session.set('verifyAttempt', false);
});

Template.addressVerify.onDestroyed(function () {
    //add your statement here
});

