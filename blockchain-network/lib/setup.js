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

        .then(function(){
            return getAssetRegistry(NS_Property)
        })
        .then(function(propertyRegister){
            var property = factory.newResource(NS,'Property','1');
            var vendorRelation = factory.newRelationship(NS,'Vendor','1')
            property.address = "128A Campbell Street, Whanganui";
            property.estate ="FEE SIMPLE";
            property.lotFlatUnit = "Lot 2";
            property.area = "362m2";
            property.dp = "477028";
            property.owner = vendorRelation;
            return propertyRegister.add(property);
        })
        .then(function(){
            return getAssetRegistry(NS_Agreement)
        })
        .then(function(agreementRegister){
            var agreement = factory.newResource(NS,'Agreement','5');
            var condition = factory.newConcept(NS,'Condition');
            var financialCondition = factory.newConcept(NS,'FinancialCondition');
            var paymentPurchasePrice = factory.newConcept(NS,'PaymentPurchasePrice')
            var propertyRelation = factory.newRelationship(NS,'Property','1')
            var purchaserRelation = factory.newRelationship(NS,'Purchaser','1')
            var vendorRelation = factory.newRelationship(NS,'Vendor','1')

            condition.description = "Building report required";
            condition.required = true;

            financialCondition.description = "Financial Condition";
            financialCondition.required = true;
            financialCondition.lender = "Purchaser's choice";
            financialCondition.amount = "Sufficient to complete purchase";
            financialCondition.financeDate = "10 working days from the date of this Agreement";

            paymentPurchasePrice.property = propertyRelation;
            paymentPurchasePrice.gstIncluded = true;
            paymentPurchasePrice.purchasePrice = 30000.00;
            paymentPurchasePrice.deposit = 0;

            agreement.conditions = [condition];
            agreement.financialCondition = financialCondition;
            agreement.paymentPurchasePrice = paymentPurchasePrice;
            agreement.status = "PROPOSAL";
            agreement.purchaser = purchaserRelation;
            agreement.vendor = vendorRelation;
            agreement.property = propertyRelation;
            return agreementRegister.add(agreement);
        })
        .catch(function(error){
            console.log(error);
        });

}