/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Setup the demo
 * @param {io.property.agreement.network.SetupDemo} setupDemo
 * @transaction
 */
function setupDemo(setupDemo) {
    console.log('setupDemo');

    var factory = getFactory();
    var NS_Purchaser        = 'io.property.agreement.network.Purchaser'
    var NS_Vendor           = 'io.property.agreement.network.Vendor'
    var NS_Property         = 'io.property.agreement.network.Property'
    // var NS_PropertyListing  = 'io.property.agreement.network.PropertyListing'
    var NS_Agreement        = 'io.property.agreement.network.Agreement'
    var NS                  = 'io.property.agreement.network'

    


    return getParticipantRegistry(NS_Purchaser)
        .then(function(purchaserRegistry){
            var purchaser = factory.newResource(NS,'Purchaser','1');
            purchaser.description   = "James Cato Carlile Whiteman";
            purchaser.FirstName     = "James";
            purchaser.LastName      = "Whiteman";
            return purchaserRegistry.add(purchaser);
        })
        .then(function() {
            return getParticipantRegistry(NS_Vendor)
        })
        .then(function(vendorPacticipantRegister){
            var vendor = factory.newResource(NS,'Vendor','1');
            vendor.description = "J Squared Limited a duly incorporated company having its registered office at Marton";
            vendor.gst = false;
            return vendorPacticipantRegister.add(vendor);
        })
        // .then(function(){
        //     return getAssetRegistry(NS_PropertyListing)
        // })
        // .then(function(propertyListingRegister){
        //     var PropertyListing = factory.newResource(NS,'PropertyListing','1');
        //     PropertyListing.purchasePrice = 30000.00;
        //     PropertyListing.deposit = 3000.00;
        //     return propertyListingRegister.add(PropertyListing);
        // })
        // .then(function(){
        //     return getAssetRegistry(NS_Property)
        // })
        // .then()
        .catch(function(error){
            console.log(error);
        });
   
}