const assert = require ( "assert" )
const Player = require ( "../player.js" )
 const Card = require('../card.js')

describe('Player', function(){
  let player;
  let card;
  let card2;

  beforeEach(function(){
      player = new Player();
      card = new Card("Superman", 6, 9, 7);
      card2 = new Card("Scarlet Witch", 7, 10, 5);
  });

it('can count hand', function(){
    assert.deepStrictEqual(player.hand.length, 0);
});

it('can add card', function(){
    player.hand.unshift(card);
    assert.deepStrictEqual(player.hand.length, 1);
})

it('can remove card', function(){
    player.hand.unshift(card);
    player.hand.shift(card);
    assert.deepStrictEqual(player.hand.length, 0);
})

it ( "can add two cards", function () {
    player.hand.unshift(card);
    player.hand.unshift(card2);
    assert.deepStrictEqual(player.hand.length, 2);
})

it ( "can select card category", function () {
    player.hand.unshift(card);
    assert.deepStrictEqual(card.intelligence, 6)
})





});
