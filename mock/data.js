const mockData = [
  {
    policyNumber: "C000685",
    getpolicy: {
      "code": "271",
      "data": {
        "actuarialValue": null,
        "annualPremium": 0,
        "code": "512",
        "partnerName": "First Name 748235 Name 639654",
        "policyNumber": "C000685",
        "investedPremiumsTotal": 228913.2105759,
        "productName": "ARS",
        "archivalDate": null,
        "currency": "EUR",
        "termDate": "2160-02-18",
        "effectiveDate": "2010-02-19",
        "surrenderValue": null,
        "taxFramework": {
          "identifier": "RegimeGeneral",
          "code": "180366",
          "label": "RegimeGeneral"
        },
        "paymentPeriodicity": {
          "identifier": "ANN",
          "code": "180073",
          "label": "Annuel"
        },
        "paymentMode": {
          "identifier": "CHEQUE",
          "code": "180367",
          "label": "Chèque"
        },
        "holder": {
          "identifier": "0003379663",
          "code": "302",
          "thirdPartyType": "PHYSICAL_PERSON",
          "name": "First Name 390779 Name 864012",
          "nationalIdentifier": null,
          "physicalPersonShortDesc": {
            "firstName": "First Name 390779",
            "code": "302",
            "birthDate": "1964-06-02"
          }
        },
        "policyStatus": {
          "identifier": "FORCE",
          "code": "179981",
          "label": "En vigueur"
        },
        "premiumType": {
          "identifier": "UNIQUEPREM",
          "code": "180099",
          "label": "Prime unique"
        },
        "taxCountry": {
          "identifier": "F",
          "code": "180181",
          "label": "France"
        },
        "productType": {
          "identifier": "INVESTMENT",
          "code": "180097",
          "label": "Investissement"
        }
      }
    },
    coverages: {
      "code": "61",
      "data": [{
        "capital": 0,
        "code": "88",
        "endDate": "2160-02-18",
        "currency": "EUR",
        "label": "Garantie complémentaire ARS",
        "startDate": "2010-02-19",
        "insuredPersons": [{
          "name": "First Name 390779 Name 864012",
          "identifier": "0003379663",
          "code": "88"
        }]
      }, {
        "capital": 0,
        "code": "87",
        "endDate": "2160-02-18",
        "currency": "EUR",
        "label": "Garantie décès",
        "startDate": "2010-02-19",
        "insuredPersons": [{
          "name": "First Name 390779 Name 864012",
          "identifier": "0003379663",
          "code": "88"
        }, {
          "name": "First Name 390779 Name 864012",
          "identifier": "0003379663",
          "code": "87"
        }]
      }]
    },
    beneficiaryclauses:
    {
      "code": "82",
      "data": [{
        "cessionClauseCount": 0,
        "beneficiaryClauseCount": 1,
        "code": "103",
        "beneficiaryClauses": [{
          "beneficiaryCount": 0,
          "reference": "ENF",
          "identifier": "0000000003",
          "isCession": false,
          "isAccepting": false,
          "code": "107",
          "description": "Exclusivement mes enfants...",
          "isIrravocable": false,
          "text": null,
          "clauseLevel": 1,
          "beneficiaryClauseType": "AUTO_BEN"
        }],
        "riskType": {
          "identifier": "DEATH_ALL_CAUSES",
          "code": "180580",
          "label": "Décès (toutes causes)"
        }
      }]
    },
    authorizable: {
      "code" : "2",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "2",
        "proposedCalculationDate" : "2024-04-29",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : true,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "WITHDRAWAL",
          "code" : "8694072",
          "label" : "Retrait"
        },
        "endorsementSubType" : {
          "identifier" : "GLOBAL_PROPORTIONAL_AMOUNT",
          "code" : "8694073",
          "label" : "Amount across all Fund/Financial Instrument Holdings"
        }
      },
      "report" : {
        "code" : "2"
      }
    },
    customfields: {
      "code": "61",
      "data": [{
        "identifier": "clauseIna",
        "code": "302",
        "editable": true,
        "label": "Clause d'inaliénabilité",
        "customFieldValue": "Pas de clause d'inaliénabilité",
        "mandatory": false,
        "customFieldType": "STRING_LOV_TYPE",
        "customFieldsPossibleValues": [{
          "code": "722",
          "id": "18",
          "label": "18 ans"
        }, {
          "code": "721",
          "id": "19",
          "label": "19 ans"
        }, {
          "code": "723",
          "id": "20",
          "label": "20 ans"
        }, {
          "code": "724",
          "id": "21",
          "label": "21 ans"
        }, {
          "code": "725",
          "id": "22",
          "label": "22 ans"
        }, {
          "code": "726",
          "id": "23",
          "label": "23 ans"
        }, {
          "code": "727",
          "id": "24",
          "label": "24 ans"
        }, {
          "code": "728",
          "id": "25",
          "label": "25 ans"
        }, {
          "code": "729",
          "id": "NO_CLAUSE",
          "label": "Pas de clause d'inaliénabilité"
        }]
      }, {
        "identifier": "epargneHandicap",
        "code": "301",
        "editable": true,
        "label": "Epargne handicap",
        "customFieldValue": "false",
        "mandatory": false,
        "customFieldType": "BOOLEAN"
      }, {
        "identifier": "ruptureEVie",
        "code": "303",
        "editable": true,
        "label": "Cas de rupture Extranet Vie",
        "customFieldValue": null,
        "mandatory": false,
        "customFieldType": "STRING"
      }, {
        "identifier": "modeSortie",
        "code": "304",
        "editable": true,
        "label": "Modalité de sortie",
        "customFieldValue": null,
        "mandatory": false,
        "customFieldType": "STRING_LOV_TYPE",
        "customFieldsPossibleValues": [{
          "code": "731",
          "id": "Cap",
          "label": "Capital"
        }, {
          "code": "730",
          "id": "Mix",
          "label": "Mixte"
        }, {
          "code": "732",
          "id": "Rent",
          "label": "Rente"
        }]
      }, {
        "identifier": "RUDEV",
        "code": "305",
        "editable": true,
        "label": "RUDEV",
        "customFieldValue": null,
        "mandatory": false,
        "customFieldType": "STRING"
      }]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement: {
      "code": "273",
      "data": {
        "code": "514",
        "investment": {
          "code": "145",
          "strategyLabel": "Stratégie Libre",
          "strategyIdentifier": "ARS_LIBRE",
          "strategyType": "Customer Driven",
          "investmentParameters": [{
            "identifier": "beginDate",
            "code": "866",
            "editable": true,
            "genericParameterValue": "2010-02-19",
            "label": null,
            "mandatory": true,
            "advance": false,
            "genericParameterType": "DATE"
          }, {
            "identifier": "duration",
            "code": "865",
            "editable": true,
            "genericParameterValue": "1800",
            "label": null,
            "mandatory": true,
            "advance": false,
            "genericParameterType": "INTEGER"
          }, {
            "identifier": "durationUnit",
            "code": "867",
            "editable": true,
            "genericParameterValue": "MONTHS",
            "label": null,
            "mandatory": true,
            "advance": false,
            "genericParameterType": "DP"
          }, {
            "identifier": "paymentDuration",
            "code": "868",
            "editable": true,
            "genericParameterValue": "1",
            "label": null,
            "mandatory": false,
            "advance": false,
            "genericParameterType": "INTEGER"
          }, {
            "identifier": "paymentPeriodicity",
            "code": "869",
            "editable": true,
            "genericParameterValue": "ANN",
            "label": null,
            "mandatory": false,
            "advance": false,
            "genericParameterType": "PERIODICITY"
          }, {
            "identifier": "premiumType",
            "code": "870",
            "editable": true,
            "genericParameterValue": "UNIQUEPREM",
            "label": null,
            "mandatory": true,
            "advance": false,
            "genericParameterType": "PT"
          }],
          "investmentSituation": {
            "valuationDate": "2024-03-15",
            "currency": "EUR",
            "code": "145",
            "globalValuation": 73757.0205759,
            "assetAllocations": [{
              "split": 1.0,
              "code": "286",
              "units": 73309.8305759,
              "valuation": {
                "currency": "EUR",
                "valuationAmount": 73757.02,
                "code": "1192"
              },
              "financialInstrument": {
                "identifier": "EURO_ARS",
                "code": "165",
                "latestNavDate": "2024-03-15",
                "label": "Compartiment Euro",
                "financialInstrumentType": "GUARANTEED_RATE",
                "isinCode": null,
                "latestNav": {
                  "navValue": 1.0,
                  "code": "165"
                }
              }
            }]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
  {
    policyNumber: "C003034",
    getpolicy: {
      "code" : "50",
      "data" : {
        "actuarialValue" : null,
        "annualPremium" : 0,
        "code" : "478",
        "partnerName" : "First Name 754480 Name 574431",
        "policyNumber" : "C003034",
        "investedPremiumsTotal" : 7000.0,
        "productName" : "ARS",
        "currency" : "EUR",
        "termDate" : "2160-06-10",
        "effectiveDate" : "2010-06-11",
        "surrenderValue" : null,
        "taxFramework" : {
          "identifier" : "RegimeGeneral",
          "code" : "145486",
          "label" : "RegimeGeneral"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "145193",
          "label" : "Annuel"
        },
        "paymentMode" : {
          "identifier" : "DIRECT_DEBIT",
          "code" : "145487",
          "label" : "Direct debit"
        },
        "holder" : {
          "identifier" : "0003392524",
          "code" : "448",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "First Name 370631 Name 547395",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "First Name 370631",
            "code" : "442",
            "birthDate" : "1963-04-23"
          }
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "145039",
          "label" : "En vigueur"
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "145219",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "F",
          "code" : "145301",
          "label" : "France"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "145217",
          "label" : "Investissement"
        }
      }
    },
    coverages: {
      "code" : "12",
      "data" : [ {
        "capital" : 0,
        "code" : "22",
        "endDate" : "2160-06-10",
        "currency" : "EUR",
        "label" : "Garantie complémentaire ARS",
        "startDate" : "2010-06-11",
        "insuredPersons" : [ {
          "name" : "First Name 370631 Name 547395",
          "identifier" : "0003392524",
          "code" : "22"
        } ]
      }, {
        "capital" : 0,
        "code" : "21",
        "endDate" : "2160-06-10",
        "currency" : "EUR",
        "label" : "Garantie décès",
        "startDate" : "2010-06-11",
        "insuredPersons" : [ {
          "name" : "First Name 370631 Name 547395",
          "identifier" : "0003392524",
          "code" : "22"
        }, {
          "name" : "First Name 370631 Name 547395",
          "identifier" : "0003392524",
          "code" : "21"
        } ]
      } ]
    },
    beneficiaryclauses:
    {
      "code" : "12",
      "data" : [ {
        "cessionClauseCount" : 0,
        "beneficiaryClauseCount" : 1,
        "code" : "12",
        "beneficiaryClauses" : [ {
          "beneficiaryCount" : 0,
          "reference" : "MAN_C003034",
          "identifier" : "0002950245",
          "isCession" : false,
          "isAccepting" : false,
          "code" : "12",
          "description" : null,
          "isIrravocable" : false,
          "text" : "text de la clause",
          "clauseLevel" : 1,
          "beneficiaryClauseType" : "MANUAL_BEN"
        } ],
        "riskType" : {
          "identifier" : "DEATH_ALL_CAUSES",
          "code" : "145501",
          "label" : "Décès (toutes causes)"
        }
      } ]
    },
    authorizable: {
      "code" : "2",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "2",
        "proposedCalculationDate" : "2024-05-10",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : true,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "WITHDRAWAL",
          "code" : "211689",
          "label" : "Rachat Partiel"
        },
        "endorsementSubType" : {
          "identifier" : "GLOBAL_PROPORTIONAL_AMOUNT",
          "code" : "211690",
          "label" : "Montant proportionnel"
        }
      },
      "report" : {
        "code" : "8"
      }
    },
    customfields: {
      "code" : "12",
      "data" : [ {
        "identifier" : "clauseIna",
        "code" : "57",
        "editable" : true,
        "label" : "Clause d'inaliénabilité",
        "customFieldValue" : "Pas de clause d'inaliénabilité",
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "134",
          "id" : "18",
          "label" : "18 ans"
        }, {
          "code" : "133",
          "id" : "19",
          "label" : "19 ans"
        }, {
          "code" : "135",
          "id" : "20",
          "label" : "20 ans"
        }, {
          "code" : "136",
          "id" : "21",
          "label" : "21 ans"
        }, {
          "code" : "137",
          "id" : "22",
          "label" : "22 ans"
        }, {
          "code" : "138",
          "id" : "23",
          "label" : "23 ans"
        }, {
          "code" : "139",
          "id" : "24",
          "label" : "24 ans"
        }, {
          "code" : "140",
          "id" : "25",
          "label" : "25 ans"
        }, {
          "code" : "141",
          "id" : "NO_CLAUSE",
          "label" : "Pas de clause d'inaliénabilité"
        } ]
      }, {
        "identifier" : "epargneHandicap",
        "code" : "56",
        "editable" : true,
        "label" : "Epargne handicap",
        "customFieldValue" : "false",
        "mandatory" : false,
        "customFieldType" : "BOOLEAN"
      }, {
        "identifier" : "ruptureEVie",
        "code" : "58",
        "editable" : true,
        "label" : "Cas de rupture Extranet Vie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "modeSortie",
        "code" : "59",
        "editable" : true,
        "label" : "Modalité de sortie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "143",
          "id" : "Cap",
          "label" : "Capital"
        }, {
          "code" : "142",
          "id" : "Mix",
          "label" : "Mixte"
        }, {
          "code" : "144",
          "id" : "Rent",
          "label" : "Rente"
        } ]
      }, {
        "identifier" : "RUDEV",
        "code" : "60",
        "editable" : true,
        "label" : "RUDEV",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      } ]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement: {
      "code" : "53",
      "data" : {
        "code" : "481",
        "investment" : {
          "code" : "25",
          "strategyLabel" : "Projet de Vie Prudent",
          "strategyIdentifier" : "PROJET_VIE_PRUDENT",
          "strategyType" : "Gestion Pilotée",
          "investmentParameters" : [ {
            "identifier" : "beginDate",
            "code" : "487",
            "editable" : true,
            "genericParameterValue" : "2010-06-11",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DATE"
          }, {
            "identifier" : "duration",
            "code" : "486",
            "editable" : true,
            "genericParameterValue" : "1800",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "durationUnit",
            "code" : "488",
            "editable" : true,
            "genericParameterValue" : "MONTHS",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DP"
          }, {
            "identifier" : "paymentDuration",
            "code" : "489",
            "editable" : true,
            "genericParameterValue" : "1",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "paymentPeriodicity",
            "code" : "490",
            "editable" : true,
            "genericParameterValue" : "ANN",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "PERIODICITY"
          }, {
            "identifier" : "premiumType",
            "code" : "491",
            "editable" : true,
            "genericParameterValue" : "UNIQUEPREM",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "PT"
          } ],
          "investmentSituation" : {
            "valuationDate" : "2024-05-10",
            "currency" : "EUR",
            "code" : "25",
            "globalValuation" : 20559.063293020,
            "assetAllocations" : [ {
              "split" : 0.0027,
              "code" : "790",
              "units" : 0.555486,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 55.55,
                "code" : "486"
              },
              "financialInstrument" : {
                "identifier" : "ISOL01",
                "code" : "307",
                "latestNavDate" : "2024-04-11",
                "label" : "Insertion Emplois Dynamique",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010702084",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "422"
                }
              }
            }, {
              "split" : 4.0E-4,
              "code" : "789",
              "units" : 0.08783,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 8.78,
                "code" : "487"
              },
              "financialInstrument" : {
                "identifier" : "IDIV09",
                "code" : "308",
                "latestNavDate" : "2024-04-11",
                "label" : "Echiquier Arty SRI",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010611293",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "423"
                }
              }
            }, {
              "split" : 0.0041,
              "code" : "791",
              "units" : 0.83723,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 83.72,
                "code" : "488"
              },
              "financialInstrument" : {
                "identifier" : "IDIV06",
                "code" : "309",
                "latestNavDate" : "2024-04-11",
                "label" : "Sextant France Engagement",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0013529252",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "424"
                }
              }
            }, {
              "split" : 0.0064,
              "code" : "792",
              "units" : 1.31164,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 131.16,
                "code" : "489"
              },
              "financialInstrument" : {
                "identifier" : "ITHE02",
                "code" : "310",
                "latestNavDate" : "2024-04-12",
                "label" : "MAIF Rendement Vert",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0013511870",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "425"
                }
              }
            }, {
              "split" : 0.0087,
              "code" : "793",
              "units" : 1.78419,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 178.42,
                "code" : "490"
              },
              "financialInstrument" : {
                "identifier" : "IDIV07",
                "code" : "311",
                "latestNavDate" : "2024-04-11",
                "label" : "Sycomore Sustainable Tech",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU2331773858",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "426"
                }
              }
            }, {
              "split" : 0.9428,
              "code" : "794",
              "units" : 19341.529493,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 19383.73,
                "code" : "491"
              },
              "financialInstrument" : {
                "identifier" : "EURO_ARS",
                "code" : "312",
                "latestNavDate" : "2024-05-10",
                "label" : "Compartiment Euro",
                "financialInstrumentType" : "GUARANTEED_RATE",
                "isinCode" : null,
                "latestNav" : {
                  "navValue" : 1.0,
                  "code" : "427"
                }
              }
            }, {
              "split" : 0.0066,
              "code" : "795",
              "units" : 1.35093,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 135.09,
                "code" : "492"
              },
              "financialInstrument" : {
                "identifier" : "IMMO04",
                "code" : "313",
                "latestNavDate" : "2024-04-12",
                "label" : "PERIAL Euro Carbone",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0014002MX7",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "428"
                }
              }
            }, {
              "split" : 0.002,
              "code" : "796",
              "units" : 0.41546,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 41.55,
                "code" : "493"
              },
              "financialInstrument" : {
                "identifier" : "MES",
                "code" : "314",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Impact Social",
                "financialInstrumentType" : "FFUND",
                "isinCode" : "FR0000435455",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "429"
                }
              }
            }, {
              "split" : 0.0145,
              "code" : "797",
              "units" : 2.978659,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 297.87,
                "code" : "494"
              },
              "financialInstrument" : {
                "identifier" : "IBIC02",
                "code" : "315",
                "latestNavDate" : "2024-04-11",
                "label" : "Triodos Global Equities Impact Fund",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU0278271951",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "430"
                }
              }
            }, {
              "split" : 0.0,
              "code" : "798",
              "units" : 2.0E-10,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 0.0,
                "code" : "495"
              },
              "financialInstrument" : {
                "identifier" : "IDIV08",
                "code" : "316",
                "latestNavDate" : "2024-03-20",
                "label" : "NN Patrimonial Balanced European Sustainable",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU1444115874",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "431"
                }
              }
            }, {
              "split" : 0.0025,
              "code" : "799",
              "units" : 0.515433,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 51.54,
                "code" : "496"
              },
              "financialInstrument" : {
                "identifier" : "IBIC01",
                "code" : "317",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Actions Climat",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010703355",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "432"
                }
              }
            }, {
              "split" : 0.0093,
              "code" : "800",
              "units" : 1.91648,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 191.65,
                "code" : "497"
              },
              "financialInstrument" : {
                "identifier" : "IDIV04",
                "code" : "318",
                "latestNavDate" : "2024-04-11",
                "label" : "Choix Solidaire",
                "financialInstrumentType" : "EQUALT",
                "isinCode" : "FR0010177899",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "433"
                }
              }
            } ]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
  {
    policyNumber: "C000767",
    getpolicy: {
      "code" : "55",
      "data" : {
        "actuarialValue" : null,
        "annualPremium" : 0,
        "code" : "584",
        "partnerName" : "First Name 754480 Name 574431",
        "policyNumber" : "C000767",
        "investedPremiumsTotal" : 590.58579693,
        "productName" : "ARS",
        "currency" : "EUR",
        "termDate" : "2160-03-04",
        "effectiveDate" : "2010-03-05",
        "surrenderValue" : null,
        "taxFramework" : {
          "identifier" : "RegimeGeneral",
          "code" : "175939",
          "label" : "RegimeGeneral"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "175646",
          "label" : "Annuel"
        },
        "paymentMode" : {
          "identifier" : "CHEQUE",
          "code" : "175940",
          "label" : "Chèque"
        },
        "holder" : {
          "identifier" : "0003227798",
          "code" : "550",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "First Name 193889 Name 366514",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "First Name 193889",
            "code" : "544",
            "birthDate" : "1968-04-03"
          }
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "175492",
          "label" : "En vigueur"
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "175672",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "F",
          "code" : "175754",
          "label" : "France"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "175670",
          "label" : "Investissement"
        }
      }
    },
    coverages: {
      "code" : "13",
      "data" : [ {
        "capital" : 0,
        "code" : "24",
        "endDate" : "2160-03-04",
        "currency" : "EUR",
        "label" : "Garantie complémentaire ARS",
        "startDate" : "2010-03-05",
        "insuredPersons" : [ {
          "name" : "First Name 193889 Name 366514",
          "identifier" : "0003227798",
          "code" : "24"
        } ]
      }, {
        "capital" : 0,
        "code" : "23",
        "endDate" : "2160-03-04",
        "currency" : "EUR",
        "label" : "Garantie décès",
        "startDate" : "2010-03-05",
        "insuredPersons" : [ {
          "name" : "First Name 193889 Name 366514",
          "identifier" : "0003227798",
          "code" : "24"
        }, {
          "name" : "First Name 193889 Name 366514",
          "identifier" : "0003227798",
          "code" : "23"
        } ]
      } ]
    },
    beneficiaryclauses:
    {
      "code" : "13",
      "data" : [ {
        "cessionClauseCount" : 0,
        "beneficiaryClauseCount" : 1,
        "code" : "13",
        "beneficiaryClauses" : [ {
          "beneficiaryCount" : 0,
          "reference" : "CJT",
          "identifier" : "0000000000",
          "isCession" : false,
          "isAccepting" : false,
          "code" : "13",
          "description" : "Mon conjoint...",
          "isIrravocable" : false,
          "text" : null,
          "clauseLevel" : 1,
          "beneficiaryClauseType" : "AUTO_BEN"
        } ],
        "riskType" : {
          "identifier" : "DEATH_ALL_CAUSES",
          "code" : "175954",
          "label" : "Décès (toutes causes)"
        }
      } ]
    },
    authorizable: {
      "code" : "3",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "3",
        "proposedCalculationDate" : "2024-05-10",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : true,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "WITHDRAWAL",
          "code" : "214226",
          "label" : "Rachat Partiel"
        },
        "endorsementSubType" : {
          "identifier" : "GLOBAL_PROPORTIONAL_AMOUNT",
          "code" : "214227",
          "label" : "Montant proportionnel"
        }
      },
      "report" : {
        "code" : "9"
      }
    },
    customfields: {
      "code" : "13",
      "data" : [ {
        "identifier" : "clauseIna",
        "code" : "62",
        "editable" : true,
        "label" : "Clause d'inaliénabilité",
        "customFieldValue" : "Pas de clause d'inaliénabilité",
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "146",
          "id" : "18",
          "label" : "18 ans"
        }, {
          "code" : "145",
          "id" : "19",
          "label" : "19 ans"
        }, {
          "code" : "147",
          "id" : "20",
          "label" : "20 ans"
        }, {
          "code" : "148",
          "id" : "21",
          "label" : "21 ans"
        }, {
          "code" : "149",
          "id" : "22",
          "label" : "22 ans"
        }, {
          "code" : "150",
          "id" : "23",
          "label" : "23 ans"
        }, {
          "code" : "151",
          "id" : "24",
          "label" : "24 ans"
        }, {
          "code" : "152",
          "id" : "25",
          "label" : "25 ans"
        }, {
          "code" : "153",
          "id" : "NO_CLAUSE",
          "label" : "Pas de clause d'inaliénabilité"
        } ]
      }, {
        "identifier" : "epargneHandicap",
        "code" : "61",
        "editable" : true,
        "label" : "Epargne handicap",
        "customFieldValue" : "false",
        "mandatory" : false,
        "customFieldType" : "BOOLEAN"
      }, {
        "identifier" : "ruptureEVie",
        "code" : "63",
        "editable" : true,
        "label" : "Cas de rupture Extranet Vie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "modeSortie",
        "code" : "64",
        "editable" : true,
        "label" : "Modalité de sortie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "155",
          "id" : "Cap",
          "label" : "Capital"
        }, {
          "code" : "154",
          "id" : "Mix",
          "label" : "Mixte"
        }, {
          "code" : "156",
          "id" : "Rent",
          "label" : "Rente"
        } ]
      }, {
        "identifier" : "RUDEV",
        "code" : "65",
        "editable" : true,
        "label" : "RUDEV",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      } ]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement: {
      "code" : "57",
      "data" : {
        "code" : "586",
        "investment" : {
          "code" : "27",
          "strategyLabel" : "Projet de Vie Equilibré",
          "strategyIdentifier" : "PROJET_VIE_EQUILIBRE",
          "strategyType" : "Gestion Pilotée",
          "investmentParameters" : [ {
            "identifier" : "beginDate",
            "code" : "499",
            "editable" : true,
            "genericParameterValue" : "2010-03-05",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DATE"
          }, {
            "identifier" : "duration",
            "code" : "498",
            "editable" : true,
            "genericParameterValue" : "1800",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "durationUnit",
            "code" : "500",
            "editable" : true,
            "genericParameterValue" : "MONTHS",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DP"
          }, {
            "identifier" : "paymentDuration",
            "code" : "501",
            "editable" : true,
            "genericParameterValue" : "1",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "paymentPeriodicity",
            "code" : "502",
            "editable" : true,
            "genericParameterValue" : "ANN",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "PERIODICITY"
          }, {
            "identifier" : "premiumType",
            "code" : "503",
            "editable" : true,
            "genericParameterValue" : "UNIQUEPREM",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "PT"
          } ],
          "investmentSituation" : {
            "valuationDate" : "2024-05-10",
            "currency" : "EUR",
            "code" : "27",
            "globalValuation" : 639.55830413,
            "assetAllocations" : [ {
              "split" : 0.0243,
              "code" : "958",
              "units" : 0.15544,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 15.54,
                "code" : "577"
              },
              "financialInstrument" : {
                "identifier" : "IMMO04",
                "code" : "342",
                "latestNavDate" : "2024-04-12",
                "label" : "PERIAL Euro Carbone",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0014002MX7",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "446"
                }
              }
            }, {
              "split" : 0.0538,
              "code" : "957",
              "units" : 0.343807,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 34.38,
                "code" : "578"
              },
              "financialInstrument" : {
                "identifier" : "IBIC02",
                "code" : "343",
                "latestNavDate" : "2024-04-11",
                "label" : "Triodos Global Equities Impact Fund",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU0278271951",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "447"
                }
              }
            }, {
              "split" : 0.788,
              "code" : "959",
              "units" : 502.86020413,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 503.96,
                "code" : "579"
              },
              "financialInstrument" : {
                "identifier" : "EURO_ARS",
                "code" : "344",
                "latestNavDate" : "2024-05-10",
                "label" : "Compartiment Euro",
                "financialInstrumentType" : "GUARANTEED_RATE",
                "isinCode" : null,
                "latestNav" : {
                  "navValue" : 1.0,
                  "code" : "448"
                }
              }
            }, {
              "split" : 0.0093,
              "code" : "960",
              "units" : 0.059477,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 5.95,
                "code" : "580"
              },
              "financialInstrument" : {
                "identifier" : "IBIC01",
                "code" : "345",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Actions Climat",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010703355",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "449"
                }
              }
            }, {
              "split" : 0.0236,
              "code" : "961",
              "units" : 0.15118,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 15.12,
                "code" : "581"
              },
              "financialInstrument" : {
                "identifier" : "ITHE02",
                "code" : "346",
                "latestNavDate" : "2024-04-12",
                "label" : "MAIF Rendement Vert",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0013511870",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "450"
                }
              }
            }, {
              "split" : 0.0075,
              "code" : "962",
              "units" : 0.04791,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 4.79,
                "code" : "582"
              },
              "financialInstrument" : {
                "identifier" : "MES",
                "code" : "347",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Impact Social",
                "financialInstrumentType" : "FFUND",
                "isinCode" : "FR0000435455",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "451"
                }
              }
            }, {
              "split" : 0.0016,
              "code" : "963",
              "units" : 0.01008,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 1.01,
                "code" : "583"
              },
              "financialInstrument" : {
                "identifier" : "IDIV09",
                "code" : "348",
                "latestNavDate" : "2024-04-11",
                "label" : "Echiquier Arty SRI",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010611293",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "452"
                }
              }
            }, {
              "split" : 0.01,
              "code" : "964",
              "units" : 0.063987,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 6.4,
                "code" : "584"
              },
              "financialInstrument" : {
                "identifier" : "ISOL01",
                "code" : "349",
                "latestNavDate" : "2024-04-11",
                "label" : "Insertion Emplois Dynamique",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010702084",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "453"
                }
              }
            }, {
              "split" : 0.0323,
              "code" : "965",
              "units" : 0.20684,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 20.68,
                "code" : "585"
              },
              "financialInstrument" : {
                "identifier" : "IDIV07",
                "code" : "350",
                "latestNavDate" : "2024-04-11",
                "label" : "Sycomore Sustainable Tech",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU2331773858",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "454"
                }
              }
            }, {
              "split" : 0.0345,
              "code" : "966",
              "units" : 0.22072,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 22.07,
                "code" : "586"
              },
              "financialInstrument" : {
                "identifier" : "IDIV04",
                "code" : "351",
                "latestNavDate" : "2024-04-11",
                "label" : "Choix Solidaire",
                "financialInstrumentType" : "EQUALT",
                "isinCode" : "FR0010177899",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "455"
                }
              }
            }, {
              "split" : 0.0151,
              "code" : "967",
              "units" : 0.09654,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 9.65,
                "code" : "587"
              },
              "financialInstrument" : {
                "identifier" : "IDIV06",
                "code" : "352",
                "latestNavDate" : "2024-04-11",
                "label" : "Sextant France Engagement",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0013529252",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "456"
                }
              }
            } ]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
  {
    policyNumber: "C002430",
    getpolicy: {
      "code" : "59",
      "data" : {
        "actuarialValue" : null,
        "annualPremium" : 0,
        "code" : "689",
        "partnerName" : "First Name 754480 Name 574431",
        "policyNumber" : "C002430",
        "investedPremiumsTotal" : 2310.0,
        "productName" : "ARS",
        "currency" : "EUR",
        "termDate" : "2160-05-06",
        "effectiveDate" : "2010-05-07",
        "surrenderValue" : null,
        "taxFramework" : {
          "identifier" : "RegimeGeneral",
          "code" : "205984",
          "label" : "RegimeGeneral"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "205691",
          "label" : "Annuel"
        },
        "paymentMode" : {
          "identifier" : "DIRECT_DEBIT",
          "code" : "205985",
          "label" : "Direct debit"
        },
        "holder" : {
          "identifier" : "0003403294",
          "code" : "652",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "First Name 387528 Name 322156",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "First Name 387528",
            "code" : "646",
            "birthDate" : "1981-02-19"
          }
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "205537",
          "label" : "En vigueur"
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "205717",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "F",
          "code" : "205799",
          "label" : "France"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "205715",
          "label" : "Investissement"
        }
      }
    },
    coverages: {
      "code" : "14",
      "data" : [ {
        "capital" : 0,
        "code" : "26",
        "endDate" : "2160-05-06",
        "currency" : "EUR",
        "label" : "Garantie complémentaire ARS",
        "startDate" : "2010-05-07",
        "insuredPersons" : [ {
          "name" : "First Name 387528 Name 322156",
          "identifier" : "0003403294",
          "code" : "26"
        } ]
      }, {
        "capital" : 0,
        "code" : "25",
        "endDate" : "2160-05-06",
        "currency" : "EUR",
        "label" : "Garantie décès",
        "startDate" : "2010-05-07",
        "insuredPersons" : [ {
          "name" : "First Name 387528 Name 322156",
          "identifier" : "0003403294",
          "code" : "26"
        }, {
          "name" : "First Name 387528 Name 322156",
          "identifier" : "0003403294",
          "code" : "25"
        } ]
      } ]
    },
    beneficiaryclauses:
    {
      "code" : "14",
      "data" : [ {
        "cessionClauseCount" : 0,
        "beneficiaryClauseCount" : 1,
        "code" : "14",
        "beneficiaryClauses" : [ {
          "beneficiaryCount" : 0,
          "reference" : "MAN_C002430",
          "identifier" : "0002940172",
          "isCession" : false,
          "isAccepting" : false,
          "code" : "14",
          "description" : null,
          "isIrravocable" : false,
          "text" : "text de la clause",
          "clauseLevel" : 1,
          "beneficiaryClauseType" : "MANUAL_BEN"
        } ],
        "riskType" : {
          "identifier" : "DEATH_ALL_CAUSES",
          "code" : "206234",
          "label" : "Décès (toutes causes)"
        }
      } ]
    },
    authorizable: {
      "code" : "2",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "2",
        "proposedCalculationDate" : "2024-05-10",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : true,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "WITHDRAWAL",
          "code" : "211689",
          "label" : "Rachat Partiel"
        },
        "endorsementSubType" : {
          "identifier" : "GLOBAL_PROPORTIONAL_AMOUNT",
          "code" : "211690",
          "label" : "Montant proportionnel"
        }
      },
      "report" : {
        "code" : "8"
      }
    },
    customfields: {
      "code" : "14",
      "data" : [ {
        "identifier" : "clauseIna",
        "code" : "67",
        "editable" : true,
        "label" : "Clause d'inaliénabilité",
        "customFieldValue" : "Pas de clause d'inaliénabilité",
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "158",
          "id" : "18",
          "label" : "18 ans"
        }, {
          "code" : "157",
          "id" : "19",
          "label" : "19 ans"
        }, {
          "code" : "159",
          "id" : "20",
          "label" : "20 ans"
        }, {
          "code" : "160",
          "id" : "21",
          "label" : "21 ans"
        }, {
          "code" : "161",
          "id" : "22",
          "label" : "22 ans"
        }, {
          "code" : "162",
          "id" : "23",
          "label" : "23 ans"
        }, {
          "code" : "163",
          "id" : "24",
          "label" : "24 ans"
        }, {
          "code" : "164",
          "id" : "25",
          "label" : "25 ans"
        }, {
          "code" : "165",
          "id" : "NO_CLAUSE",
          "label" : "Pas de clause d'inaliénabilité"
        } ]
      }, {
        "identifier" : "epargneHandicap",
        "code" : "66",
        "editable" : true,
        "label" : "Epargne handicap",
        "customFieldValue" : "false",
        "mandatory" : false,
        "customFieldType" : "BOOLEAN"
      }, {
        "identifier" : "ruptureEVie",
        "code" : "68",
        "editable" : true,
        "label" : "Cas de rupture Extranet Vie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "modeSortie",
        "code" : "69",
        "editable" : true,
        "label" : "Modalité de sortie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "167",
          "id" : "Cap",
          "label" : "Capital"
        }, {
          "code" : "166",
          "id" : "Mix",
          "label" : "Mixte"
        }, {
          "code" : "168",
          "id" : "Rent",
          "label" : "Rente"
        } ]
      }, {
        "identifier" : "RUDEV",
        "code" : "70",
        "editable" : true,
        "label" : "RUDEV",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      } ]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement: {
      "code" : "61",
      "data" : {
        "code" : "691",
        "investment" : {
          "code" : "29",
          "strategyLabel" : "Projet de Vie Prudent",
          "strategyIdentifier" : "PROJET_VIE_PRUDENT",
          "strategyType" : "Gestion Pilotée",
          "investmentParameters" : [ {
            "identifier" : "beginDate",
            "code" : "511",
            "editable" : true,
            "genericParameterValue" : "2010-05-07",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DATE"
          }, {
            "identifier" : "duration",
            "code" : "510",
            "editable" : true,
            "genericParameterValue" : "1800",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "durationUnit",
            "code" : "512",
            "editable" : true,
            "genericParameterValue" : "MONTHS",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DP"
          }, {
            "identifier" : "paymentDuration",
            "code" : "513",
            "editable" : true,
            "genericParameterValue" : "1",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "paymentPeriodicity",
            "code" : "514",
            "editable" : true,
            "genericParameterValue" : "ANN",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "PERIODICITY"
          }, {
            "identifier" : "premiumType",
            "code" : "515",
            "editable" : true,
            "genericParameterValue" : "UNIQUEPREM",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "PT"
          } ],
          "investmentSituation" : {
            "valuationDate" : "2024-05-10",
            "currency" : "EUR",
            "code" : "29",
            "globalValuation" : 4503.42414,
            "assetAllocations" : [ {
              "split" : 0.8672,
              "code" : "1101",
              "units" : 3897.12624,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 3905.48,
                "code" : "609"
              },
              "financialInstrument" : {
                "identifier" : "EURO_ARS",
                "code" : "375",
                "latestNavDate" : "2024-05-10",
                "label" : "Compartiment Euro",
                "financialInstrumentType" : "GUARANTEED_RATE",
                "isinCode" : null,
                "latestNav" : {
                  "navValue" : 1.0,
                  "code" : "468"
                }
              }
            }, {
              "split" : 0.0058,
              "code" : "1100",
              "units" : 0.262543,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 26.25,
                "code" : "610"
              },
              "financialInstrument" : {
                "identifier" : "IBIC01",
                "code" : "376",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Actions Climat",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010703355",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "469"
                }
              }
            }, {
              "split" : 0.0148,
              "code" : "1102",
              "units" : 0.66821,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 66.82,
                "code" : "611"
              },
              "financialInstrument" : {
                "identifier" : "ITHE02",
                "code" : "377",
                "latestNavDate" : "2024-04-12",
                "label" : "MAIF Rendement Vert",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0013511870",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "470"
                }
              }
            }, {
              "split" : 0.0153,
              "code" : "1103",
              "units" : 0.68779,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 68.78,
                "code" : "612"
              },
              "financialInstrument" : {
                "identifier" : "IMMO04",
                "code" : "378",
                "latestNavDate" : "2024-04-12",
                "label" : "PERIAL Euro Carbone",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0014002MX7",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "471"
                }
              }
            }, {
              "split" : 0.0217,
              "code" : "1104",
              "units" : 0.97727,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 97.73,
                "code" : "613"
              },
              "financialInstrument" : {
                "identifier" : "IDIV04",
                "code" : "379",
                "latestNavDate" : "2024-04-11",
                "label" : "Choix Solidaire",
                "financialInstrumentType" : "EQUALT",
                "isinCode" : "FR0010177899",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "472"
                }
              }
            }, {
              "split" : 0.001,
              "code" : "1105",
              "units" : 0.04481,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 4.48,
                "code" : "614"
              },
              "financialInstrument" : {
                "identifier" : "IDIV09",
                "code" : "380",
                "latestNavDate" : "2024-04-11",
                "label" : "Echiquier Arty SRI",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010611293",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "473"
                }
              }
            }, {
              "split" : 0.02,
              "code" : "1106",
              "units" : 0.902,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 90.2,
                "code" : "615"
              },
              "financialInstrument" : {
                "identifier" : "IDIV07",
                "code" : "381",
                "latestNavDate" : "2024-04-11",
                "label" : "Sycomore Sustainable Tech",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU2331773858",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "474"
                }
              }
            }, {
              "split" : 0.0047,
              "code" : "1107",
              "units" : 0.21177,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 21.18,
                "code" : "616"
              },
              "financialInstrument" : {
                "identifier" : "MES",
                "code" : "382",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Impact Social",
                "financialInstrumentType" : "FFUND",
                "isinCode" : "FR0000435455",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "475"
                }
              }
            }, {
              "split" : 0.0063,
              "code" : "1108",
              "units" : 0.283175,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 28.32,
                "code" : "617"
              },
              "financialInstrument" : {
                "identifier" : "ISOL01",
                "code" : "383",
                "latestNavDate" : "2024-04-11",
                "label" : "Insertion Emplois Dynamique",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010702084",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "476"
                }
              }
            }, {
              "split" : 0.0336,
              "code" : "1109",
              "units" : 1.513651,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 151.37,
                "code" : "618"
              },
              "financialInstrument" : {
                "identifier" : "IBIC02",
                "code" : "384",
                "latestNavDate" : "2024-04-11",
                "label" : "Triodos Global Equities Impact Fund",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU0278271951",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "477"
                }
              }
            }, {
              "split" : 0.0096,
              "code" : "1110",
              "units" : 0.42826,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 42.83,
                "code" : "619"
              },
              "financialInstrument" : {
                "identifier" : "IDIV06",
                "code" : "385",
                "latestNavDate" : "2024-04-11",
                "label" : "Sextant France Engagement",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0013529252",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "478"
                }
              }
            } ]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
  {
    policyNumber: "C006110",
    getpolicy: {
      "code" : "80",
      "data" : {
        "actuarialValue" : null,
        "annualPremium" : 0,
        "code" : "816",
        "partnerName" : "First Name 754480 Name 574431",
        "policyNumber" : "C006110",
        "investedPremiumsTotal" : 7200.0,
        "productName" : "ARS",
        "currency" : "EUR",
        "termDate" : "2160-12-02",
        "effectiveDate" : "2010-12-03",
        "surrenderValue" : null,
        "taxFramework" : {
          "identifier" : "RegimeGeneral",
          "code" : "245829",
          "label" : "RegimeGeneral"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "245536",
          "label" : "Annuel"
        },
        "paymentMode" : {
          "identifier" : "DIRECT_DEBIT",
          "code" : "245830",
          "label" : "Direct debit"
        },
        "holder" : {
          "identifier" : "0003312889",
          "code" : "765",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "First Name 266454 Name 713760",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "First Name 266454",
            "code" : "759",
            "birthDate" : "1974-01-14"
          }
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "245382",
          "label" : "En vigueur"
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "245562",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "F",
          "code" : "245644",
          "label" : "France"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "245560",
          "label" : "Investissement"
        }
      }
    },
    coverages: {
      "code" : "19",
      "data" : [ {
        "capital" : 0,
        "code" : "36",
        "endDate" : "2160-12-02",
        "currency" : "EUR",
        "label" : "Garantie complémentaire ARS",
        "startDate" : "2010-12-03",
        "insuredPersons" : [ {
          "name" : "First Name 266454 Name 713760",
          "identifier" : "0003312889",
          "code" : "36"
        } ]
      }, {
        "capital" : 0,
        "code" : "35",
        "endDate" : "2160-12-02",
        "currency" : "EUR",
        "label" : "Garantie décès",
        "startDate" : "2010-12-03",
        "insuredPersons" : [ {
          "name" : "First Name 266454 Name 713760",
          "identifier" : "0003312889",
          "code" : "36"
        }, {
          "name" : "First Name 266454 Name 713760",
          "identifier" : "0003312889",
          "code" : "35"
        } ]
      } ]
    },
    beneficiaryclauses:
    {
      "code" : "19",
      "data" : [ {
        "cessionClauseCount" : 0,
        "beneficiaryClauseCount" : 1,
        "code" : "19",
        "beneficiaryClauses" : [ {
          "beneficiaryCount" : 0,
          "reference" : "CJT",
          "identifier" : "0000000000",
          "isCession" : false,
          "isAccepting" : false,
          "code" : "19",
          "description" : "Mon conjoint...",
          "isIrravocable" : false,
          "text" : null,
          "clauseLevel" : 1,
          "beneficiaryClauseType" : "AUTO_BEN"
        } ],
        "riskType" : {
          "identifier" : "DEATH_ALL_CAUSES",
          "code" : "245844",
          "label" : "Décès (toutes causes)"
        }
      } ]
    },
    authorizable: {
      "code" : "5",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "5",
        "proposedCalculationDate" : "2024-05-10",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : false,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "SINGLE_PREMIUM_TOP_UP",
          "code" : "249528",
          "label" : "Versement Libre"
        },
        "endorsementSubType" : {
          "identifier" : "NA",
          "code" : "249529",
          "label" : "Non disponible"
        }
      },
      "report" : {
        "code" : "11"
      }
    },
    customfields: {
      "code" : "19",
      "data" : [ {
        "identifier" : "clauseIna",
        "code" : "92",
        "editable" : true,
        "label" : "Clause d'inaliénabilité",
        "customFieldValue" : "Pas de clause d'inaliénabilité",
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "218",
          "id" : "18",
          "label" : "18 ans"
        }, {
          "code" : "217",
          "id" : "19",
          "label" : "19 ans"
        }, {
          "code" : "219",
          "id" : "20",
          "label" : "20 ans"
        }, {
          "code" : "220",
          "id" : "21",
          "label" : "21 ans"
        }, {
          "code" : "221",
          "id" : "22",
          "label" : "22 ans"
        }, {
          "code" : "222",
          "id" : "23",
          "label" : "23 ans"
        }, {
          "code" : "223",
          "id" : "24",
          "label" : "24 ans"
        }, {
          "code" : "224",
          "id" : "25",
          "label" : "25 ans"
        }, {
          "code" : "225",
          "id" : "NO_CLAUSE",
          "label" : "Pas de clause d'inaliénabilité"
        } ]
      }, {
        "identifier" : "epargneHandicap",
        "code" : "91",
        "editable" : true,
        "label" : "Epargne handicap",
        "customFieldValue" : "false",
        "mandatory" : false,
        "customFieldType" : "BOOLEAN"
      }, {
        "identifier" : "ruptureEVie",
        "code" : "93",
        "editable" : true,
        "label" : "Cas de rupture Extranet Vie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "modeSortie",
        "code" : "94",
        "editable" : true,
        "label" : "Modalité de sortie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "227",
          "id" : "Cap",
          "label" : "Capital"
        }, {
          "code" : "226",
          "id" : "Mix",
          "label" : "Mixte"
        }, {
          "code" : "228",
          "id" : "Rent",
          "label" : "Rente"
        } ]
      }, {
        "identifier" : "RUDEV",
        "code" : "95",
        "editable" : true,
        "label" : "RUDEV",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      } ]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement:{
      "code" : "82",
      "data" : {
        "code" : "818",
        "investment" : {
          "code" : "40",
          "strategyLabel" : "Projet de Vie Equilibré",
          "strategyIdentifier" : "PROJET_VIE_EQUILIBRE",
          "strategyType" : "Gestion Pilotée",
          "investmentParameters" : [ {
            "identifier" : "beginDate",
            "code" : "579",
            "editable" : true,
            "genericParameterValue" : "2010-12-03",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DATE"
          }, {
            "identifier" : "duration",
            "code" : "578",
            "editable" : true,
            "genericParameterValue" : "1800",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "durationUnit",
            "code" : "580",
            "editable" : true,
            "genericParameterValue" : "MONTHS",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DP"
          }, {
            "identifier" : "paymentDuration",
            "code" : "581",
            "editable" : true,
            "genericParameterValue" : "1",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "paymentPeriodicity",
            "code" : "582",
            "editable" : true,
            "genericParameterValue" : "ANN",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "PERIODICITY"
          }, {
            "identifier" : "premiumType",
            "code" : "583",
            "editable" : true,
            "genericParameterValue" : "UNIQUEPREM",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "PT"
          } ],
          "investmentSituation" : {
            "valuationDate" : "2024-05-10",
            "currency" : "EUR",
            "code" : "40",
            "globalValuation" : 16792.820974,
            "assetAllocations" : [ {
              "split" : 0.0837,
              "code" : "1852",
              "units" : 14.048829,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 1404.88,
                "code" : "1029"
              },
              "financialInstrument" : {
                "identifier" : "IBIC02",
                "code" : "553",
                "latestNavDate" : "2024-04-11",
                "label" : "Triodos Global Equities Impact Fund",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU0278271951",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "614"
                }
              }
            }, {
              "split" : 0.0539,
              "code" : "1851",
              "units" : 9.05469,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 905.47,
                "code" : "1030"
              },
              "financialInstrument" : {
                "identifier" : "IDIV04",
                "code" : "554",
                "latestNavDate" : "2024-04-11",
                "label" : "Choix Solidaire",
                "financialInstrumentType" : "EQUALT",
                "isinCode" : "FR0010177899",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "615"
                }
              }
            }, {
              "split" : 0.0117,
              "code" : "1853",
              "units" : 1.96267,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 196.27,
                "code" : "1031"
              },
              "financialInstrument" : {
                "identifier" : "MES",
                "code" : "555",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Impact Social",
                "financialInstrumentType" : "FFUND",
                "isinCode" : "FR0000435455",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "616"
                }
              }
            }, {
              "split" : 0.0369,
              "code" : "1854",
              "units" : 6.19628,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 619.63,
                "code" : "1032"
              },
              "financialInstrument" : {
                "identifier" : "ITHE02",
                "code" : "556",
                "latestNavDate" : "2024-04-12",
                "label" : "MAIF Rendement Vert",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0013511870",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "617"
                }
              }
            }, {
              "split" : 0.0235,
              "code" : "1855",
              "units" : 3.9547,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 395.47,
                "code" : "1033"
              },
              "financialInstrument" : {
                "identifier" : "IDIV06",
                "code" : "557",
                "latestNavDate" : "2024-04-11",
                "label" : "Sextant France Engagement",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0013529252",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "618"
                }
              }
            }, {
              "split" : 0.05,
              "code" : "1856",
              "units" : 8.4,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 840.0,
                "code" : "1034"
              },
              "financialInstrument" : {
                "identifier" : "IDIV07",
                "code" : "558",
                "latestNavDate" : "2024-04-11",
                "label" : "Sycomore Sustainable Tech",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU2331773858",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "619"
                }
              }
            }, {
              "split" : 0.6697,
              "code" : "1857",
              "units" : 11221.732374,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 11246.21,
                "code" : "1035"
              },
              "financialInstrument" : {
                "identifier" : "EURO_ARS",
                "code" : "559",
                "latestNavDate" : "2024-05-10",
                "label" : "Compartiment Euro",
                "financialInstrumentType" : "GUARANTEED_RATE",
                "isinCode" : null,
                "latestNav" : {
                  "navValue" : 1.0,
                  "code" : "620"
                }
              }
            }, {
              "split" : 0.038,
              "code" : "1858",
              "units" : 6.37435,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 637.43,
                "code" : "1036"
              },
              "financialInstrument" : {
                "identifier" : "IMMO04",
                "code" : "560",
                "latestNavDate" : "2024-04-12",
                "label" : "PERIAL Euro Carbone",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0014002MX7",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "621"
                }
              }
            }, {
              "split" : 0.0156,
              "code" : "1859",
              "units" : 2.624474,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 262.45,
                "code" : "1037"
              },
              "financialInstrument" : {
                "identifier" : "ISOL01",
                "code" : "561",
                "latestNavDate" : "2024-04-11",
                "label" : "Insertion Emplois Dynamique",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010702084",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "622"
                }
              }
            }, {
              "split" : 0.0145,
              "code" : "1860",
              "units" : 2.435073,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 243.51,
                "code" : "1038"
              },
              "financialInstrument" : {
                "identifier" : "IBIC01",
                "code" : "562",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Actions Climat",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010703355",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "623"
                }
              }
            }, {
              "split" : 0.0025,
              "code" : "1861",
              "units" : 0.41502,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 41.5,
                "code" : "1039"
              },
              "financialInstrument" : {
                "identifier" : "IDIV09",
                "code" : "563",
                "latestNavDate" : "2024-04-11",
                "label" : "Echiquier Arty SRI",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010611293",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "624"
                }
              }
            } ]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
  
  {
    policyNumber: "C117584",
    getpolicy: {
      "code" : "89",
      "data" : {
        "actuarialValue" : null,
        "annualPremium" : 0,
        "code" : "928",
        "partnerName" : "First Name 754480 Name 574431",
        "policyNumber" : "C117584",
        "investedPremiumsTotal" : 4200.0,
        "productName" : "ARS",
        "currency" : "EUR",
        "termDate" : "2167-07-06",
        "effectiveDate" : "2017-07-07",
        "surrenderValue" : null,
        "taxFramework" : {
          "identifier" : "RegimeGeneral",
          "code" : "279064",
          "label" : "RegimeGeneral"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "278771",
          "label" : "Annuel"
        },
        "paymentMode" : {
          "identifier" : "DIRECT_DEBIT",
          "code" : "279065",
          "label" : "Direct debit"
        },
        "holder" : {
          "identifier" : "0003720562",
          "code" : "872",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "First Name 686206 Name 432486",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "First Name 686206",
            "code" : "866",
            "birthDate" : "1972-09-10"
          }
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "278617",
          "label" : "En vigueur"
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "278797",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "F",
          "code" : "278879",
          "label" : "France"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "278795",
          "label" : "Investissement"
        }
      }
    },
    coverages: {
      "code" : "21",
      "data" : [ {
        "capital" : 0,
        "code" : "40",
        "endDate" : "2167-07-06",
        "currency" : "EUR",
        "label" : "Garantie complémentaire ARS",
        "startDate" : "2017-07-07",
        "insuredPersons" : [ {
          "name" : "First Name 686206 Name 432486",
          "identifier" : "0003720562",
          "code" : "40"
        } ]
      }, {
        "capital" : 0,
        "code" : "39",
        "endDate" : "2167-07-06",
        "currency" : "EUR",
        "label" : "Garantie décès",
        "startDate" : "2017-07-07",
        "insuredPersons" : [ {
          "name" : "First Name 686206 Name 432486",
          "identifier" : "0003720562",
          "code" : "40"
        }, {
          "name" : "First Name 686206 Name 432486",
          "identifier" : "0003720562",
          "code" : "39"
        } ]
      } ]
    },
    beneficiaryclauses:
    {
      "code" : "21",
      "data" : [ {
        "cessionClauseCount" : 0,
        "beneficiaryClauseCount" : 1,
        "code" : "21",
        "beneficiaryClauses" : [ {
          "beneficiaryCount" : 0,
          "reference" : "MAN_C117584",
          "identifier" : "0002965137",
          "isCession" : false,
          "isAccepting" : false,
          "code" : "21",
          "description" : null,
          "isIrravocable" : false,
          "text" : "text de la clause",
          "clauseLevel" : 1,
          "beneficiaryClauseType" : "MANUAL_BEN"
        } ],
        "riskType" : {
          "identifier" : "DEATH_ALL_CAUSES",
          "code" : "279314",
          "label" : "Décès (toutes causes)"
        }
      } ]
    },
    authorizable: {
      "code" : "6",
      "data" : {
        "updatableEndorsementDate" : false,
        "requestAllowed" : true,
        "code" : "6",
        "proposedCalculationDate" : "2024-05-10",
        "proposedEndorsementDate" : null,
        "simulationAllowed" : true,
        "retroactive" : false,
        "possible" : false,
        "endorsementType" : {
          "identifier" : "WITHDRAWAL",
          "code" : "280571",
          "label" : "Rachat Partiel"
        },
        "endorsementSubType" : {
          "identifier" : "GLOBAL_PROPORTIONAL_AMOUNT",
          "code" : "280572",
          "label" : "Montant proportionnel"
        }
      },
      "report" : {
        "code" : "12"
      }
    },
    customfields: {
      "code" : "21",
      "data" : [ {
        "identifier" : "clauseIna",
        "code" : "102",
        "editable" : true,
        "label" : "Clause d'inaliénabilité",
        "customFieldValue" : "Pas de clause d'inaliénabilité",
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "242",
          "id" : "18",
          "label" : "18 ans"
        }, {
          "code" : "241",
          "id" : "19",
          "label" : "19 ans"
        }, {
          "code" : "243",
          "id" : "20",
          "label" : "20 ans"
        }, {
          "code" : "244",
          "id" : "21",
          "label" : "21 ans"
        }, {
          "code" : "245",
          "id" : "22",
          "label" : "22 ans"
        }, {
          "code" : "246",
          "id" : "23",
          "label" : "23 ans"
        }, {
          "code" : "247",
          "id" : "24",
          "label" : "24 ans"
        }, {
          "code" : "248",
          "id" : "25",
          "label" : "25 ans"
        }, {
          "code" : "249",
          "id" : "NO_CLAUSE",
          "label" : "Pas de clause d'inaliénabilité"
        } ]
      }, {
        "identifier" : "epargneHandicap",
        "code" : "101",
        "editable" : true,
        "label" : "Epargne handicap",
        "customFieldValue" : "false",
        "mandatory" : false,
        "customFieldType" : "BOOLEAN"
      }, {
        "identifier" : "RUDEV",
        "code" : "103",
        "editable" : true,
        "label" : "RUDEV",
        "customFieldValue" : "1701114416",
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "ruptureEVie",
        "code" : "104",
        "editable" : true,
        "label" : "Cas de rupture Extranet Vie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING"
      }, {
        "identifier" : "modeSortie",
        "code" : "105",
        "editable" : true,
        "label" : "Modalité de sortie",
        "customFieldValue" : null,
        "mandatory" : false,
        "customFieldType" : "STRING_LOV_TYPE",
        "customFieldsPossibleValues" : [ {
          "code" : "251",
          "id" : "Cap",
          "label" : "Capital"
        }, {
          "code" : "250",
          "id" : "Mix",
          "label" : "Mixte"
        }, {
          "code" : "252",
          "id" : "Rent",
          "label" : "Rente"
        } ]
      } ]
    },
    PolicySummary:
    {
      "code" : "68",
      "data" : {
        "annualPremium" : 0,
        "actuarialValue" : null,
        "code" : "16059",
        "policyNumber" : "2206-006300",
        "displayCustomFields" : false,
        "productName" : "EPARGNE PLUS",
        "displaySituationReport" : false,
        "archivalDate" : null,
        "currency" : "EUR",
        "partnerName" : "PRINCIPAL BROKER 2",
        "investedPremiumsTotal" : 10000.0,
        "displayStrategyType" : false,
        "displayDocuments" : false,
        "termDate" : "2171-12-31",
        "surrenderValue" : null,
        "effectiveDate" : "2022-01-01",
        "taxFramework" : {
          "identifier" : "TAX_TEST_RACHAT",
          "code" : "8416591",
          "label" : "TAX_TEST_RACHAT"
        },
        "paymentPeriodicity" : {
          "identifier" : "ANN",
          "code" : "8416300",
          "label" : "Annuel"
        },
        "policyStatus" : {
          "identifier" : "FORCE",
          "code" : "8416189",
          "label" : "En vigueur"
        },
        "productType" : {
          "identifier" : "INVESTMENT",
          "code" : "8416324",
          "label" : "Investissement"
        },
        "paymentMode" : {
          "identifier" : "CASH",
          "code" : "8416592",
          "label" : "Comptant"
        },
        "holder" : {
          "identifier" : "0003046669",
          "code" : "16944",
          "thirdPartyType" : "PHYSICAL_PERSON",
          "name" : "Musk Paul",
          "nationalIdentifier" : null,
          "physicalPersonShortDesc" : {
            "firstName" : "Paul",
            "code" : "12432",
            "birthDate" : "1978-05-02"
          }
        },
        "premiumType" : {
          "identifier" : "UNIQUEPREM",
          "code" : "8416326",
          "label" : "Prime unique"
        },
        "taxCountry" : {
          "identifier" : "FR",
          "code" : "8416404",
          "label" : "France"
        }
      }
    },
    investement:{
      "code" : "91",
      "data" : {
        "code" : "930",
        "investment" : {
          "code" : "45",
          "strategyLabel" : "Projet de Vie Prudent",
          "strategyIdentifier" : "PROJET_VIE_PRUDENT",
          "strategyType" : "Gestion Pilotée",
          "investmentParameters" : [ {
            "identifier" : "beginDate",
            "code" : "629",
            "editable" : true,
            "genericParameterValue" : "2017-07-07",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DATE"
          }, {
            "identifier" : "duration",
            "code" : "628",
            "editable" : true,
            "genericParameterValue" : "1800",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "durationUnit",
            "code" : "630",
            "editable" : true,
            "genericParameterValue" : "MONTHS",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "DP"
          }, {
            "identifier" : "paymentDuration",
            "code" : "631",
            "editable" : true,
            "genericParameterValue" : "1",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "INTEGER"
          }, {
            "identifier" : "paymentPeriodicity",
            "code" : "632",
            "editable" : true,
            "genericParameterValue" : "ANN",
            "label" : null,
            "mandatory" : false,
            "advance" : false,
            "genericParameterType" : "PERIODICITY"
          }, {
            "identifier" : "premiumType",
            "code" : "633",
            "editable" : true,
            "genericParameterValue" : "UNIQUEPREM",
            "label" : null,
            "mandatory" : true,
            "advance" : false,
            "genericParameterType" : "PT"
          } ],
          "investmentSituation" : {
            "valuationDate" : "2024-05-10",
            "currency" : "EUR",
            "code" : "45",
            "globalValuation" : 4497.426866050,
            "assetAllocations" : [ {
              "split" : 0.0012,
              "code" : "2149",
              "units" : 0.05341,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 5.34,
                "code" : "1297"
              },
              "financialInstrument" : {
                "identifier" : "IDIV09",
                "code" : "630",
                "latestNavDate" : "2024-04-11",
                "label" : "Echiquier Arty SRI",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010611293",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "713"
                }
              }
            }, {
              "split" : 0.0056,
              "code" : "2148",
              "units" : 0.25159,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 25.16,
                "code" : "1298"
              },
              "financialInstrument" : {
                "identifier" : "MES",
                "code" : "631",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Impact Social",
                "financialInstrumentType" : "FFUND",
                "isinCode" : "FR0000435455",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "714"
                }
              }
            }, {
              "split" : 0.8417,
              "code" : "2150",
              "units" : 3777.19,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 3785.53,
                "code" : "1299"
              },
              "financialInstrument" : {
                "identifier" : "EURO_ARS",
                "code" : "632",
                "latestNavDate" : "2024-05-10",
                "label" : "Compartiment Euro",
                "financialInstrumentType" : "GUARANTEED_RATE",
                "isinCode" : null,
                "latestNav" : {
                  "navValue" : 1.0,
                  "code" : "715"
                }
              }
            }, {
              "split" : 0.0075,
              "code" : "2151",
              "units" : 0.3390332719,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 33.9,
                "code" : "1300"
              },
              "financialInstrument" : {
                "identifier" : "ISOL01",
                "code" : "633",
                "latestNavDate" : "2024-04-11",
                "label" : "Insertion Emplois Dynamique",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010702084",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "716"
                }
              }
            }, {
              "split" : 0.0234,
              "code" : "2152",
              "units" : 1.05105,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 105.11,
                "code" : "1301"
              },
              "financialInstrument" : {
                "identifier" : "IDIV07",
                "code" : "634",
                "latestNavDate" : "2024-04-11",
                "label" : "Sycomore Sustainable Tech",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU2331773858",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "717"
                }
              }
            }, {
              "split" : 0.0069,
              "code" : "2153",
              "units" : 0.3120823883,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 31.21,
                "code" : "1302"
              },
              "financialInstrument" : {
                "identifier" : "IBIC01",
                "code" : "635",
                "latestNavDate" : "2024-04-11",
                "label" : "MAIF Actions Climat",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0010703355",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "718"
                }
              }
            }, {
              "split" : 0.0116,
              "code" : "2154",
              "units" : 0.52041,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 52.04,
                "code" : "1303"
              },
              "financialInstrument" : {
                "identifier" : "IDIV06",
                "code" : "636",
                "latestNavDate" : "2024-04-11",
                "label" : "Sextant France Engagement",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "FR0013529252",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "719"
                }
              }
            }, {
              "split" : 0.0177,
              "code" : "2155",
              "units" : 0.79522,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 79.52,
                "code" : "1304"
              },
              "financialInstrument" : {
                "identifier" : "ITHE02",
                "code" : "637",
                "latestNavDate" : "2024-04-12",
                "label" : "MAIF Rendement Vert",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0013511870",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "720"
                }
              }
            }, {
              "split" : 0.04,
              "code" : "2156",
              "units" : 1.799173,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 179.92,
                "code" : "1305"
              },
              "financialInstrument" : {
                "identifier" : "IBIC02",
                "code" : "638",
                "latestNavDate" : "2024-04-11",
                "label" : "Triodos Global Equities Impact Fund",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU0278271951",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "721"
                }
              }
            }, {
              "split" : 0.0,
              "code" : "2157",
              "units" : 3.0E-10,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 0.0,
                "code" : "1306"
              },
              "financialInstrument" : {
                "identifier" : "IDIV08",
                "code" : "639",
                "latestNavDate" : "2024-03-20",
                "label" : "NN Patrimonial Balanced European Sustainable",
                "financialInstrumentType" : "EQUITY",
                "isinCode" : "LU1444115874",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "722"
                }
              }
            }, {
              "split" : 0.0259,
              "code" : "2158",
              "units" : 1.167,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 116.7,
                "code" : "1307"
              },
              "financialInstrument" : {
                "identifier" : "IDIV04",
                "code" : "640",
                "latestNavDate" : "2024-04-11",
                "label" : "Choix Solidaire",
                "financialInstrumentType" : "EQUALT",
                "isinCode" : "FR0010177899",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "723"
                }
              }
            }, {
              "split" : 0.0185,
              "code" : "2159",
              "units" : 0.83,
              "valuation" : {
                "currency" : "EUR",
                "valuationAmount" : 83.0,
                "code" : "1308"
              },
              "financialInstrument" : {
                "identifier" : "IMMO04",
                "code" : "641",
                "latestNavDate" : "2024-04-12",
                "label" : "PERIAL Euro Carbone",
                "financialInstrumentType" : "OTHER",
                "isinCode" : "FR0014002MX7",
                "latestNav" : {
                  "navValue" : 100.0,
                  "code" : "724"
                }
              }
            } ]
          }
        }
      }
    },
    documents: {
      "code": "59",
      "data": [{
        "code": "37",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "36",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }, {
        "code": "38",
        "url": "NOT AVAILABLE",
        "documentType": {
          "identifier": "D1CONT",
          "code": "180420",
          "label": "Document à la demande"
        }
      }]
    },
    avenants: [] // Initialiser comme un tableau vide
  },
];

module.exports = mockData;
