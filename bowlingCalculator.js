class BowlingCalculator {
  constructor() {
    this.frames = [
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
    ];
  };

  registerNextRoll(pinsKnocked) {
    for(let i = 0 ; i < this.frames.length ; i++) {
      let frame = this.frames[i];

      for(let j = 0 ; i < frame.length ; i++) {
        if (frame[j] === null) {
          frame[j] = pinsKnocked;

          if (pinsKnocked === 10 && j === 0 && i && i !== this.frames.length - 1) {
            frame[j + 1] = 'x';
          };

          return
        };
      };
    };
  };

  getScore() {
    let totalScore = 0;
    for(let i = 0 ; i < this.frames.length - 1 ; i++) {
      let frame = this.frames[i];

      for(let j = 0 ; i < frame.length ; i++) {
        if (frame[j] !== null && frame[j] !== 'x') {
          totalScore += frame[j];
        };
      };

      let roll1 = frame[0];
      let roll2 = frame[1];

      if (roll1 === 10) {
        totalScore += getStrikeExtraPoints(i);
      } else if (roll1 + roll2 === 10) {
        totalScore += getSpareExtraPoints(i);
      };
    };

    return totalScore;
  };

  canStillPlay() {
    for(let i = 0 ; i < this.frames.length - 1 ; i++) {
      frame = this.frames[i];
      frame.forEach((roll) => {
        if (roll === null) {
          return true
        };
      });

      canPlayBonusFrame()
      return false
    };
  };

  getStrikeExtraPoints(i) {
    let counter = 0;
    let extraScore = 0;

    for(let j = i + 1 ; j < this.frames.length ; j++) {
      nextFrame = this.frames[j];
      for(let k = 0 ; k < nextFrame.length ; k++) {
        roll = nextFrame[k];
        if (roll !== null && roll !== 'x' && counter < 2) {
          extraScore += roll;
          counter += 1;
        };
      };
    };

    return extraScore
  };

  getSpareExtraPoints(i) {
    let extraScore = 0;
    let nextFrame = this.frames[i + 1];
    let nextRoll = nextFrame[0];

    if (nextRoll !== null) {
      extraScore += nextRoll
    };

    return extraScore;
  };

  canPlayBonusFrame() {
    lastFrame = this.frames[this.frames.length - 2];
    extraFrame = this.frames[this.frames.length - 1];
    canPlaySpare = extraFrame[0] === null && lastFrame[0] + lastFrame [1] == 10;
    canPlayStrike = extraFrame[1] === null && last_frame[0] === 10

    if (canPlaySpare) {
      return true;
    };

    if (canPlayStrike) {
      return false;
    };
  };
};

// let bowlingCalculator = new BowlingCalculator();

// while (bowlingCalulator.canStillPlay()) {
//   pinsKnocked = prompt('Insert the number of pins knocked out', '0');
//   bowlingCalculator(registerNextRoll());
// };

module.exports = BowlingCalculator;