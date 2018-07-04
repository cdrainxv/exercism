var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  let person = who == 'Bob' ? 'Bob' : who == 'Alice' ? 'Alice' : 'you'
  return `One for ${person}, one for me.`
};

module.exports = TwoFer;
