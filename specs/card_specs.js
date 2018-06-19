const assert = require ( "assert" );
const Card = require ( "../card.js" );

describe ("Card", function () {
    let card;

    beforeEach(function () {
        card = new Card ( "Superman", 6, 9, 7)
    });

    it ('should have a name', function(){
        assert.strictEqual(card.name, "Superman")
    })

    it ('should have a intelligence', function(){
        assert.strictEqual(card.intelligence, 6)
    })

    it ('should have a strength', function(){
        assert.strictEqual(card.strength, 9)
    })

    it ('should have a agility', function(){
        assert.strictEqual(card.agility, 7)
    })




});
