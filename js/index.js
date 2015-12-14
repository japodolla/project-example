var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {

    $scope.weights = {
        numBraches: 0,
        branchLocDistribution: 0,
        onlineBankings: 0,
        atmFees: 0,
        checkingFees: 0,
        savingsFees: 0,
        overdraft: 0,
        overdraftLimit: 0,
        creditCards: 0,
        creditCardFees: 0,
        loanOriginationMarketShare: 0,
        loanAcceptNy: 0,
        loanAcceptLatino: 0,
        loanAcceptBlack: 0,
        loanAcceptLowIncome: 0,
        percentLowBorrowers: 0,
        loanAcceptLowComm: 0,
        percentCommColor: 0,
        acceptAltId: 0,
        wireTransferCost: 0
    };

    $scope.calculateTotal = function () {
        $scope.total = 0;
        for (var weight in $scope.weights) {
            $scope.total += parseInt($scope.weights[weight]);
        }
        return $scope.total;
    };

    var bankInfo = [{
        bankName: 'bankOfAmerica',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 2,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 1,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 1,
            percentCommColor: 2,
            acceptAltId: 2,
            wireTransferCost: 4
        }
  }, {
        bankName: 'hsbc',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 4,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 2,
            savingsFees: 5,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 1,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 1,
            loanAcceptLatino: 1,
            loanAcceptBlack: 1,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 1,
            percentCommColor: 2,
            acceptAltId: 3,
            wireTransferCost: 5
        }
  }, {
        bankName: 'santander',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 3,
            onlineBankings: 1,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 3,
            overdraft: 2,
            overdraftLimit: 4,
            creditCards: 3,
            creditCardFees: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 4,
            percentCommColor: 2,
            acceptAltId: 2,
            wireTransferCost: 4
        }
  }, {
        bankName: 'jpMorganChase',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 3,
            overdraftLimit: 5,
            creditCards: 3,
            creditCardFees: 2,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 3,
            loanAcceptLatino: 3,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 3,
            acceptAltId: 3,
            wireTransferCost: 4
        }
  }, {
        bankName: 'citibank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 4,
            onlineBankings: 5,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 2,
            overdraft: 4,
            overdraftLimit: 4,
            creditCards: 4,
            creditCardFees: 4,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 4,
            loanAcceptLatino: 3,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 3,
            acceptAltId: 2,
            wireTransferCost: 4
        }
  }, {
        bankName: 'capitalOne',
        bankRatings: {
            numBraches: 5,
            branchLocDistribution: 3,
            onlineBankings: 5,
            atmFees: 5,
            checkingFees: 4,
            savingsFees: 5,
            overdraft: 4,
            overdraftLimit: 5,
            creditCards: 1,
            creditCardFees: 4,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 1,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 2,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 2,
            percentCommColor: 3,
            acceptAltId: 1,
            wireTransferCost: 4
        }
  }, {
        bankName: 'keyBank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 3,
            onlineBankings: 4,
            atmFees: 2,
            checkingFees: 5,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 1,
            creditCards: 5,
            creditCardFees: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 2,
            loanAcceptLatino: 3,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 2,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 2,
            percentCommColor: 1,
            acceptAltId: 1,
            wireTransferCost: 4
        }
  }, {
        bankName: 'mt',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 2,
            onlineBankings: 2,
            atmFees: 1,
            checkingFees: 4,
            savingsFees: 1,
            overdraft: 3,
            overdraftLimit: 2,
            creditCards: 5,
            creditCardFees: 4,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 5,
            loanAcceptLatino: 5,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 5,
            percentCommColor: 1,
            acceptAltId: 1,
            wireTransferCost: 1
        }
  }, {
        bankName: 'tdBank',
        bankRatings: {
            numBraches: 4,
            branchLocDistribution: 2,
            onlineBankings: 3,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 3,
            creditCards: 4,
            creditCardFees: 4,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 2,
            loanAcceptLatino: 2,
            loanAcceptBlack: 2,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 2,
            percentCommColor: 2,
            acceptAltId: 2,
            wireTransferCost: 4
        }
  }, {
        bankName: 'firstNiagra',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 4,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 2,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 5,
            loanOriginationMarketShare: 4,
            loanAcceptNy: 5,
            loanAcceptLatino: 5,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 5,
            loanAcceptLowComm: 5,
            percentCommColor: 1,
            acceptAltId: 4,
            wireTransferCost: 4
        }
  }, {
        bankName: 'communityBank',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 1,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 2,
            savingsFees: 5,
            overdraft: 2,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 2,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 5,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers:5,
            loanAcceptLowComm: 5,
            percentCommColor: 1,
            acceptAltId: 2,
            wireTransferCost: 2
        }
  }, {
        bankName: 'nyCommunCommer',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 3,
            onlineBankings: 1,
            atmFees: 2,
            checkingFees: 4,
            savingsFees: 3,
            overdraft: 1,
            overdraftLimit: 1,
            creditCards: 1,
            creditCardFees: 1,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 4,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 2,
            acceptAltId: 1,
            wireTransferCost: 3
        }
  }, {
        bankName: 'nbt',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 5,
            atmFees: 5,
            checkingFees: 4,
            savingsFees: 5,
            overdraft: 2,
            overdraftLimit: 2,
            creditCards: 5,
            creditCardFees: 1,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 3,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 3,
            loanAcceptLowComm: 2,
            percentCommColor: 1,
            acceptAltId: 2,
            wireTransferCost: 3
        }
  }, {
        bankName: 'citizensBank',
        bankRatings: {
            numBraches: 3,
            branchLocDistribution: 2,
            onlineBankings: 2,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 1,
            creditCards: 4,
            creditCardFees: 1,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 3,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 3,
            loanAcceptLowComm: 3,
            percentCommColor: 1,
            acceptAltId: 2,
            wireTransferCost: 5
        }
  }, {
        bankName: 'trustCo',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 2,
            savingsFees: 4,
            overdraft: 1,
            overdraftLimit: 4,
            creditCards: 1,
            creditCardFees: 1,
            loanOriginationMarketShare: 3,
            loanAcceptNy: 4,
            loanAcceptLatino: 5,
            loanAcceptBlack: 3,
            loanAcceptLowIncome: 4,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 4,
            percentCommColor: 1,
            acceptAltId: 4,
            wireTransferCost: 4
        }
  }, {
        bankName: 'astoriaBank',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 2,
            onlineBankings: 3,
            atmFees: 3,
            checkingFees: 3,
            savingsFees: 2,
            overdraft: 2,
            overdraftLimit: 4,
            creditCards: 5,
            creditCardFees: 2,
            loanOriginationMarketShare: 2,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 5,
            loanAcceptLowIncome: 5,
            percentLowBorrowers: 3,
            loanAcceptLowComm: 4,
            percentCommColor: 2,
            acceptAltId: 2,
            wireTransferCost: 5
        }
  }, {
        bankName: 'wellsFargo',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 1,
            onlineBankings: 2,
            atmFees: 2,
            checkingFees: 3,
            savingsFees: 1,
            overdraft: 3,
            overdraftLimit: 4,
            creditCards: 1,
            creditCardFees: 1,
            loanOriginationMarketShare: 5,
            loanAcceptNy: 4,
            loanAcceptLatino: 4,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 3,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 3,
            percentCommColor: 2,
            acceptAltId: 2,
            wireTransferCost: 5
        }
  }, {
        bankName: 'appleBank',
        bankRatings: {
            numBraches: 1,
            branchLocDistribution: 5,
            onlineBankings: 1,
            atmFees: 3,
            checkingFees: 3,
            savingsFees: 3,
            overdraft: 1,
            overdraftLimit: 2,
            creditCards: 3,
            creditCardFees: 2,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 2,
            loanAcceptLatino: 2,
            loanAcceptBlack: 4,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 2,
            loanAcceptLowComm: 3,
            percentCommColor: 5,
            acceptAltId: 1,
            wireTransferCost: 4
        }
  }, {
        bankName: 'peoplesUnited',
        bankRatings: {
            numBraches: 2,
            branchLocDistribution: 1,
            onlineBankings: 1,
            atmFees: 1,
            checkingFees: 3,
            savingsFees: 4,
            overdraft: 2,
            overdraftLimit: 3,
            creditCards: 5,
            creditCardFees: 1,
            loanOriginationMarketShare: 1,
            loanAcceptNy: 1,
            loanAcceptLatino: 1,
            loanAcceptBlack: 1,
            loanAcceptLowIncome: 1,
            percentLowBorrowers: 1,
            loanAcceptLowComm: 1,
            percentCommColor: 1,
            acceptAltId: 2,
            wireTransferCost: 4
        }
  }];

    $scope.reset = function () {
        for (var weight in $scope.weights) {
            if ($scope.weights[weight] === "" || isNaN($scope.weights[weight]) || $scope.weights[weight] < 0) {
                $scope.weights[weight] = 0;
            }
        }
    };

    $scope.finalScore = function () {
        $scope.bankOfAmerica = [];
        $scope.hsbc = [];
        $scope.santander = [];
        $scope.jpMorganChase = [];
        $scope.citibank = [];
        $scope.capitalOne = [];
        $scope.keyBank = [];
        $scope.mt = [];
        $scope.tdBank = [];
        $scope.firstNiagra = [];
        $scope.communityBank = [];
        $scope.nyCommunCommer = [];
        $scope.nbt = [];
        $scope.citizensBank = [];
        $scope.trustCo = [];
        $scope.astoriaBank = [];
        $scope.wellsFargo = [];
        $scope.appleBank = [];
        $scope.peoplesUnited = [];

        for (var x = 0; x < bankInfo.length; x++) {
            $scope.score = 0;
            for (var score in bankInfo[x].bankRatings) {
                $scope.current = bankInfo[x].bankName;
                $scope.score = parseInt(bankInfo[x].bankRatings[score] / 5 * $scope.weights[score]);
                $scope[$scope.current].push($scope.score);
            }
            console.log($scope.current + ": " + $scope[$scope.current]);
        }

        $scope.oneScore = function (bank) {
            var total = 0;
            for (var y = 0; y < bank.length; y++) {
                total += parseInt(bank[y]);
            }
            return total;
        };

        /* $scope.allScores = {
            bankOfAmerica: $scope.oneScore($scope.bankOfAmerica),
            hsbc: $scope.oneScore($scope.hsbc),
            santander: $scope.oneScore($scope.santander),
            jpMorganChase: $scope.oneScore($scope.jpMorganChase),
            citibank: $scope.oneScore($scope.citibank),
            capitalOne: $scope.oneScore($scope.capitalOne),
            keyBank: $scope.oneScore($scope.keyBank),
            mt: $scope.oneScore($scope.mt),
            tdBank: $scope.oneScore($scope.tdBank),
            firstNiagra: $scope.oneScore($scope.firstNiagra),
            communityBank: $scope.oneScore($scope.communityBank),
            nyCommunCommer: $scope.oneScore($scope.nyCommunCommer),
            nbt: $scope.oneScore($scope.nbt),
            citizensBank: $scope.oneScore($scope.citizensBank),
            trustCo: $scope.oneScore($scope.trustCo),
            astoriaBank: $scope.oneScore($scope.astoriaBank),
            wellsFargo: $scope.oneScore($scope.wellsFargo),
            appleBank: $scope.oneScore($scope.appleBank),
            peoplesUnited: $scope.oneScore($scope.peoplesUnited)             
        }; */

        $scope.allScores =
           [{ name: 'Bank of America', finalScore: $scope.oneScore($scope.bankOfAmerica) },
            { name: 'HSBC', finalScore: $scope.oneScore($scope.hsbc) },
            { name: 'Santander', finalScore: $scope.oneScore($scope.santander) },
            { name: 'JP Morgan Chase', finalScore: $scope.oneScore($scope.jpMorganChase) },
            { name: 'Citibank', finalScore: $scope.oneScore($scope.citibank) },
            { name: 'Capital One', finalScore: $scope.oneScore($scope.capitalOne) },
            { name: 'KeyBank', finalScore: $scope.oneScore($scope.keyBank) },
            { name: 'M&T', finalScore: $scope.oneScore($scope.mt) },
            { name: 'TD Bank', finalScore: $scope.oneScore($scope.tdBank) },
            { name: 'First Niagra', finalScore: $scope.oneScore($scope.firstNiagra) },
            { name: 'Community Bank', finalScore: $scope.oneScore($scope.communityBank) },
            { name: 'NY Community & Commerce', finalScore: $scope.oneScore($scope.nyCommunCommer) },
            { name: 'NBT', finalScore: $scope.oneScore($scope.nbt) },
            { name: 'Citizens Bank', finalScore: $scope.oneScore($scope.citizensBank) },
            { name: 'TrustCO', finalScore: $scope.oneScore($scope.trustCo) },
            { name: 'Astoria Bank', finalScore: $scope.oneScore($scope.astoriaBank) },
            { name: 'Wells Fargo', finalScore: $scope.oneScore($scope.wellsFargo) },
            { name: 'Apple Bank', finalScore: $scope.oneScore($scope.appleBank) },
            { name: 'Peoples United', finalScore: $scope.oneScore($scope.peoplesUnited) }];
        return $scope.score;
    };

});
