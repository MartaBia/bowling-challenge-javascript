const BowlingCalculator = require('./bowlingCalculator');

describe('BowlingCalculator', () => {
  it('returns the final score with no strikes or spares', () => {
    let bowlingCalculator = new BowlingCalculator;
    for(let i = 0 ; i <= 20 ; i++) {
      bowlingCalculator.registerNextRoll(1);
    };

    expect(bowlingCalculator.getScore()).toBe(20);   
  });
});