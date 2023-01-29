const BowlingCalulator =  require('./bowlingCalculator')

class BowlingFormatter {
  constructor(bowlingCalulator) {
    this.bowlingCalculator = bowlingCalulator;
  };

  run() {
    console.log('Welcome to the Bowling Calculator!');
    runBowlingCalculator();
  };

  runBowlingCalculator() {
    while (this.bowlingCalulator.canStillPlay()) {
      pinsKnocked = prompt('Insert the number of pins knocked out', '0');
      this.bowlingCalculator(registerNextRoll());
    };
    console.log(`The final score is: ${this.bowlingCalculator.getScore()}`);
    return
  };
};

let bowlingFormatter = new BowlingFormatter(new BowlingCalulator());
bowlingFormatter.run()