$(document).ready(function() {
    $('#myForm').validator()
    var options = {};
    options.common = {
        minChar: {
            Default: 5
        }
    }
    options.rules = {
        scores: {
            wordNotEmail: -100,
            wordLength: -50,
            wordSimilarToUsername: -100,
            wordSequences: -50,
            wordTwoCharacterClasses: 2,
            wordRepetitions: -25,
            wordLowercase: 1,
            wordUppercase: 3,
            wordOneNumber: 3,
            wordThreeNumbers: 5,
            wordOneSpecialChar: 3,
            wordTwoSpecialChar: 5,
            wordUpperLowerCombo: 2,
            wordLetterNumberCombo: 2,
            wordLetterNumberCharCombo: 2
        },
        activated: {
            wordNotEmail: true,
            wordLength: true,
            wordSimilarToUsername: true,
            wordSequences: true,
            wordTwoCharacterClasses: true,
            wordRepetitions: true,
            wordLowercase: true,
            wordUppercase: true,
            wordOneNumber: true,
            wordThreeNumbers: true,
            wordOneSpecialChar: true,
            wordTwoSpecialChar: true,
            wordUpperLowerCombo: true,
            wordLetterNumberCombo: true,
            wordLetterNumberCharCombo: true
        }
    };
    $(':password').pwstrength(options);

});
