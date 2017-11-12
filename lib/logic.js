'use strict';
/**
 * Write your transction processor functions here
 */


/**
 * Sample transaction
 * @param {io.property.agreement.network.Offer} offer
 * @transaction
 */
function makeOffer(offer) {
    var id = offer.agreement.id;
    var NS_Agreement        = 'io.property.agreement.network.Agreement'
    var NS                  = 'io.property.agreement.network'

    return getAssetRegistry(NS_Agreement)
        .then(function(agreementAssetRegistry) {
            return agreementAssetRegistry.get(id);
        })
        .then(function(agreement) {
            console.log(agreement)
        })
        .catch(function(error){
            console.log(error);
        });
}
