const CARDS = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10
};

const SUITS = ['S', 'C', 'D', 'H'];

const CARD_ARRAY = SUITS.reduce((arr, suit) => {
  return arr.concat(Object.keys(CARDS).map(card => suit + card));
}, []);

const STRATEGY = {
  // Uses value (1) to refer to Ace
  BASIC: {
    '9': {
      '2': 'HIT',
      '3': 'DD',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    '10': {
      '2': 'DD',
      '3': 'DD',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'DD',
      '8': 'DD',
      '9': 'DD',
      '10': 'HIT',
      '1': 'HIT'
    },
    '11': {
      '2': 'DD',
      '3': 'DD',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'DD',
      '8': 'DD',
      '9': 'DD',
      '10': 'DD',
      '1': 'HIT'
    },
    '12': {
      '2': 'HIT',
      '3': 'HIT',
      '4': 'STAND',
      '5': 'STAND',
      '6': 'STAND',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    '13': {
      '2': 'STAND',
      '3': 'STAND',
      '4': 'STAND',
      '5': 'STAND',
      '6': 'STAND',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    '14': {
      '2': 'STAND',
      '3': 'STAND',
      '4': 'STAND',
      '5': 'STAND',
      '6': 'STAND',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    '15': {
      '2': 'STAND',
      '3': 'STAND',
      '4': 'STAND',
      '5': 'STAND',
      '6': 'STAND',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'SURRENDER',
      '1': 'HIT'
    },
    '16': {
      '2': 'STAND',
      '3': 'STAND',
      '4': 'STAND',
      '5': 'STAND',
      '6': 'STAND',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'SURRENDER',
      '10': 'SURRENDER',
      '1': 'SURRENDER'
    }
  },
  ACE: {
    // A2
    '3': {
      '2': 'HIT',
      '3': 'HIT',
      '4': 'HIT',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    // A3
    '4': {
      '2': 'HIT',
      '3': 'HIT',
      '4': 'HIT',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    // A4
    '5': {
      '2': 'HIT',
      '3': 'HIT',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    // A5
    '6': {
      '2': 'HIT',
      '3': 'HIT',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    // A6
    '7': {
      '2': 'HIT',
      '3': 'DD',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'HIT',
      '8': 'HIT',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    },
    // A7
    '8': {
      '2': 'STAND',
      '3': 'DD',
      '4': 'DD',
      '5': 'DD',
      '6': 'DD',
      '7': 'STAND',
      '8': 'STAND',
      '9': 'HIT',
      '10': 'HIT',
      '1': 'HIT'
    }
  },
  PAIR: {
    // 22
    '4': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '7': 'SPLIT'
    },
    // 33
    '6': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '7': 'SPLIT'
    },
    // 44
    '8': {
      '5': 'SPLIT',
      '6': 'SPLIT'
    },
    // 66
    '12': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT'
    },
    // 77
    '14': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '7': 'SPLIT'
    },
    // 88
    '16': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '7': 'SPLIT',
      '8': 'SPLIT',
      '9': 'SPLIT',
      '10': 'SPLIT'
    },
    // 99
    '18': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '8': 'SPLIT',
      '9': 'SPLIT'
    },
    // AA
    '2': {
      '2': 'SPLIT',
      '3': 'SPLIT',
      '4': 'SPLIT',
      '5': 'SPLIT',
      '6': 'SPLIT',
      '7': 'SPLIT',
      '8': 'SPLIT',
      '9': 'SPLIT',
      '10': 'SPLIT',
      '1': 'SPLIT'
    }
  }
};

/**
* Stateless Blackjack functionality.
*   To simulate a table session, use new Blackjack.Table()
* @namespace
*/
class Blackjack {

  /**
  * Creates an array of card decks (based on deckCount) and shuffles them
  * @param {string} deckCount Number of decks in shuffle
  * @returns {array}
  */
  static shuffle (deckCount) {

    let deck = CARD_ARRAY.slice();

    while (--deckCount) {
      deck = deck.concat(CARD_ARRAY);
    }

    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;

  }

  /**
  * Determines the sum of a hand in the form of ['SA', 'C6'] (Ace of Spades, Six of Clubs)
  * @param {array} hand The hand of the player
  * @returns {number}
  */
  static handSum (hand) {
    return hand.reduce((sum, card) => {
      // remove suit from handSum
      return sum + CARDS[card.substr(1)];
    }, 0);
  }

  /**
  * Determines if hand is a Blackjack
  * @param {array} hand The hand of the player
  * @returns {boolean}
  */
  static isBlackjack (hand) {
    return this.hasAce(hand) && this.handSum(hand) === 11;
  }

  /**
  * Determines if hand contains an ace
  * @param {array} hand The hand of the player
  * @returns {boolean}
  */
  static hasAce (hand) {
    // SA would be ace of spades, so remove first character
    return hand.filter(card => card.substr(1) === 'A').length > 0;
  }

  /**
  * Determines the optimal move a player should take based on what the dealer
  *  happens to be showing: note that this is non-European play (it's assumed
  *  that dealer has one face-down card)
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @returns {string} = one of ['STAND', 'HIT', 'DD', 'SURRENDER']
  */
  static playerIteration (playerHand, dealerHand) {
    let playerSum = this.handSum(playerHand);
    // console.log(playerSum);
    let dealerShow = CARDS[dealerHand[dealerHand.length - 1].substr(1)]; // Remove suit
    if (this.hasAce(playerHand) && playerSum >= 3 && playerSum <= 8) {
      if (!STRATEGY.ACE[playerSum][dealerShow]) {
        throw new Error(`Cannot find ACE strategy for Player: ${playerSum} vs Dealer: ${dealerShow}`);
      }
      return STRATEGY.ACE[playerSum][dealerShow];
    } else if (this.hasAce(playerHand) && playerSum >= 9 && playerSum <= 11) {
      // Always stand on A8, A9, A10 equivalents
      return 'STAND';
    } else if (playerSum <= 8) {
      // Always hit under 8
      return 'HIT';
    } else if (playerSum >= 17) {
      // Always stand on hard 17 or greater
      return 'STAND';
    } else if (!STRATEGY.BASIC[playerSum][dealerShow]) {
      throw new Error(`Cannot find BASIC strategy for Player: ${playerSum} vs Dealer: ${dealerShow}`);
    } else {
      return STRATEGY.BASIC[playerSum][dealerShow];
    }

  }

  /**
  * Determines the optimal move a dealer should make, independent of other hands
  * @param {array} dealerHand The hand of the player
  * @returns {string} = one of ['STAND', 'HIT']
  */
  static dealerIteration (dealerHand) {
    let dealerSum = this.handSum(dealerHand);
    let hasAce = this.hasAce(dealerHand);
    if (dealerSum >= 17 || (hasAce && dealerSum >= 8 && dealerSum <= 11)) {
      return 'STAND'
    } else {
      return 'HIT';
    }
  }

  /**
  * Automatically simulates a Blackjack hand using player and dealer strategies
  *  from .playerIteration and .dealerIteration functions
  *  NOTE: This function ignores bankroll limitations and will draw from
  *    bankroll into negative in current implementation
  * @param {array} deck The deck of cards to draw from
  * @param {number} bankroll The player's bankroll
  * @param {number} bet The amount being bet
  * @param {number} blackjackPayout The payout when a player gets a blackjack, usually 3/2 or 6/5
  * @param {boolean} allowSurrender Is the player allowed to Surrender
  * @param {number} maxSplit Maximum number of times player is allowed to split, usually 2 - 4
  * @param {boolean} debug Debug mode: enables logging if true
  * @returns {number} -'ve for loss, +'ve for win, 0 for push overall
  */
  static playHand (deck, bankroll, bet, blackjackPayout = 3 / 2, allowSurrender = true, maxSplit = 4, debug = false) {

    if (bet <= 0) {
      throw new Error('Bet must be positive and greater than zero');
    }

    let bets = [bet];

    let hands = this.setupHands(deck);
    let playerHands = [hands.player]
    let dealerHand = hands.dealer;

    debug && console.log('PLAYING HAND...');
    debug && console.log('Dealer', dealerHand);
    debug && console.log('Player', playerHands[0]);

    // Assume dealer checks blackjack first (American)
    if (this.checkBlackjack(playerHands[0], dealerHand)) {
      return this.blackjackResult(playerHands[0], dealerHand, bet, blackjackPayout, debug);
    }

    let handIndex = 0;

    do {

      let playerHand = playerHands[handIndex];
      bets[handIndex] = bet;
      bankroll -= bet;

      // If we split on a previous iteration, add a card
      if (playerHand.length === 1) {
        debug && console.log(`Player receives card on split hand ${handIndex}`);
        playerHand.push(deck.pop());
        debug && console.log(playerHand);
      }

      // Check to see if hand in play can be split
      while (this.checkSplit(playerHand, dealerHand) && playerHands.length < maxSplit) {
        debug && console.log('Player splits.');
        // Add it to the hand stack
        playerHands.push([playerHand.pop()]);
        debug && console.log(`Player receives card on split hand ${handIndex}`);
        // Add another card to see if we can split again
        playerHand.push(deck.pop());
      }

      // Hit it until we no longer can
      let iterationResult;
      let iterationCount = 0;
      while ((iterationResult = this.playerIteration(playerHand, dealerHand)) !== 'STAND') {
        debug && console.log(`[${handIndex}] Player does:`, iterationResult);
        playerHand.push(deck.pop());
        debug && console.log(playerHand);
        if (!iterationCount) {
          // If first play
          if (iterationResult === 'DD') {
            debug && console.log(`[${handIndex}] Player doubles down!`);
            bets[handIndex] += bet;
            bankroll -= bet;
          } else if (allowSurrender && iterationResult === 'SURRENDER') {
            // If we allow surrender, player surrenders, otherwise keeps
            //   card they just hit with and continues
            debug && console.log(`[${handIndex}] Player surrenders.`);
            playerHand.splice(0, playerHand.length);
            bets[handIndex] = bet / 2;
            bankroll += bet / 2;
            break;
          }
        }
        iterationCount++;
      }

      debug && console.log(`[${handIndex}] Player stands`);
      handIndex++;

    } while (handIndex < playerHands.length);

    dealerHand = this.dealerPhase(deck, dealerHand, debug);
    debug && console.log('Dealer stands');

    // Reduction step over all player hands to see net outcome
    return playerHands.reduce((sum, playerHand, i) => {
      return sum + this.handResult(playerHand, dealerHand, bets[i], i, true, debug);
    }, 0);

  }

  /**
  * Creates an initial player and dealer hands in order from deck: P, D, P, D
  * @param {array} deck The deck to draw from
  * @returns {object} {player: [..], dealer: [..]}
  */
  static setupHands (deck) {

    let playerHand = [deck.pop()];
    let dealerHand = [deck.pop()];
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());

    return {
      player: playerHand,
      dealer: dealerHand
    };

  }

  /**
  * Determines if a player should split a hand. If no information is present,
  *  they will follow basic strategy instead (i.e. treat 5,5 as a 10)
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @returns {boolean}
  */
  static checkSplit (playerHand, dealerHand) {
    let playerSum = this.handSum(playerHand);
    let dealerShow = dealerHand[dealerHand.length - 1];
    return playerHand.length === 2 &&
      playerHand[0].substr(1) === playerHand[1].substr(2) &&
      STRATEGY.PAIR[playerSum][dealerShow] === 'SPLIT';
  }

  /**
  * Checks whether there's a blackjack in either player or dealer hand,
  *   used to immediately jump to conclusion of a hand before play commences
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @returns {boolean}
  */
  static checkBlackjack (playerHand, dealerHand) {
    return this.isBlackjack(playerHand) || this.isBlackjack(dealerHand);
  }

  /**
  * Returns financial result of a blackjack hand
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @param {number} bet The amount wagered
  * @param {number} blackjackPayout Typically 3/2 or 6/5
  * @param {boolean} debug Enable to see logging
  * @returns {number} +'ve win, -'ve loss, 0 push
  */
  static blackjackResult (playerHand, dealerHand, bet, blackjackPayout, debug) {

    let playerBlackjack = this.isBlackjack(playerHand);
    let dealerBlackjack = this.isBlackjack(dealerHand);

    if (playerBlackjack && dealerBlackjack) {
      debug && console.log('Blackjack PUSH.');
      return 0;
    } else if (playerBlackjack) {
      debug && console.log('Player Blackjack, player wins!');
      return bet * blackjackPayout;
    } else if (dealerBlackjack) {
      debug && console.log('Dealer Blackjack, dealer wins.');
      return -bet;
    } else {
      // Should never happen
      console.log('Dealer :: ', dealerHand);
      console.log('Player :: ', playerHand);
      throw new Error('Invalid blackjack result, don\'t call .blackjackResult without a blackjack');
    }

  }

  /**
  * Automatically iterates through dealer phase of a Blackjack hand
  * @param {array} deck The deck to draw from
  * @param {array} dealerHand The dealer's hand
  * @param {boolean} debug Enable to see logging
  * @param {}
  */
  static dealerPhase (deck, dealerHand, debug) {
    let iterationResult;
    while ((iterationResult = this.dealerIteration(dealerHand)) !== 'STAND') {
      debug && console.log('Dealer does:', iterationResult);
      dealerHand.push(deck.pop());
      debug && console.log(dealerHand);
    }
    return dealerHand;
  }

  /**
  * Peace of mind verification that a hand is at logical conclusion based on
  *  provided strategy tables.
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @returns {boolean}
  */
  static verifyHand (playerHand, dealerHand) {
    let playerResult = this.playerIteration(playerHand, dealerHand.slice(0, 2));
    let dealerResult = this.dealerIteration(dealerHand);
    return (playerResult === 'STAND' || playerResult === 'SURRENDER') &&
      dealerResult === 'STAND';
  }

  /**
  * A more descriptive form of .verifyHand, used to provide feedback on optimal
  *  strategy if using library with a human player
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @returns {object}
  */
  static assessPlay (playerHand, dealerHand, action) {
    let playerResult = this.playerIteration(playerHand, dealerHand.slice(0, 2));
    if (playerResult !== action) {
      return {assessment: false, suggested: playerResult, actual: action};
    } else {
      return {assessment: true, suggested: playerResult, actual: action};
    }
  }

  /**
  * Calculates the financial result of a hand
  * @param {array} playerHand The hand of the player
  * @param {array} dealerHand The hand of the dealer
  * @param {number} bet The amount wagered on the hand
  * @param {number} index The index of the hand in the case of splits
  * @param {boolean} verify Whether or not to verify perfect play (simulation footgun prevention)
  * @param {boolean} debug Enable to view logging
  * @returns {number} +'ve win, -'ve loss, 0 push
  */
  static handResult (playerHand, dealerHand, bet, index = 0, verify = false, debug = false) {

    // If player has no cards, it means they surrendered.
    //  bet should be adjusted to 1/2 bet beforehand
    if (!playerHand.length) {
      return -bet; // Surrender
    }

    if (verify && !this.verifyHand(playerHand, dealerHand)) {
      // Should never happen, footgun prevention when altering play calculations
      console.log('[${index}] Dealer :: ', dealerHand);
      console.log(`[${index}] Player :: `, playerHand);
      throw new Error(`[${index}] Invalid hand result`);
    }

    let playerSum = this.handSum(playerHand);
    let dealerSum = this.handSum(dealerHand);

    if (this.hasAce(playerHand) && (playerSum + 10 <= 21)) {
      playerSum += 10;
    }

    if (this.hasAce(dealerHand) >= 0 && (dealerSum + 10 <= 21)) {
      dealerSum += 10;
    }

    debug && console.log(`[${index}] Dealer sum`, dealerSum);
    debug && console.log(`[${index}] Player sum`, playerSum);

    if (playerSum > 21) {
      debug && console.log(`[${index}] Player bust, dealer wins.`);
      return -bet;
    } else if (dealerSum > 21) {
      debug && console.log(`[${index}] Dealer bust, player wins!`);
      return bet;
    } else if (playerSum > dealerSum) {
      debug && console.log(`[${index}] Player wins!`);
      return bet;
    } else if (dealerSum > playerSum) {
      debug && console.log(`[${index}] Dealer wins.`);
      return -bet;
    } else if (dealerSum === playerSum) {
      debug && console.log(`[${index}] PUSH`);
      return 0;
    } else {
      // Should never happen, footgun prevention
      console.log(`[${index}] Dealer :: `, dealerHand);
      console.log(`[${index}] Player :: `, playerHand);
      throw new Error(`[${index}] Invalid Blackjack event`);
    }

  }

}

/**
* Simulates Blackjack table sessions with custom rulesets
* @class
*/
Blackjack.Table = class Table {

  /**
  * Creates a Table session simulator with specified options
  * @param {object} options An object of options
  * @param {number} options.deckCount The number of decks to use
  * @param {number} options.initialBankroll Initial bankroll when seated
  * @param {number} options.targetBankroll Target bankroll
  *   (with stategy 'underTarget')
  * @param {number} options.minimumBet Minimum betting unit
  * @param {number} options.strategy Progressive betting strategy
  *   = ['minimum', 'double', 'linear']
  * @param {number} options.maxHands Target hand count
  *   (with strategy 'underMaxHands')
  * @param {number} options.playRequirement Simulated play style -
  *   under which conditions does player remain at table?
  *   = ['underTarget', 'underMaxHands', 'underTargetAndMaxHands']
  * @param {number} options.blackjackPayout Typically 3 / 2 or 6 /5
  * @param {number} options.allowSurrender Can player surrender?
  * @param {number} options.maxSplit Number of times player can split, 2 - 4
  * @param {number} options.debug Enable logging for play
  * @returns Blackjack.Table
  */
  constructor (options = {}) {

    options.deckCount = options.deckCount || 6;
    options.initialBankroll = options.initialBankroll || 100;
    options.targetBankroll = options.targetBankroll || 200;
    options.minimumBet = options.minimumBet || 5;
    options.strategy = this.constructor.strategies[options.strategy] ?
      options.strategy : this.constructor.defaultStrategy;
    options.maxHands = options.maxHands || null;
    options.playRequirement = this.constructor.playRequirements[options.playRequirement] ?
      options.playRequirement : this.constructor.defaultPlayRequirement;

    options.blackjackPayout = options.blackjackPayout || 3 / 2;
    options.allowSurrender = !!options.allowSurrender || true;
    options.maxSplit = options.maxSplit ?
      Math.min(Math.max(parseInt(options.maxSplit) || 1, 1), 4) :
      4;

    options.debug = !!options.debug || false;

    this.options = options;

  }

  /**
  * Runs a table simulation and provides statistics of session based on provided
  *   options during instantiation
  * @returns {object}
  */
  simulate () {

    let debug = this.options.debug;
    let deckCount = this.options.deckCount;
    let initialBankroll = this.options.initialBankroll;
    let targetBankroll = this.options.targetBankroll;
    let minimumBet = this.options.minimumBet;
    let bettingStrategy = this.options.strategy;
    let maxHands = this.options.maxHands;
    let fnStrategy = this.constructor.strategies[this.options.strategy];
    let fnPlayRequirement = this.constructor.playRequirements[this.options.playRequirement];

    let blackjackPayout = this.options.blackjackPayout;
    let allowSurrender = this.options.allowSurrender;
    let maxSplit = this.options.maxSplit;

    let bankroll = initialBankroll;
    let bet = minimumBet;
    let handCount = 0;
    let winCount = 0;
    let lossCount = 0;
    let drawCount = 0;

    let deck = Blackjack.shuffle(deckCount);

    while (
      bankroll >= minimumBet &&
      fnPlayRequirement(handCount, maxHands, bankroll, initialBankroll, targetBankroll)
    ) {
      let result = Blackjack.playHand(deck, bankroll, bet, blackjackPayout, allowSurrender, maxSplit, debug);
      if (result < 0) {
        lossCount++;
      } else if (result > 0) {
        winCount++;
      } else {
        drawCount++;
      }
      handCount++;
      bankroll += result;
      bet = Math.min(fnStrategy(result > 0, bet, minimumBet), bankroll);
      if (deck.length < 26) {
        deck = Blackjack.shuffle(deckCount);
      }
    }

    debug && console.log(`Played ${handCount} hands.`);

    return {
      bankroll: bankroll,
      hands: handCount,
      wins: winCount,
      losses: lossCount,
      draws: drawCount,
      minTime: handCount / this.constructor.maxHandsPerHour,
      maxTime: handCount / this.constructor.minHandsPerHour,
      bankrupt: bankroll < minimumBet,
      houseTake: (initialBankroll - bankroll),
      amountBet: (initialBankroll)
    };

  }

};

/**
* A list of strategies for progressive betting: what is my next bet based on
*   my previous bet and outcome of the hand?
*/
Blackjack.Table.strategies = {
  minimum: (win, lastBet, minimumBet) => minimumBet,
  double: (win, lastBet, minimumBet) => win ? minimumBet : lastBet * 2,
  linear: (win, lastBet, minimumBet) => win ? minimumBet : lastBet + minimumBet
};

/**
* Table simulation play requirements: under which circumstances do I continue
*   to play hands? (Have not lost bankroll is a given)
*/
Blackjack.Table.playRequirements = {
  underTarget: (handCount, maxHands, bankroll, initialBankroll, targetBankroll) => {
    return bankroll < targetBankroll;
  },
  underTargetAndMaxHands: (handCount, maxHands, bankroll, initialBankroll, targetBankroll) => {
    return bankroll < targetBankroll && handCount < maxHands;
  },
  underMaxHands: (handCount, maxHands, bankroll, initialBankroll, targetBankroll) => {
    return handCount < maxHands;
  }
};

/**
* Defaults and statistics calculations
*/
Blackjack.Table.defaultStrategy = 'minimum';
Blackjack.Table.defaultPlayRequirement = 'underTarget';
Blackjack.Table.minHandsPerHour = 60;
Blackjack.Table.maxHandsPerHour = 120;

module.exports = Blackjack;
