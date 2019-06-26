var personal_loan_Module_Factory = function () {
  var personal_loan = {
    name: 'personal_loan',
    defaultElementNamespaceURI: 'http:\/\/www.meridianlink.com\/CLF',
    typeInfos: [{
        localName: 'PERSONALBASEAPPLICANT.FINANCIALINFO.CURRENTEMPLOYMENT',
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
        localName: 'PERSONALLOAN.LOANINFO',
        typeName: null,
        baseTypeInfo: '.PERSONALLOANINFO'
      }, {
        localName: 'PERSONALLOAN.INTEGRATIONDATALIST',
        typeName: null,
        propertyInfos: [{
            name: 'integrationdata',
            required: true,
            collection: true,
            elementName: 'INTEGRATION_DATA',
            typeInfo: '.INTEGRATIONDATA'
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
        localName: 'PERSONALLOAN',
        typeName: null,
        baseTypeInfo: '.PERSONALLOAN'
      }, {
        localName: 'PERSONALBASEAPPLICANT.FINANCIALINFO.PREVIOUSEMPLOYMENT',
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
        localName: 'PERSONALLOAN',
        typeName: 'PERSONAL_LOAN',
        baseTypeInfo: '.APP',
        propertyInfos: [{
            name: 'applicants',
            required: true,
            elementName: 'APPLICANTS',
            typeInfo: '.PERSONALLOAN.APPLICANTS'
          }, {
            name: 'loaninfo',
            required: true,
            elementName: 'LOAN_INFO',
            typeInfo: '.PERSONALLOAN.LOANINFO'
          }, {
            name: 'priceadjustments',
            elementName: 'PRICE_ADJUSTMENTS',
            typeInfo: '.BASEPRICEADJUSTMENTLIST'
          }, {
            name: 'loanstatus',
            required: true,
            elementName: 'LOAN_STATUS',
            typeInfo: '.PERSONALSTATUS'
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
            typeInfo: '.PERSONALLOAN.FUNDING'
          }, {
            name: 'comments',
            required: true,
            elementName: 'COMMENTS',
            typeInfo: '.PERSONALLOAN.COMMENTS'
          }, {
            name: 'customquestions',
            elementName: 'CUSTOM_QUESTIONS',
            typeInfo: '.BASECUSTOMQUESTIONS'
          }, {
            name: 'contacts',
            elementName: 'CONTACTS',
            typeInfo: '.BASELOANCONTACTS'
          }, {
            name: 'system',
            required: true,
            collection: true,
            elementName: 'SYSTEM',
            typeInfo: '.PERSONALSYSTEM'
          }, {
            name: 'hmdainfo',
            elementName: 'HMDA_INFO',
            typeInfo: '.BASEHMDAINFO'
          }, {
            name: 'integrationdatalist',
            elementName: 'INTEGRATION_DATA_LIST',
            typeInfo: '.PERSONALLOAN.INTEGRATIONDATALIST'
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
        localName: 'PERSONALLOAN.FUNDING.INSURANCEOPTIONS',
        typeName: null,
        propertyInfos: [{
            name: 'insuranceoption',
            minOccurs: 0,
            collection: true,
            elementName: 'INSURANCE_OPTION',
            typeInfo: '.PERSONALINSURANCE'
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
        localName: 'PERSONALBASEAPPLICANT.CURRENTADDRESS',
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
        localName: 'PERSONALFUNDINGINFO',
        typeName: 'PERSONAL_FUNDING_INFO',
        baseTypeInfo: '.BASEFUNDINGINFO',
        propertyInfos: [{
            name: 'firstPaymentDate',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'first_payment_date'
            },
            type: 'attribute'
          }, {
            name: 'fundingLoanTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'funding_loan_term'
            },
            type: 'attribute'
          }, {
            name: 'fundingRate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'funding_rate'
            },
            type: 'attribute'
          }, {
            name: 'exactMonthlyPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'exact_monthly_payment'
            },
            type: 'attribute'
          }, {
            name: 'exactMonthlyPaymentOriginal',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'exact_monthly_payment_original'
            },
            type: 'attribute'
          }, {
            name: 'exactLastMonthlyPayment',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'exact_last_monthly_payment'
            },
            type: 'attribute'
          }, {
            name: 'additionalFees',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'additional_fees'
            },
            type: 'attribute'
          }, {
            name: 'additionalFeesComment',
            attributeName: {
              localPart: 'additional_fees_comment'
            },
            type: 'attribute'
          }, {
            name: 'initialBalloonAmount',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'initial_balloon_amount'
            },
            type: 'attribute'
          }, {
            name: 'fundingApr',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'funding_apr'
            },
            type: 'attribute'
          }, {
            name: 'indexType',
            attributeName: {
              localPart: 'index_type'
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
          }, {
            name: 'docStampsFee',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'doc_stamps_fee'
            },
            type: 'attribute'
          }, {
            name: 'docStampsRate',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'doc_stamps_rate'
            },
            type: 'attribute'
          }, {
            name: 'docStampsFeeIsManual',
            attributeName: {
              localPart: 'doc_stamps_fee_is_manual'
            },
            type: 'attribute'
          }, {
            name: 'docStampsType',
            attributeName: {
              localPart: 'doc_stamps_type'
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
        localName: 'PERSONALSTATUS',
        typeName: 'PERSONAL_STATUS',
        baseTypeInfo: '.BASELOANSTATUS',
        propertyInfos: [{
            name: 'payoffDate',
            typeInfo: 'Date',
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
        localName: 'PERSONALLOAN.APPLICANTS',
        typeName: null,
        propertyInfos: [{
            name: 'applicant',
            required: true,
            collection: true,
            elementName: 'APPLICANT',
            typeInfo: '.PERSONALAPPLICANT'
          }, {
            name: 'selectedProductBorrowerId',
            attributeName: {
              localPart: 'selected_product_borrower_id'
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
        localName: 'PERSONALAPPLICANT',
        typeName: 'PERSONAL_APPLICANT',
        baseTypeInfo: '.PERSONALBASEAPPLICANT',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'spouse',
            elementName: 'SPOUSE',
            typeInfo: '.PERSONALBASEAPPLICANT'
          }, {
            name: 'creditreport',
            elementName: 'CREDIT_REPORT',
            typeInfo: '.PERSONALAPPLICANT.CREDITREPORT'
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
        localName: 'PERSONALBASEAPPLICANT.PREVIOUSADDRESS',
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
        localName: 'INTEGRATIONDATA',
        typeName: 'INTEGRATION_DATA'
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
        localName: 'PERSONALLOANINFO',
        typeName: 'PERSONAL_LOAN_INFO',
        baseTypeInfo: '.BASELOANINFO',
        propertyInfos: [{
            name: 'personalLoanType',
            attributeName: {
              localPart: 'personal_loan_type'
            },
            type: 'attribute'
          }, {
            name: 'purposeType',
            attributeName: {
              localPart: 'purpose_type'
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
            name: 'loanTerm',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'loan_term'
            },
            type: 'attribute'
          }, {
            name: 'loanTermRequested',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'loan_term_requested'
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
            name: 'rate',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'rate'
            },
            type: 'attribute'
          }, {
            name: 'rateType',
            attributeName: {
              localPart: 'rate_type'
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
            name: 'purposeDescription',
            attributeName: {
              localPart: 'purpose_description'
            },
            type: 'attribute'
          }, {
            name: 'miscImplant',
            attributeName: {
              localPart: 'misc_implant'
            },
            type: 'attribute'
          }, {
            name: 'extraCollateralOwner1',
            attributeName: {
              localPart: 'extra_collateral_owner_1'
            },
            type: 'attribute'
          }, {
            name: 'extraCollateralOwner2',
            attributeName: {
              localPart: 'extra_collateral_owner_2'
            },
            type: 'attribute'
          }, {
            name: 'isLOC',
            attributeName: {
              localPart: 'is_LOC'
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
            name: 'numberOfPayments',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'number_of_payments'
            },
            type: 'attribute'
          }, {
            name: 'isIndirectLoan',
            attributeName: {
              localPart: 'is_indirect_loan'
            },
            type: 'attribute'
          }, {
            name: 'isBalloon',
            attributeName: {
              localPart: 'is_balloon'
            },
            type: 'attribute'
          }, {
            name: 'isOverdraft',
            attributeName: {
              localPart: 'is_overdraft'
            },
            type: 'attribute'
          }, {
            name: 'paymentPercent',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'payment_percent'
            },
            type: 'attribute'
          }, {
            name: 'minimumPayment',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'minimum_payment'
            },
            type: 'attribute'
          }, {
            name: 'reserveAmount',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'reserve_amount'
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
            name: 'amountApprovedVariance',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'amount_approved_variance'
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
            name: 'isAdvanceRequest',
            attributeName: {
              localPart: 'is_advance_request'
            },
            type: 'attribute'
          }, {
            name: 'downPayment',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'down_payment'
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
        localName: 'BASEASSETLIST.ASSET',
        typeName: null,
        baseTypeInfo: '.BASEASSET'
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
        localName: 'PERSONALLOAN.COMMENTS',
        typeName: null,
        baseTypeInfo: '.BASECOMMENTS',
        propertyInfos: [{
            name: 'unabletofund',
            elementName: 'UNABLE_TO_FUND',
            typeInfo: 'AnyType'
          }]
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
        localName: 'PERSONALINSURANCE',
        typeName: 'PERSONAL_INSURANCE',
        baseTypeInfo: '.BASEINSURANCE',
        propertyInfos: [{
            name: 'type',
            attributeName: {
              localPart: 'type'
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
        localName: 'PERSONALSYSTEM',
        typeName: 'PERSONAL_SYSTEM',
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
        localName: 'PERSONALLOAN.FUNDING',
        typeName: null,
        baseTypeInfo: '.PERSONALFUNDINGINFO',
        propertyInfos: [{
            name: 'insuranceoptions',
            required: true,
            elementName: 'INSURANCE_OPTIONS',
            typeInfo: '.PERSONALLOAN.FUNDING.INSURANCEOPTIONS'
          }, {
            name: 'closeendinfo',
            elementName: 'CLOSE_END_INFO',
            typeInfo: '.BASECLOSEENDINFO'
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
        localName: 'PERSONALBASEAPPLICANT.MAILINGADDRESS',
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
        localName: 'PERSONALAPPLICANT.CREDITREPORT',
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
        localName: 'PERSONALBASEAPPLICANT',
        typeName: 'PERSONAL_BASE_APPLICANT',
        baseTypeInfo: '.BASEAPPLICANT',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'currentaddress',
            required: true,
            elementName: 'CURRENT_ADDRESS',
            typeInfo: '.PERSONALBASEAPPLICANT.CURRENTADDRESS'
          }, {
            name: 'previousaddress',
            elementName: 'PREVIOUS_ADDRESS',
            typeInfo: '.PERSONALBASEAPPLICANT.PREVIOUSADDRESS'
          }, {
            name: 'mailingaddress',
            elementName: 'MAILING_ADDRESS',
            typeInfo: '.PERSONALBASEAPPLICANT.MAILINGADDRESS'
          }, {
            name: 'financialinfo',
            required: true,
            elementName: 'FINANCIAL_INFO',
            typeInfo: '.PERSONALBASEAPPLICANT.FINANCIALINFO'
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
            name: 'declarations',
            elementName: 'DECLARATIONS',
            typeInfo: '.DECLARATIONS'
          }, {
            name: 'paperGrade',
            attributeName: {
              localPart: 'paper_grade'
            },
            type: 'attribute'
          }]
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
        localName: 'PERSONALBASEAPPLICANT.FINANCIALINFO',
        typeName: null,
        propertyInfos: [{
            name: 'currentemployment',
            minOccurs: 0,
            collection: true,
            elementName: 'CURRENT_EMPLOYMENT',
            typeInfo: '.PERSONALBASEAPPLICANT.FINANCIALINFO.CURRENTEMPLOYMENT'
          }, {
            name: 'previousemployment',
            minOccurs: 0,
            collection: true,
            elementName: 'PREVIOUS_EMPLOYMENT',
            typeInfo: '.PERSONALBASEAPPLICANT.FINANCIALINFO.PREVIOUSEMPLOYMENT'
          }, {
            name: 'monthlyincome',
            required: true,
            elementName: 'MONTHLY_INCOME',
            typeInfo: '.BASEMONTHLYINCOME'
          }, {
            name: 'monthlydebt',
            required: true,
            elementName: 'MONTHLY_DEBT',
            typeInfo: '.BASEMONTHLYDEBT'
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
        elementName: 'PERSONAL_LOAN',
        typeInfo: '.PERSONALLOAN'
      }]
  };
  return {
    personal_loan: personal_loan
  };
};
if (typeof define === 'function' && define.amd) {
  define([], personal_loan_Module_Factory);
}
else {
  var personal_loan_Module = personal_loan_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.personal_loan = personal_loan_Module.personal_loan;
  }
  else {
    var personal_loan = personal_loan_Module.personal_loan;
  }
}