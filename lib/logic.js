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
    var assetRegistry;
    var id = makeOffer.Agreement.id;
    console.log('hello');
    return getAssetRegistry('io.property.agreement.network.Agreement')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(agreement) {
            console.log(agreement)
        });
}