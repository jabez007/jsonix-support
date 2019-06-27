var mortgage_loan_Module_Factory = function () {
  var mortgage_loan = {
    name: 'mortgage_loan',
    defaultElementNamespaceURI: 'http:\/\/www.meridianlink.com\/CLF',
    typeInfos: [{
        localName: 'BASEREFERENCE',
        typeName: 'BASE_REFERENCE',
        propertyInfos: [{
            name: 'firstName',
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }, {
            name: 'address',
            attributeName: {
              localPart: 'address'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'phone',
            attributeName: {
              localPart: 'phone'
            },
            type: 'attribute'
          }, {
            name: 'relationship',
            attributeName: {
              localPart: 'relationship'
            },
            type: 'attribute'
          }, {
            name: 'email',
            attributeName: {
              localPart: 'email'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION.FOMANSWERS.FOMANSWER',
        typeName: null,
        propertyInfos: [{
            name: 'text',
            required: true
          }, {
            name: 'value',
            required: true
          }, {
            name: 'fieldType',
            attributeName: {
              localPart: 'field_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.GFE',
        typeName: null,
        propertyInfos: [{
            name: 'gfe2015',
            elementName: 'GFE2015',
            typeInfo: '.MORTGAGELOANINFO.GFE.GFE2015'
          }, {
            name: 'compensationtobrokerdescription1',
            attributeName: {
              localPart: '_compensationtobrokerdescription1'
            },
            type: 'attribute'
          }, {
            name: 'compensationtobrokeramount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_compensationtobrokeramount1'
            },
            type: 'attribute'
          }, {
            name: 'compensationtobrokerdescription2',
            attributeName: {
              localPart: '_compensationtobrokerdescription2'
            },
            type: 'attribute'
          }, {
            name: 'compensationtobrokeramount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_compensationtobrokeramount2'
            },
            type: 'attribute'
          }, {
            name: 'daysinyear',
            typeInfo: 'Integer',
            attributeName: {
              localPart: '_daysinyear'
            },
            type: 'attribute'
          }, {
            name: 'prepareddate',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_prepareddate'
            },
            type: 'attribute'
          }, {
            name: '_801Ispaid',
            attributeName: {
              localPart: '_801ispaid'
            },
            type: 'attribute'
          }, {
            name: '_801Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_801percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_801Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_801flatfee'
            },
            type: 'attribute'
          }, {
            name: '_801Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_801amount'
            },
            type: 'attribute'
          }, {
            name: '_801Paidby',
            attributeName: {
              localPart: '_801paidby'
            },
            type: 'attribute'
          }, {
            name: '_801Ispaidtobroker',
            attributeName: {
              localPart: '_801ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_801Isapr',
            attributeName: {
              localPart: '_801isapr'
            },
            type: 'attribute'
          }, {
            name: '_802Ispaid',
            attributeName: {
              localPart: '_802ispaid'
            },
            type: 'attribute'
          }, {
            name: '_802Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_802percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_802Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_802flatfee'
            },
            type: 'attribute'
          }, {
            name: '_802Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_802amount'
            },
            type: 'attribute'
          }, {
            name: '_802Paidby',
            attributeName: {
              localPart: '_802paidby'
            },
            type: 'attribute'
          }, {
            name: '_802Ispaidtobroker',
            attributeName: {
              localPart: '_802ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_802Isapr',
            attributeName: {
              localPart: '_802isapr'
            },
            type: 'attribute'
          }, {
            name: '_803Ispaid',
            attributeName: {
              localPart: '_803ispaid'
            },
            type: 'attribute'
          }, {
            name: '_803Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_803amount'
            },
            type: 'attribute'
          }, {
            name: '_803Paidby',
            attributeName: {
              localPart: '_803paidby'
            },
            type: 'attribute'
          }, {
            name: '_803Ispaidtobroker',
            attributeName: {
              localPart: '_803ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_803Isapr',
            attributeName: {
              localPart: '_803isapr'
            },
            type: 'attribute'
          }, {
            name: '_804Ispaid',
            attributeName: {
              localPart: '_804ispaid'
            },
            type: 'attribute'
          }, {
            name: '_804Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_804amount'
            },
            type: 'attribute'
          }, {
            name: '_804Paidby',
            attributeName: {
              localPart: '_804paidby'
            },
            type: 'attribute'
          }, {
            name: '_804Ispaidtobroker',
            attributeName: {
              localPart: '_804ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_804Isapr',
            attributeName: {
              localPart: '_804isapr'
            },
            type: 'attribute'
          }, {
            name: '_805Ispaid',
            attributeName: {
              localPart: '_805ispaid'
            },
            type: 'attribute'
          }, {
            name: '_805Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_805amount'
            },
            type: 'attribute'
          }, {
            name: '_805Paidby',
            attributeName: {
              localPart: '_805paidby'
            },
            type: 'attribute'
          }, {
            name: '_805Ispaidtobroker',
            attributeName: {
              localPart: '_805ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_805Isapr',
            attributeName: {
              localPart: '_805isapr'
            },
            type: 'attribute'
          }, {
            name: '_808Ispaid',
            attributeName: {
              localPart: '_808ispaid'
            },
            type: 'attribute'
          }, {
            name: '_808Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_808percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_808Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_808flatfee'
            },
            type: 'attribute'
          }, {
            name: '_808Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_808amount'
            },
            type: 'attribute'
          }, {
            name: '_808Paidby',
            attributeName: {
              localPart: '_808paidby'
            },
            type: 'attribute'
          }, {
            name: '_808Ispaidtobroker',
            attributeName: {
              localPart: '_808ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_808Isapr',
            attributeName: {
              localPart: '_808isapr'
            },
            type: 'attribute'
          }, {
            name: '_809Ispaid',
            attributeName: {
              localPart: '_809ispaid'
            },
            type: 'attribute'
          }, {
            name: '_809Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_809amount'
            },
            type: 'attribute'
          }, {
            name: '_809Paidby',
            attributeName: {
              localPart: '_809paidby'
            },
            type: 'attribute'
          }, {
            name: '_809Ispaidtobroker',
            attributeName: {
              localPart: '_809ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_809Isapr',
            attributeName: {
              localPart: '_809isapr'
            },
            type: 'attribute'
          }, {
            name: '_810Ispaid',
            attributeName: {
              localPart: '_810ispaid'
            },
            type: 'attribute'
          }, {
            name: '_810Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_810amount'
            },
            type: 'attribute'
          }, {
            name: '_810Paidby',
            attributeName: {
              localPart: '_810paidby'
            },
            type: 'attribute'
          }, {
            name: '_810Ispaidtobroker',
            attributeName: {
              localPart: '_810ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_810Isapr',
            attributeName: {
              localPart: '_810isapr'
            },
            type: 'attribute'
          }, {
            name: '_811Ispaid',
            attributeName: {
              localPart: '_811ispaid'
            },
            type: 'attribute'
          }, {
            name: '_811Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_811amount'
            },
            type: 'attribute'
          }, {
            name: '_811Paidby',
            attributeName: {
              localPart: '_811paidby'
            },
            type: 'attribute'
          }, {
            name: '_811Ispaidtobroker',
            attributeName: {
              localPart: '_811ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_811Isapr',
            attributeName: {
              localPart: '_811isapr'
            },
            type: 'attribute'
          }, {
            name: '_812Ispaid',
            attributeName: {
              localPart: '_812ispaid'
            },
            type: 'attribute'
          }, {
            name: '_812Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_812amount'
            },
            type: 'attribute'
          }, {
            name: '_812Paidby',
            attributeName: {
              localPart: '_812paidby'
            },
            type: 'attribute'
          }, {
            name: '_812Ispaidtobroker',
            attributeName: {
              localPart: '_812ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_812Isapr',
            attributeName: {
              localPart: '_812isapr'
            },
            type: 'attribute'
          }, {
            name: '_901Numdays',
            attributeName: {
              localPart: '_901numdays'
            },
            type: 'attribute'
          }, {
            name: '_901Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_901amount'
            },
            type: 'attribute'
          }, {
            name: '_901Paidby',
            attributeName: {
              localPart: '_901paidby'
            },
            type: 'attribute'
          }, {
            name: '_901Ispaidtobroker',
            attributeName: {
              localPart: '_901ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_901Isapr',
            attributeName: {
              localPart: '_901isapr'
            },
            type: 'attribute'
          }, {
            name: '_902Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_902amount'
            },
            type: 'attribute'
          }, {
            name: '_902Paidby',
            attributeName: {
              localPart: '_902paidby'
            },
            type: 'attribute'
          }, {
            name: '_902Ispaidtobroker',
            attributeName: {
              localPart: '_902ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_902Isapr',
            attributeName: {
              localPart: '_902isapr'
            },
            type: 'attribute'
          }, {
            name: '_903Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_903percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_903Percentageof',
            attributeName: {
              localPart: '_903percentageof'
            },
            type: 'attribute'
          }, {
            name: '_903Amountpermonth',
            typeInfo: 'Double',
            attributeName: {
              localPart: '_903amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_903Nummonths',
            attributeName: {
              localPart: '_903nummonths'
            },
            type: 'attribute'
          }, {
            name: '_903Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_903amount'
            },
            type: 'attribute'
          }, {
            name: '_903Paidby',
            attributeName: {
              localPart: '_903paidby'
            },
            type: 'attribute'
          }, {
            name: '_903Ispaidtobroker',
            attributeName: {
              localPart: '_903ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_903Isapr',
            attributeName: {
              localPart: '_903isapr'
            },
            type: 'attribute'
          }, {
            name: '_904Description',
            attributeName: {
              localPart: '_904description'
            },
            type: 'attribute'
          }, {
            name: '_904Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_904amount'
            },
            type: 'attribute'
          }, {
            name: '_904Paidby',
            attributeName: {
              localPart: '_904paidby'
            },
            type: 'attribute'
          }, {
            name: '_904Ispaidtobroker',
            attributeName: {
              localPart: '_904ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_904Isapr',
            attributeName: {
              localPart: '_904isapr'
            },
            type: 'attribute'
          }, {
            name: '_905Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_905amount'
            },
            type: 'attribute'
          }, {
            name: '_905Paidby',
            attributeName: {
              localPart: '_905paidby'
            },
            type: 'attribute'
          }, {
            name: '_905Ispaidtobroker',
            attributeName: {
              localPart: '_905ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_905Isapr',
            attributeName: {
              localPart: '_905isapr'
            },
            type: 'attribute'
          }, {
            name: '_1001Nummonths',
            attributeName: {
              localPart: '_1001nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1001Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1001amount'
            },
            type: 'attribute'
          }, {
            name: '_1001Paidby',
            attributeName: {
              localPart: '_1001paidby'
            },
            type: 'attribute'
          }, {
            name: '_1001Ispaidtobroker',
            attributeName: {
              localPart: '_1001ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1001Isapr',
            attributeName: {
              localPart: '_1001isapr'
            },
            type: 'attribute'
          }, {
            name: '_1002Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1002percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1002Percentageof',
            attributeName: {
              localPart: '_1002percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1002Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1002amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1002Nummonths',
            attributeName: {
              localPart: '_1002nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1002Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1002amount'
            },
            type: 'attribute'
          }, {
            name: '_1002Paidby',
            attributeName: {
              localPart: '_1002paidby'
            },
            type: 'attribute'
          }, {
            name: '_1002Ispaidtobroker',
            attributeName: {
              localPart: '_1002ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1002Isapr',
            attributeName: {
              localPart: '_1002isapr'
            },
            type: 'attribute'
          }, {
            name: '_1003Nummonths',
            attributeName: {
              localPart: '_1003nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1003Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1003amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1003Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1003amount'
            },
            type: 'attribute'
          }, {
            name: '_1003Paidby',
            attributeName: {
              localPart: '_1003paidby'
            },
            type: 'attribute'
          }, {
            name: '_1003Ispaidtobroker',
            attributeName: {
              localPart: '_1003ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1003Isapr',
            attributeName: {
              localPart: '_1003isapr'
            },
            type: 'attribute'
          }, {
            name: '_1004Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1004percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1004Percentageof',
            attributeName: {
              localPart: '_1004percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1004Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1004amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1004Nummonths',
            attributeName: {
              localPart: '_1004nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1004Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1004amount'
            },
            type: 'attribute'
          }, {
            name: '_1004Paidby',
            attributeName: {
              localPart: '_1004paidby'
            },
            type: 'attribute'
          }, {
            name: '_1004Ispaidtobroker',
            attributeName: {
              localPart: '_1004ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1004Isapr',
            attributeName: {
              localPart: '_1004isapr'
            },
            type: 'attribute'
          }, {
            name: '_1005Description',
            attributeName: {
              localPart: '_1005description'
            },
            type: 'attribute'
          }, {
            name: '_1005Nummonths',
            attributeName: {
              localPart: '_1005nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1005Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1005amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1005Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1005amount'
            },
            type: 'attribute'
          }, {
            name: '_1005Paidby',
            attributeName: {
              localPart: '_1005paidby'
            },
            type: 'attribute'
          }, {
            name: '_1005Ispaidtobroker',
            attributeName: {
              localPart: '_1005ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1005Isapr',
            attributeName: {
              localPart: '_1005isapr'
            },
            type: 'attribute'
          }, {
            name: '_1006Description',
            attributeName: {
              localPart: '_1006description'
            },
            type: 'attribute'
          }, {
            name: '_1006Nummonths',
            attributeName: {
              localPart: '_1006nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1006Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1006amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1006Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1006amount'
            },
            type: 'attribute'
          }, {
            name: '_1006Paidby',
            attributeName: {
              localPart: '_1006paidby'
            },
            type: 'attribute'
          }, {
            name: '_1006Ispaidtobroker',
            attributeName: {
              localPart: '_1006ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1006Isapr',
            attributeName: {
              localPart: '_1006isapr'
            },
            type: 'attribute'
          }, {
            name: '_1007Description',
            attributeName: {
              localPart: '_1007description'
            },
            type: 'attribute'
          }, {
            name: '_1007Nummonths',
            attributeName: {
              localPart: '_1007nummonths'
            },
            type: 'attribute'
          }, {
            name: '_1007Amountpermonth',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1007amountpermonth'
            },
            type: 'attribute'
          }, {
            name: '_1007Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1007amount'
            },
            type: 'attribute'
          }, {
            name: '_1007Paidby',
            attributeName: {
              localPart: '_1007paidby'
            },
            type: 'attribute'
          }, {
            name: '_1007Ispaidtobroker',
            attributeName: {
              localPart: '_1007ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1007Isapr',
            attributeName: {
              localPart: '_1007isapr'
            },
            type: 'attribute'
          }, {
            name: '_1008Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1008amount'
            },
            type: 'attribute'
          }, {
            name: '_1008Paidby',
            attributeName: {
              localPart: '_1008paidby'
            },
            type: 'attribute'
          }, {
            name: '_1008Ispaidtobroker',
            attributeName: {
              localPart: '_1008ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1008Isapr',
            attributeName: {
              localPart: '_1008isapr'
            },
            type: 'attribute'
          }, {
            name: '_1101Description',
            attributeName: {
              localPart: '_1101description'
            },
            type: 'attribute'
          }, {
            name: '_1101Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1101amount'
            },
            type: 'attribute'
          }, {
            name: '_1101Paidby',
            attributeName: {
              localPart: '_1101paidby'
            },
            type: 'attribute'
          }, {
            name: '_1101Ispaidtobroker',
            attributeName: {
              localPart: '_1101ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1101Isapr',
            attributeName: {
              localPart: '_1101isapr'
            },
            type: 'attribute'
          }, {
            name: '_1101Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1101flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1101Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1101percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1101Percentageof',
            attributeName: {
              localPart: '_1101percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1102Description',
            attributeName: {
              localPart: '_1102description'
            },
            type: 'attribute'
          }, {
            name: '_1102Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1102amount'
            },
            type: 'attribute'
          }, {
            name: '_1102Paidby',
            attributeName: {
              localPart: '_1102paidby'
            },
            type: 'attribute'
          }, {
            name: '_1102Ispaidtobroker',
            attributeName: {
              localPart: '_1102ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1102Isapr',
            attributeName: {
              localPart: '_1102isapr'
            },
            type: 'attribute'
          }, {
            name: '_1103Description',
            attributeName: {
              localPart: '_1103description'
            },
            type: 'attribute'
          }, {
            name: '_1103Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1103amount'
            },
            type: 'attribute'
          }, {
            name: '_1103Paidby',
            attributeName: {
              localPart: '_1103paidby'
            },
            type: 'attribute'
          }, {
            name: '_1103Ispaidtobroker',
            attributeName: {
              localPart: '_1103ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1103Isapr',
            attributeName: {
              localPart: '_1103isapr'
            },
            type: 'attribute'
          }, {
            name: '_1103Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1103flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1103Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1103percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1103Percentageof',
            attributeName: {
              localPart: '_1103percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1104Description',
            attributeName: {
              localPart: '_1104description'
            },
            type: 'attribute'
          }, {
            name: '_1104Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1104amount'
            },
            type: 'attribute'
          }, {
            name: '_1104Paidby',
            attributeName: {
              localPart: '_1104paidby'
            },
            type: 'attribute'
          }, {
            name: '_1104Ispaidtobroker',
            attributeName: {
              localPart: '_1104ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1104Isapr',
            attributeName: {
              localPart: '_1104isapr'
            },
            type: 'attribute'
          }, {
            name: '_1105Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1105amount'
            },
            type: 'attribute'
          }, {
            name: '_1105Paidby',
            attributeName: {
              localPart: '_1105paidby'
            },
            type: 'attribute'
          }, {
            name: '_1105Ispaidtobroker',
            attributeName: {
              localPart: '_1105ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1105Isapr',
            attributeName: {
              localPart: '_1105isapr'
            },
            type: 'attribute'
          }, {
            name: '_1106Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1106amount'
            },
            type: 'attribute'
          }, {
            name: '_1106Paidby',
            attributeName: {
              localPart: '_1106paidby'
            },
            type: 'attribute'
          }, {
            name: '_1106Ispaidtobroker',
            attributeName: {
              localPart: '_1106ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1106Isapr',
            attributeName: {
              localPart: '_1106isapr'
            },
            type: 'attribute'
          }, {
            name: '_1107Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1107amount'
            },
            type: 'attribute'
          }, {
            name: '_1107Paidby',
            attributeName: {
              localPart: '_1107paidby'
            },
            type: 'attribute'
          }, {
            name: '_1107Ispaidtobroker',
            attributeName: {
              localPart: '_1107ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1107Isapr',
            attributeName: {
              localPart: '_1107isapr'
            },
            type: 'attribute'
          }, {
            name: '_1108Description',
            attributeName: {
              localPart: '_1108description'
            },
            type: 'attribute'
          }, {
            name: '_1108Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1108amount'
            },
            type: 'attribute'
          }, {
            name: '_1108Paidby',
            attributeName: {
              localPart: '_1108paidby'
            },
            type: 'attribute'
          }, {
            name: '_1108Ispaidtobroker',
            attributeName: {
              localPart: '_1108ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1108Isapr',
            attributeName: {
              localPart: '_1108isapr'
            },
            type: 'attribute'
          }, {
            name: '_1201Description',
            attributeName: {
              localPart: '_1201description'
            },
            type: 'attribute'
          }, {
            name: '_1201Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1201Percentageof',
            attributeName: {
              localPart: '_1201percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1201Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1201Mortgagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201mortgagefee'
            },
            type: 'attribute'
          }, {
            name: '_1201Releasefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201releasefee'
            },
            type: 'attribute'
          }, {
            name: '_1201Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201amount'
            },
            type: 'attribute'
          }, {
            name: '_1201Paidby',
            attributeName: {
              localPart: '_1201paidby'
            },
            type: 'attribute'
          }, {
            name: '_1201Ispaidtobroker',
            attributeName: {
              localPart: '_1201ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1201Isapr',
            attributeName: {
              localPart: '_1201isapr'
            },
            type: 'attribute'
          }, {
            name: '_1202Description',
            attributeName: {
              localPart: '_1202description'
            },
            type: 'attribute'
          }, {
            name: '_1202Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1202Percentageof',
            attributeName: {
              localPart: '_1202percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1202Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1202Mortgagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202mortgagefee'
            },
            type: 'attribute'
          }, {
            name: '_1202Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202amount'
            },
            type: 'attribute'
          }, {
            name: '_1202Paidby',
            attributeName: {
              localPart: '_1202paidby'
            },
            type: 'attribute'
          }, {
            name: '_1202Ispaidtobroker',
            attributeName: {
              localPart: '_1202ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1202Isapr',
            attributeName: {
              localPart: '_1202isapr'
            },
            type: 'attribute'
          }, {
            name: '_1202Description1',
            attributeName: {
              localPart: '_1202description1'
            },
            type: 'attribute'
          }, {
            name: '_1202Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202amount1'
            },
            type: 'attribute'
          }, {
            name: '_1202Paidby1',
            attributeName: {
              localPart: '_1202paidby1'
            },
            type: 'attribute'
          }, {
            name: '_1202Ispaidtobroker1',
            attributeName: {
              localPart: '_1202ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_1202Isapr1',
            attributeName: {
              localPart: '_1202isapr1'
            },
            type: 'attribute'
          }, {
            name: '_1202Poc1',
            attributeName: {
              localPart: '_1202poc1'
            },
            type: 'attribute'
          }, {
            name: '_1202Ishoepa1',
            attributeName: {
              localPart: '_1202ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_1202Description2',
            attributeName: {
              localPart: '_1202description2'
            },
            type: 'attribute'
          }, {
            name: '_1202Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202amount2'
            },
            type: 'attribute'
          }, {
            name: '_1202Paidby2',
            attributeName: {
              localPart: '_1202paidby2'
            },
            type: 'attribute'
          }, {
            name: '_1202Ispaidtobroker2',
            attributeName: {
              localPart: '_1202ispaidtobroker2'
            },
            type: 'attribute'
          }, {
            name: '_1202Isapr2',
            attributeName: {
              localPart: '_1202isapr2'
            },
            type: 'attribute'
          }, {
            name: '_1202Poc2',
            attributeName: {
              localPart: '_1202poc2'
            },
            type: 'attribute'
          }, {
            name: '_1202Ishoepa2',
            attributeName: {
              localPart: '_1202ishoepa2'
            },
            type: 'attribute'
          }, {
            name: '_1203Description',
            attributeName: {
              localPart: '_1203description'
            },
            type: 'attribute'
          }, {
            name: '_1203Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1203percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1203Percentageof',
            attributeName: {
              localPart: '_1203percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1203Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1203flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1203Mortgagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1203mortgagefee'
            },
            type: 'attribute'
          }, {
            name: '_1203Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1203amount'
            },
            type: 'attribute'
          }, {
            name: '_1203Paidby',
            attributeName: {
              localPart: '_1203paidby'
            },
            type: 'attribute'
          }, {
            name: '_1203Ispaidtobroker',
            attributeName: {
              localPart: '_1203ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1203Isapr',
            attributeName: {
              localPart: '_1203isapr'
            },
            type: 'attribute'
          }, {
            name: '_1204Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204amount'
            },
            type: 'attribute'
          }, {
            name: '_1204Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1204Paidby',
            attributeName: {
              localPart: '_1204paidby'
            },
            type: 'attribute'
          }, {
            name: '_1204Ispaidtobroker',
            attributeName: {
              localPart: '_1204ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1204Isapr',
            attributeName: {
              localPart: '_1204isapr'
            },
            type: 'attribute'
          }, {
            name: '_1204Poc',
            attributeName: {
              localPart: '_1204poc'
            },
            type: 'attribute'
          }, {
            name: '_1204Ishoepa',
            attributeName: {
              localPart: '_1204ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1205Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205amount'
            },
            type: 'attribute'
          }, {
            name: '_1205Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1205Paidby',
            attributeName: {
              localPart: '_1205paidby'
            },
            type: 'attribute'
          }, {
            name: '_1205Ispaidtobroker',
            attributeName: {
              localPart: '_1205ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1205Isapr',
            attributeName: {
              localPart: '_1205isapr'
            },
            type: 'attribute'
          }, {
            name: '_1205Poc',
            attributeName: {
              localPart: '_1205poc'
            },
            type: 'attribute'
          }, {
            name: '_1205Ishoepa',
            attributeName: {
              localPart: '_1205ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1206Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1206flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1206Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1206amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1206Paidby',
            attributeName: {
              localPart: '_1206paidby'
            },
            type: 'attribute'
          }, {
            name: '_1206Ispaidtobroker',
            attributeName: {
              localPart: '_1206ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1206Isapr',
            attributeName: {
              localPart: '_1206isapr'
            },
            type: 'attribute'
          }, {
            name: '_1206Poc',
            attributeName: {
              localPart: '_1206poc'
            },
            type: 'attribute'
          }, {
            name: '_1206Ishoepa',
            attributeName: {
              localPart: '_1206ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1207Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1207flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1207Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1207amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1207Paidby',
            attributeName: {
              localPart: '_1207paidby'
            },
            type: 'attribute'
          }, {
            name: '_1207Ispaidtobroker',
            attributeName: {
              localPart: '_1207ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1207Isapr',
            attributeName: {
              localPart: '_1207isapr'
            },
            type: 'attribute'
          }, {
            name: '_1207Poc',
            attributeName: {
              localPart: '_1207poc'
            },
            type: 'attribute'
          }, {
            name: '_1207Ishoepa',
            attributeName: {
              localPart: '_1207ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1302Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1302amount'
            },
            type: 'attribute'
          }, {
            name: '_1302Paidby',
            attributeName: {
              localPart: '_1302paidby'
            },
            type: 'attribute'
          }, {
            name: '_1302Ispaidtobroker',
            attributeName: {
              localPart: '_1302ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1302Isapr',
            attributeName: {
              localPart: '_1302isapr'
            },
            type: 'attribute'
          }, {
            name: '_1302Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1302amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1303Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1303amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1303Paidby',
            attributeName: {
              localPart: '_1303paidby'
            },
            type: 'attribute'
          }, {
            name: '_1303Ispaidtobroker',
            attributeName: {
              localPart: '_1303ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1303Isapr',
            attributeName: {
              localPart: '_1303isapr'
            },
            type: 'attribute'
          }, {
            name: '_1303Poc',
            attributeName: {
              localPart: '_1303poc'
            },
            type: 'attribute'
          }, {
            name: '_1303Ishoepa',
            attributeName: {
              localPart: '_1303ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1304Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1304amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1304Paidby',
            attributeName: {
              localPart: '_1304paidby'
            },
            type: 'attribute'
          }, {
            name: '_1304Ispaidtobroker',
            attributeName: {
              localPart: '_1304ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1304Isapr',
            attributeName: {
              localPart: '_1304isapr'
            },
            type: 'attribute'
          }, {
            name: '_1304Poc',
            attributeName: {
              localPart: '_1304poc'
            },
            type: 'attribute'
          }, {
            name: '_1304Ishoepa',
            attributeName: {
              localPart: '_1304ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1305Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1305amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1305Paidby',
            attributeName: {
              localPart: '_1305paidby'
            },
            type: 'attribute'
          }, {
            name: '_1305Ispaidtobroker',
            attributeName: {
              localPart: '_1305ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1305Isapr',
            attributeName: {
              localPart: '_1305isapr'
            },
            type: 'attribute'
          }, {
            name: '_1305Poc',
            attributeName: {
              localPart: '_1305poc'
            },
            type: 'attribute'
          }, {
            name: '_1305Ishoepa',
            attributeName: {
              localPart: '_1305ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaid1',
            attributeName: {
              localPart: '_800ispaid1'
            },
            type: 'attribute'
          }, {
            name: '_800Code1',
            attributeName: {
              localPart: '_800code1'
            },
            type: 'attribute'
          }, {
            name: '_800Description1',
            attributeName: {
              localPart: '_800description1'
            },
            type: 'attribute'
          }, {
            name: '_800Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount1'
            },
            type: 'attribute'
          }, {
            name: '_800Paidby1',
            attributeName: {
              localPart: '_800paidby1'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaidtobroker1',
            attributeName: {
              localPart: '_800ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_800Isapr1',
            attributeName: {
              localPart: '_800isapr1'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaid2',
            attributeName: {
              localPart: '_800ispaid2'
            },
            type: 'attribute'
          }, {
            name: '_800Code2',
            attributeName: {
              localPart: '_800code2'
            },
            type: 'attribute'
          }, {
            name: '_800Description2',
            attributeName: {
              localPart: '_800description2'
            },
            type: 'attribute'
          }, {
            name: '_800Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount2'
            },
            type: 'attribute'
          }, {
            name: '_800Paidby2',
            attributeName: {
              localPart: '_800paidby2'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaidtobroker2',
            attributeName: {
              localPart: '_800ispaidtobroker2'
            },
            type: 'attribute'
          }, {
            name: '_800Isapr2',
            attributeName: {
              localPart: '_800isapr2'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaid3',
            attributeName: {
              localPart: '_800ispaid3'
            },
            type: 'attribute'
          }, {
            name: '_800Code3',
            attributeName: {
              localPart: '_800code3'
            },
            type: 'attribute'
          }, {
            name: '_800Description3',
            attributeName: {
              localPart: '_800description3'
            },
            type: 'attribute'
          }, {
            name: '_800Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount3'
            },
            type: 'attribute'
          }, {
            name: '_800Paidby3',
            attributeName: {
              localPart: '_800paidby3'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaidtobroker3',
            attributeName: {
              localPart: '_800ispaidtobroker3'
            },
            type: 'attribute'
          }, {
            name: '_800Isapr3',
            attributeName: {
              localPart: '_800isapr3'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaid4',
            attributeName: {
              localPart: '_800ispaid4'
            },
            type: 'attribute'
          }, {
            name: '_800Code4',
            attributeName: {
              localPart: '_800code4'
            },
            type: 'attribute'
          }, {
            name: '_800Description4',
            attributeName: {
              localPart: '_800description4'
            },
            type: 'attribute'
          }, {
            name: '_800Amount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount4'
            },
            type: 'attribute'
          }, {
            name: '_800Paidby4',
            attributeName: {
              localPart: '_800paidby4'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaidtobroker4',
            attributeName: {
              localPart: '_800ispaidtobroker4'
            },
            type: 'attribute'
          }, {
            name: '_800Isapr4',
            attributeName: {
              localPart: '_800isapr4'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaid5',
            attributeName: {
              localPart: '_800ispaid5'
            },
            type: 'attribute'
          }, {
            name: '_800Code5',
            attributeName: {
              localPart: '_800code5'
            },
            type: 'attribute'
          }, {
            name: '_800Description5',
            attributeName: {
              localPart: '_800description5'
            },
            type: 'attribute'
          }, {
            name: '_800Amount5',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount5'
            },
            type: 'attribute'
          }, {
            name: '_800Paidby5',
            attributeName: {
              localPart: '_800paidby5'
            },
            type: 'attribute'
          }, {
            name: '_800Ispaidtobroker5',
            attributeName: {
              localPart: '_800ispaidtobroker5'
            },
            type: 'attribute'
          }, {
            name: '_800Isapr5',
            attributeName: {
              localPart: '_800isapr5'
            },
            type: 'attribute'
          }, {
            name: '_900Code1',
            attributeName: {
              localPart: '_900code1'
            },
            type: 'attribute'
          }, {
            name: '_900Description1',
            attributeName: {
              localPart: '_900description1'
            },
            type: 'attribute'
          }, {
            name: '_900Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_900amount1'
            },
            type: 'attribute'
          }, {
            name: '_900Paidby1',
            attributeName: {
              localPart: '_900paidby1'
            },
            type: 'attribute'
          }, {
            name: '_900Ispaidtobroker1',
            attributeName: {
              localPart: '_900ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_900Isapr1',
            attributeName: {
              localPart: '_900isapr1'
            },
            type: 'attribute'
          }, {
            name: '_1100Code1',
            attributeName: {
              localPart: '_1100code1'
            },
            type: 'attribute'
          }, {
            name: '_1100Description1',
            attributeName: {
              localPart: '_1100description1'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount1'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby1',
            attributeName: {
              localPart: '_1100paidby1'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker1',
            attributeName: {
              localPart: '_1100ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr1',
            attributeName: {
              localPart: '_1100isapr1'
            },
            type: 'attribute'
          }, {
            name: '_1100Code2',
            attributeName: {
              localPart: '_1100code2'
            },
            type: 'attribute'
          }, {
            name: '_1100Description2',
            attributeName: {
              localPart: '_1100description2'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount2'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby2',
            attributeName: {
              localPart: '_1100paidby2'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker2',
            attributeName: {
              localPart: '_1100ispaidtobroker2'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr2',
            attributeName: {
              localPart: '_1100isapr2'
            },
            type: 'attribute'
          }, {
            name: '_1100Code3',
            attributeName: {
              localPart: '_1100code3'
            },
            type: 'attribute'
          }, {
            name: '_1100Description3',
            attributeName: {
              localPart: '_1100description3'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount3'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby3',
            attributeName: {
              localPart: '_1100paidby3'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker3',
            attributeName: {
              localPart: '_1100ispaidtobroker3'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr3',
            attributeName: {
              localPart: '_1100isapr3'
            },
            type: 'attribute'
          }, {
            name: '_1100Code4',
            attributeName: {
              localPart: '_1100code4'
            },
            type: 'attribute'
          }, {
            name: '_1100Description4',
            attributeName: {
              localPart: '_1100description4'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount4'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby4',
            attributeName: {
              localPart: '_1100paidby4'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker4',
            attributeName: {
              localPart: '_1100ispaidtobroker4'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr4',
            attributeName: {
              localPart: '_1100isapr4'
            },
            type: 'attribute'
          }, {
            name: '_1100Code5',
            attributeName: {
              localPart: '_1100code5'
            },
            type: 'attribute'
          }, {
            name: '_1100Description5',
            attributeName: {
              localPart: '_1100description5'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount5',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount5'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby5',
            attributeName: {
              localPart: '_1100paidby5'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker5',
            attributeName: {
              localPart: '_1100ispaidtobroker5'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr5',
            attributeName: {
              localPart: '_1100isapr5'
            },
            type: 'attribute'
          }, {
            name: '_1100Code6',
            attributeName: {
              localPart: '_1100code6'
            },
            type: 'attribute'
          }, {
            name: '_1100Description6',
            attributeName: {
              localPart: '_1100description6'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount6',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount6'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby6',
            attributeName: {
              localPart: '_1100paidby6'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker6',
            attributeName: {
              localPart: '_1100ispaidtobroker6'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr6',
            attributeName: {
              localPart: '_1100isapr6'
            },
            type: 'attribute'
          }, {
            name: '_1100Code7',
            attributeName: {
              localPart: '_1100code7'
            },
            type: 'attribute'
          }, {
            name: '_1100Description7',
            attributeName: {
              localPart: '_1100description7'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount7',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount7'
            },
            type: 'attribute'
          }, {
            name: '_1100Paidby7',
            attributeName: {
              localPart: '_1100paidby7'
            },
            type: 'attribute'
          }, {
            name: '_1100Ispaidtobroker7',
            attributeName: {
              localPart: '_1100ispaidtobroker7'
            },
            type: 'attribute'
          }, {
            name: '_1100Isapr7',
            attributeName: {
              localPart: '_1100isapr7'
            },
            type: 'attribute'
          }, {
            name: '_1400Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1400amount'
            },
            type: 'attribute'
          }, {
            name: '_1400Bamount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1400bamount'
            },
            type: 'attribute'
          }, {
            name: '_1400Camount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1400camount'
            },
            type: 'attribute'
          }, {
            name: '_1300Code1',
            attributeName: {
              localPart: '_1300code1'
            },
            type: 'attribute'
          }, {
            name: '_1300Description1',
            attributeName: {
              localPart: '_1300description1'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount1'
            },
            type: 'attribute'
          }, {
            name: '_1300Paidby1',
            attributeName: {
              localPart: '_1300paidby1'
            },
            type: 'attribute'
          }, {
            name: '_1300Ispaidtobroker1',
            attributeName: {
              localPart: '_1300ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_1300Isapr1',
            attributeName: {
              localPart: '_1300isapr1'
            },
            type: 'attribute'
          }, {
            name: '_1300Code2',
            attributeName: {
              localPart: '_1300code2'
            },
            type: 'attribute'
          }, {
            name: '_1300Description2',
            attributeName: {
              localPart: '_1300description2'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount2'
            },
            type: 'attribute'
          }, {
            name: '_1300Paidby2',
            attributeName: {
              localPart: '_1300paidby2'
            },
            type: 'attribute'
          }, {
            name: '_1300Ispaidtobroker2',
            attributeName: {
              localPart: '_1300ispaidtobroker2'
            },
            type: 'attribute'
          }, {
            name: '_1300Isapr2',
            attributeName: {
              localPart: '_1300isapr2'
            },
            type: 'attribute'
          }, {
            name: '_1300Code3',
            attributeName: {
              localPart: '_1300code3'
            },
            type: 'attribute'
          }, {
            name: '_1300Description3',
            attributeName: {
              localPart: '_1300description3'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount3'
            },
            type: 'attribute'
          }, {
            name: '_1300Paidby3',
            attributeName: {
              localPart: '_1300paidby3'
            },
            type: 'attribute'
          }, {
            name: '_1300Ispaidtobroker3',
            attributeName: {
              localPart: '_1300ispaidtobroker3'
            },
            type: 'attribute'
          }, {
            name: '_1300Isapr3',
            attributeName: {
              localPart: '_1300isapr3'
            },
            type: 'attribute'
          }, {
            name: '_1300Code4',
            attributeName: {
              localPart: '_1300code4'
            },
            type: 'attribute'
          }, {
            name: '_1300Description4',
            attributeName: {
              localPart: '_1300description4'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount4'
            },
            type: 'attribute'
          }, {
            name: '_1300Paidby4',
            attributeName: {
              localPart: '_1300paidby4'
            },
            type: 'attribute'
          }, {
            name: '_1300Ispaidtobroker4',
            attributeName: {
              localPart: '_1300ispaidtobroker4'
            },
            type: 'attribute'
          }, {
            name: '_1300Isapr4',
            attributeName: {
              localPart: '_1300isapr4'
            },
            type: 'attribute'
          }, {
            name: '_1300Code5',
            attributeName: {
              localPart: '_1300code5'
            },
            type: 'attribute'
          }, {
            name: '_1300Description5',
            attributeName: {
              localPart: '_1300description5'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount5',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount5'
            },
            type: 'attribute'
          }, {
            name: '_1300Paidby5',
            attributeName: {
              localPart: '_1300paidby5'
            },
            type: 'attribute'
          }, {
            name: '_1300Ispaidtobroker5',
            attributeName: {
              localPart: '_1300ispaidtobroker5'
            },
            type: 'attribute'
          }, {
            name: '_1300Isapr5',
            attributeName: {
              localPart: '_1300isapr5'
            },
            type: 'attribute'
          }, {
            name: '_1200Code1',
            attributeName: {
              localPart: '_1200code1'
            },
            type: 'attribute'
          }, {
            name: '_1200Description1',
            attributeName: {
              localPart: '_1200description1'
            },
            type: 'attribute'
          }, {
            name: '_1200Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200amount1'
            },
            type: 'attribute'
          }, {
            name: '_1200Paidby1',
            attributeName: {
              localPart: '_1200paidby1'
            },
            type: 'attribute'
          }, {
            name: '_1200Ispaidtobroker1',
            attributeName: {
              localPart: '_1200ispaidtobroker1'
            },
            type: 'attribute'
          }, {
            name: '_1200Isapr1',
            attributeName: {
              localPart: '_1200isapr1'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentagefee1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200percentagefee1'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentageof1',
            attributeName: {
              localPart: '_1200percentageof1'
            },
            type: 'attribute'
          }, {
            name: '_1200Flatfee1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200flatfee1'
            },
            type: 'attribute'
          }, {
            name: '_1200Code2',
            attributeName: {
              localPart: '_1200code2'
            },
            type: 'attribute'
          }, {
            name: '_1200Description2',
            attributeName: {
              localPart: '_1200description2'
            },
            type: 'attribute'
          }, {
            name: '_1200Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200amount2'
            },
            type: 'attribute'
          }, {
            name: '_1200Paidby2',
            attributeName: {
              localPart: '_1200paidby2'
            },
            type: 'attribute'
          }, {
            name: '_1200Ispaidtobroker2',
            attributeName: {
              localPart: '_1200ispaidtobroker2'
            },
            type: 'attribute'
          }, {
            name: '_1200Isapr2',
            attributeName: {
              localPart: '_1200isapr2'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentagefee2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200percentagefee2'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentageof2',
            attributeName: {
              localPart: '_1200percentageof2'
            },
            type: 'attribute'
          }, {
            name: '_1200Flatfee2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200flatfee2'
            },
            type: 'attribute'
          }, {
            name: '_1200Code3',
            attributeName: {
              localPart: '_1200code3'
            },
            type: 'attribute'
          }, {
            name: '_1200Description3',
            attributeName: {
              localPart: '_1200description3'
            },
            type: 'attribute'
          }, {
            name: '_1200Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200amount3'
            },
            type: 'attribute'
          }, {
            name: '_1200Paidby3',
            attributeName: {
              localPart: '_1200paidby3'
            },
            type: 'attribute'
          }, {
            name: '_1200Ispaidtobroker3',
            attributeName: {
              localPart: '_1200ispaidtobroker3'
            },
            type: 'attribute'
          }, {
            name: '_1200Isapr3',
            attributeName: {
              localPart: '_1200isapr3'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentagefee3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200percentagefee3'
            },
            type: 'attribute'
          }, {
            name: '_1200Percentageof3',
            attributeName: {
              localPart: '_1200percentageof3'
            },
            type: 'attribute'
          }, {
            name: '_1200Flatfee3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1200flatfee3'
            },
            type: 'attribute'
          }, {
            name: '_801Poc',
            attributeName: {
              localPart: '_801poc'
            },
            type: 'attribute'
          }, {
            name: '_802Poc',
            attributeName: {
              localPart: '_802poc'
            },
            type: 'attribute'
          }, {
            name: '_803Poc',
            attributeName: {
              localPart: '_803poc'
            },
            type: 'attribute'
          }, {
            name: '_804Poc',
            attributeName: {
              localPart: '_804poc'
            },
            type: 'attribute'
          }, {
            name: '_805Poc',
            attributeName: {
              localPart: '_805poc'
            },
            type: 'attribute'
          }, {
            name: '_808Poc',
            attributeName: {
              localPart: '_808poc'
            },
            type: 'attribute'
          }, {
            name: '_809Poc',
            attributeName: {
              localPart: '_809poc'
            },
            type: 'attribute'
          }, {
            name: '_810Poc',
            attributeName: {
              localPart: '_810poc'
            },
            type: 'attribute'
          }, {
            name: '_811Poc',
            attributeName: {
              localPart: '_811poc'
            },
            type: 'attribute'
          }, {
            name: '_812Poc',
            attributeName: {
              localPart: '_812poc'
            },
            type: 'attribute'
          }, {
            name: '_800Poc1',
            attributeName: {
              localPart: '_800poc1'
            },
            type: 'attribute'
          }, {
            name: '_800Poc2',
            attributeName: {
              localPart: '_800poc2'
            },
            type: 'attribute'
          }, {
            name: '_800Poc3',
            attributeName: {
              localPart: '_800poc3'
            },
            type: 'attribute'
          }, {
            name: '_800Poc4',
            attributeName: {
              localPart: '_800poc4'
            },
            type: 'attribute'
          }, {
            name: '_800Poc5',
            attributeName: {
              localPart: '_800poc5'
            },
            type: 'attribute'
          }, {
            name: '_901Poc',
            attributeName: {
              localPart: '_901poc'
            },
            type: 'attribute'
          }, {
            name: '_902Poc',
            attributeName: {
              localPart: '_902poc'
            },
            type: 'attribute'
          }, {
            name: '_903Poc',
            attributeName: {
              localPart: '_903poc'
            },
            type: 'attribute'
          }, {
            name: '_904Poc',
            attributeName: {
              localPart: '_904poc'
            },
            type: 'attribute'
          }, {
            name: '_905Poc',
            attributeName: {
              localPart: '_905poc'
            },
            type: 'attribute'
          }, {
            name: '_900Poc1',
            attributeName: {
              localPart: '_900poc1'
            },
            type: 'attribute'
          }, {
            name: '_1001Poc',
            attributeName: {
              localPart: '_1001poc'
            },
            type: 'attribute'
          }, {
            name: '_1002Poc',
            attributeName: {
              localPart: '_1002poc'
            },
            type: 'attribute'
          }, {
            name: '_1003Poc',
            attributeName: {
              localPart: '_1003poc'
            },
            type: 'attribute'
          }, {
            name: '_1004Poc',
            attributeName: {
              localPart: '_1004poc'
            },
            type: 'attribute'
          }, {
            name: '_1005Poc',
            attributeName: {
              localPart: '_1005poc'
            },
            type: 'attribute'
          }, {
            name: '_1006Poc',
            attributeName: {
              localPart: '_1006poc'
            },
            type: 'attribute'
          }, {
            name: '_1007Poc',
            attributeName: {
              localPart: '_1007poc'
            },
            type: 'attribute'
          }, {
            name: '_1008Poc',
            attributeName: {
              localPart: '_1008poc'
            },
            type: 'attribute'
          }, {
            name: '_1101Poc',
            attributeName: {
              localPart: '_1101poc'
            },
            type: 'attribute'
          }, {
            name: '_1102Poc',
            attributeName: {
              localPart: '_1102poc'
            },
            type: 'attribute'
          }, {
            name: '_1103Poc',
            attributeName: {
              localPart: '_1103poc'
            },
            type: 'attribute'
          }, {
            name: '_1104Poc',
            attributeName: {
              localPart: '_1104poc'
            },
            type: 'attribute'
          }, {
            name: '_1105Poc',
            attributeName: {
              localPart: '_1105poc'
            },
            type: 'attribute'
          }, {
            name: '_1106Poc',
            attributeName: {
              localPart: '_1106poc'
            },
            type: 'attribute'
          }, {
            name: '_1107Poc',
            attributeName: {
              localPart: '_1107poc'
            },
            type: 'attribute'
          }, {
            name: '_1108Poc',
            attributeName: {
              localPart: '_1108poc'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc1',
            attributeName: {
              localPart: '_1100poc1'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc2',
            attributeName: {
              localPart: '_1100poc2'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc3',
            attributeName: {
              localPart: '_1100poc3'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc4',
            attributeName: {
              localPart: '_1100poc4'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc5',
            attributeName: {
              localPart: '_1100poc5'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc6',
            attributeName: {
              localPart: '_1100poc6'
            },
            type: 'attribute'
          }, {
            name: '_1100Poc7',
            attributeName: {
              localPart: '_1100poc7'
            },
            type: 'attribute'
          }, {
            name: '_1201Poc',
            attributeName: {
              localPart: '_1201poc'
            },
            type: 'attribute'
          }, {
            name: '_1202Poc',
            attributeName: {
              localPart: '_1202poc'
            },
            type: 'attribute'
          }, {
            name: '_1203Poc',
            attributeName: {
              localPart: '_1203poc'
            },
            type: 'attribute'
          }, {
            name: '_1200Poc1',
            attributeName: {
              localPart: '_1200poc1'
            },
            type: 'attribute'
          }, {
            name: '_1200Poc2',
            attributeName: {
              localPart: '_1200poc2'
            },
            type: 'attribute'
          }, {
            name: '_1200Poc3',
            attributeName: {
              localPart: '_1200poc3'
            },
            type: 'attribute'
          }, {
            name: '_1302Poc',
            attributeName: {
              localPart: '_1302poc'
            },
            type: 'attribute'
          }, {
            name: '_1300Poc1',
            attributeName: {
              localPart: '_1300poc1'
            },
            type: 'attribute'
          }, {
            name: '_1300Poc2',
            attributeName: {
              localPart: '_1300poc2'
            },
            type: 'attribute'
          }, {
            name: '_1300Poc3',
            attributeName: {
              localPart: '_1300poc3'
            },
            type: 'attribute'
          }, {
            name: '_1300Poc4',
            attributeName: {
              localPart: '_1300poc4'
            },
            type: 'attribute'
          }, {
            name: '_1300Poc5',
            attributeName: {
              localPart: '_1300poc5'
            },
            type: 'attribute'
          }, {
            name: '_801Ishoepa',
            attributeName: {
              localPart: '_801ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_802Ishoepa',
            attributeName: {
              localPart: '_802ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_803Ishoepa',
            attributeName: {
              localPart: '_803ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_804Ishoepa',
            attributeName: {
              localPart: '_804ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_805Ishoepa',
            attributeName: {
              localPart: '_805ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_808Ishoepa',
            attributeName: {
              localPart: '_808ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_809Ishoepa',
            attributeName: {
              localPart: '_809ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_810Ishoepa',
            attributeName: {
              localPart: '_810ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_811Ishoepa',
            attributeName: {
              localPart: '_811ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_812Ishoepa',
            attributeName: {
              localPart: '_812ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_901Ishoepa',
            attributeName: {
              localPart: '_901ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_902Ishoepa',
            attributeName: {
              localPart: '_902ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_903Ishoepa',
            attributeName: {
              localPart: '_903ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_904Ishoepa',
            attributeName: {
              localPart: '_904ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_905Ishoepa',
            attributeName: {
              localPart: '_905ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1001Ishoepa',
            attributeName: {
              localPart: '_1001ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1002Ishoepa',
            attributeName: {
              localPart: '_1002ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1003Ishoepa',
            attributeName: {
              localPart: '_1003ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1004Ishoepa',
            attributeName: {
              localPart: '_1004ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1005Ishoepa',
            attributeName: {
              localPart: '_1005ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1006Ishoepa',
            attributeName: {
              localPart: '_1006ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1007Ishoepa',
            attributeName: {
              localPart: '_1007ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1008Ishoepa',
            attributeName: {
              localPart: '_1008ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1101Ishoepa',
            attributeName: {
              localPart: '_1101ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1102Ishoepa',
            attributeName: {
              localPart: '_1102ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1103Ishoepa',
            attributeName: {
              localPart: '_1103ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1104Ishoepa',
            attributeName: {
              localPart: '_1104ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1105Ishoepa',
            attributeName: {
              localPart: '_1105ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1106Ishoepa',
            attributeName: {
              localPart: '_1106ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1107Ishoepa',
            attributeName: {
              localPart: '_1107ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1108Ishoepa',
            attributeName: {
              localPart: '_1108ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1201Ishoepa',
            attributeName: {
              localPart: '_1201ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1202Ishoepa',
            attributeName: {
              localPart: '_1202ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1203Ishoepa',
            attributeName: {
              localPart: '_1203ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1302Ishoepa',
            attributeName: {
              localPart: '_1302ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_800Ishoepa1',
            attributeName: {
              localPart: '_800ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_800Ishoepa2',
            attributeName: {
              localPart: '_800ishoepa2'
            },
            type: 'attribute'
          }, {
            name: '_800Ishoepa3',
            attributeName: {
              localPart: '_800ishoepa3'
            },
            type: 'attribute'
          }, {
            name: '_800Ishoepa4',
            attributeName: {
              localPart: '_800ishoepa4'
            },
            type: 'attribute'
          }, {
            name: '_800Ishoepa5',
            attributeName: {
              localPart: '_800ishoepa5'
            },
            type: 'attribute'
          }, {
            name: '_900Ishoepa1',
            attributeName: {
              localPart: '_900ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa1',
            attributeName: {
              localPart: '_1100ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa2',
            attributeName: {
              localPart: '_1100ishoepa2'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa3',
            attributeName: {
              localPart: '_1100ishoepa3'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa4',
            attributeName: {
              localPart: '_1100ishoepa4'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa5',
            attributeName: {
              localPart: '_1100ishoepa5'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa6',
            attributeName: {
              localPart: '_1100ishoepa6'
            },
            type: 'attribute'
          }, {
            name: '_1100Ishoepa7',
            attributeName: {
              localPart: '_1100ishoepa7'
            },
            type: 'attribute'
          }, {
            name: '_1200Ishoepa1',
            attributeName: {
              localPart: '_1200ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_1200Ishoepa2',
            attributeName: {
              localPart: '_1200ishoepa2'
            },
            type: 'attribute'
          }, {
            name: '_1200Ishoepa3',
            attributeName: {
              localPart: '_1200ishoepa3'
            },
            type: 'attribute'
          }, {
            name: '_1300Ishoepa1',
            attributeName: {
              localPart: '_1300ishoepa1'
            },
            type: 'attribute'
          }, {
            name: '_1300Ishoepa2',
            attributeName: {
              localPart: '_1300ishoepa2'
            },
            type: 'attribute'
          }, {
            name: '_1300Ishoepa3',
            attributeName: {
              localPart: '_1300ishoepa3'
            },
            type: 'attribute'
          }, {
            name: '_1300Ishoepa4',
            attributeName: {
              localPart: '_1300ishoepa4'
            },
            type: 'attribute'
          }, {
            name: '_1300Ishoepa5',
            attributeName: {
              localPart: '_1300ishoepa5'
            },
            type: 'attribute'
          }, {
            name: 'gfeversion',
            attributeName: {
              localPart: '_gfeversion'
            },
            type: 'attribute'
          }, {
            name: 'gfelocked',
            attributeName: {
              localPart: '_gfelocked'
            },
            type: 'attribute'
          }, {
            name: 'gfe2015',
            attributeName: {
              localPart: '_gfe2015'
            },
            type: 'attribute'
          }, {
            name: 'daysrequireratelock',
            typeInfo: 'Integer',
            attributeName: {
              localPart: '_daysrequireratelock'
            },
            type: 'attribute'
          }, {
            name: 'estimateavailabilityenddate',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_estimateavailabilityenddate'
            },
            type: 'attribute'
          }, {
            name: 'rateavailabilityenddate',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_rateavailabilityenddate'
            },
            type: 'attribute'
          }, {
            name: 'mtginsuranceamtthisloan',
            attributeName: {
              localPart: '_mtginsuranceamtthisloan'
            },
            type: 'attribute'
          }, {
            name: 'estimateavailabilityendtime',
            typeInfo: 'Time',
            attributeName: {
              localPart: '_estimateavailabilityendtime'
            },
            type: 'attribute'
          }, {
            name: 'rateavailabilityendtime',
            typeInfo: 'Time',
            attributeName: {
              localPart: '_rateavailabilityendtime'
            },
            type: 'attribute'
          }, {
            name: '_801Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_801amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_802Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_802amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_803Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_803amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_804Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_804amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_805Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_805amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_805Description',
            attributeName: {
              localPart: '_805description'
            },
            type: 'attribute'
          }, {
            name: '_806Description',
            attributeName: {
              localPart: '_806description'
            },
            type: 'attribute'
          }, {
            name: '_807Description',
            attributeName: {
              localPart: '_807description'
            },
            type: 'attribute'
          }, {
            name: '_808Description',
            attributeName: {
              localPart: '_808description'
            },
            type: 'attribute'
          }, {
            name: '_809Description',
            attributeName: {
              localPart: '_809description'
            },
            type: 'attribute'
          }, {
            name: '_902Description',
            attributeName: {
              localPart: '_902description'
            },
            type: 'attribute'
          }, {
            name: '_810Description',
            attributeName: {
              localPart: '_810description'
            },
            type: 'attribute'
          }, {
            name: '_804Description',
            attributeName: {
              localPart: '_804description'
            },
            type: 'attribute'
          }, {
            name: '_811Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_811amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_905Description',
            attributeName: {
              localPart: '_905description'
            },
            type: 'attribute'
          }, {
            name: '_903Description',
            attributeName: {
              localPart: '_903description'
            },
            type: 'attribute'
          }, {
            name: '_806Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_806amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_807Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_807amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_808Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_808amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_809Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_809amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_807Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_807amount'
            },
            type: 'attribute'
          }, {
            name: '_806Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_806amount'
            },
            type: 'attribute'
          }, {
            name: '_800Amount5Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount5locked'
            },
            type: 'attribute'
          }, {
            name: '_800Amount4Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount4locked'
            },
            type: 'attribute'
          }, {
            name: '_800Amount3Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount3locked'
            },
            type: 'attribute'
          }, {
            name: '_800Amount2Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount2locked'
            },
            type: 'attribute'
          }, {
            name: '_800Amount1Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_800amount1locked'
            },
            type: 'attribute'
          }, {
            name: '_806Isapr',
            attributeName: {
              localPart: '_806isapr'
            },
            type: 'attribute'
          }, {
            name: '_905Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_905amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_904Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_904amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_903Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_903amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_902Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_902amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_900Amount1Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_900amount1locked'
            },
            type: 'attribute'
          }, {
            name: '_812Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_812amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_810Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_810amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_806Ispaidtobroker',
            attributeName: {
              localPart: '_806ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_806Poc',
            attributeName: {
              localPart: '_806poc'
            },
            type: 'attribute'
          }, {
            name: '_806Ispaid',
            attributeName: {
              localPart: '_806ispaid'
            },
            type: 'attribute'
          }, {
            name: '_807Isapr',
            attributeName: {
              localPart: '_807isapr'
            },
            type: 'attribute'
          }, {
            name: '_806Ishoepa',
            attributeName: {
              localPart: '_806ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_807Poc',
            attributeName: {
              localPart: '_807poc'
            },
            type: 'attribute'
          }, {
            name: '_807Ispaidtobroker',
            attributeName: {
              localPart: '_807ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_807Ispaid',
            attributeName: {
              localPart: '_807ispaid'
            },
            type: 'attribute'
          }, {
            name: '_807Ishoepa',
            attributeName: {
              localPart: '_807ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_807Paidby',
            attributeName: {
              localPart: '_807paidby'
            },
            type: 'attribute'
          }, {
            name: '_806Paidby',
            attributeName: {
              localPart: '_806paidby'
            },
            type: 'attribute'
          }, {
            name: '_1109Description',
            attributeName: {
              localPart: '_1109description'
            },
            type: 'attribute'
          }, {
            name: '_1110Description',
            attributeName: {
              localPart: '_1110description'
            },
            type: 'attribute'
          }, {
            name: '_1111Description',
            attributeName: {
              localPart: '_1111description'
            },
            type: 'attribute'
          }, {
            name: '_1206Description',
            attributeName: {
              localPart: '_1206description'
            },
            type: 'attribute'
          }, {
            name: '_1302Description',
            attributeName: {
              localPart: '_1302description'
            },
            type: 'attribute'
          }, {
            name: '_1303Description',
            attributeName: {
              localPart: '_1303description'
            },
            type: 'attribute'
          }, {
            name: '_1305Description',
            attributeName: {
              localPart: '_1305description'
            },
            type: 'attribute'
          }, {
            name: '_1304Description',
            attributeName: {
              localPart: '_1304description'
            },
            type: 'attribute'
          }, {
            name: '_1207Description',
            attributeName: {
              localPart: '_1207description'
            },
            type: 'attribute'
          }, {
            name: '_1001Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1001amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount7Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount7locked'
            },
            type: 'attribute'
          }, {
            name: '_1104Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1104amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1111Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1111amount'
            },
            type: 'attribute'
          }, {
            name: '_1203Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1203amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1204Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1205Mortgagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205mortgagefee'
            },
            type: 'attribute'
          }, {
            name: '_1205Flatfee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205flatfee'
            },
            type: 'attribute'
          }, {
            name: '_1206Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1206amount'
            },
            type: 'attribute'
          }, {
            name: '_1207Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1207amount'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount1Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount1locked'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount2Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount2locked'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount3Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount3locked'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount4Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount4locked'
            },
            type: 'attribute'
          }, {
            name: '_1300Amount5Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1300amount5locked'
            },
            type: 'attribute'
          }, {
            name: '_1202Releasefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1202releasefee'
            },
            type: 'attribute'
          }, {
            name: '_1201Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1201amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1111Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1111amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1110Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1110amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1110Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1110amount'
            },
            type: 'attribute'
          }, {
            name: '_1109Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1109amount'
            },
            type: 'attribute'
          }, {
            name: '_1109Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1109amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1103Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1103amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1102Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1102amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1101Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1101amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount6Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount6locked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount5Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount5locked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount4Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount4locked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount3Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount3locked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount2Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount2locked'
            },
            type: 'attribute'
          }, {
            name: '_1100Amount1Locked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1100amount1locked'
            },
            type: 'attribute'
          }, {
            name: '_1601Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1601amount'
            },
            type: 'attribute'
          }, {
            name: '_1305Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1305amount'
            },
            type: 'attribute'
          }, {
            name: '_1304Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1304amount'
            },
            type: 'attribute'
          }, {
            name: '_1303Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1303amount'
            },
            type: 'attribute'
          }, {
            name: '_1301Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1301amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1301Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1301amount'
            },
            type: 'attribute'
          }, {
            name: '_1301Paidby',
            attributeName: {
              localPart: '_1301paidby'
            },
            type: 'attribute'
          }, {
            name: '_1111Paidby',
            attributeName: {
              localPart: '_1111paidby'
            },
            type: 'attribute'
          }, {
            name: '_1110Paidby',
            attributeName: {
              localPart: '_1110paidby'
            },
            type: 'attribute'
          }, {
            name: '_1109Paidby',
            attributeName: {
              localPart: '_1109paidby'
            },
            type: 'attribute'
          }, {
            name: '_1301Poc',
            attributeName: {
              localPart: '_1301poc'
            },
            type: 'attribute'
          }, {
            name: '_1301Ispaidtobroker',
            attributeName: {
              localPart: '_1301ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1301Ishoepa',
            attributeName: {
              localPart: '_1301ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1301Isapr',
            attributeName: {
              localPart: '_1301isapr'
            },
            type: 'attribute'
          }, {
            name: '_1111Poc',
            attributeName: {
              localPart: '_1111poc'
            },
            type: 'attribute'
          }, {
            name: '_1111Ispaidtobroker',
            attributeName: {
              localPart: '_1111ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1111Ishoepa',
            attributeName: {
              localPart: '_1111ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1111Isapr',
            attributeName: {
              localPart: '_1111isapr'
            },
            type: 'attribute'
          }, {
            name: '_1110Poc',
            attributeName: {
              localPart: '_1110poc'
            },
            type: 'attribute'
          }, {
            name: '_1110Ispaidtobroker',
            attributeName: {
              localPart: '_1110ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1110Ishoepa',
            attributeName: {
              localPart: '_1110ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1110Isapr',
            attributeName: {
              localPart: '_1110isapr'
            },
            type: 'attribute'
          }, {
            name: '_1109Poc',
            attributeName: {
              localPart: '_1109poc'
            },
            type: 'attribute'
          }, {
            name: '_1109Ispaidtobroker',
            attributeName: {
              localPart: '_1109ispaidtobroker'
            },
            type: 'attribute'
          }, {
            name: '_1109Ishoepa',
            attributeName: {
              localPart: '_1109ishoepa'
            },
            type: 'attribute'
          }, {
            name: '_1109Isapr',
            attributeName: {
              localPart: '_1109isapr'
            },
            type: 'attribute'
          }, {
            name: '_811Description',
            attributeName: {
              localPart: '_811description'
            },
            type: 'attribute'
          }, {
            name: '_812Description',
            attributeName: {
              localPart: '_812description'
            },
            type: 'attribute'
          }, {
            name: '_901Amountlocked',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_901amountlocked'
            },
            type: 'attribute'
          }, {
            name: '_1204Mortgagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204mortgagefee'
            },
            type: 'attribute'
          }, {
            name: '_1204Deedpercentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204deedpercentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1205Deedpercentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205deedpercentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1204Deedpercentageof',
            attributeName: {
              localPart: '_1204deedpercentageof'
            },
            type: 'attribute'
          }, {
            name: '_1205Deedpercentageof',
            attributeName: {
              localPart: '_1205deedpercentageof'
            },
            type: 'attribute'
          }, {
            name: '_1204Mortgagepercentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1204mortgagepercentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1205Mortgagepercentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1205mortgagepercentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1204Mortgagepercentageof',
            attributeName: {
              localPart: '_1204mortgagepercentageof'
            },
            type: 'attribute'
          }, {
            name: '_1205Mortgagepercentageof',
            attributeName: {
              localPart: '_1205mortgagepercentageof'
            },
            type: 'attribute'
          }, {
            name: '_1206Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1206percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1207Percentagefee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_1207percentagefee'
            },
            type: 'attribute'
          }, {
            name: '_1206Percentageof',
            attributeName: {
              localPart: '_1206percentageof'
            },
            type: 'attribute'
          }, {
            name: '_1207Percentageof',
            attributeName: {
              localPart: '_1207percentageof'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASETASKLIST.TASK.REQUIRESET',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'conditionsetHash',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'conditionset_hash'
            },
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'encoding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.ALIAS',
        typeName: null,
        propertyInfos: [{
            name: 'firstName',
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'middleName',
            attributeName: {
              localPart: 'middle_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECLOSEENDINFO.ATO',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'memo',
            attributeName: {
              localPart: 'memo'
            },
            type: 'attribute'
          }, {
            name: 'amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount'
            },
            type: 'attribute'
          }, {
            name: 'isPPFC',
            attributeName: {
              localPart: 'is_PPFC'
            },
            type: 'attribute'
          }, {
            name: 'isMapr',
            attributeName: {
              localPart: 'is_mapr'
            },
            type: 'attribute'
          }, {
            name: 'fundingMethod',
            attributeName: {
              localPart: 'funding_method'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEDISBURSEMENTLIST',
        typeName: 'BASE_DISBURSEMENT_LIST',
        propertyInfos: [{
            name: 'checkOrDEPOSITOrFEE',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'CHECK',
                typeInfo: '.BASEDISBURSEMENTCHECK'
              }, {
                elementName: 'DEPOSIT',
                typeInfo: '.BASEDISBURSEMENTDEPOSIT'
              }, {
                elementName: 'FEE',
                typeInfo: '.BASEDISBURSEMENTFEE'
              }, {
                elementName: 'LOAN',
                typeInfo: '.BASEDISBURSEMENTLOAN'
              }, {
                elementName: 'ACH',
                typeInfo: '.BASEDISBURSEMENTACH'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'MORTGAGESYSTEM',
        typeName: 'MORTGAGE_SYSTEM',
        baseTypeInfo: '.BASESYSTEM',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'closingbranch',
            elementName: 'CLOSING_BRANCH',
            typeInfo: '.BASEBRANCH'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'fnmaEnvelopeControlNumber',
            attributeName: {
              localPart: 'fnma_envelope_control_number'
            },
            type: 'attribute'
          }, {
            name: 'fnmaTransactionControlNumber',
            attributeName: {
              localPart: 'fnma_transaction_control_number'
            },
            type: 'attribute'
          }, {
            name: 'nmlsrUserId',
            attributeName: {
              localPart: 'nmlsr_user_id'
            },
            type: 'attribute'
          }, {
            name: 'nmlsrLenderId',
            attributeName: {
              localPart: 'nmlsr_lender_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEASSETCERTIFICATE',
        typeName: 'BASE_ASSET_CERTIFICATE',
        baseTypeInfo: '.BASEASSET',
        propertyInfos: [{
            name: 'certificateNumber',
            attributeName: {
              localPart: 'certificate_number'
            },
            type: 'attribute'
          }, {
            name: 'expirationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'expiration_date'
            },
            type: 'attribute'
          }, {
            name: 'issueDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'issue_date'
            },
            type: 'attribute'
          }, {
            name: 'pledgeType',
            attributeName: {
              localPart: 'pledge_type'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'pledgePercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pledge_percent'
            },
            type: 'attribute'
          }, {
            name: 'pledgeValueType',
            attributeName: {
              localPart: 'pledge_value_type'
            },
            type: 'attribute'
          }, {
            name: 'pledgeValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pledge_value'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASESYSTEM',
        typeName: 'BASE_SYSTEM',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'processor',
            elementName: 'PROCESSOR',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'loanofficer',
            elementName: 'LOAN_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'bookingofficer',
            elementName: 'BOOKING_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'approvalofficer',
            elementName: 'APPROVAL_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'counterofferofficer',
            elementName: 'COUNTER_OFFER_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'funder',
            elementName: 'FUNDER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'decliningofficer',
            elementName: 'DECLINING_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'decidingofficer',
            elementName: 'DECIDING_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'originator',
            elementName: 'ORIGINATOR',
            typeInfo: '.BASESYSTEM.ORIGINATOR'
          }, {
            name: 'branch',
            elementName: 'BRANCH',
            typeInfo: '.BASEBRANCH'
          }, {
            name: 'lender',
            elementName: 'LENDER',
            typeInfo: '.BASESYSTEM.LENDER'
          }, {
            name: 'organization',
            required: true,
            elementName: 'ORGANIZATION',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'insuranceseller',
            elementName: 'INSURANCE_SELLER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'clinic',
            elementName: 'CLINIC',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'clinicworker',
            elementName: 'CLINIC_WORKER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'insurancelastpulledofficer',
            elementName: 'INSURANCE_LAST_PULLED_OFFICER',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'source',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'originationIp',
            attributeName: {
              localPart: 'origination_ip'
            },
            type: 'attribute'
          }, {
            name: 'externalSource',
            attributeName: {
              localPart: 'external_source'
            },
            type: 'attribute'
          }, {
            name: 'loanNumber',
            attributeName: {
              localPart: 'loan_number'
            },
            type: 'attribute'
          }, {
            name: 'referenceNumberType',
            attributeName: {
              localPart: 'reference_number_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEMODIFICATIONHISTORY',
        typeName: 'BASE_MODIFICATION_HISTORY',
        propertyInfos: [{
            name: 'audit',
            minOccurs: 0,
            collection: true,
            elementName: 'AUDIT',
            typeInfo: '.BASEMODIFICATIONHISTORY.AUDIT'
          }]
      }, {
        localName: 'BASETASKLIST',
        typeName: 'BASE_TASK_LIST',
        propertyInfos: [{
            name: 'task',
            minOccurs: 0,
            collection: true,
            elementName: 'TASK',
            typeInfo: '.BASETASKLIST.TASK'
          }]
      }, {
        localName: 'FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION.FOMANSWERS',
        typeName: null,
        propertyInfos: [{
            name: 'fomanswer',
            minOccurs: 0,
            collection: true,
            elementName: 'FOM_ANSWER',
            typeInfo: '.FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION.FOMANSWERS.FOMANSWER'
          }]
      }, {
        localName: 'MORTGAGELOAN',
        typeName: null,
        baseTypeInfo: '.MORTGAGELOAN'
      }, {
        localName: 'BASECUSTOMQUESTIONS',
        typeName: 'BASE_CUSTOM_QUESTIONS',
        propertyInfos: [{
            name: 'customquestion',
            minOccurs: 0,
            collection: true,
            elementName: 'CUSTOM_QUESTION',
            typeInfo: '.BASECUSTOMQUESTIONS.CUSTOMQUESTION'
          }]
      }, {
        localName: 'BENEFICIALOWNERS.BENEFICIALOWNER',
        typeName: null,
        propertyInfos: [{
            name: 'idcard',
            required: true,
            elementName: 'ID_CARD',
            typeInfo: '.BASEIDCARD'
          }, {
            name: 'firstName',
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'middleName',
            attributeName: {
              localPart: 'middle_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }, {
            name: 'suffix',
            attributeName: {
              localPart: 'suffix'
            },
            type: 'attribute'
          }, {
            name: 'dob',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'dob'
            },
            type: 'attribute'
          }, {
            name: 'isTinSsn',
            attributeName: {
              localPart: 'is_tin_ssn'
            },
            type: 'attribute'
          }, {
            name: 'ssn',
            attributeName: {
              localPart: 'ssn'
            },
            type: 'attribute'
          }, {
            name: 'address',
            attributeName: {
              localPart: 'address'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'isBeneficialOwner',
            attributeName: {
              localPart: 'is_beneficial_owner'
            },
            type: 'attribute'
          }, {
            name: 'percentBusinessOwned',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'percent_business_owned'
            },
            type: 'attribute'
          }, {
            name: 'isControl',
            attributeName: {
              localPart: 'is_control'
            },
            type: 'attribute'
          }, {
            name: 'isAuthorizedCreditReport',
            attributeName: {
              localPart: 'is_authorized_credit_report'
            },
            type: 'attribute'
          }, {
            name: 'citizenship',
            attributeName: {
              localPart: 'citizenship'
            },
            type: 'attribute'
          }, {
            name: 'controlTitle',
            attributeName: {
              localPart: 'control_title'
            },
            type: 'attribute'
          }, {
            name: 'isOfacIstwatch',
            attributeName: {
              localPart: 'is_ofac_istwatch'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.LOANPRODUCTDATA',
        typeName: null,
        propertyInfos: [{
            name: 'loanRepaymentType',
            attributeName: {
              localPart: 'loan_repayment_type'
            },
            type: 'attribute'
          }, {
            name: 'freAffordableProgramId',
            attributeName: {
              localPart: 'fre_affordable_program_id'
            },
            type: 'attribute'
          }, {
            name: 'freOfferingId',
            attributeName: {
              localPart: 'fre_offering_id'
            },
            type: 'attribute'
          }, {
            name: 'armRateFirstPeriodCap',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'arm_rate_first_period_cap'
            },
            type: 'attribute'
          }, {
            name: 'armRateSubsequentAdjustMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'arm_rate_subsequent_adjust_months'
            },
            type: 'attribute'
          }, {
            name: 'armRateSubsequentPeriodicCap',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'arm_rate_subsequent_periodic_cap'
            },
            type: 'attribute'
          }, {
            name: 'armPaymentFirstAdjustMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'arm_payment_first_adjust_months'
            },
            type: 'attribute'
          }, {
            name: 'armPaymentSubsequentAdjustMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'arm_payment_subsequent_adjust_months'
            },
            type: 'attribute'
          }, {
            name: 'armPaymentPeriodCap',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'arm_payment_period_cap'
            },
            type: 'attribute'
          }, {
            name: 'armRateFirstAdjustMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'arm_rate_first_adjust_months'
            },
            type: 'attribute'
          }, {
            name: 'indexType',
            attributeName: {
              localPart: 'index_type'
            },
            type: 'attribute'
          }, {
            name: 'loanTermDueMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'loan_term_due_months'
            },
            type: 'attribute'
          }, {
            name: 'buydownSource',
            attributeName: {
              localPart: 'buydown_source'
            },
            type: 'attribute'
          }, {
            name: 'buydownIsTemp',
            attributeName: {
              localPart: 'buydown_is_temp'
            },
            type: 'attribute'
          }, {
            name: 'buydownTotalMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'buydown_total_months'
            },
            type: 'attribute'
          }, {
            name: 'buydownFirstRateAdjustPercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'buydown_first_rate_adjust_percent'
            },
            type: 'attribute'
          }, {
            name: 'buydownChangeFrequencyMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'buydown_change_frequency_months'
            },
            type: 'attribute'
          }, {
            name: 'negativeAmortizationLimitPercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'negative_amortization_limit_percent'
            },
            type: 'attribute'
          }, {
            name: 'gsePropertyType',
            attributeName: {
              localPart: 'gse_property_type'
            },
            type: 'attribute'
          }, {
            name: 'gseProjectClassType',
            attributeName: {
              localPart: 'gse_project_class_type'
            },
            type: 'attribute'
          }, {
            name: 'helocMaxBalanceAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'HELOC_max_balance_amount'
            },
            type: 'attribute'
          }, {
            name: 'maxPrepayPenalty',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'max_prepay_penalty'
            },
            type: 'attribute'
          }, {
            name: 'maxBalanceRise',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'max_balance_rise'
            },
            type: 'attribute'
          }, {
            name: 'canRateRise',
            attributeName: {
              localPart: 'can_rate_rise'
            },
            type: 'attribute'
          }, {
            name: 'canBalanceRise',
            attributeName: {
              localPart: 'can_balance_rise'
            },
            type: 'attribute'
          }, {
            name: 'isPrepayPenalty',
            attributeName: {
              localPart: 'is_prepay_penalty'
            },
            type: 'attribute'
          }, {
            name: 'canPaymentRise',
            attributeName: {
              localPart: 'can_payment_rise'
            },
            type: 'attribute'
          }, {
            name: 'maxPaymentRise',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'max_payment_rise'
            },
            type: 'attribute'
          }, {
            name: 'maxFirstPaymentRise',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'max_first_payment_rise'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEDISBURSEMENTCHECK',
        typeName: 'BASE_DISBURSEMENT_CHECK',
        baseTypeInfo: '.BASEDISBURSEMENT',
        propertyInfos: [{
            name: 'checkNumber',
            attributeName: {
              localPart: 'check_number'
            },
            type: 'attribute'
          }, {
            name: 'checkPayableTo',
            attributeName: {
              localPart: 'check_payable_to'
            },
            type: 'attribute'
          }, {
            name: 'checkAddress1',
            attributeName: {
              localPart: 'check_address_1'
            },
            type: 'attribute'
          }, {
            name: 'checkAddress2',
            attributeName: {
              localPart: 'check_address_2'
            },
            type: 'attribute'
          }, {
            name: 'checkAddress3',
            attributeName: {
              localPart: 'check_address_3'
            },
            type: 'attribute'
          }, {
            name: 'checkZip',
            attributeName: {
              localPart: 'check_zip'
            },
            type: 'attribute'
          }, {
            name: 'checkRemitter',
            attributeName: {
              localPart: 'check_remitter'
            },
            type: 'attribute'
          }, {
            name: 'checkPurpose',
            attributeName: {
              localPart: 'check_purpose'
            },
            type: 'attribute'
          }, {
            name: 'checkStatus',
            attributeName: {
              localPart: 'check_status'
            },
            type: 'attribute'
          }, {
            name: 'checkPrintOption',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'check_print_option'
            },
            type: 'attribute'
          }, {
            name: 'checkIsPayeeOnly',
            attributeName: {
              localPart: 'check_is_payee_only'
            },
            type: 'attribute'
          }, {
            name: 'checkIsPrimaryApplicant',
            attributeName: {
              localPart: 'check_is_primary_applicant'
            },
            type: 'attribute'
          }, {
            name: 'payoffDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'payoff_date'
            },
            type: 'attribute'
          }, {
            name: 'interestPerDiem',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'interest_per_diem'
            },
            type: 'attribute'
          }, {
            name: 'checkRemitterContactIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'check_remitter_contact_index'
            },
            type: 'attribute'
          }, {
            name: 'checkRemitterContactIndex2',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'check_remitter_contact_index2'
            },
            type: 'attribute'
          }, {
            name: 'checkCoremitterContactIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'check_coremitter_contact_index'
            },
            type: 'attribute'
          }, {
            name: 'isPayeeOfacIstwatch',
            attributeName: {
              localPart: 'is_payee_ofac_istwatch'
            },
            type: 'attribute'
          }, {
            name: 'istwatchTransactionDate',
            attributeName: {
              localPart: 'istwatch_transaction_date'
            },
            type: 'attribute'
          }, {
            name: 'checkAccountNumber',
            attributeName: {
              localPart: 'check_account_number'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEPAYMENTINFOCHOICE',
        typeName: 'BASE_PAYMENT_INFO_CHOICE',
        propertyInfos: [{
            name: 'couponbook',
            required: true,
            elementName: 'COUPON_BOOK',
            typeInfo: '.PAYMENTCOUPONBOOKINFO'
          }, {
            name: 'payrolldeduction',
            required: true,
            elementName: 'PAYROLL_DEDUCTION',
            typeInfo: '.PAYMENTPAYROLLDEDUCTIONINFO'
          }, {
            name: 'manualnocoupon',
            required: true,
            elementName: 'MANUAL_NO_COUPON',
            typeInfo: '.PAYMENTMANUALNOCOUPONINFO'
          }, {
            name: 'transferfrominternalaccount',
            required: true,
            elementName: 'TRANSFER_FROM_INTERNAL_ACCOUNT',
            typeInfo: '.PAYMENTTRANSFERFROMINTERNALACCOUNTINFO'
          }, {
            name: 'transferfromotherinstitution',
            required: true,
            elementName: 'TRANSFER_FROM_OTHER_INSTITUTION',
            typeInfo: '.PAYMENTTRANSFERFROMOTHERINSTITUTIONINFO'
          }]
      }, {
        localName: 'MORTGAGECONTACTS',
        typeName: 'MORTGAGE_CONTACTS',
        propertyInfos: [{
            name: 'contactinfo',
            minOccurs: 0,
            collection: true,
            elementName: 'CONTACT_INFO',
            typeInfo: '.MORTGAGECONTACTS.CONTACTINFO'
          }]
      }, {
        localName: 'BASEADDRESSLOOSE',
        typeName: 'BASE_ADDRESS_LOOSE',
        propertyInfos: [{
            name: 'streetAddress1',
            attributeName: {
              localPart: 'street_address_1'
            },
            type: 'attribute'
          }, {
            name: 'streetAddress2',
            attributeName: {
              localPart: 'street_address_2'
            },
            type: 'attribute'
          }, {
            name: 'country',
            attributeName: {
              localPart: 'country'
            },
            type: 'attribute'
          }, {
            name: 'addressVerificationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'address_verification_date'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'county',
            attributeName: {
              localPart: 'county'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEFREDDIEMAC',
        typeName: 'MORTGAGE_FREDDIE_MAC',
        propertyInfos: [{
            name: 'freKeyId',
            attributeName: {
              localPart: 'fre_key_id'
            },
            type: 'attribute'
          }, {
            name: 'freLoanId',
            attributeName: {
              localPart: 'fre_loan_id'
            },
            type: 'attribute'
          }, {
            name: 'freReportId',
            attributeName: {
              localPart: 'fre_report_id'
            },
            type: 'attribute'
          }, {
            name: 'freCreditReportProviderId',
            attributeName: {
              localPart: 'fre_credit_report_provider_id'
            },
            type: 'attribute'
          }, {
            name: 'freMiCoverageType',
            attributeName: {
              localPart: 'fre_mi_coverage_type'
            },
            type: 'attribute'
          }, {
            name: 'freMiPaymentType',
            attributeName: {
              localPart: 'fre_mi_payment_type'
            },
            type: 'attribute'
          }, {
            name: 'freMiRefundType',
            attributeName: {
              localPart: 'fre_mi_refund_type'
            },
            type: 'attribute'
          }, {
            name: 'freMiRenewelCalculationType',
            attributeName: {
              localPart: 'fre_mi_renewel_calculation_type'
            },
            type: 'attribute'
          }, {
            name: 'freMiRenewelType',
            attributeName: {
              localPart: 'fre_mi_renewel_type'
            },
            type: 'attribute'
          }, {
            name: 'freMiCoverageMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'fre_mi_coverage_months'
            },
            type: 'attribute'
          }, {
            name: 'freMiPaymentOption',
            attributeName: {
              localPart: 'fre_mi_payment_option'
            },
            type: 'attribute'
          }, {
            name: 'freConstructionPurposeType',
            attributeName: {
              localPart: 'fre_construction_purpose_type'
            },
            type: 'attribute'
          }, {
            name: 'freTransactionId',
            attributeName: {
              localPart: 'fre_transaction_id'
            },
            type: 'attribute'
          }, {
            name: 'freReserveAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'fre_reserve_amount'
            },
            type: 'attribute'
          }, {
            name: 'freTechnicalAffiliateId',
            attributeName: {
              localPart: 'fre_technical_affiliate_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECLOSEENDINFO',
        typeName: 'BASE_CLOSE_END_INFO',
        propertyInfos: [{
            name: 'ato',
            minOccurs: 0,
            maxOccurs: 10,
            collection: true,
            elementName: 'ATO',
            typeInfo: '.BASECLOSEENDINFO.ATO'
          }, {
            name: 'amountOwedToLender',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_owed_to_lender'
            },
            type: 'attribute'
          }, {
            name: 'amountRefinanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_refinanced'
            },
            type: 'attribute'
          }, {
            name: 'cashPrepaidFinanceCharge',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'cash_prepaid_finance_charge'
            },
            type: 'attribute'
          }, {
            name: 'maprCashFee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mapr_cash_fee'
            },
            type: 'attribute'
          }, {
            name: 'filingFeeAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'filing_fee_amount'
            },
            type: 'attribute'
          }, {
            name: 'filingFeeType',
            attributeName: {
              localPart: 'filing_fee_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PAYMENTMANUALNOCOUPONINFO',
        typeName: 'PAYMENT_MANUAL_NO_COUPON_INFO',
        propertyInfos: [{
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO',
        typeName: 'MORTGAGE_LOAN_INFO',
        baseTypeInfo: '.BASELOANINFO',
        propertyInfos: [{
            name: 'proposedhousingexpense',
            required: true,
            elementName: 'PROPOSED_HOUSING_EXPENSE',
            typeInfo: '.MORTGAGELOANINFO.PROPOSEDHOUSINGEXPENSE'
          }, {
            name: 'currenttrustdeed',
            minOccurs: 0,
            maxOccurs: 3,
            collection: true,
            elementName: 'CURRENT_TRUST_DEED',
            typeInfo: '.MORTGAGECURRENTTD'
          }, {
            name: 'newtrustdeed',
            minOccurs: 0,
            maxOccurs: 3,
            collection: true,
            elementName: 'NEW_TRUST_DEED',
            typeInfo: '.MORTGAGENEWTD'
          }, {
            name: 'vesting',
            minOccurs: 0,
            maxOccurs: 10,
            collection: true,
            elementName: 'VESTING',
            typeInfo: '.MORTGAGELOANINFO.VESTING'
          }, {
            name: 'vestingdescription',
            elementName: 'VESTING_DESCRIPTION',
            typeInfo: 'AnyType'
          }, {
            name: 'legaldescription',
            elementName: 'LEGAL_DESCRIPTION',
            typeInfo: 'AnyType'
          }, {
            name: 'homeequitydata',
            elementName: 'HOME_EQUITY_DATA',
            typeInfo: '.MORTGAGELOANINFO.HOMEEQUITYDATA'
          }, {
            name: 'loanproductdata',
            elementName: 'LOAN_PRODUCT_DATA',
            typeInfo: '.MORTGAGELOANINFO.LOANPRODUCTDATA'
          }, {
            name: 'freddiemac',
            elementName: 'FREDDIE_MAC',
            typeInfo: '.MORTGAGEFREDDIEMAC'
          }, {
            name: 'governmentdata',
            elementName: 'GOVERNMENT_DATA',
            typeInfo: '.MORTGAGEGOVERNMENTDATA'
          }, {
            name: 'gfe',
            elementName: 'GFE',
            typeInfo: '.MORTGAGELOANINFO.GFE'
          }, {
            name: 'settlementstatements',
            elementName: 'SETTLEMENT_STATEMENTS',
            typeInfo: '.MORTGAGELOANINFO.SETTLEMENTSTATEMENTS'
          }, {
            name: 'gfeaggregateadjustmentinfos',
            elementName: 'GFE_AGGREGATE_ADJUSTMENT_INFOS',
            typeInfo: '.MORTGAGELOANINFO.GFEAGGREGATEADJUSTMENTINFOS'
          }, {
            name: 'heloccardholders',
            elementName: 'HELOC_CARD_HOLDERS',
            typeInfo: '.HOMEEQUITYHELOCCARDS'
          }, {
            name: 'mortgageLoanType',
            attributeName: {
              localPart: 'mortgage_loan_type'
            },
            type: 'attribute'
          }, {
            name: 'mortgageLoanTypeOtherDesc',
            attributeName: {
              localPart: 'mortgage_loan_type_other_desc'
            },
            type: 'attribute'
          }, {
            name: 'isHomeEquity',
            attributeName: {
              localPart: 'is_home_equity'
            },
            type: 'attribute'
          }, {
            name: 'isLotLoan',
            attributeName: {
              localPart: 'is_lot_loan'
            },
            type: 'attribute'
          }, {
            name: 'lotPurpose',
            attributeName: {
              localPart: 'lot_purpose'
            },
            type: 'attribute'
          }, {
            name: 'purpose',
            attributeName: {
              localPart: 'purpose'
            },
            type: 'attribute'
          }, {
            name: 'refinancePurpose',
            attributeName: {
              localPart: 'refinance_purpose'
            },
            type: 'attribute'
          }, {
            name: 'estimatedPropertyValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'estimated_property_value'
            },
            type: 'attribute'
          }, {
            name: 'propertyValueSource',
            attributeName: {
              localPart: 'property_value_source'
            },
            type: 'attribute'
          }, {
            name: 'amountCashOut',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_cash_out'
            },
            type: 'attribute'
          }, {
            name: 'amountRequested',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_requested'
            },
            type: 'attribute'
          }, {
            name: 'amountApproved',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_approved'
            },
            type: 'attribute'
          }, {
            name: 'loanTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'loan_term'
            },
            type: 'attribute'
          }, {
            name: 'downPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'down_payment'
            },
            type: 'attribute'
          }, {
            name: 'contractReceivedDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'contract_received_date'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'apr',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'apr'
            },
            type: 'attribute'
          }, {
            name: 'rateType',
            attributeName: {
              localPart: 'rate_type'
            },
            type: 'attribute'
          }, {
            name: 'point',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'point'
            },
            type: 'attribute'
          }, {
            name: 'lifetimeCap',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'lifetime_cap'
            },
            type: 'attribute'
          }, {
            name: 'documentType',
            attributeName: {
              localPart: 'document_type'
            },
            type: 'attribute'
          }, {
            name: 'rateTypeOtherExplanation',
            attributeName: {
              localPart: 'rate_type_other_explanation'
            },
            type: 'attribute'
          }, {
            name: 'armDescription',
            attributeName: {
              localPart: 'arm_description'
            },
            type: 'attribute'
          }, {
            name: 'estateHeldIn',
            attributeName: {
              localPart: 'estate_held_in'
            },
            type: 'attribute'
          }, {
            name: 'requestLtv',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'request_ltv'
            },
            type: 'attribute'
          }, {
            name: 'downPaymentSource',
            attributeName: {
              localPart: 'down_payment_source'
            },
            type: 'attribute'
          }, {
            name: 'miscImplant',
            attributeName: {
              localPart: 'misc_implant'
            },
            type: 'attribute'
          }, {
            name: 'consumerProductCode',
            attributeName: {
              localPart: 'consumer_product_code'
            },
            type: 'attribute'
          }, {
            name: 'consumerProgramName',
            attributeName: {
              localPart: 'consumer_program_name'
            },
            type: 'attribute'
          }, {
            name: 'officerProductCode',
            attributeName: {
              localPart: 'officer_product_code'
            },
            type: 'attribute'
          }, {
            name: 'officerProgramName',
            attributeName: {
              localPart: 'officer_program_name'
            },
            type: 'attribute'
          }, {
            name: 'estateHeldInLeaseExpiration',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'estate_held_in_lease_expiration'
            },
            type: 'attribute'
          }, {
            name: 'downPaymentDescription',
            attributeName: {
              localPart: 'down_payment_description'
            },
            type: 'attribute'
          }, {
            name: 'monthlyPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_payment'
            },
            type: 'attribute'
          }, {
            name: 'monthlyPaymentOriginal',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_payment_original'
            },
            type: 'attribute'
          }, {
            name: 'lienPosition',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'lien_position'
            },
            type: 'attribute'
          }, {
            name: 'caseState',
            attributeName: {
              localPart: 'case_state'
            },
            type: 'attribute'
          }, {
            name: 'numberOfPayments',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'number_of_payments'
            },
            type: 'attribute'
          }, {
            name: 'officerMinPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'officer_min_payment'
            },
            type: 'attribute'
          }, {
            name: 'officerIsPaymentAmortized',
            attributeName: {
              localPart: 'officer_is_payment_amortized'
            },
            type: 'attribute'
          }, {
            name: 'officerPaymentPercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'officer_payment_percent'
            },
            type: 'attribute'
          }, {
            name: 'officerIsInterestOnlyPayments',
            attributeName: {
              localPart: 'officer_is_interest_only_payments'
            },
            type: 'attribute'
          }, {
            name: 'officerIsOtherNonAmortizing',
            attributeName: {
              localPart: 'officer_is_other_non_amortizing'
            },
            type: 'attribute'
          }, {
            name: 'officerIsSendNaHmda',
            attributeName: {
              localPart: 'officer_is_send_na_hmda'
            },
            type: 'attribute'
          }, {
            name: 'officerPrepaymentTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'officer_prepayment_term'
            },
            type: 'attribute'
          }, {
            name: 'officerUseLoanDateForLOCExpiration',
            attributeName: {
              localPart: 'officer_use_loan_date_for_LOC_expiration'
            },
            type: 'attribute'
          }, {
            name: 'consumerMinPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'consumer_min_payment'
            },
            type: 'attribute'
          }, {
            name: 'consumerPaymentPercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'consumer_payment_percent'
            },
            type: 'attribute'
          }, {
            name: 'consumerIsInterestOnlyPayments',
            attributeName: {
              localPart: 'consumer_is_interest_only_payments'
            },
            type: 'attribute'
          }, {
            name: 'consumerIsOtherNonAmortizing',
            attributeName: {
              localPart: 'consumer_is_other_non_amortizing'
            },
            type: 'attribute'
          }, {
            name: 'consumerIsSendNaHmda',
            attributeName: {
              localPart: 'consumer_is_send_na_hmda'
            },
            type: 'attribute'
          }, {
            name: 'consumerPrepaymentTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'consumer_prepayment_term'
            },
            type: 'attribute'
          }, {
            name: 'consumerUseLoanDateForLOCExpiration',
            attributeName: {
              localPart: 'consumer_use_loan_date_for_LOC_expiration'
            },
            type: 'attribute'
          }, {
            name: 'isBalloon',
            attributeName: {
              localPart: 'is_balloon'
            },
            type: 'attribute'
          }, {
            name: 'purchaser',
            attributeName: {
              localPart: 'purchaser'
            },
            type: 'attribute'
          }, {
            name: 'amountApprovedVariance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_approved_variance'
            },
            type: 'attribute'
          }, {
            name: 'isLOC',
            attributeName: {
              localPart: 'is_LOC'
            },
            type: 'attribute'
          }, {
            name: 'propertyValueSourceDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_value_source_date'
            },
            type: 'attribute'
          }, {
            name: 'isHighPricedMortgageLoan',
            attributeName: {
              localPart: 'is_high_priced_mortgage_loan'
            },
            type: 'attribute'
          }, {
            name: 'isQualifiedMortgage',
            attributeName: {
              localPart: 'is_qualified_mortgage'
            },
            type: 'attribute'
          }, {
            name: 'isQualifiedMortgageManual',
            attributeName: {
              localPart: 'is_qualified_mortgage_manual'
            },
            type: 'attribute'
          }, {
            name: 'changeInCircumstancesDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'change_in_circumstances_date'
            },
            type: 'attribute'
          }, {
            name: 'productConversionDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'product_conversion_date'
            },
            type: 'attribute'
          }, {
            name: 'isCalculateMapr',
            attributeName: {
              localPart: 'is_calculate_mapr'
            },
            type: 'attribute'
          }, {
            name: 'mapr',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mapr'
            },
            type: 'attribute'
          }, {
            name: 'index',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'index'
            },
            type: 'attribute'
          }, {
            name: 'margin',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'margin'
            },
            type: 'attribute'
          }, {
            name: 'floor',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'floor'
            },
            type: 'attribute'
          }, {
            name: 'ceiling',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'ceiling'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEDISBURSEMENTLOAN',
        typeName: 'BASE_DISBURSEMENT_LOAN',
        baseTypeInfo: '.BASEDISBURSEMENT',
        propertyInfos: [{
            name: 'loanSuffix',
            attributeName: {
              localPart: 'loan_suffix'
            },
            type: 'attribute'
          }, {
            name: 'loanIsRepayLoan',
            attributeName: {
              localPart: 'loan_is_repay_loan'
            },
            type: 'attribute'
          }, {
            name: 'loanDescription',
            attributeName: {
              localPart: 'loan_description'
            },
            type: 'attribute'
          }, {
            name: 'loanIsSameAccount',
            attributeName: {
              localPart: 'loan_is_same_account'
            },
            type: 'attribute'
          }, {
            name: 'payoffDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'payoff_date'
            },
            type: 'attribute'
          }, {
            name: 'interestPerDiem',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'interest_per_diem'
            },
            type: 'attribute'
          }, {
            name: 'loanType',
            attributeName: {
              localPart: 'loan_type'
            },
            type: 'attribute'
          }, {
            name: 'paymentType',
            attributeName: {
              localPart: 'payment_type'
            },
            type: 'attribute'
          }, {
            name: 'loanAccountNumber',
            attributeName: {
              localPart: 'loan_account_number'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEREQUESTEDPRODUCT',
        typeName: 'MORTGAGE_REQUESTED_PRODUCT',
        propertyInfos: [{
            name: 'loanTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'loan_term'
            },
            type: 'attribute'
          }, {
            name: 'rateType',
            attributeName: {
              localPart: 'rate_type'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'consumerGroupName',
            attributeName: {
              localPart: 'consumer_group_name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEPRICEADJUSTMENTLIST.PRICEADJUSTMENT',
        typeName: null,
        propertyInfos: [{
            name: 'adjustType',
            required: true,
            attributeName: {
              localPart: 'adjust_type'
            },
            type: 'attribute'
          }, {
            name: 'value',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'value'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.FUNDING',
        typeName: null,
        baseTypeInfo: '.MORTGAGEFUNDINGINFO',
        propertyInfos: [{
            name: 'insuranceoptions',
            required: true,
            elementName: 'INSURANCE_OPTIONS',
            typeInfo: '.MORTGAGELOAN.FUNDING.INSURANCEOPTIONS'
          }, {
            name: 'closeendinfo',
            elementName: 'CLOSE_END_INFO',
            typeInfo: '.BASECLOSEENDINFO'
          }]
      }, {
        localName: 'BASEAPPLICANTQUESTIONS',
        typeName: 'BASE_APPLICANT_QUESTIONS',
        propertyInfos: [{
            name: 'applicantquestion',
            minOccurs: 0,
            collection: true,
            elementName: 'APPLICANT_QUESTION',
            typeInfo: '.BASEAPPLICANTQUESTIONS.APPLICANTQUESTION'
          }]
      }, {
        localName: 'BASEPRICEADJUSTMENTLIST',
        typeName: 'BASE_PRICE_ADJUSTMENT_LIST',
        propertyInfos: [{
            name: 'priceadjustment',
            minOccurs: 0,
            maxOccurs: 99,
            collection: true,
            elementName: 'PRICE_ADJUSTMENT',
            typeInfo: '.BASEPRICEADJUSTMENTLIST.PRICEADJUSTMENT'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.PREVIOUSADDRESS',
        typeName: null,
        baseTypeInfo: '.BASEADDRESSLOOSE',
        propertyInfos: [{
            name: 'occupancyStatus',
            attributeName: {
              localPart: 'occupancy_status'
            },
            type: 'attribute'
          }, {
            name: 'occupancyDuration',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'occupancy_duration'
            },
            type: 'attribute'
          }, {
            name: 'otherOccupancyDescription',
            attributeName: {
              localPart: 'other_occupancy_description'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEFUNDINGINFO',
        typeName: 'BASE_FUNDING_INFO',
        propertyInfos: [{
            name: 'skippaymentinfo',
            elementName: 'SKIP_PAYMENT_INFO',
            typeInfo: '.SKIPPAYMENTINFO'
          }, {
            name: 'paymentinfo',
            elementName: 'PAYMENT_INFO',
            typeInfo: '.BASEPAYMENTINFOCHOICE'
          }, {
            name: 'dailyPeriodicRate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'daily_periodic_rate'
            },
            type: 'attribute'
          }, {
            name: 'paymentFrequency',
            attributeName: {
              localPart: 'payment_frequency'
            },
            type: 'attribute'
          }, {
            name: 'fundedStatus',
            attributeName: {
              localPart: 'funded_status'
            },
            type: 'attribute'
          }, {
            name: 'loanDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'loan_date'
            },
            type: 'attribute'
          }, {
            name: 'fundingDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'funding_date'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECUSTOMQUESTIONS.CUSTOMQUESTION',
        typeName: null,
        propertyInfos: [{
            name: 'customquestionanswer',
            minOccurs: 0,
            collection: true,
            elementName: 'CUSTOM_QUESTION_ANSWER',
            typeInfo: '.BASECUSTOMQUESTIONS.CUSTOMQUESTION.CUSTOMQUESTIONANSWER'
          }, {
            name: 'questionName',
            attributeName: {
              localPart: 'question_name'
            },
            type: 'attribute'
          }, {
            name: 'questionType',
            attributeName: {
              localPart: 'question_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT',
        typeName: 'MORTGAGE_BASE_APPLICANT',
        baseTypeInfo: '.BASEAPPLICANT',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'currentaddress',
            required: true,
            elementName: 'CURRENT_ADDRESS',
            typeInfo: '.MORTGAGEBASEAPPLICANT.CURRENTADDRESS'
          }, {
            name: 'previousaddress',
            elementName: 'PREVIOUS_ADDRESS',
            typeInfo: '.MORTGAGEBASEAPPLICANT.PREVIOUSADDRESS'
          }, {
            name: 'financialinfo',
            required: true,
            elementName: 'FINANCIAL_INFO',
            typeInfo: '.MORTGAGEBASEAPPLICANT.FINANCIALINFO'
          }, {
            name: 'reference',
            minOccurs: 0,
            maxOccurs: 2,
            collection: true,
            elementName: 'REFERENCE',
            typeInfo: '.BASEREFERENCE'
          }, {
            name: 'contactinfo',
            required: true,
            elementName: 'CONTACT_INFO',
            typeInfo: '.BASECONTACTINFO'
          }, {
            name: 'assets',
            elementName: 'ASSETS',
            typeInfo: '.BASEASSETLIST'
          }, {
            name: 'declaration',
            required: true,
            elementName: 'DECLARATION',
            typeInfo: '.MORTGAGEDECLARATION'
          }, {
            name: 'mailingaddress',
            elementName: 'MAILING_ADDRESS',
            typeInfo: '.MORTGAGEBASEAPPLICANT.MAILINGADDRESS'
          }, {
            name: 'alias',
            minOccurs: 0,
            maxOccurs: 2,
            collection: true,
            elementName: 'ALIAS',
            typeInfo: '.MORTGAGEBASEAPPLICANT.ALIAS'
          }, {
            name: 'schoolMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'school_months'
            },
            type: 'attribute'
          }, {
            name: 'nonMclReportId',
            attributeName: {
              localPart: 'non_mcl_report_id'
            },
            type: 'attribute'
          }, {
            name: 'isVAHUDQualified',
            attributeName: {
              localPart: 'is_VA_HUD_qualified'
            },
            type: 'attribute'
          }, {
            name: 'interviewMethod',
            attributeName: {
              localPart: 'interview_method'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEAPPLICANT',
        typeName: 'BASE_APPLICANT',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'idcard',
            elementName: 'ID_CARD',
            typeInfo: '.BASEIDCARD'
          }, {
            name: 'idcard2',
            elementName: 'ID_CARD2',
            typeInfo: '.BASEIDCARD'
          }, {
            name: 'approvaldenialreason',
            elementName: 'APPROVAL_DENIAL_REASON'
          }, {
            name: 'incomecomments',
            elementName: 'INCOME_COMMENTS'
          }, {
            name: 'applicantquestions',
            elementName: 'APPLICANT_QUESTIONS',
            typeInfo: '.BASEAPPLICANTQUESTIONS'
          }, {
            name: 'borrowerId',
            attributeName: {
              localPart: 'borrower_id'
            },
            type: 'attribute'
          }, {
            name: 'isDeclined',
            attributeName: {
              localPart: 'is_declined'
            },
            type: 'attribute'
          }, {
            name: 'firstName',
            required: true,
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            required: true,
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }, {
            name: 'mInitial',
            attributeName: {
              localPart: 'm_initial'
            },
            type: 'attribute'
          }, {
            name: 'middleName',
            attributeName: {
              localPart: 'middle_name'
            },
            type: 'attribute'
          }, {
            name: 'suffix',
            attributeName: {
              localPart: 'suffix'
            },
            type: 'attribute'
          }, {
            name: 'ssn',
            required: true,
            attributeName: {
              localPart: 'ssn'
            },
            type: 'attribute'
          }, {
            name: 'dob',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'dob'
            },
            type: 'attribute'
          }, {
            name: 'dependents',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'dependents'
            },
            type: 'attribute'
          }, {
            name: 'agesOfDependents',
            attributeName: {
              localPart: 'ages_of_dependents'
            },
            type: 'attribute'
          }, {
            name: 'motherMaidenName',
            attributeName: {
              localPart: 'mother_maiden_name'
            },
            type: 'attribute'
          }, {
            name: 'citizenship',
            attributeName: {
              localPart: 'citizenship'
            },
            type: 'attribute'
          }, {
            name: 'memberNumber',
            attributeName: {
              localPart: 'member_number'
            },
            type: 'attribute'
          }, {
            name: 'bankruptcyScore',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'bankruptcy_score'
            },
            type: 'attribute'
          }, {
            name: 'membershipMonths',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'membership_months'
            },
            type: 'attribute'
          }, {
            name: 'maritalStatus',
            attributeName: {
              localPart: 'marital_status'
            },
            type: 'attribute'
          }, {
            name: 'gender',
            attributeName: {
              localPart: 'gender'
            },
            type: 'attribute'
          }, {
            name: 'ethnicity',
            attributeName: {
              localPart: 'ethnicity'
            },
            type: 'attribute'
          }, {
            name: 'numberInHousehold',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'number_in_household'
            },
            type: 'attribute'
          }, {
            name: 'memberType',
            attributeName: {
              localPart: 'member_type'
            },
            type: 'attribute'
          }, {
            name: 'race',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'race'
            },
            type: 'attribute'
          }, {
            name: 'creditScore',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'credit_score'
            },
            type: 'attribute'
          }, {
            name: 'customScore',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'custom_score'
            },
            type: 'attribute'
          }, {
            name: 'customScore2',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'custom_score_2'
            },
            type: 'attribute'
          }, {
            name: 'declinedAnswerRaceGender',
            attributeName: {
              localPart: 'declined_answer_race_gender'
            },
            type: 'attribute'
          }, {
            name: 'notApplicableRaceGender',
            attributeName: {
              localPart: 'not_applicable_race_gender'
            },
            type: 'attribute'
          }, {
            name: 'applicantType',
            required: true,
            attributeName: {
              localPart: 'applicant_type'
            },
            type: 'attribute'
          }, {
            name: 'allowDirectMail',
            attributeName: {
              localPart: 'allow_direct_mail'
            },
            type: 'attribute'
          }, {
            name: 'allowEmailSolicit',
            attributeName: {
              localPart: 'allow_email_solicit'
            },
            type: 'attribute'
          }, {
            name: 'allowTelemarket',
            attributeName: {
              localPart: 'allow_telemarket'
            },
            type: 'attribute'
          }, {
            name: 'allowShareInfo',
            attributeName: {
              localPart: 'allow_share_info'
            },
            type: 'attribute'
          }, {
            name: 'securityCode',
            attributeName: {
              localPart: 'security_code'
            },
            type: 'attribute'
          }, {
            name: 'isOfacIdVer',
            attributeName: {
              localPart: 'is_ofac_id_ver'
            },
            type: 'attribute'
          }, {
            name: 'idAuthenticationResult',
            attributeName: {
              localPart: 'id_authentication_result'
            },
            type: 'attribute'
          }, {
            name: 'isFraudPrescore',
            attributeName: {
              localPart: 'is_fraud_prescore'
            },
            type: 'attribute'
          }, {
            name: 'legalStateOfResidency',
            attributeName: {
              localPart: 'legal_state_of_residency'
            },
            type: 'attribute'
          }, {
            name: 'relationToPrimary',
            attributeName: {
              localPart: 'relation_to_primary'
            },
            type: 'attribute'
          }, {
            name: 'isFraudFas',
            attributeName: {
              localPart: 'is_fraud_fas'
            },
            type: 'attribute'
          }, {
            name: 'isHighRiskConsumer',
            attributeName: {
              localPart: 'is_high_risk_consumer'
            },
            type: 'attribute'
          }, {
            name: 'isThin',
            attributeName: {
              localPart: 'is_thin'
            },
            type: 'attribute'
          }, {
            name: 'contactIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'contact_index'
            },
            type: 'attribute'
          }, {
            name: 'mlaCoveredStatus',
            attributeName: {
              localPart: 'mla_covered_status'
            },
            type: 'attribute'
          }, {
            name: 'mlaCoveredDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'mla_covered_date'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.HOMEEQUITYDATA',
        typeName: null,
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'purposeName',
            attributeName: {
              localPart: 'purpose_name'
            },
            type: 'attribute'
          }, {
            name: 'homeEquityPurposeId',
            attributeName: {
              localPart: 'home_equity_purpose_id'
            },
            type: 'attribute'
          }, {
            name: 'otherReasonName',
            attributeName: {
              localPart: 'other_reason_name'
            },
            type: 'attribute'
          }, {
            name: 'homeEquityOtherReasonId',
            attributeName: {
              localPart: 'home_equity_other_reason_id'
            },
            type: 'attribute'
          }, {
            name: 'isInstallment',
            attributeName: {
              localPart: 'is_installment'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEFUNDINGINFO',
        typeName: 'MORTGAGE_FUNDING_INFO',
        baseTypeInfo: '.BASEFUNDINGINFO',
        propertyInfos: [{
            name: 'firstPaymentDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'first_payment_date'
            },
            type: 'attribute'
          }, {
            name: 'amountFinanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_financed'
            },
            type: 'attribute'
          }, {
            name: 'estimatedClosingDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'estimated_closing_date'
            },
            type: 'attribute'
          }, {
            name: 'miCoveragePercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mi_coverage_percent'
            },
            type: 'attribute'
          }, {
            name: 'miInsurerCode',
            attributeName: {
              localPart: 'mi_insurer_code'
            },
            type: 'attribute'
          }, {
            name: 'isEscrowWaived',
            attributeName: {
              localPart: 'is_escrow_waived'
            },
            type: 'attribute'
          }, {
            name: 'loanTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'loan_term'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'locAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'loc_amount'
            },
            type: 'attribute'
          }, {
            name: 'locExpireDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'loc_expire_date'
            },
            type: 'attribute'
          }, {
            name: 'initialRate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'initial_rate'
            },
            type: 'attribute'
          }, {
            name: 'rateExpireDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'rate_expire_date'
            },
            type: 'attribute'
          }, {
            name: 'docStampsFee',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'doc_stamps_fee'
            },
            type: 'attribute'
          }, {
            name: 'totalInterestPercentLe',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'total_interest_percent_le'
            },
            type: 'attribute'
          }, {
            name: 'totalInterestPercentCd',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'total_interest_percent_cd'
            },
            type: 'attribute'
          }, {
            name: 'inFiveYearsPrincipal',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'in_five_years_principal'
            },
            type: 'attribute'
          }, {
            name: 'inFiveYearsPimilc',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'in_five_years_pimilc'
            },
            type: 'attribute'
          }, {
            name: 'initialAmountAdvanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'initial_amount_advanced'
            },
            type: 'attribute'
          }, {
            name: 'lastPaymentDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'last_payment_date'
            },
            type: 'attribute'
          }, {
            name: 'financeCharge',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'finance_charge'
            },
            type: 'attribute'
          }, {
            name: 'totalFinancedPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'total_financed_payment'
            },
            type: 'attribute'
          }, {
            name: 'otherCharges',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_charges'
            },
            type: 'attribute'
          }, {
            name: 'otherChargesDescription',
            attributeName: {
              localPart: 'other_charges_description'
            },
            type: 'attribute'
          }, {
            name: 'amountAdvanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_advanced'
            },
            type: 'attribute'
          }, {
            name: 'prevLoanLinerBalance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'prev_loan_liner_balance'
            },
            type: 'attribute'
          }, {
            name: 'prevPaymentDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'prev_payment_date'
            },
            type: 'attribute'
          }, {
            name: 'otherLoans',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_loans'
            },
            type: 'attribute'
          }, {
            name: 'currentPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'current_payment'
            },
            type: 'attribute'
          }, {
            name: 'currentPaymentDueDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'current_payment_due_date'
            },
            type: 'attribute'
          }, {
            name: 'filingFeeAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'filing_fee_amount'
            },
            type: 'attribute'
          }, {
            name: 'filingFeeType',
            attributeName: {
              localPart: 'filing_fee_type'
            },
            type: 'attribute'
          }, {
            name: 'interestOnlyMinPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'interest_only_min_payment'
            },
            type: 'attribute'
          }, {
            name: 'interestOnlyMaxPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'interest_only_max_payment'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PAYMENTCOUPONBOOKINFO',
        typeName: 'PAYMENT_COUPON_BOOK_INFO',
        propertyInfos: [{
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEADDRESSTHREELINE',
        typeName: 'BASE_ADDRESS_THREE_LINE',
        propertyInfos: [{
            name: 'streetAddress1',
            attributeName: {
              localPart: 'street_address_1'
            },
            type: 'attribute'
          }, {
            name: 'streetAddress2',
            attributeName: {
              localPart: 'street_address_2'
            },
            type: 'attribute'
          }, {
            name: 'streetAddress3',
            attributeName: {
              localPart: 'street_address_3'
            },
            type: 'attribute'
          }, {
            name: 'country',
            attributeName: {
              localPart: 'country'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEWEBMSHISTORY',
        typeName: 'BASE_WEBMS_HISTORY',
        propertyInfos: [{
            name: 'message',
            minOccurs: 0,
            collection: true,
            elementName: 'MESSAGE',
            typeInfo: '.BASEWEBMSHISTORY.MESSAGE'
          }]
      }, {
        localName: 'BASEDISBURSEMENTACH',
        typeName: 'BASE_DISBURSEMENT_ACH',
        baseTypeInfo: '.BASEDISBURSEMENT',
        propertyInfos: [{
            name: 'nameOnAccount',
            attributeName: {
              localPart: 'name_on_account'
            },
            type: 'attribute'
          }, {
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }, {
            name: 'bankRoutingNumber',
            attributeName: {
              localPart: 'bank_routing_number'
            },
            type: 'attribute'
          }, {
            name: 'bankName',
            attributeName: {
              localPart: 'bank_name'
            },
            type: 'attribute'
          }, {
            name: 'bankState',
            attributeName: {
              localPart: 'bank_state'
            },
            type: 'attribute'
          }, {
            name: 'accountType',
            attributeName: {
              localPart: 'account_type'
            },
            type: 'attribute'
          }, {
            name: 'transactionType',
            attributeName: {
              localPart: 'transaction_type'
            },
            type: 'attribute'
          }, {
            name: 'achIsPrimaryApplicant',
            attributeName: {
              localPart: 'ach_is_primary_applicant'
            },
            type: 'attribute'
          }, {
            name: 'payoffDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'payoff_date'
            },
            type: 'attribute'
          }, {
            name: 'interestPerDiem',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'interest_per_diem'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEDISBURSEMENTFEE',
        typeName: 'BASE_DISBURSEMENT_FEE',
        baseTypeInfo: '.BASEDISBURSEMENT',
        propertyInfos: [{
            name: 'prepaidFeesFinanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'prepaid_fees_financed'
            },
            type: 'attribute'
          }, {
            name: 'feesFinanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'fees_financed'
            },
            type: 'attribute'
          }, {
            name: 'feesGlAccountNumber',
            attributeName: {
              localPart: 'fees_gl_account_number'
            },
            type: 'attribute'
          }, {
            name: 'feeDescription',
            attributeName: {
              localPart: 'fee_description'
            },
            type: 'attribute'
          }, {
            name: 'feeLinkingType',
            attributeName: {
              localPart: 'fee_linking_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.GFEAGGREGATEADJUSTMENTINFOS',
        typeName: null,
        propertyInfos: [{
            name: 'hazardCushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'hazard_cushion'
            },
            type: 'attribute'
          }, {
            name: 'hazardDate1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'hazard_date1'
            },
            type: 'attribute'
          }, {
            name: 'hazardDate2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'hazard_date2'
            },
            type: 'attribute'
          }, {
            name: 'hazardDate3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'hazard_date3'
            },
            type: 'attribute'
          }, {
            name: 'hazardDate4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'hazard_date4'
            },
            type: 'attribute'
          }, {
            name: 'mortgageCushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'mortgage_cushion'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDate1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'mortgage_date1'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDate2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'mortgage_date2'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDate3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'mortgage_date3'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDate4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'mortgage_date4'
            },
            type: 'attribute'
          }, {
            name: 'propertyCushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'property_cushion'
            },
            type: 'attribute'
          }, {
            name: 'propertyDate1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_date1'
            },
            type: 'attribute'
          }, {
            name: 'propertyDate2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_date2'
            },
            type: 'attribute'
          }, {
            name: 'propertyDate3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_date3'
            },
            type: 'attribute'
          }, {
            name: 'propertyDate4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_date4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1Cushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'userdefined1_cushion'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1Date1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined1_date1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1Date2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined1_date2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1Date3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined1_date3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1Date4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined1_date4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2Cushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'userdefined2_cushion'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2Date1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined2_date1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2Date2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined2_date2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2Date3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined2_date3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2Date4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined2_date4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3Cushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'userdefined3_cushion'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3Date1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined3_date1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3Date2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined3_date2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3Date3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined3_date3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3Date4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined3_date4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4Cushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'userdefined4_cushion'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4Date1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined4_date1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4Date2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined4_date2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4Date3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined4_date3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4Date4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined4_date4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5Cushion',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'userdefined5_cushion'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5Date1',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined5_date1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5Date2',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined5_date2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5Date3',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined5_date3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5Date4',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'userdefined5_date4'
            },
            type: 'attribute'
          }, {
            name: 'hazardAnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'mortgageAnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'propertyAnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1AnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined1_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2AnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined2_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3AnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined3_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4AnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined4_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5AnnualAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined5_annual_amount'
            },
            type: 'attribute'
          }, {
            name: 'hazardIsMonthly',
            attributeName: {
              localPart: 'hazard_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'mortgageIsMonthly',
            attributeName: {
              localPart: 'mortgage_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'propertyIsMonthly',
            attributeName: {
              localPart: 'property_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1IsMonthly',
            attributeName: {
              localPart: 'userdefined1_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2IsMonthly',
            attributeName: {
              localPart: 'userdefined2_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3IsMonthly',
            attributeName: {
              localPart: 'userdefined3_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4IsMonthly',
            attributeName: {
              localPart: 'userdefined4_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5IsMonthly',
            attributeName: {
              localPart: 'userdefined5_is_monthly'
            },
            type: 'attribute'
          }, {
            name: 'hazardDisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'hazardDisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'hazardDisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'hazardDisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'mortgageDisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'propertyDisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'propertyDisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'propertyDisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'propertyDisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1DisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined1_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1DisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined1_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1DisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined1_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined1DisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined1_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2DisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined2_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2DisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined2_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2DisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined2_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined2DisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined2_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3DisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined3_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3DisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined3_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3DisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined3_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined3DisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined3_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4DisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined4_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4DisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined4_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4DisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined4_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined4DisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined4_disbursement_amount4'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5DisbursementAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined5_disbursement_amount1'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5DisbursementAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined5_disbursement_amount2'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5DisbursementAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined5_disbursement_amount3'
            },
            type: 'attribute'
          }, {
            name: 'userdefined5DisbursementAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'userdefined5_disbursement_amount4'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEASSET',
        typeName: 'BASE_ASSET',
        propertyInfos: [{
            name: 'assetType',
            required: true,
            attributeName: {
              localPart: 'asset_type'
            },
            type: 'attribute'
          }, {
            name: 'assetValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'asset_value'
            },
            type: 'attribute'
          }, {
            name: 'propertyAddress',
            attributeName: {
              localPart: 'property_address'
            },
            type: 'attribute'
          }, {
            name: 'propertyZip',
            attributeName: {
              localPart: 'property_zip'
            },
            type: 'attribute'
          }, {
            name: 'propertyState',
            attributeName: {
              localPart: 'property_state'
            },
            type: 'attribute'
          }, {
            name: 'propertyCity',
            attributeName: {
              localPart: 'property_city'
            },
            type: 'attribute'
          }, {
            name: 'existingLoanAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'existing_loan_amount'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }, {
            name: 'bankName',
            attributeName: {
              localPart: 'bank_name'
            },
            type: 'attribute'
          }, {
            name: 'isCollateral',
            attributeName: {
              localPart: 'is_collateral'
            },
            type: 'attribute'
          }, {
            name: 'ownershipType',
            required: true,
            attributeName: {
              localPart: 'ownership_type'
            },
            type: 'attribute'
          }, {
            name: 'otherOwnerName',
            attributeName: {
              localPart: 'other_owner_name'
            },
            type: 'attribute'
          }, {
            name: 'otherOwnerName2',
            attributeName: {
              localPart: 'other_owner_name2'
            },
            type: 'attribute'
          }, {
            name: 'availableAccountInfo',
            attributeName: {
              localPart: 'available_account_info'
            },
            type: 'attribute'
          }, {
            name: 'stockBondMutualfundShareCount',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'stock_bond_mutualfund_share_count'
            },
            type: 'attribute'
          }, {
            name: 'verificationStatus',
            attributeName: {
              localPart: 'verification_status'
            },
            type: 'attribute'
          }, {
            name: 'otherOwnerContactIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'other_owner_contact_index'
            },
            type: 'attribute'
          }, {
            name: 'otherOwnerContactIndex2',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'other_owner_contact_index2'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEAPPLICANT.CREDITREPORT',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'reportId',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'report_id'
            },
            type: 'attribute'
          }, {
            name: 'reportFormat',
            required: true,
            attributeName: {
              localPart: 'report_format'
            },
            type: 'attribute'
          }, {
            name: 'encoding',
            attributeName: {
              localPart: 'encoding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECUSTOMQUESTIONS.CUSTOMQUESTION.CUSTOMQUESTIONANSWER',
        typeName: null,
        propertyInfos: [{
            name: 'answerText',
            attributeName: {
              localPart: 'answer_text'
            },
            type: 'attribute'
          }, {
            name: 'answerValue',
            attributeName: {
              localPart: 'answer_value'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'HOMEEQUITYHELOCCARDS.CARDHOLDER',
        typeName: null,
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'firstName',
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }, {
            name: 'mInitial',
            attributeName: {
              localPart: 'm_initial'
            },
            type: 'attribute'
          }, {
            name: 'orderCard',
            attributeName: {
              localPart: 'order_card'
            },
            type: 'attribute'
          }, {
            name: 'referenceId',
            attributeName: {
              localPart: 'reference_id'
            },
            type: 'attribute'
          }, {
            name: 'fee',
            attributeName: {
              localPart: 'fee'
            },
            type: 'attribute'
          }, {
            name: 'isBorrower',
            attributeName: {
              localPart: 'is_borrower'
            },
            type: 'attribute'
          }, {
            name: 'suffix',
            attributeName: {
              localPart: 'suffix'
            },
            type: 'attribute'
          }, {
            name: 'ssn',
            attributeName: {
              localPart: 'ssn'
            },
            type: 'attribute'
          }, {
            name: 'dob',
            attributeName: {
              localPart: 'dob'
            },
            type: 'attribute'
          }, {
            name: 'motherMaiden',
            attributeName: {
              localPart: 'mother_maiden'
            },
            type: 'attribute'
          }, {
            name: 'cardAccountNumber',
            attributeName: {
              localPart: 'card_account_number'
            },
            type: 'attribute'
          }, {
            name: 'isOfacIstwatch',
            attributeName: {
              localPart: 'is_ofac_istwatch'
            },
            type: 'attribute'
          }, {
            name: 'istwatchTransactiondate',
            attributeName: {
              localPart: 'istwatch_transactiondate'
            },
            type: 'attribute'
          }, {
            name: 'mailingAddress',
            attributeName: {
              localPart: 'mailing_address'
            },
            type: 'attribute'
          }, {
            name: 'mailingCity',
            attributeName: {
              localPart: 'mailing_city'
            },
            type: 'attribute'
          }, {
            name: 'mailingZip',
            attributeName: {
              localPart: 'mailing_zip'
            },
            type: 'attribute'
          }, {
            name: 'mailingState',
            attributeName: {
              localPart: 'mailing_state'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASESYSTEM.LENDER',
        typeName: null,
        baseTypeInfo: '.BASEPARTY',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'address',
            elementName: 'ADDRESS',
            typeInfo: '.BASEADDRESSLOOSE'
          }, {
            name: 'cunaClientId',
            attributeName: {
              localPart: 'cuna_client_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEHMDAXML.ITEM',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'key',
            attributeName: {
              localPart: 'key'
            },
            type: 'attribute'
          }, {
            name: 'valueAttribute',
            attributeName: {
              localPart: 'valueAttribute'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGENEWTD',
        typeName: 'MORTGAGE_NEW_TD',
        propertyInfos: [{
            name: 'balance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'balance'
            },
            type: 'attribute'
          }, {
            name: 'payment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'payment'
            },
            type: 'attribute'
          }, {
            name: 'term',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'term'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'margin',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'margin'
            },
            type: 'attribute'
          }, {
            name: 'index',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'index'
            },
            type: 'attribute'
          }, {
            name: 'loanType',
            attributeName: {
              localPart: 'loan_type'
            },
            type: 'attribute'
          }, {
            name: 'repayPeriod',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'repay_period'
            },
            type: 'attribute'
          }, {
            name: 'drawPeriod',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'draw_period'
            },
            type: 'attribute'
          }, {
            name: 'isConcurrentClosing',
            attributeName: {
              localPart: 'is_concurrent_closing'
            },
            type: 'attribute'
          }, {
            name: 'position',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'position'
            },
            type: 'attribute'
          }, {
            name: 'isHELOC',
            attributeName: {
              localPart: 'is_HELOC'
            },
            type: 'attribute'
          }, {
            name: 'loanAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'loan_amount'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.VESTING',
        typeName: null,
        propertyInfos: [{
            name: 'vestingName',
            required: true,
            attributeName: {
              localPart: 'vesting_name'
            },
            type: 'attribute'
          }, {
            name: 'vestingContactIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'vesting_contact_index'
            },
            type: 'attribute'
          }, {
            name: 'vestingMaritalStatus',
            attributeName: {
              localPart: 'vesting_marital_status'
            },
            type: 'attribute'
          }, {
            name: 'vestingDescription',
            attributeName: {
              localPart: 'vesting_description'
            },
            type: 'attribute'
          }, {
            name: 'vestingIsOnApp',
            attributeName: {
              localPart: 'vesting_is_on_app'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEAPPLICANTQUESTIONS.APPLICANTQUESTION',
        typeName: null,
        propertyInfos: [{
            name: 'applicantquestionanswer',
            minOccurs: 0,
            collection: true,
            elementName: 'APPLICANT_QUESTION_ANSWER',
            typeInfo: '.BASEAPPLICANTQUESTIONS.APPLICANTQUESTION.APPLICANTQUESTIONANSWER'
          }, {
            name: 'questionName',
            attributeName: {
              localPart: 'question_name'
            },
            type: 'attribute'
          }, {
            name: 'questionType',
            attributeName: {
              localPart: 'question_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEPARTY',
        typeName: 'BASE_PARTY',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'referenceId',
            attributeName: {
              localPart: 'reference_id'
            },
            type: 'attribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'code',
            attributeName: {
              localPart: 'code'
            },
            type: 'attribute'
          }, {
            name: 'phone',
            attributeName: {
              localPart: 'phone'
            },
            type: 'attribute'
          }, {
            name: 'fax',
            attributeName: {
              localPart: 'fax'
            },
            type: 'attribute'
          }, {
            name: 'email',
            attributeName: {
              localPart: 'email'
            },
            type: 'attribute'
          }, {
            name: 'title',
            attributeName: {
              localPart: 'title'
            },
            type: 'attribute'
          }, {
            name: 'tellerNumber',
            attributeName: {
              localPart: 'teller_number'
            },
            type: 'attribute'
          }, {
            name: 'terminalId',
            attributeName: {
              localPart: 'terminal_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEHMDAINFO',
        typeName: 'BASE_HMDA_INFO',
        propertyInfos: [{
            name: 'propertyAddress',
            attributeName: {
              localPart: 'property_address'
            },
            type: 'attribute'
          }, {
            name: 'propertyCity',
            attributeName: {
              localPart: 'property_city'
            },
            type: 'attribute'
          }, {
            name: 'propertyState',
            attributeName: {
              localPart: 'property_state'
            },
            type: 'attribute'
          }, {
            name: 'propertyType',
            attributeName: {
              localPart: 'property_type'
            },
            type: 'attribute'
          }, {
            name: 'propertyZip',
            attributeName: {
              localPart: 'property_zip'
            },
            type: 'attribute'
          }, {
            name: 'isHoepa',
            attributeName: {
              localPart: 'is_hoepa'
            },
            type: 'attribute'
          }, {
            name: 'isHoepaManual',
            attributeName: {
              localPart: 'is_hoepa_manual'
            },
            type: 'attribute'
          }, {
            name: 'lienPosition',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'lien_position'
            },
            type: 'attribute'
          }, {
            name: 'hmdaLoanPurpose',
            attributeName: {
              localPart: 'hmda_loan_purpose'
            },
            type: 'attribute'
          }, {
            name: 'propertyOccupancyStatus',
            attributeName: {
              localPart: 'property_occupancy_status'
            },
            type: 'attribute'
          }, {
            name: 'msaNumber',
            attributeName: {
              localPart: 'msa_number'
            },
            type: 'attribute'
          }, {
            name: 'propertyTaxId',
            attributeName: {
              localPart: 'property_tax_id'
            },
            type: 'attribute'
          }, {
            name: 'censusTractNumber',
            attributeName: {
              localPart: 'census_tract_number'
            },
            type: 'attribute'
          }, {
            name: 'propertyCounty',
            attributeName: {
              localPart: 'property_county'
            },
            type: 'attribute'
          }, {
            name: 'propertyCountyCode',
            attributeName: {
              localPart: 'property_county_code'
            },
            type: 'attribute'
          }, {
            name: 'stateCode',
            attributeName: {
              localPart: 'state_code'
            },
            type: 'attribute'
          }, {
            name: 'interviewMethod',
            attributeName: {
              localPart: 'interview_method'
            },
            type: 'attribute'
          }, {
            name: 'purchaser',
            attributeName: {
              localPart: 'purchaser'
            },
            type: 'attribute'
          }, {
            name: 'propertyAddressVerificationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'property_address_verification_date'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.FINANCIALINFO.CURRENTEMPLOYMENT',
        typeName: null,
        baseTypeInfo: '.BASEEMPLOYMENT',
        propertyInfos: [{
            name: 'employeeOfLenderType',
            attributeName: {
              localPart: 'employee_of_lender_type'
            },
            type: 'attribute'
          }, {
            name: 'isEmployeeOfLender',
            attributeName: {
              localPart: 'is_employee_of_lender'
            },
            type: 'attribute'
          }, {
            name: 'professionMonths',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'profession_months'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEEMPLOYMENT',
        typeName: 'BASE_EMPLOYMENT',
        propertyInfos: [{
            name: 'employmentStartDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'employment_start_date'
            },
            type: 'attribute'
          }, {
            name: 'employedMonths',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'employed_months'
            },
            type: 'attribute'
          }, {
            name: 'employmentAddress',
            attributeName: {
              localPart: 'employment_address'
            },
            type: 'attribute'
          }, {
            name: 'employmentCity',
            attributeName: {
              localPart: 'employment_city'
            },
            type: 'attribute'
          }, {
            name: 'employmentState',
            attributeName: {
              localPart: 'employment_state'
            },
            type: 'attribute'
          }, {
            name: 'employmentZip',
            attributeName: {
              localPart: 'employment_zip'
            },
            type: 'attribute'
          }, {
            name: 'occupation',
            attributeName: {
              localPart: 'occupation'
            },
            type: 'attribute'
          }, {
            name: 'employer',
            attributeName: {
              localPart: 'employer'
            },
            type: 'attribute'
          }, {
            name: 'employmentPhone',
            attributeName: {
              localPart: 'employment_phone'
            },
            type: 'attribute'
          }, {
            name: 'employmentStatus',
            attributeName: {
              localPart: 'employment_status'
            },
            type: 'attribute'
          }, {
            name: 'otherEmploymentDescription',
            attributeName: {
              localPart: 'other_employment_description'
            },
            type: 'attribute'
          }, {
            name: 'supervisorName',
            attributeName: {
              localPart: 'supervisor_name'
            },
            type: 'attribute'
          }, {
            name: 'payGrade',
            attributeName: {
              localPart: 'pay_grade'
            },
            type: 'attribute'
          }, {
            name: 'ets',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'ets'
            },
            type: 'attribute'
          }, {
            name: 'employmentWeeklyHours',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'employment_weekly_hours'
            },
            type: 'attribute'
          }, {
            name: 'employmentBusinessType',
            attributeName: {
              localPart: 'employment_business_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEASSETLIST',
        typeName: 'BASE_ASSET_LIST',
        propertyInfos: [{
            name: 'realestateOrASSETOrVEHICLE',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: 'REAL_ESTATE',
                typeInfo: '.BASEASSETREALESTATE'
              }, {
                elementName: 'ASSET',
                typeInfo: '.BASEASSETLIST.ASSET'
              }, {
                elementName: 'VEHICLE',
                typeInfo: '.BASEASSETVEHICLE'
              }, {
                elementName: 'SHARES',
                typeInfo: '.BASEASSETSHARE'
              }, {
                elementName: 'CERTIFICATE',
                typeInfo: '.BASEASSETCERTIFICATE'
              }, {
                elementName: 'SAVINGS_ACCOUNT',
                typeInfo: '.BASEASSETSAVINGSACCOUNT'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'BASEIDCARD',
        typeName: 'BASE_ID_CARD',
        propertyInfos: [{
            name: 'cardType',
            attributeName: {
              localPart: 'card_type'
            },
            type: 'attribute'
          }, {
            name: 'cardNumber',
            attributeName: {
              localPart: 'card_number'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'country',
            attributeName: {
              localPart: 'country'
            },
            type: 'attribute'
          }, {
            name: 'expDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'exp_date'
            },
            type: 'attribute'
          }, {
            name: 'dateIssued',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'date_issued'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASELOANINFO',
        typeName: 'BASE_LOAN_INFO',
        propertyInfos: [{
            name: 'rateCode',
            attributeName: {
              localPart: 'rate_code'
            },
            type: 'attribute'
          }, {
            name: 'maxUnderwriteAmount',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'max_underwrite_amount'
            },
            type: 'attribute'
          }, {
            name: 'paymentDueDay',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'payment_due_day'
            },
            type: 'attribute'
          }, {
            name: 'paymentDueDay2',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'payment_due_day2'
            },
            type: 'attribute'
          }, {
            name: 'eplFeesTotal',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'epl_fees_total'
            },
            type: 'attribute'
          }, {
            name: 'isClaimed',
            attributeName: {
              localPart: 'is_claimed'
            },
            type: 'attribute'
          }, {
            name: 'isCompleteConsumer',
            attributeName: {
              localPart: 'is_complete_consumer'
            },
            type: 'attribute'
          }, {
            name: 'requireProductRefresh',
            attributeName: {
              localPart: 'require_product_refresh'
            },
            type: 'attribute'
          }, {
            name: 'isAddon',
            attributeName: {
              localPart: 'is_addon'
            },
            type: 'attribute'
          }, {
            name: 'isAmendment',
            attributeName: {
              localPart: 'is_amendment'
            },
            type: 'attribute'
          }, {
            name: 'rateAdjustment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate_adjustment'
            },
            type: 'attribute'
          }, {
            name: 'rateAdjustmentReason',
            attributeName: {
              localPart: 'rate_adjustment_reason'
            },
            type: 'attribute'
          }, {
            name: 'solveFor',
            attributeName: {
              localPart: 'solve_for'
            },
            type: 'attribute'
          }, {
            name: 'overrideCode',
            attributeName: {
              localPart: 'override_code'
            },
            type: 'attribute'
          }, {
            name: 'overrideTier',
            attributeName: {
              localPart: 'override_tier'
            },
            type: 'attribute'
          }, {
            name: 'isPossibleDupe',
            attributeName: {
              localPart: 'is_possible_dupe'
            },
            type: 'attribute'
          }, {
            name: 'isFraudManual',
            attributeName: {
              localPart: 'is_fraud_manual'
            },
            type: 'attribute'
          }, {
            name: 'isOfacManual',
            attributeName: {
              localPart: 'is_ofac_manual'
            },
            type: 'attribute'
          }, {
            name: 'isPossibleDupeManual',
            attributeName: {
              localPart: 'is_possible_dupe_manual'
            },
            type: 'attribute'
          }, {
            name: 'preapprovalType',
            attributeName: {
              localPart: 'preapproval_type'
            },
            type: 'attribute'
          }, {
            name: 'appSubtype',
            attributeName: {
              localPart: 'app_subtype'
            },
            type: 'attribute'
          }, {
            name: 'campaignCode',
            attributeName: {
              localPart: 'campaign_code'
            },
            type: 'attribute'
          }, {
            name: 'isWorkoutLoan',
            attributeName: {
              localPart: 'is_workout_loan'
            },
            type: 'attribute'
          }, {
            name: 'isSolveforManual',
            attributeName: {
              localPart: 'is_solvefor_manual'
            },
            type: 'attribute'
          }, {
            name: 'tier',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'tier'
            },
            type: 'attribute'
          }, {
            name: 'tierPrevious',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'tier_previous'
            },
            type: 'attribute'
          }, {
            name: 'isPrequalificationApplied',
            attributeName: {
              localPart: 'is_prequalification_applied'
            },
            type: 'attribute'
          }, {
            name: 'isOfac',
            attributeName: {
              localPart: 'is_ofac'
            },
            type: 'attribute'
          }, {
            name: 'isHighRiskConsumer',
            attributeName: {
              localPart: 'is_high_risk_consumer'
            },
            type: 'attribute'
          }, {
            name: 'isHighRiskConsumerManual',
            attributeName: {
              localPart: 'is_high_risk_consumer_manual'
            },
            type: 'attribute'
          }, {
            name: 'productReferenceId',
            attributeName: {
              localPart: 'product_reference_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.SETTLEMENTSTATEMENTS',
        typeName: null,
        propertyInfos: [{
            name: '_101Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_101amount'
            },
            type: 'attribute'
          }, {
            name: '_102Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_102amount'
            },
            type: 'attribute'
          }, {
            name: '_103Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_103amount'
            },
            type: 'attribute'
          }, {
            name: '_104Description',
            attributeName: {
              localPart: '_104description'
            },
            type: 'attribute'
          }, {
            name: '_104Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_104amount'
            },
            type: 'attribute'
          }, {
            name: '_105Description',
            attributeName: {
              localPart: '_105description'
            },
            type: 'attribute'
          }, {
            name: '_105Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_105amount'
            },
            type: 'attribute'
          }, {
            name: '_106Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_106datefrom'
            },
            type: 'attribute'
          }, {
            name: '_106Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_106dateto'
            },
            type: 'attribute'
          }, {
            name: '_106Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_106amount'
            },
            type: 'attribute'
          }, {
            name: '_107Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_107datefrom'
            },
            type: 'attribute'
          }, {
            name: '_107Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_107dateto'
            },
            type: 'attribute'
          }, {
            name: '_107Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_107amount'
            },
            type: 'attribute'
          }, {
            name: '_108Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_108datefrom'
            },
            type: 'attribute'
          }, {
            name: '_108Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_108dateto'
            },
            type: 'attribute'
          }, {
            name: '_108Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_108amount'
            },
            type: 'attribute'
          }, {
            name: '_100Code1',
            attributeName: {
              localPart: '_100code1'
            },
            type: 'attribute'
          }, {
            name: '_100Code2',
            attributeName: {
              localPart: '_100code2'
            },
            type: 'attribute'
          }, {
            name: '_100Code3',
            attributeName: {
              localPart: '_100code3'
            },
            type: 'attribute'
          }, {
            name: '_100Code4',
            attributeName: {
              localPart: '_100code4'
            },
            type: 'attribute'
          }, {
            name: '_100Description1',
            attributeName: {
              localPart: '_100description1'
            },
            type: 'attribute'
          }, {
            name: '_100Description2',
            attributeName: {
              localPart: '_100description2'
            },
            type: 'attribute'
          }, {
            name: '_100Description3',
            attributeName: {
              localPart: '_100description3'
            },
            type: 'attribute'
          }, {
            name: '_100Description4',
            attributeName: {
              localPart: '_100description4'
            },
            type: 'attribute'
          }, {
            name: '_100Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_100amount1'
            },
            type: 'attribute'
          }, {
            name: '_100Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_100amount2'
            },
            type: 'attribute'
          }, {
            name: '_100Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_100amount3'
            },
            type: 'attribute'
          }, {
            name: '_100Amount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_100amount4'
            },
            type: 'attribute'
          }, {
            name: '_120Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_120amount'
            },
            type: 'attribute'
          }, {
            name: '_201Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_201amount'
            },
            type: 'attribute'
          }, {
            name: '_202Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_202amount'
            },
            type: 'attribute'
          }, {
            name: '_203Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_203amount'
            },
            type: 'attribute'
          }, {
            name: '_204Description',
            attributeName: {
              localPart: '_204description'
            },
            type: 'attribute'
          }, {
            name: '_204Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_204amount'
            },
            type: 'attribute'
          }, {
            name: '_205Description',
            attributeName: {
              localPart: '_205description'
            },
            type: 'attribute'
          }, {
            name: '_205Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_205amount'
            },
            type: 'attribute'
          }, {
            name: '_206Description',
            attributeName: {
              localPart: '_206description'
            },
            type: 'attribute'
          }, {
            name: '_206Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_206amount'
            },
            type: 'attribute'
          }, {
            name: '_207Description',
            attributeName: {
              localPart: '_207description'
            },
            type: 'attribute'
          }, {
            name: '_207Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_207amount'
            },
            type: 'attribute'
          }, {
            name: '_208Description',
            attributeName: {
              localPart: '_208description'
            },
            type: 'attribute'
          }, {
            name: '_208Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_208amount'
            },
            type: 'attribute'
          }, {
            name: '_209Description',
            attributeName: {
              localPart: '_209description'
            },
            type: 'attribute'
          }, {
            name: '_209Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_209amount'
            },
            type: 'attribute'
          }, {
            name: '_210Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_210datefrom'
            },
            type: 'attribute'
          }, {
            name: '_210Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_210dateto'
            },
            type: 'attribute'
          }, {
            name: '_210Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_210amount'
            },
            type: 'attribute'
          }, {
            name: '_211Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_211datefrom'
            },
            type: 'attribute'
          }, {
            name: '_211Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_211dateto'
            },
            type: 'attribute'
          }, {
            name: '_211Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_211amount'
            },
            type: 'attribute'
          }, {
            name: '_212Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_212datefrom'
            },
            type: 'attribute'
          }, {
            name: '_212Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_212dateto'
            },
            type: 'attribute'
          }, {
            name: '_212Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_212amount'
            },
            type: 'attribute'
          }, {
            name: '_213Description',
            attributeName: {
              localPart: '_213description'
            },
            type: 'attribute'
          }, {
            name: '_213Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_213amount'
            },
            type: 'attribute'
          }, {
            name: '_214Description',
            attributeName: {
              localPart: '_214description'
            },
            type: 'attribute'
          }, {
            name: '_214Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_214amount'
            },
            type: 'attribute'
          }, {
            name: '_215Description',
            attributeName: {
              localPart: '_215description'
            },
            type: 'attribute'
          }, {
            name: '_215Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_215amount'
            },
            type: 'attribute'
          }, {
            name: '_216Description',
            attributeName: {
              localPart: '_216description'
            },
            type: 'attribute'
          }, {
            name: '_216Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_216amount'
            },
            type: 'attribute'
          }, {
            name: '_217Description',
            attributeName: {
              localPart: '_217description'
            },
            type: 'attribute'
          }, {
            name: '_217Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_217amount'
            },
            type: 'attribute'
          }, {
            name: '_218Description',
            attributeName: {
              localPart: '_218description'
            },
            type: 'attribute'
          }, {
            name: '_218Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_218amount'
            },
            type: 'attribute'
          }, {
            name: '_219Description',
            attributeName: {
              localPart: '_219description'
            },
            type: 'attribute'
          }, {
            name: '_219Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_219amount'
            },
            type: 'attribute'
          }, {
            name: '_220Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_220amount'
            },
            type: 'attribute'
          }, {
            name: '_301Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_301amount'
            },
            type: 'attribute'
          }, {
            name: '_302Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_302amount'
            },
            type: 'attribute'
          }, {
            name: '_303Isfromborrower',
            attributeName: {
              localPart: '_303isfromborrower'
            },
            type: 'attribute'
          }, {
            name: '_303Istoborrower',
            attributeName: {
              localPart: '_303istoborrower'
            },
            type: 'attribute'
          }, {
            name: '_303Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_303amount'
            },
            type: 'attribute'
          }, {
            name: '_401Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_401amount'
            },
            type: 'attribute'
          }, {
            name: '_402Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_402amount'
            },
            type: 'attribute'
          }, {
            name: '_403Description',
            attributeName: {
              localPart: '_403description'
            },
            type: 'attribute'
          }, {
            name: '_403Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_403amount'
            },
            type: 'attribute'
          }, {
            name: '_404Description',
            attributeName: {
              localPart: '_404description'
            },
            type: 'attribute'
          }, {
            name: '_404Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_404amount'
            },
            type: 'attribute'
          }, {
            name: '_405Description',
            attributeName: {
              localPart: '_405description'
            },
            type: 'attribute'
          }, {
            name: '_405Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_405amount'
            },
            type: 'attribute'
          }, {
            name: '_406Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_406datefrom'
            },
            type: 'attribute'
          }, {
            name: '_406Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_406dateto'
            },
            type: 'attribute'
          }, {
            name: '_406Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_406amount'
            },
            type: 'attribute'
          }, {
            name: '_407Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_407datefrom'
            },
            type: 'attribute'
          }, {
            name: '_407Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_407dateto'
            },
            type: 'attribute'
          }, {
            name: '_407Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_407amount'
            },
            type: 'attribute'
          }, {
            name: '_408Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_408datefrom'
            },
            type: 'attribute'
          }, {
            name: '_408Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_408dateto'
            },
            type: 'attribute'
          }, {
            name: '_408Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_408amount'
            },
            type: 'attribute'
          }, {
            name: '_400Code1',
            attributeName: {
              localPart: '_400code1'
            },
            type: 'attribute'
          }, {
            name: '_400Code2',
            attributeName: {
              localPart: '_400code2'
            },
            type: 'attribute'
          }, {
            name: '_400Code3',
            attributeName: {
              localPart: '_400code3'
            },
            type: 'attribute'
          }, {
            name: '_400Code4',
            attributeName: {
              localPart: '_400code4'
            },
            type: 'attribute'
          }, {
            name: '_400Description1',
            attributeName: {
              localPart: '_400description1'
            },
            type: 'attribute'
          }, {
            name: '_400Description2',
            attributeName: {
              localPart: '_400description2'
            },
            type: 'attribute'
          }, {
            name: '_400Description3',
            attributeName: {
              localPart: '_400description3'
            },
            type: 'attribute'
          }, {
            name: '_400Description4',
            attributeName: {
              localPart: '_400description4'
            },
            type: 'attribute'
          }, {
            name: '_400Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_400amount1'
            },
            type: 'attribute'
          }, {
            name: '_400Amount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_400amount2'
            },
            type: 'attribute'
          }, {
            name: '_400Amount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_400amount3'
            },
            type: 'attribute'
          }, {
            name: '_400Amount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_400amount4'
            },
            type: 'attribute'
          }, {
            name: '_420Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_420amount'
            },
            type: 'attribute'
          }, {
            name: '_501Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_501amount'
            },
            type: 'attribute'
          }, {
            name: '_502Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_502amount'
            },
            type: 'attribute'
          }, {
            name: '_503Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_503amount'
            },
            type: 'attribute'
          }, {
            name: '_504Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_504amount'
            },
            type: 'attribute'
          }, {
            name: '_505Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_505amount'
            },
            type: 'attribute'
          }, {
            name: '_506Description',
            attributeName: {
              localPart: '_506description'
            },
            type: 'attribute'
          }, {
            name: '_506Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_506amount'
            },
            type: 'attribute'
          }, {
            name: '_507Description',
            attributeName: {
              localPart: '_507description'
            },
            type: 'attribute'
          }, {
            name: '_507Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_507amount'
            },
            type: 'attribute'
          }, {
            name: '_508Description',
            attributeName: {
              localPart: '_508description'
            },
            type: 'attribute'
          }, {
            name: '_508Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_508amount'
            },
            type: 'attribute'
          }, {
            name: '_509Description',
            attributeName: {
              localPart: '_509description'
            },
            type: 'attribute'
          }, {
            name: '_509Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_509amount'
            },
            type: 'attribute'
          }, {
            name: '_510Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_510datefrom'
            },
            type: 'attribute'
          }, {
            name: '_510Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_510dateto'
            },
            type: 'attribute'
          }, {
            name: '_510Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_510amount'
            },
            type: 'attribute'
          }, {
            name: '_511Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_511datefrom'
            },
            type: 'attribute'
          }, {
            name: '_511Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_511dateto'
            },
            type: 'attribute'
          }, {
            name: '_511Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_511amount'
            },
            type: 'attribute'
          }, {
            name: '_512Datefrom',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_512datefrom'
            },
            type: 'attribute'
          }, {
            name: '_512Dateto',
            typeInfo: 'Date',
            attributeName: {
              localPart: '_512dateto'
            },
            type: 'attribute'
          }, {
            name: '_512Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_512amount'
            },
            type: 'attribute'
          }, {
            name: '_513Description',
            attributeName: {
              localPart: '_513description'
            },
            type: 'attribute'
          }, {
            name: '_513Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_513amount'
            },
            type: 'attribute'
          }, {
            name: '_514Description',
            attributeName: {
              localPart: '_514description'
            },
            type: 'attribute'
          }, {
            name: '_514Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_514amount'
            },
            type: 'attribute'
          }, {
            name: '_515Description',
            attributeName: {
              localPart: '_515description'
            },
            type: 'attribute'
          }, {
            name: '_515Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_515amount'
            },
            type: 'attribute'
          }, {
            name: '_516Description',
            attributeName: {
              localPart: '_516description'
            },
            type: 'attribute'
          }, {
            name: '_516Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_516amount'
            },
            type: 'attribute'
          }, {
            name: '_517Description',
            attributeName: {
              localPart: '_517description'
            },
            type: 'attribute'
          }, {
            name: '_517Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_517amount'
            },
            type: 'attribute'
          }, {
            name: '_518Description',
            attributeName: {
              localPart: '_518description'
            },
            type: 'attribute'
          }, {
            name: '_518Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_518amount'
            },
            type: 'attribute'
          }, {
            name: '_519Description',
            attributeName: {
              localPart: '_519description'
            },
            type: 'attribute'
          }, {
            name: '_519Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_519amount'
            },
            type: 'attribute'
          }, {
            name: '_520Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_520amount'
            },
            type: 'attribute'
          }, {
            name: '_601Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_601amount'
            },
            type: 'attribute'
          }, {
            name: '_602Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_602amount'
            },
            type: 'attribute'
          }, {
            name: '_603Istoseller',
            attributeName: {
              localPart: '_603istoseller'
            },
            type: 'attribute'
          }, {
            name: '_603Isfromseller',
            attributeName: {
              localPart: '_603isfromseller'
            },
            type: 'attribute'
          }, {
            name: '_603Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_603amount'
            },
            type: 'attribute'
          }, {
            name: '_700Fee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_700fee'
            },
            type: 'attribute'
          }, {
            name: '_700Percentage',
            attributeName: {
              localPart: '_700percentage'
            },
            type: 'attribute'
          }, {
            name: '_700Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_700amount'
            },
            type: 'attribute'
          }, {
            name: '_701Description',
            attributeName: {
              localPart: '_701description'
            },
            type: 'attribute'
          }, {
            name: '_701Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_701amount'
            },
            type: 'attribute'
          }, {
            name: '_702Description',
            attributeName: {
              localPart: '_702description'
            },
            type: 'attribute'
          }, {
            name: '_702Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_702amount'
            },
            type: 'attribute'
          }, {
            name: '_703Amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_703amount'
            },
            type: 'attribute'
          }, {
            name: '_703Paidby',
            attributeName: {
              localPart: '_703paidby'
            },
            type: 'attribute'
          }, {
            name: '_700Code1',
            attributeName: {
              localPart: '_700code1'
            },
            type: 'attribute'
          }, {
            name: '_700Description1',
            attributeName: {
              localPart: '_700description1'
            },
            type: 'attribute'
          }, {
            name: '_700Amount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: '_700amount1'
            },
            type: 'attribute'
          }, {
            name: '_700Paidby1',
            attributeName: {
              localPart: '_700paidby1'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASETASKLIST.TASK.APPLIEDSET',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'conditionsetHash',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'conditionset_hash'
            },
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'encoding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEMODIFICATIONHISTORY.AUDIT',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            type: 'value'
          }, {
            name: 'modificationDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'modification_date'
            },
            type: 'attribute'
          }, {
            name: 'modifierName',
            attributeName: {
              localPart: 'modifier_name'
            },
            type: 'attribute'
          }, {
            name: 'modifierType',
            attributeName: {
              localPart: 'modifier_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEDISBURSEMENTDEPOSIT',
        typeName: 'BASE_DISBURSEMENT_DEPOSIT',
        baseTypeInfo: '.BASEDISBURSEMENT',
        propertyInfos: [{
            name: 'depositAccount',
            attributeName: {
              localPart: 'deposit_account'
            },
            type: 'attribute'
          }, {
            name: 'depositSuffix',
            attributeName: {
              localPart: 'deposit_suffix'
            },
            type: 'attribute'
          }, {
            name: 'depositType',
            attributeName: {
              localPart: 'deposit_type'
            },
            type: 'attribute'
          }, {
            name: 'depositDateToCredit',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'deposit_date_to_credit'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEMONTHLYINCOME.OTHERINCOME',
        typeName: null,
        propertyInfos: [{
            name: 'monthlyIncome',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeDescription',
            attributeName: {
              localPart: 'monthly_income_description'
            },
            type: 'attribute'
          }, {
            name: 'isTaxExempt',
            attributeName: {
              localPart: 'is_tax_exempt'
            },
            type: 'attribute'
          }, {
            name: 'isHmdaExempt',
            attributeName: {
              localPart: 'is_hmda_exempt'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.FINANCIALINFO.PREVIOUSEMPLOYMENT',
        typeName: null,
        baseTypeInfo: '.BASEEMPLOYMENT',
        propertyInfos: [{
            name: 'monthlyIncome',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income'
            },
            type: 'attribute'
          }, {
            name: 'employmentEndDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'employment_end_date'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION',
        typeName: null,
        propertyInfos: [{
            name: 'textTemplate',
            required: true,
            elementName: 'text_template'
          }, {
            name: 'fomanswers',
            required: true,
            elementName: 'FOM_ANSWERS',
            typeInfo: '.FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION.FOMANSWERS'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FOMANSWEREDQUESTIONS',
        typeName: 'FOM_ANSWERED_QUESTIONS',
        propertyInfos: [{
            name: 'fomansweredquestion',
            minOccurs: 0,
            collection: true,
            elementName: 'FOM_ANSWERED_QUESTION',
            typeInfo: '.FOMANSWEREDQUESTIONS.FOMANSWEREDQUESTION'
          }]
      }, {
        localName: 'MORTGAGEGOVERNMENTDATA',
        typeName: 'MORTGAGE_GOVERNMENT_DATA',
        propertyInfos: [{
            name: 'agencyCaseId',
            attributeName: {
              localPart: 'agency_case_id'
            },
            type: 'attribute'
          }, {
            name: 'fhaLenderId',
            attributeName: {
              localPart: 'FHA_lender_id'
            },
            type: 'attribute'
          }, {
            name: 'fhaSponsorId',
            attributeName: {
              localPart: 'FHA_sponsor_id'
            },
            type: 'attribute'
          }, {
            name: 'fhamipRefundAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'FHA_MIP_refund_amount'
            },
            type: 'attribute'
          }, {
            name: 'typeOfRefinance',
            attributeName: {
              localPart: 'type_of_refinance'
            },
            type: 'attribute'
          }, {
            name: 'fnmaSectionOfTheAct',
            attributeName: {
              localPart: 'FNMA_section_of_the_act'
            },
            type: 'attribute'
          }, {
            name: 'salesConcessionAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'sales_concession_amount'
            },
            type: 'attribute'
          }, {
            name: 'vaEntitlementAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'VA_entitlement_amount'
            },
            type: 'attribute'
          }, {
            name: 'vaMonthlyMaintenance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'VA_monthly_maintenance'
            },
            type: 'attribute'
          }, {
            name: 'vaMonthlyUtilities',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'VA_monthly_utilities'
            },
            type: 'attribute'
          }, {
            name: 'mortgageCreditCertificate',
            attributeName: {
              localPart: 'mortgage_credit_certificate'
            },
            type: 'attribute'
          }, {
            name: 'vaIsBorrowerCoBorrowerMarried',
            attributeName: {
              localPart: 'VA_is_borrower_co_borrower_married'
            },
            type: 'attribute'
          }, {
            name: 'vaBorrowerFundingFeePercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'VA_borrower_funding_fee_percent'
            },
            type: 'attribute'
          }, {
            name: 'vaResidualIncomeAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'VA_residual_income_amount'
            },
            type: 'attribute'
          }, {
            name: 'isPropertyEnergyEfficient',
            attributeName: {
              localPart: 'is_property_energy_efficient'
            },
            type: 'attribute'
          }, {
            name: 'fhaBorrowerFinancedDiscountPointAmounts',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'FHA_borrower_financed_discount_point_amounts'
            },
            type: 'attribute'
          }, {
            name: 'fhaAlimonyLiabilityTreatmentType',
            attributeName: {
              localPart: 'FHA_alimony_liability_treatment_type'
            },
            type: 'attribute'
          }, {
            name: 'fhaCoverageRenewalRatePercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'FHA_coverage_renewal_rate_percent'
            },
            type: 'attribute'
          }, {
            name: 'fhaUpfrontMIPPercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'FHA_upfront_MIP_percent'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEEVENTHISTORY.EVENT',
        typeName: null,
        propertyInfos: [{
            name: 'timestamp',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'timestamp'
            },
            type: 'attribute'
          }, {
            name: 'username',
            attributeName: {
              localPart: 'username'
            },
            type: 'attribute'
          }, {
            name: 'event',
            attributeName: {
              localPart: 'event'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BENEFICIALOWNERS',
        typeName: 'BENEFICIAL_OWNERS',
        propertyInfos: [{
            name: 'beneficialowner',
            minOccurs: 0,
            collection: true,
            elementName: 'BENEFICIAL_OWNER',
            typeInfo: '.BENEFICIALOWNERS.BENEFICIALOWNER'
          }]
      }, {
        localName: 'MORTGAGECURRENTTD',
        typeName: 'MORTGAGE_CURRENT_TD',
        propertyInfos: [{
            name: 'willBePaidOff',
            attributeName: {
              localPart: 'will_be_paid_off'
            },
            type: 'attribute'
          }, {
            name: 'lender',
            attributeName: {
              localPart: 'lender'
            },
            type: 'attribute'
          }, {
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }, {
            name: 'balance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'balance'
            },
            type: 'attribute'
          }, {
            name: 'term',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'term'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'payment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'payment'
            },
            type: 'attribute'
          }, {
            name: 'position',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'position'
            },
            type: 'attribute'
          }, {
            name: 'isHeloc',
            attributeName: {
              localPart: 'is_heloc'
            },
            type: 'attribute'
          }, {
            name: 'loanAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'loan_amount'
            },
            type: 'attribute'
          }, {
            name: 'isConcurrentClosing',
            attributeName: {
              localPart: 'is_concurrent_closing'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.CURRENTADDRESS',
        typeName: null,
        baseTypeInfo: '.BASECURRENTADDRESSCHOICE',
        propertyInfos: [{
            name: 'occupancyStatus',
            attributeName: {
              localPart: 'occupancy_status'
            },
            type: 'attribute'
          }, {
            name: 'occupancyDuration',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'occupancy_duration'
            },
            type: 'attribute'
          }, {
            name: 'otherOccupancyDescription',
            attributeName: {
              localPart: 'other_occupancy_description'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.MAILINGADDRESS',
        typeName: null,
        baseTypeInfo: '.BASEADDRESSLOOSE',
        propertyInfos: [{
            name: 'isCurrent',
            attributeName: {
              localPart: 'is_current'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECONTACTINFO',
        typeName: 'BASE_CONTACT_INFO',
        propertyInfos: [{
            name: 'preferredContactMethod',
            attributeName: {
              localPart: 'preferred_contact_method'
            },
            type: 'attribute'
          }, {
            name: 'cellPhone',
            attributeName: {
              localPart: 'cell_phone'
            },
            type: 'attribute'
          }, {
            name: 'cellPhoneCountry',
            attributeName: {
              localPart: 'cell_phone_country'
            },
            type: 'attribute'
          }, {
            name: 'faxNumber',
            attributeName: {
              localPart: 'fax_number'
            },
            type: 'attribute'
          }, {
            name: 'faxNumberCountry',
            attributeName: {
              localPart: 'fax_number_country'
            },
            type: 'attribute'
          }, {
            name: 'email',
            attributeName: {
              localPart: 'email'
            },
            type: 'attribute'
          }, {
            name: 'homePhone',
            attributeName: {
              localPart: 'home_phone'
            },
            type: 'attribute'
          }, {
            name: 'homePhoneCountry',
            attributeName: {
              localPart: 'home_phone_country'
            },
            type: 'attribute'
          }, {
            name: 'workPhone',
            attributeName: {
              localPart: 'work_phone'
            },
            type: 'attribute'
          }, {
            name: 'workPhoneCountry',
            attributeName: {
              localPart: 'work_phone_country'
            },
            type: 'attribute'
          }, {
            name: 'workPhoneExtension',
            attributeName: {
              localPart: 'work_phone_extension'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.LOANINFO',
        typeName: null,
        baseTypeInfo: '.MORTGAGELOANINFO'
      }, {
        localName: 'BASELOANCONTACTS.CONTACTINFO',
        typeName: null,
        propertyInfos: [{
            name: 'contactType',
            required: true,
            attributeName: {
              localPart: 'contact_type'
            },
            type: 'attribute'
          }, {
            name: 'firstName',
            attributeName: {
              localPart: 'first_name'
            },
            type: 'attribute'
          }, {
            name: 'middleName',
            attributeName: {
              localPart: 'middle_name'
            },
            type: 'attribute'
          }, {
            name: 'lastName',
            attributeName: {
              localPart: 'last_name'
            },
            type: 'attribute'
          }, {
            name: 'suffix',
            attributeName: {
              localPart: 'suffix'
            },
            type: 'attribute'
          }, {
            name: 'address',
            attributeName: {
              localPart: 'address'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'phone',
            attributeName: {
              localPart: 'phone'
            },
            type: 'attribute'
          }, {
            name: 'workPhone',
            attributeName: {
              localPart: 'work_phone'
            },
            type: 'attribute'
          }, {
            name: 'fax',
            attributeName: {
              localPart: 'fax'
            },
            type: 'attribute'
          }, {
            name: 'cell',
            attributeName: {
              localPart: 'cell'
            },
            type: 'attribute'
          }, {
            name: 'pager',
            attributeName: {
              localPart: 'pager'
            },
            type: 'attribute'
          }, {
            name: 'email',
            attributeName: {
              localPart: 'email'
            },
            type: 'attribute'
          }, {
            name: 'companyName',
            attributeName: {
              localPart: 'company_name'
            },
            type: 'attribute'
          }, {
            name: 'departmentName',
            attributeName: {
              localPart: 'department_name'
            },
            type: 'attribute'
          }, {
            name: 'companyAddress',
            attributeName: {
              localPart: 'company_address'
            },
            type: 'attribute'
          }, {
            name: 'companyCity',
            attributeName: {
              localPart: 'company_city'
            },
            type: 'attribute'
          }, {
            name: 'companyState',
            attributeName: {
              localPart: 'company_state'
            },
            type: 'attribute'
          }, {
            name: 'companyZip',
            attributeName: {
              localPart: 'company_zip'
            },
            type: 'attribute'
          }, {
            name: 'companyPhone',
            attributeName: {
              localPart: 'company_phone'
            },
            type: 'attribute'
          }, {
            name: 'companyFax',
            attributeName: {
              localPart: 'company_fax'
            },
            type: 'attribute'
          }, {
            name: 'county',
            attributeName: {
              localPart: 'county'
            },
            type: 'attribute'
          }, {
            name: 'notes',
            attributeName: {
              localPart: 'notes'
            },
            type: 'attribute'
          }, {
            name: 'ssn',
            attributeName: {
              localPart: 'ssn'
            },
            type: 'attribute'
          }, {
            name: 'dob',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'dob'
            },
            type: 'attribute'
          }, {
            name: 'isSsnTaxid',
            attributeName: {
              localPart: 'is_ssn_taxid'
            },
            type: 'attribute'
          }, {
            name: 'paac',
            attributeName: {
              localPart: 'paac'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEHMDAXML',
        typeName: 'BASE_HMDA_XML',
        propertyInfos: [{
            name: 'item',
            minOccurs: 0,
            collection: true,
            elementName: 'ITEM',
            typeInfo: '.BASEHMDAXML.ITEM'
          }, {
            name: 'version',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.GFE.GFE2015',
        typeName: null,
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            allowTypedObject: false,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'BASEDISBURSEMENT',
        typeName: 'BASE_DISBURSEMENT',
        propertyInfos: [{
            name: 'amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount'
            },
            type: 'attribute'
          }, {
            name: 'referenceId',
            attributeName: {
              localPart: 'reference_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEMONTHLYDEBT',
        typeName: 'BASE_MONTHLY_DEBT',
        propertyInfos: [{
            name: 'monthlyLiability',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_liability'
            },
            type: 'attribute'
          }, {
            name: 'monthlyHousingCost',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_housing_cost'
            },
            type: 'attribute'
          }, {
            name: 'monthlyRent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_rent'
            },
            type: 'attribute'
          }, {
            name: 'monthlyMortgagePayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_mortgage_payment'
            },
            type: 'attribute'
          }, {
            name: 'jobExpense',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'job_expense'
            },
            type: 'attribute'
          }, {
            name: 'alimony',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'alimony'
            },
            type: 'attribute'
          }, {
            name: 'childSupport',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'child_support'
            },
            type: 'attribute'
          }, {
            name: 'separateMaintenanceExpense',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'separate_maintenance_expense'
            },
            type: 'attribute'
          }, {
            name: 'taxExpense',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'tax_expense'
            },
            type: 'attribute'
          }, {
            name: 'otherExpense1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_expense_1'
            },
            type: 'attribute'
          }, {
            name: 'otherExpense2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_expense_2'
            },
            type: 'attribute'
          }, {
            name: 'otherExpenseDescription1',
            attributeName: {
              localPart: 'other_expense_description_1'
            },
            type: 'attribute'
          }, {
            name: 'otherExpenseDescription2',
            attributeName: {
              localPart: 'other_expense_description_2'
            },
            type: 'attribute'
          }, {
            name: 'aggregateAmountWithLender',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'aggregate_amount_with_lender'
            },
            type: 'attribute'
          }, {
            name: 'aggregateAmountWithLenderSecuredNoMortgage',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'aggregate_amount_with_lender_secured_no_mortgage'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEAPPLICANT',
        typeName: 'MORTGAGE_APPLICANT',
        baseTypeInfo: '.MORTGAGEBASEAPPLICANT',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'spouse',
            elementName: 'SPOUSE',
            typeInfo: '.MORTGAGEBASEAPPLICANT'
          }, {
            name: 'creditreport',
            elementName: 'CREDIT_REPORT',
            typeInfo: '.MORTGAGEAPPLICANT.CREDITREPORT'
          }, {
            name: 'presenthousingexpense',
            required: true,
            elementName: 'PRESENT_HOUSING_EXPENSE',
            typeInfo: '.MORTGAGEAPPLICANT.PRESENTHOUSINGEXPENSE'
          }, {
            name: 'fomansweredquestions',
            elementName: 'FOM_ANSWERED_QUESTIONS',
            typeInfo: '.FOMANSWEREDQUESTIONS'
          }, {
            name: 'isFraudCredit',
            attributeName: {
              localPart: 'is_fraud_credit'
            },
            type: 'attribute'
          }, {
            name: 'isOfacCredit',
            attributeName: {
              localPart: 'is_ofac_credit'
            },
            type: 'attribute'
          }, {
            name: 'combinedUnsecuredAggregateAmountWithLender',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'combined_unsecured_aggregate_amount_with_lender'
            },
            type: 'attribute'
          }, {
            name: 'combinedSecuredAggregateAmountWithLenderNoMortgage',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'combined_secured_aggregate_amount_with_lender_no_mortgage'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEDECLARATION',
        typeName: 'MORTGAGE_DECLARATION',
        propertyInfos: [{
            name: 'hasOutstandingJudgement',
            attributeName: {
              localPart: 'has_outstanding_judgement'
            },
            type: 'attribute'
          }, {
            name: 'hasBankruptcy',
            attributeName: {
              localPart: 'has_bankruptcy'
            },
            type: 'attribute'
          }, {
            name: 'hasBadLoan',
            attributeName: {
              localPart: 'has_bad_loan'
            },
            type: 'attribute'
          }, {
            name: 'isInLawsuit',
            attributeName: {
              localPart: 'is_in_lawsuit'
            },
            type: 'attribute'
          }, {
            name: 'isRelatedToBadLoan',
            attributeName: {
              localPart: 'is_related_to_bad_loan'
            },
            type: 'attribute'
          }, {
            name: 'isPresentlyDelinquent',
            attributeName: {
              localPart: 'is_presently_delinquent'
            },
            type: 'attribute'
          }, {
            name: 'hasSeparateMaintenance',
            attributeName: {
              localPart: 'has_separate_maintenance'
            },
            type: 'attribute'
          }, {
            name: 'isDownPaymentBorrowed',
            attributeName: {
              localPart: 'is_down_payment_borrowed'
            },
            type: 'attribute'
          }, {
            name: 'isEndorserOnNote',
            attributeName: {
              localPart: 'is_endorser_on_note'
            },
            type: 'attribute'
          }, {
            name: 'hasOwnerShipInterest',
            attributeName: {
              localPart: 'has_owner_ship_interest'
            },
            type: 'attribute'
          }, {
            name: 'typeOfPropertyOwned',
            attributeName: {
              localPart: 'type_of_property_owned'
            },
            type: 'attribute'
          }, {
            name: 'titleHoldType',
            attributeName: {
              localPart: 'title_hold_type'
            },
            type: 'attribute'
          }, {
            name: 'isPropertyPrimaryResidence',
            attributeName: {
              localPart: 'is_property_primary_residence'
            },
            type: 'attribute'
          }, {
            name: 'hasOutstandingJudgementExplanation',
            attributeName: {
              localPart: 'has_outstanding_judgement_explanation'
            },
            type: 'attribute'
          }, {
            name: 'hasBankruptcyExplanation',
            attributeName: {
              localPart: 'has_bankruptcy_explanation'
            },
            type: 'attribute'
          }, {
            name: 'hasBadLoanExplanation',
            attributeName: {
              localPart: 'has_bad_loan_explanation'
            },
            type: 'attribute'
          }, {
            name: 'isInLawsuitExplanation',
            attributeName: {
              localPart: 'is_in_lawsuit_explanation'
            },
            type: 'attribute'
          }, {
            name: 'isRelatedToBadLoanExplanation',
            attributeName: {
              localPart: 'is_related_to_bad_loan_explanation'
            },
            type: 'attribute'
          }, {
            name: 'isPresentlyDelinquentExplanation',
            attributeName: {
              localPart: 'is_presently_delinquent_explanation'
            },
            type: 'attribute'
          }, {
            name: 'hasSeparateMaintenanceExplanation',
            attributeName: {
              localPart: 'has_separate_maintenance_explanation'
            },
            type: 'attribute'
          }, {
            name: 'isDownPaymentBorrowedExplanation',
            attributeName: {
              localPart: 'is_down_payment_borrowed_explanation'
            },
            type: 'attribute'
          }, {
            name: 'isEndorserOnNoteExplanation',
            attributeName: {
              localPart: 'is_endorser_on_note_explanation'
            },
            type: 'attribute'
          }, {
            name: 'hasJudgeBankruptForeclosure',
            attributeName: {
              localPart: 'has_judge_bankrupt_foreclosure'
            },
            type: 'attribute'
          }, {
            name: 'hasDeclareBankrupt',
            attributeName: {
              localPart: 'has_declare_bankrupt'
            },
            type: 'attribute'
          }, {
            name: 'hasChapter13',
            attributeName: {
              localPart: 'has_chapter_13'
            },
            type: 'attribute'
          }, {
            name: 'hasLawsuitParty',
            attributeName: {
              localPart: 'has_lawsuit_party'
            },
            type: 'attribute'
          }, {
            name: 'hasJudgement',
            attributeName: {
              localPart: 'has_judgement'
            },
            type: 'attribute'
          }, {
            name: 'hasForeclosure',
            attributeName: {
              localPart: 'has_foreclosure'
            },
            type: 'attribute'
          }, {
            name: 'hasReposession',
            attributeName: {
              localPart: 'has_reposession'
            },
            type: 'attribute'
          }, {
            name: 'hasOtherObligation',
            attributeName: {
              localPart: 'has_other_obligation'
            },
            type: 'attribute'
          }, {
            name: 'hasPastDueBills',
            attributeName: {
              localPart: 'has_past_due_bills'
            },
            type: 'attribute'
          }, {
            name: 'hasCoMaker',
            attributeName: {
              localPart: 'has_co_maker'
            },
            type: 'attribute'
          }, {
            name: 'coMakerPrimaryName',
            attributeName: {
              localPart: 'co_maker_primary_name'
            },
            type: 'attribute'
          }, {
            name: 'coMakerCreditor',
            attributeName: {
              localPart: 'co_maker_creditor'
            },
            type: 'attribute'
          }, {
            name: 'coMakerAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'co_maker_amount'
            },
            type: 'attribute'
          }, {
            name: 'hasAlias',
            attributeName: {
              localPart: 'has_alias'
            },
            type: 'attribute'
          }, {
            name: 'alias',
            attributeName: {
              localPart: 'alias'
            },
            type: 'attribute'
          }, {
            name: 'hasIncomeDecline',
            attributeName: {
              localPart: 'has_income_decline'
            },
            type: 'attribute'
          }, {
            name: 'hasSuitsPending',
            attributeName: {
              localPart: 'has_suits_pending'
            },
            type: 'attribute'
          }, {
            name: 'hasAlimony',
            attributeName: {
              localPart: 'has_alimony'
            },
            type: 'attribute'
          }, {
            name: 'alimonyRecipient',
            attributeName: {
              localPart: 'alimony_recipient'
            },
            type: 'attribute'
          }, {
            name: 'alimonyRecipientAddress',
            attributeName: {
              localPart: 'alimony_recipient_address'
            },
            type: 'attribute'
          }, {
            name: 'hasPropertyForSale',
            attributeName: {
              localPart: 'has_property_for_sale'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGESTATUS',
        typeName: 'MORTGAGE_STATUS',
        baseTypeInfo: '.BASELOANSTATUS',
        propertyInfos: [{
            name: 'payoffDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'payoff_date'
            },
            type: 'attribute'
          }, {
            name: 'amountChargeOff',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_charge_off'
            },
            type: 'attribute'
          }, {
            name: 'rateLockDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'rate_lock_date'
            },
            type: 'attribute'
          }, {
            name: 'rateLockExpirationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'rate_lock_expiration_date'
            },
            type: 'attribute'
          }, {
            name: 'rateLockTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'rate_lock_term'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASELOANCONTACTS',
        typeName: 'BASE_LOAN_CONTACTS',
        propertyInfos: [{
            name: 'contactinfo',
            minOccurs: 0,
            collection: true,
            elementName: 'CONTACT_INFO',
            typeInfo: '.BASELOANCONTACTS.CONTACTINFO'
          }]
      }, {
        localName: 'MORTGAGEPROPERTYINFO',
        typeName: 'MORTGAGE_PROPERTY_INFO',
        propertyInfos: [{
            name: 'occupancyStatus',
            attributeName: {
              localPart: 'occupancy_status'
            },
            type: 'attribute'
          }, {
            name: 'occupancyDuration',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'occupancy_duration'
            },
            type: 'attribute'
          }, {
            name: 'propertyType',
            attributeName: {
              localPart: 'property_type'
            },
            type: 'attribute'
          }, {
            name: 'serialNumber',
            attributeName: {
              localPart: 'serial_number'
            },
            type: 'attribute'
          }, {
            name: 'homeMake',
            attributeName: {
              localPart: 'home_make'
            },
            type: 'attribute'
          }, {
            name: 'address',
            attributeName: {
              localPart: 'address'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'county',
            attributeName: {
              localPart: 'county'
            },
            type: 'attribute'
          }, {
            name: 'propertyAddressVerificationDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'property_address_verification_date'
            },
            type: 'attribute'
          }, {
            name: 'units',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'units'
            },
            type: 'attribute'
          }, {
            name: 'builtYear',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'built_year'
            },
            type: 'attribute'
          }, {
            name: 'propertyLotYearAcquired',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'property_lot_year_acquired'
            },
            type: 'attribute'
          }, {
            name: 'propertyLotOriginalCost',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_lot_original_cost'
            },
            type: 'attribute'
          }, {
            name: 'taxId',
            attributeName: {
              localPart: 'tax_id'
            },
            type: 'attribute'
          }, {
            name: 'taxId2',
            attributeName: {
              localPart: 'tax_id_2'
            },
            type: 'attribute'
          }, {
            name: 'taxId3',
            attributeName: {
              localPart: 'tax_id_3'
            },
            type: 'attribute'
          }, {
            name: 'lotPresentValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'lot_present_value'
            },
            type: 'attribute'
          }, {
            name: 'propertyLotImprovementCosts',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_lot_improvement_costs'
            },
            type: 'attribute'
          }, {
            name: 'propertyLotImprovementDescription',
            attributeName: {
              localPart: 'property_lot_improvement_description'
            },
            type: 'attribute'
          }, {
            name: 'isImprovementToBeMade',
            attributeName: {
              localPart: 'is_improvement_to_be_made'
            },
            type: 'attribute'
          }, {
            name: 'isPud',
            attributeName: {
              localPart: 'is_pud'
            },
            type: 'attribute'
          }, {
            name: 'buildingStatus',
            attributeName: {
              localPart: 'building_status'
            },
            type: 'attribute'
          }, {
            name: 'mannerTitleHeld',
            attributeName: {
              localPart: 'manner_title_held'
            },
            type: 'attribute'
          }, {
            name: 'censusTractNumber',
            attributeName: {
              localPart: 'census_tract_number'
            },
            type: 'attribute'
          }, {
            name: 'hmdaMsaNumber',
            attributeName: {
              localPart: 'hmda_msa_number'
            },
            type: 'attribute'
          }, {
            name: 'hmdaStateCode',
            attributeName: {
              localPart: 'hmda_state_code'
            },
            type: 'attribute'
          }, {
            name: 'hmdaCountyCode',
            attributeName: {
              localPart: 'hmda_county_code'
            },
            type: 'attribute'
          }, {
            name: 'isHoepa',
            attributeName: {
              localPart: 'is_hoepa'
            },
            type: 'attribute'
          }, {
            name: 'isHoepaManual',
            attributeName: {
              localPart: 'is_hoepa_manual'
            },
            type: 'attribute'
          }, {
            name: 'isHmda',
            attributeName: {
              localPart: 'is_hmda'
            },
            type: 'attribute'
          }, {
            name: 'isHmdaManual',
            attributeName: {
              localPart: 'is_hmda_manual'
            },
            type: 'attribute'
          }, {
            name: 'communityName',
            attributeName: {
              localPart: 'community_name'
            },
            type: 'attribute'
          }, {
            name: 'businessCommercialPurpose',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'business_commercial_purpose'
            },
            type: 'attribute'
          }, {
            name: 'manfHomeLandPropertyInterest',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'manf_home_land_property_interest'
            },
            type: 'attribute'
          }, {
            name: 'multifamilyAffordableUnits',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'multifamily_affordable_units'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASESYSTEM.ORIGINATOR',
        typeName: null,
        baseTypeInfo: '.BASEPARTY',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEAPPLICANTQUESTIONS.APPLICANTQUESTION.APPLICANTQUESTIONANSWER',
        typeName: null,
        propertyInfos: [{
            name: 'answerText',
            attributeName: {
              localPart: 'answer_text'
            },
            type: 'attribute'
          }, {
            name: 'answerValue',
            attributeName: {
              localPart: 'answer_value'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.INTEGRATIONDATALIST',
        typeName: null,
        propertyInfos: [{
            name: 'integrationdata',
            required: true,
            collection: true,
            elementName: 'INTEGRATION_DATA',
            typeInfo: '.INTEGRATIONDATA'
          }]
      }, {
        localName: 'MORTGAGELOAN',
        typeName: 'MORTGAGE_LOAN',
        baseTypeInfo: '.APP',
        propertyInfos: [{
            name: 'applicants',
            required: true,
            elementName: 'APPLICANTS',
            typeInfo: '.MORTGAGELOAN.APPLICANTS'
          }, {
            name: 'requestedproducts',
            elementName: 'REQUESTED_PRODUCTS',
            typeInfo: '.MORTGAGELOAN.REQUESTEDPRODUCTS'
          }, {
            name: 'propertyinfo',
            required: true,
            elementName: 'PROPERTY_INFO',
            typeInfo: '.MORTGAGEPROPERTYINFO'
          }, {
            name: 'loaninfo',
            required: true,
            elementName: 'LOAN_INFO',
            typeInfo: '.MORTGAGELOAN.LOANINFO'
          }, {
            name: 'priceadjustments',
            elementName: 'PRICE_ADJUSTMENTS',
            typeInfo: '.BASEPRICEADJUSTMENTLIST'
          }, {
            name: 'loanstatus',
            required: true,
            elementName: 'LOAN_STATUS',
            typeInfo: '.MORTGAGESTATUS'
          }, {
            name: 'detailtransaction',
            required: true,
            elementName: 'DETAIL_TRANSACTION',
            typeInfo: '.MORTGAGEDETAILSTRANSACTION'
          }, {
            name: 'disbursements',
            elementName: 'DISBURSEMENTS',
            typeInfo: '.BASEDISBURSEMENTLIST'
          }, {
            name: 'tasklist',
            elementName: 'TASK_LIST',
            typeInfo: '.BASETASKLIST'
          }, {
            name: 'funding',
            required: true,
            elementName: 'FUNDING',
            typeInfo: '.MORTGAGELOAN.FUNDING'
          }, {
            name: 'comments',
            required: true,
            elementName: 'COMMENTS',
            typeInfo: '.MORTGAGELOAN.COMMENTS'
          }, {
            name: 'customquestions',
            elementName: 'CUSTOM_QUESTIONS',
            typeInfo: '.BASECUSTOMQUESTIONS'
          }, {
            name: 'contacts',
            elementName: 'CONTACTS',
            typeInfo: '.MORTGAGECONTACTS'
          }, {
            name: 'system',
            required: true,
            collection: true,
            elementName: 'SYSTEM',
            typeInfo: '.MORTGAGESYSTEM'
          }, {
            name: 'integrationdatalist',
            elementName: 'INTEGRATION_DATA_LIST',
            typeInfo: '.MORTGAGELOAN.INTEGRATIONDATALIST'
          }, {
            name: 'modificationhistory',
            elementName: 'MODIFICATION_HISTORY',
            typeInfo: '.BASEMODIFICATIONHISTORY'
          }, {
            name: 'eventhistory',
            elementName: 'EVENT_HISTORY',
            typeInfo: '.BASEEVENTHISTORY'
          }, {
            name: 'webmshistory',
            elementName: 'WEBMS_HISTORY',
            typeInfo: '.BASEWEBMSHISTORY'
          }, {
            name: 'hmdaxml',
            elementName: 'HMDA_XML',
            typeInfo: '.BASEHMDAXML'
          }]
      }, {
        localName: 'MORTGAGELOANINFO.PROPOSEDHOUSINGEXPENSE',
        typeName: null,
        propertyInfos: [{
            name: 'monthlyPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_payment'
            },
            type: 'attribute'
          }, {
            name: 'otherPi',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_pi'
            },
            type: 'attribute'
          }, {
            name: 'hazardInsurance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_insurance'
            },
            type: 'attribute'
          }, {
            name: 'realEstateTax',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'real_estate_tax'
            },
            type: 'attribute'
          }, {
            name: 'mortgageInsurance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_insurance'
            },
            type: 'attribute'
          }, {
            name: 'hoaDue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hoa_due'
            },
            type: 'attribute'
          }, {
            name: 'otherExpense',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_expense'
            },
            type: 'attribute'
          }, {
            name: 'floodInsurance',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'flood_insurance'
            },
            type: 'attribute'
          }, {
            name: 'floodIsEscrow',
            attributeName: {
              localPart: 'flood_is_escrow'
            },
            type: 'attribute'
          }, {
            name: 'hazardIsEscrow',
            attributeName: {
              localPart: 'hazard_is_escrow'
            },
            type: 'attribute'
          }, {
            name: 'homeownersInsurance',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'homeowners_insurance'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SKIPPAYMENTINFO',
        typeName: 'SKIP_PAYMENT_INFO',
        propertyInfos: [{
            name: 'skipPaymentTemplateName',
            attributeName: {
              localPart: 'skip_payment_template_name'
            },
            type: 'attribute'
          }, {
            name: 'isPositionOfSkipsFirstPaySkip',
            attributeName: {
              localPart: 'is_position_of_skips_first_pay_skip'
            },
            type: 'attribute'
          }, {
            name: 'isDeferSkipPayments',
            attributeName: {
              localPart: 'is_defer_skip_payments'
            },
            type: 'attribute'
          }, {
            name: 'skipsPerYear',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'skips_per_year'
            },
            type: 'attribute'
          }, {
            name: 'positionOfSkips',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'position_of_skips'
            },
            type: 'attribute'
          }, {
            name: 'skipStartDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'skip_start_date'
            },
            type: 'attribute'
          }, {
            name: 'skipEndDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'skip_end_date'
            },
            type: 'attribute'
          }, {
            name: 'skipPeriodMonthDayStart',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'skip_period_month_day_start'
            },
            type: 'attribute'
          }, {
            name: 'skipPeriodMonthDayEnd',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'skip_period_month_day_end'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEINSURANCE',
        typeName: 'MORTGAGE_INSURANCE',
        baseTypeInfo: '.BASEINSURANCE',
        propertyInfos: [{
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'APP',
        propertyInfos: [{
            name: 'version',
            required: true,
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECOMMENTS',
        typeName: 'BASE_COMMENTS',
        propertyInfos: [{
            name: 'decisioncomments',
            elementName: 'DECISION_COMMENTS',
            typeInfo: 'AnyType'
          }, {
            name: 'externalcomments',
            elementName: 'EXTERNAL_COMMENTS',
            typeInfo: 'AnyType'
          }, {
            name: 'internalcomments',
            elementName: 'INTERNAL_COMMENTS',
            typeInfo: 'AnyType'
          }, {
            name: 'stipulations',
            elementName: 'STIPULATIONS',
            typeInfo: 'AnyType'
          }, {
            name: 'fraudwarnings',
            elementName: 'FRAUD_WARNINGS',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'BASEBRANCH',
        typeName: 'BASE_BRANCH',
        baseTypeInfo: '.BASEPARTY',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'address',
            elementName: 'ADDRESS',
            typeInfo: '.BASEADDRESSLOOSE'
          }, {
            name: 'referenceId2',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'reference_id2'
            },
            type: 'attribute'
          }, {
            name: 'deluxeOrgReportingUnit',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'deluxe_org_reporting_unit'
            },
            type: 'attribute'
          }, {
            name: 'ewsOrgReportingUnit',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'ews_org_reporting_unit'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEEVENTHISTORY',
        typeName: 'BASE_EVENT_HISTORY',
        propertyInfos: [{
            name: 'event',
            minOccurs: 0,
            collection: true,
            elementName: 'EVENT',
            typeInfo: '.BASEEVENTHISTORY.EVENT'
          }]
      }, {
        localName: 'MORTGAGEAPPLICANT.PRESENTHOUSINGEXPENSE',
        typeName: null,
        propertyInfos: [{
            name: 'monthlyPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_payment'
            },
            type: 'attribute'
          }, {
            name: 'otherPi',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_pi'
            },
            type: 'attribute'
          }, {
            name: 'hazardInsurance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hazard_insurance'
            },
            type: 'attribute'
          }, {
            name: 'realEstateTax',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'real_estate_tax'
            },
            type: 'attribute'
          }, {
            name: 'mortgageInsurance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'mortgage_insurance'
            },
            type: 'attribute'
          }, {
            name: 'hoaDue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'hoa_due'
            },
            type: 'attribute'
          }, {
            name: 'otherExpense',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_expense'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEMONTHLYINCOME',
        typeName: 'BASE_MONTHLY_INCOME',
        propertyInfos: [{
            name: 'otherincome',
            minOccurs: 0,
            maxOccurs: 20,
            collection: true,
            elementName: 'OTHER_INCOME',
            typeInfo: '.BASEMONTHLYINCOME.OTHERINCOME'
          }, {
            name: 'isMonthlyIncomeBaseSalaryManual',
            attributeName: {
              localPart: 'is_monthly_income_base_salary_manual'
            },
            type: 'attribute'
          }, {
            name: 'isBahIncluded',
            attributeName: {
              localPart: 'is_bah_included'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeBaseSalary',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_base_salary'
            },
            type: 'attribute'
          }, {
            name: 'isTaxExemptMonthlyIncomeBaseSalary',
            attributeName: {
              localPart: 'is_tax_exempt_monthly_income_base_salary'
            },
            type: 'attribute'
          }, {
            name: 'isHmdaExemptMonthlyIncomeBaseSalary',
            attributeName: {
              localPart: 'is_hmda_exempt_monthly_income_base_salary'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeOverTime',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_over_time'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeBonus',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_bonus'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeCommission',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_commission'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeDividends',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_dividends'
            },
            type: 'attribute'
          }, {
            name: 'monthlyIncomeNetRental',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'monthly_income_net_rental'
            },
            type: 'attribute'
          }, {
            name: 'incomeVerifyMethod',
            attributeName: {
              localPart: 'income_verify_method'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEDETAILSTRANSACTION',
        typeName: 'MORTGAGE_DETAILS_TRANSACTION',
        propertyInfos: [{
            name: 'purchasePrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'purchase_price'
            },
            type: 'attribute'
          }, {
            name: 'alterationCost',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'alteration_cost'
            },
            type: 'attribute'
          }, {
            name: 'landCost',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'land_cost'
            },
            type: 'attribute'
          }, {
            name: 'refinanceDebtsAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'refinance_debts_amount'
            },
            type: 'attribute'
          }, {
            name: 'estimatedPrePaidItems',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'estimated_pre_paid_items'
            },
            type: 'attribute'
          }, {
            name: 'estimatedClosingCosts',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'estimated_closing_costs'
            },
            type: 'attribute'
          }, {
            name: 'pmiFee',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pmi_fee'
            },
            type: 'attribute'
          }, {
            name: 'pointAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'point_amount'
            },
            type: 'attribute'
          }, {
            name: 'subordinateFinanceAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'subordinate_finance_amount'
            },
            type: 'attribute'
          }, {
            name: 'closingCostPaidBySellerAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'closing_cost_paid_by_seller_amount'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditType1',
            attributeName: {
              localPart: 'other_credit_type_1'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditType2',
            attributeName: {
              localPart: 'other_credit_type_2'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditType3',
            attributeName: {
              localPart: 'other_credit_type_3'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditType4',
            attributeName: {
              localPart: 'other_credit_type_4'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditAmount1',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_credit_amount_1'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditAmount2',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_credit_amount_2'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditAmount3',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_credit_amount_3'
            },
            type: 'attribute'
          }, {
            name: 'otherCreditAmount4',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'other_credit_amount_4'
            },
            type: 'attribute'
          }, {
            name: 'pmiFeeFinanced',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pmi_fee_financed'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'HOMEEQUITYHELOCCARDS',
        typeName: 'HOME_EQUITY_HELOC_CARDS',
        propertyInfos: [{
            name: 'cardholder',
            minOccurs: 0,
            maxOccurs: 4,
            collection: true,
            elementName: 'CARD_HOLDER',
            typeInfo: '.HOMEEQUITYHELOCCARDS.CARDHOLDER'
          }]
      }, {
        localName: 'MORTGAGECONTACTS.CONTACTINFO',
        typeName: null,
        propertyInfos: [{
            name: 'contactType',
            required: true,
            attributeName: {
              localPart: 'contact_type'
            },
            type: 'attribute'
          }, {
            name: 'contactFirstName',
            attributeName: {
              localPart: 'contact_first_name'
            },
            type: 'attribute'
          }, {
            name: 'contactMiddleName',
            attributeName: {
              localPart: 'contact_middle_name'
            },
            type: 'attribute'
          }, {
            name: 'contactLastName',
            attributeName: {
              localPart: 'contact_last_name'
            },
            type: 'attribute'
          }, {
            name: 'contactSuffix',
            attributeName: {
              localPart: 'contact_suffix'
            },
            type: 'attribute'
          }, {
            name: 'contactWorkPhone',
            attributeName: {
              localPart: 'contact_work_phone'
            },
            type: 'attribute'
          }, {
            name: 'contactAddress',
            attributeName: {
              localPart: 'contact_address'
            },
            type: 'attribute'
          }, {
            name: 'contactCity',
            attributeName: {
              localPart: 'contact_city'
            },
            type: 'attribute'
          }, {
            name: 'contactCounty',
            attributeName: {
              localPart: 'contact_county'
            },
            type: 'attribute'
          }, {
            name: 'contactState',
            attributeName: {
              localPart: 'contact_state'
            },
            type: 'attribute'
          }, {
            name: 'contactZip',
            attributeName: {
              localPart: 'contact_zip'
            },
            type: 'attribute'
          }, {
            name: 'contactEmail',
            attributeName: {
              localPart: 'contact_email'
            },
            type: 'attribute'
          }, {
            name: 'companyName',
            attributeName: {
              localPart: 'company_name'
            },
            type: 'attribute'
          }, {
            name: 'departmentName',
            attributeName: {
              localPart: 'department_name'
            },
            type: 'attribute'
          }, {
            name: 'companyAddress',
            attributeName: {
              localPart: 'company_address'
            },
            type: 'attribute'
          }, {
            name: 'companyCity',
            attributeName: {
              localPart: 'company_city'
            },
            type: 'attribute'
          }, {
            name: 'companyState',
            attributeName: {
              localPart: 'company_state'
            },
            type: 'attribute'
          }, {
            name: 'companyZip',
            attributeName: {
              localPart: 'company_zip'
            },
            type: 'attribute'
          }, {
            name: 'companyPhone',
            attributeName: {
              localPart: 'company_phone'
            },
            type: 'attribute'
          }, {
            name: 'companyFax',
            attributeName: {
              localPart: 'company_fax'
            },
            type: 'attribute'
          }, {
            name: 'agentLicenseNumber',
            attributeName: {
              localPart: 'agent_license_number'
            },
            type: 'attribute'
          }, {
            name: 'caseNumber',
            attributeName: {
              localPart: 'case_number'
            },
            type: 'attribute'
          }, {
            name: 'caseEffectiveDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'case_effective_date'
            },
            type: 'attribute'
          }, {
            name: 'receivedDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'received_date'
            },
            type: 'attribute'
          }, {
            name: 'companyLicenseNumber',
            attributeName: {
              localPart: 'company_license_number'
            },
            type: 'attribute'
          }, {
            name: 'notes',
            attributeName: {
              localPart: 'notes'
            },
            type: 'attribute'
          }, {
            name: 'contactPhone',
            attributeName: {
              localPart: 'contact_phone'
            },
            type: 'attribute'
          }, {
            name: 'contactFax',
            attributeName: {
              localPart: 'contact_fax'
            },
            type: 'attribute'
          }, {
            name: 'contactCellPhone',
            attributeName: {
              localPart: 'contact_cell_phone'
            },
            type: 'attribute'
          }, {
            name: 'contactPager',
            attributeName: {
              localPart: 'contact_pager'
            },
            type: 'attribute'
          }, {
            name: 'expirationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'expiration_date'
            },
            type: 'attribute'
          }, {
            name: 'dwellingCoverage',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'dwelling_coverage'
            },
            type: 'attribute'
          }, {
            name: 'isFloodZone',
            attributeName: {
              localPart: 'is_flood_zone'
            },
            type: 'attribute'
          }, {
            name: 'floodZone',
            attributeName: {
              localPart: 'flood_zone'
            },
            type: 'attribute'
          }, {
            name: 'agentNmls',
            attributeName: {
              localPart: 'agent_nmls'
            },
            type: 'attribute'
          }, {
            name: 'companyNmls',
            attributeName: {
              localPart: 'company_nmls'
            },
            type: 'attribute'
          }, {
            name: 'ssn',
            attributeName: {
              localPart: 'ssn'
            },
            type: 'attribute'
          }, {
            name: 'dob',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'dob'
            },
            type: 'attribute'
          }, {
            name: 'isSsnTaxid',
            attributeName: {
              localPart: 'is_ssn_taxid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.FINANCIALINFO.MONTHLYINCOME',
        typeName: null,
        baseTypeInfo: '.BASEMONTHLYINCOME',
        propertyInfos: [{
            name: 'specialincome',
            minOccurs: 0,
            collection: true,
            elementName: 'SPECIAL_INCOME',
            typeInfo: '.MORTGAGEBASEAPPLICANT.FINANCIALINFO.MONTHLYINCOME.SPECIALINCOME'
          }]
      }, {
        localName: 'BASELOANSTATUS',
        typeName: 'BASE_LOAN_STATUS',
        propertyInfos: [{
            name: 'loanStatus',
            required: true,
            attributeName: {
              localPart: 'loan_status'
            },
            type: 'attribute'
          }, {
            name: 'initialEntryTimestamp',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'initial_entry_timestamp'
            },
            type: 'attribute'
          }, {
            name: 'lastModified',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'last_modified'
            },
            type: 'attribute'
          }, {
            name: 'submitDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'submit_date'
            },
            type: 'attribute'
          }, {
            name: 'underwriteSubmitDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'underwrite_submit_date'
            },
            type: 'attribute'
          }, {
            name: 'isLocked',
            required: true,
            attributeName: {
              localPart: 'is_locked'
            },
            type: 'attribute'
          }, {
            name: 'existingBalance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'existing_balance'
            },
            type: 'attribute'
          }, {
            name: 'existingBalanceDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'existing_balance_date'
            },
            type: 'attribute'
          }, {
            name: 'delinquencyPeriod',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'delinquency_period'
            },
            type: 'attribute'
          }, {
            name: 'delinquencyAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'delinquency_amount'
            },
            type: 'attribute'
          }, {
            name: 'approvalDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'approval_date'
            },
            type: 'attribute'
          }, {
            name: 'declinedDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'declined_date'
            },
            type: 'attribute'
          }, {
            name: 'firstApprovalDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'first_approval_date'
            },
            type: 'attribute'
          }, {
            name: 'nextPaymentDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'next_payment_date'
            },
            type: 'attribute'
          }, {
            name: 'responseDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'response_date'
            },
            type: 'attribute'
          }, {
            name: 'counterOfferDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'counter_offer_date'
            },
            type: 'attribute'
          }, {
            name: 'appReceiveDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'app_receive_date'
            },
            type: 'attribute'
          }, {
            name: 'decidingDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'deciding_date'
            },
            type: 'attribute'
          }, {
            name: 'bookingDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'booking_date'
            },
            type: 'attribute'
          }, {
            name: 'bookingReferenceId',
            attributeName: {
              localPart: 'booking_reference_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.FINANCIALINFO.MONTHLYINCOME.SPECIALINCOME',
        typeName: null,
        propertyInfos: [{
            name: 'incomeType',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'income_type'
            },
            type: 'attribute'
          }, {
            name: 'amount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEASSETLIST.ASSET',
        typeName: null,
        baseTypeInfo: '.BASEASSET'
      }, {
        localName: 'MORTGAGELOAN.REQUESTEDPRODUCTS',
        typeName: null,
        propertyInfos: [{
            name: 'product',
            minOccurs: 0,
            collection: true,
            elementName: 'PRODUCT',
            typeInfo: '.MORTGAGEREQUESTEDPRODUCT'
          }]
      }, {
        localName: 'BASEASSETVEHICLE',
        typeName: 'BASE_ASSET_VEHICLE',
        baseTypeInfo: '.BASEASSET',
        propertyInfos: [{
            name: 'vehicleYear',
            attributeName: {
              localPart: 'vehicle_year'
            },
            type: 'attribute'
          }, {
            name: 'vehicleMake',
            attributeName: {
              localPart: 'vehicle_make'
            },
            type: 'attribute'
          }, {
            name: 'vehicleModel',
            attributeName: {
              localPart: 'vehicle_model'
            },
            type: 'attribute'
          }, {
            name: 'vehicleVin',
            attributeName: {
              localPart: 'vehicle_vin'
            },
            type: 'attribute'
          }, {
            name: 'vehicleTitleOwner',
            attributeName: {
              localPart: 'vehicle_title_owner'
            },
            type: 'attribute'
          }, {
            name: 'vehicleTitleNumber',
            attributeName: {
              localPart: 'vehicle_title_number'
            },
            type: 'attribute'
          }, {
            name: 'vehicleColor',
            attributeName: {
              localPart: 'vehicle_color'
            },
            type: 'attribute'
          }, {
            name: 'vehicleMiles',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'vehicle_miles'
            },
            type: 'attribute'
          }, {
            name: 'vehicleLicensePlate',
            attributeName: {
              localPart: 'vehicle_license_plate'
            },
            type: 'attribute'
          }, {
            name: 'vehicleSeller',
            attributeName: {
              localPart: 'vehicle_seller'
            },
            type: 'attribute'
          }, {
            name: 'vehicleHasProofInsurance',
            attributeName: {
              localPart: 'vehicle_has_proof_insurance'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PAYMENTTRANSFERFROMINTERNALACCOUNTINFO',
        typeName: 'PAYMENT_TRANSFER_FROM_INTERNAL_ACCOUNT_INFO',
        propertyInfos: [{
            name: 'accountType',
            attributeName: {
              localPart: 'account_type'
            },
            type: 'attribute'
          }, {
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }, {
            name: 'nameOnAccount',
            attributeName: {
              localPart: 'name_on_account'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.APPLICANTS',
        typeName: null,
        propertyInfos: [{
            name: 'applicant',
            required: true,
            collection: true,
            elementName: 'APPLICANT',
            typeInfo: '.MORTGAGEAPPLICANT'
          }, {
            name: 'selectedProductBorrowerId',
            attributeName: {
              localPart: 'selected_product_borrower_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'INTEGRATIONDATA',
        typeName: 'INTEGRATION_DATA'
      }, {
        localName: 'PAYMENTTRANSFERFROMOTHERINSTITUTIONINFO',
        typeName: 'PAYMENT_TRANSFER_FROM_OTHER_INSTITUTION_INFO',
        propertyInfos: [{
            name: 'accountType',
            attributeName: {
              localPart: 'account_type'
            },
            type: 'attribute'
          }, {
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }, {
            name: 'nameOnAccount',
            attributeName: {
              localPart: 'name_on_account'
            },
            type: 'attribute'
          }, {
            name: 'bankRoutingNumber',
            attributeName: {
              localPart: 'bank_routing_number'
            },
            type: 'attribute'
          }, {
            name: 'bankName',
            attributeName: {
              localPart: 'bank_name'
            },
            type: 'attribute'
          }, {
            name: 'bankZip',
            attributeName: {
              localPart: 'bank_zip'
            },
            type: 'attribute'
          }, {
            name: 'bankCity',
            attributeName: {
              localPart: 'bank_city'
            },
            type: 'attribute'
          }, {
            name: 'bankState',
            attributeName: {
              localPart: 'bank_state'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.FUNDING.INSURANCEOPTIONS',
        typeName: null,
        propertyInfos: [{
            name: 'insuranceoption',
            minOccurs: 0,
            collection: true,
            elementName: 'INSURANCE_OPTION',
            typeInfo: '.MORTGAGEINSURANCE'
          }, {
            name: 'loanClass',
            attributeName: {
              localPart: 'loan_class'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'borrower1Index',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'borrower_1_index'
            },
            type: 'attribute'
          }, {
            name: 'borrower1IsSpouse',
            attributeName: {
              localPart: 'borrower_1_is_spouse'
            },
            type: 'attribute'
          }, {
            name: 'borrower2Index',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'borrower_2_index'
            },
            type: 'attribute'
          }, {
            name: 'borrower2IsSpouse',
            attributeName: {
              localPart: 'borrower_2_is_spouse'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGELOAN.COMMENTS',
        typeName: null,
        baseTypeInfo: '.BASECOMMENTS',
        propertyInfos: [{
            name: 'unabletofund',
            elementName: 'UNABLE_TO_FUND',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'BASEASSETSAVINGSACCOUNT',
        typeName: 'BASE_ASSET_SAVINGS_ACCOUNT',
        baseTypeInfo: '.BASEASSET',
        propertyInfos: [{
            name: 'expirationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'expiration_date'
            },
            type: 'attribute'
          }, {
            name: 'issueDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'issue_date'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEWEBMSHISTORY.MESSAGE',
        typeName: null,
        propertyInfos: [{
            name: 'time',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'time'
            },
            type: 'attribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'text',
            attributeName: {
              localPart: 'text'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEBASEAPPLICANT.FINANCIALINFO',
        typeName: null,
        propertyInfos: [{
            name: 'currentemployment',
            minOccurs: 0,
            collection: true,
            elementName: 'CURRENT_EMPLOYMENT',
            typeInfo: '.MORTGAGEBASEAPPLICANT.FINANCIALINFO.CURRENTEMPLOYMENT'
          }, {
            name: 'previousemployment',
            minOccurs: 0,
            collection: true,
            elementName: 'PREVIOUS_EMPLOYMENT',
            typeInfo: '.MORTGAGEBASEAPPLICANT.FINANCIALINFO.PREVIOUSEMPLOYMENT'
          }, {
            name: 'monthlyincome',
            required: true,
            elementName: 'MONTHLY_INCOME',
            typeInfo: '.MORTGAGEBASEAPPLICANT.FINANCIALINFO.MONTHLYINCOME'
          }, {
            name: 'monthlydebt',
            required: true,
            elementName: 'MONTHLY_DEBT',
            typeInfo: '.BASEMONTHLYDEBT'
          }]
      }, {
        localName: 'PAYMENTPAYROLLDEDUCTIONINFO',
        typeName: 'PAYMENT_PAYROLL_DEDUCTION_INFO',
        propertyInfos: [{
            name: 'accountNumber',
            attributeName: {
              localPart: 'account_number'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASECURRENTADDRESSCHOICE',
        typeName: 'BASE_CURRENT_ADDRESS_CHOICE',
        propertyInfos: [{
            name: 'strictaddress',
            required: true,
            elementName: 'STRICT_ADDRESS',
            typeInfo: '.BASEADDRESSSTRICT'
          }, {
            name: 'looseaddress',
            required: true,
            elementName: 'LOOSE_ADDRESS',
            typeInfo: '.BASEADDRESSLOOSE'
          }, {
            name: 'threelineaddress',
            required: true,
            elementName: 'THREE_LINE_ADDRESS',
            typeInfo: '.BASEADDRESSTHREELINE'
          }]
      }, {
        localName: 'BASEADDRESSSTRICT',
        typeName: 'BASE_ADDRESS_STRICT',
        propertyInfos: [{
            name: 'streetAddress',
            attributeName: {
              localPart: 'street_address'
            },
            type: 'attribute'
          }, {
            name: 'streetNo',
            attributeName: {
              localPart: 'street_no'
            },
            type: 'attribute'
          }, {
            name: 'streetDirection',
            attributeName: {
              localPart: 'street_direction'
            },
            type: 'attribute'
          }, {
            name: 'streetName',
            attributeName: {
              localPart: 'street_name'
            },
            type: 'attribute'
          }, {
            name: 'streetType',
            attributeName: {
              localPart: 'street_type'
            },
            type: 'attribute'
          }, {
            name: 'unitNo',
            attributeName: {
              localPart: 'unit_no'
            },
            type: 'attribute'
          }, {
            name: 'verificationDate',
            typeInfo: 'Calendar',
            attributeName: {
              localPart: 'verification_date'
            },
            type: 'attribute'
          }, {
            name: 'city',
            attributeName: {
              localPart: 'city'
            },
            type: 'attribute'
          }, {
            name: 'state',
            attributeName: {
              localPart: 'state'
            },
            type: 'attribute'
          }, {
            name: 'zip',
            attributeName: {
              localPart: 'zip'
            },
            type: 'attribute'
          }, {
            name: 'county',
            attributeName: {
              localPart: 'county'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DECLARATIONS',
        propertyInfos: [{
            name: 'hasJudgeBankruptForeclosure',
            attributeName: {
              localPart: 'has_judge_bankrupt_foreclosure'
            },
            type: 'attribute'
          }, {
            name: 'hasDeclareBankrupt',
            attributeName: {
              localPart: 'has_declare_bankrupt'
            },
            type: 'attribute'
          }, {
            name: 'hasChapter13',
            attributeName: {
              localPart: 'has_chapter_13'
            },
            type: 'attribute'
          }, {
            name: 'hasLawsuitParty',
            attributeName: {
              localPart: 'has_lawsuit_party'
            },
            type: 'attribute'
          }, {
            name: 'hasJudgement',
            attributeName: {
              localPart: 'has_judgement'
            },
            type: 'attribute'
          }, {
            name: 'hasForeclosure',
            attributeName: {
              localPart: 'has_foreclosure'
            },
            type: 'attribute'
          }, {
            name: 'hasReposession',
            attributeName: {
              localPart: 'has_reposession'
            },
            type: 'attribute'
          }, {
            name: 'hasOtherObligation',
            attributeName: {
              localPart: 'has_other_obligation'
            },
            type: 'attribute'
          }, {
            name: 'hasPastDueBills',
            attributeName: {
              localPart: 'has_past_due_bills'
            },
            type: 'attribute'
          }, {
            name: 'hasCoMaker',
            attributeName: {
              localPart: 'has_co_maker'
            },
            type: 'attribute'
          }, {
            name: 'coMakerPrimaryName',
            attributeName: {
              localPart: 'co_maker_primary_name'
            },
            type: 'attribute'
          }, {
            name: 'coMakerCreditor',
            attributeName: {
              localPart: 'co_maker_creditor'
            },
            type: 'attribute'
          }, {
            name: 'coMakerAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'co_maker_amount'
            },
            type: 'attribute'
          }, {
            name: 'hasAlias',
            attributeName: {
              localPart: 'has_alias'
            },
            type: 'attribute'
          }, {
            name: 'alias',
            attributeName: {
              localPart: 'alias'
            },
            type: 'attribute'
          }, {
            name: 'hasIncomeDecline',
            attributeName: {
              localPart: 'has_income_decline'
            },
            type: 'attribute'
          }, {
            name: 'hasSuitsPending',
            attributeName: {
              localPart: 'has_suits_pending'
            },
            type: 'attribute'
          }, {
            name: 'hasAlimony',
            attributeName: {
              localPart: 'has_alimony'
            },
            type: 'attribute'
          }, {
            name: 'alimonyRecipient',
            attributeName: {
              localPart: 'alimony_recipient'
            },
            type: 'attribute'
          }, {
            name: 'alimonyRecipientAddress',
            attributeName: {
              localPart: 'alimony_recipient_address'
            },
            type: 'attribute'
          }, {
            name: 'hasPropertyForSale',
            attributeName: {
              localPart: 'has_property_for_sale'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MORTGAGEMONTHLYDEBT',
        typeName: 'MORTGAGE_MONTHLY_DEBT',
        baseTypeInfo: '.BASEMONTHLYDEBT'
      }, {
        localName: 'BASEASSETREALESTATE',
        typeName: 'BASE_ASSET_REAL_ESTATE',
        baseTypeInfo: '.BASEASSET',
        propertyInfos: [{
            name: 'propertyType',
            attributeName: {
              localPart: 'property_type'
            },
            type: 'attribute'
          }, {
            name: 'propertyGrossRentalIncome',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_gross_rental_income'
            },
            type: 'attribute'
          }, {
            name: 'propertyNetRentalIncome',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_net_rental_income'
            },
            type: 'attribute'
          }, {
            name: 'propertyMortgagePayments',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_mortgage_payments'
            },
            type: 'attribute'
          }, {
            name: 'propertyOtherCosts',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'property_other_costs'
            },
            type: 'attribute'
          }, {
            name: 'propertyCurrentResidenceIndicator',
            attributeName: {
              localPart: 'property_current_residence_indicator'
            },
            type: 'attribute'
          }, {
            name: 'propertyDisposition',
            attributeName: {
              localPart: 'property_disposition'
            },
            type: 'attribute'
          }, {
            name: 'isSubjectProperty',
            attributeName: {
              localPart: 'is_subject_property'
            },
            type: 'attribute'
          }, {
            name: 'propertyTaxId',
            attributeName: {
              localPart: 'property_tax_id'
            },
            type: 'attribute'
          }, {
            name: 'isFinancedProperty',
            attributeName: {
              localPart: 'is_financed_property'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASETASKLIST.TASK',
        typeName: null,
        propertyInfos: [{
            name: 'assignto',
            elementName: 'ASSIGNTO',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'complete',
            elementName: 'COMPLETE',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'create',
            elementName: 'CREATE',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'dueloan',
            elementName: 'DUELOAN',
            typeInfo: '.BASEPARTY'
          }, {
            name: 'appliedset',
            elementName: 'APPLIEDSET',
            typeInfo: '.BASETASKLIST.TASK.APPLIEDSET'
          }, {
            name: 'requireset',
            elementName: 'REQUIRESET',
            typeInfo: '.BASETASKLIST.TASK.REQUIRESET'
          }, {
            name: 'dateDue',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'date_due'
            },
            type: 'attribute'
          }, {
            name: 'dateCompleted',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'date_completed'
            },
            type: 'attribute'
          }, {
            name: 'dateCreated',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'date_created'
            },
            type: 'attribute'
          }, {
            name: 'description',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'required',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'required'
            },
            type: 'attribute'
          }, {
            name: 'completed',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'completed'
            },
            type: 'attribute'
          }, {
            name: 'category',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'category'
            },
            type: 'attribute'
          }, {
            name: 'priority',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'priority'
            },
            type: 'attribute'
          }, {
            name: 'position',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'position'
            },
            type: 'attribute'
          }, {
            name: 'assigntoOfficer',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'assignto_officer'
            },
            type: 'attribute'
          }, {
            name: 'completeOfficer',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'complete_officer'
            },
            type: 'attribute'
          }, {
            name: 'createOfficer',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'create_officer'
            },
            type: 'attribute'
          }, {
            name: 'dueloanOfficer',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'dueloan_officer'
            },
            type: 'attribute'
          }, {
            name: 'isApplied',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'is_applied'
            },
            type: 'attribute'
          }, {
            name: 'isRequired',
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'is_required'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEASSETSHARE',
        typeName: 'BASE_ASSET_SHARE',
        baseTypeInfo: '.BASEASSET',
        propertyInfos: [{
            name: 'expirationDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'expiration_date'
            },
            type: 'attribute'
          }, {
            name: 'pledgeType',
            attributeName: {
              localPart: 'pledge_type'
            },
            type: 'attribute'
          }, {
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'pledgePercent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pledge_percent'
            },
            type: 'attribute'
          }, {
            name: 'pledgeValueType',
            attributeName: {
              localPart: 'pledge_value_type'
            },
            type: 'attribute'
          }, {
            name: 'pledgeValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'pledge_value'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BASEINSURANCE',
        typeName: 'BASE_INSURANCE',
        propertyInfos: [{
            name: 'coverage',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'coverage'
            },
            type: 'attribute'
          }, {
            name: 'planKey',
            attributeName: {
              localPart: 'plan_key'
            },
            type: 'attribute'
          }, {
            name: 'description',
            attributeName: {
              localPart: 'description'
            },
            type: 'attribute'
          }, {
            name: 'premium',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'premium'
            },
            type: 'attribute'
          }, {
            name: 'premiumMode',
            attributeName: {
              localPart: 'premium_mode'
            },
            type: 'attribute'
          }, {
            name: 'costPerDay',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'cost_per_day'
            },
            type: 'attribute'
          }, {
            name: 'insuredAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'insured_amount'
            },
            type: 'attribute'
          }, {
            name: 'insuredRate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'insured_rate'
            },
            type: 'attribute'
          }, {
            name: 'expireDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'expire_date'
            },
            type: 'attribute'
          }, {
            name: 'lastPulledDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'last_pulled_date'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'BaseRaceTypeSingle',
        baseTypeInfo: 'NMToken',
        values: ['AMERICAN_INDIAN', 'ASIAN', 'BLACK', 'PACIFIC_ISLANDER', 'WHITE']
      }, {
        type: 'enumInfo',
        localName: 'BaseEmployeeOfLenderTypes',
        values: ['NONE', 'EMPLOYEE', 'MANAGER', 'EXECUTIVE', 'BOARDMEMBER', 'EMPLOYEEFAMILY', 'BOARDFAMILY', 'OTHER']
      }, {
        type: 'enumInfo',
        localName: 'BaseApplicantType',
        values: ['P', 'C', 'S', 'G']
      }],
    elementInfos: [{
        elementName: 'MORTGAGE_LOAN',
        typeInfo: '.MORTGAGELOAN'
      }]
  };
  return {
    mortgage_loan: mortgage_loan
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mortgage_loan_Module_Factory);
}
else {
  var mortgage_loan_Module = mortgage_loan_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mortgage_loan = mortgage_loan_Module.mortgage_loan;
  }
  else {
    var mortgage_loan = mortgage_loan_Module.mortgage_loan;
  }
}