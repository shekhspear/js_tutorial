let assert = require("assert")
let Phrase = require("../index.js")

describe("Phrase", function(){
    describe("#palindrome", function(){
        it("should return false for a non-palindrome",function(){
            let nonPalindrome = new Phrase("apple")
            assert (!nonPalindrome.palindrome())
        })
        
        it("should return true for a plain palindrome",function(){
            let plainPalindrom = new Phrase("nitin")
            assert (plainPalindrom.palindrome())
        })

        it("should return ture for a mixed-case palindrome",function(){
            let mixedPalindrom = new Phrase("RaceCar")
            assert(mixedPalindrom.palindrome())
        })

        

        it ("should return true for a palindrome with punctuation",function(){
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.")
            assert(punctuatedPalindrome.palindrome())
        })
        
        
    })
    describe("#letters",function(){
        it("should return only letters",function(){
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.")
            assert.strictEqual(punctuatedPalindrome.letters(),"MadamImAdam")
            // assert.strictEqual(punctuatedPalindrome.letters()==="MadamImAdam")
        })
    })
})