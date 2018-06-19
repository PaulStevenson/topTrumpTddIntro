const assert = require ( "assert" )
const Player = require ( "../player.js" )
 const Card = require('../card.js')

describe('Player', function(){
  let player;
  let card;

  beforeEach(function(){
      player = new Player();
      card = new Card("Superman", 6, 9, 7);
  });

it('can count hand', function(){
    assert.deepStrictEqual(player.hand.length, 0);
});

it('can add card', function(){
    player.hand.unshift(card);
    assert.deepStrictEqual(player.hand.length, 1);
})





});
