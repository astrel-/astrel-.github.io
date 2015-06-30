(function() {
  App.ApplicationController = Ember.Controller.extend({
    team1: "Na'Vi",
    team2: "Alliance",
    coef1: 1.5,
    coef2: 1.5,
    money: 10,
    r: (function() {
      var prob1, prob2;
      prob1 = 1 / 1.5;
      prob2 = 1 / 1.5;
      return 100 * (prob1 + prob2 - 1).toFixed(2);
    }).property(),
    ratio: (function() {
      var coef1, coef2;
      coef1 = this.get('coef1');
      coef2 = this.get('coef2');
      return coef1 / coef2;
    }).property(),
    actions: {
      go: function() {
        var coef1, coef2, newR, oldR;
        coef1 = this.get('coef1');
        coef2 = this.get('coef2');
        oldR = 1 / coef1 + 1 / coef2 - 1;
        newR = (this.get('r')) / 100;
        console.log(oldR);
        console.log(newR);
        this.set('coef1', (coef1 * (oldR + 1) / (newR + 1)).toFixed(2));
        return this.set('coef2', (coef2 * (oldR + 1) / (newR + 1)).toFixed(2));
      },
      changeRatio: function() {
        var coef1, coef2, newRatio, oldRatio;
        coef1 = this.get('coef1');
        coef2 = this.get('coef2');
        oldRatio = coef1 / coef2;
        newRatio = (this.get('ratio')) / 1;
        console.log(oldRatio + 1);
        console.log(newRatio + 1);
        this.set('coef1', (coef1 * (newRatio + 1) / (oldRatio + 1)).toFixed(2));
        return this.set('coef2', (coef2 * (newRatio + 1) / (oldRatio + 1) * oldRatio / newRatio).toFixed(2));
      },
      bet: function(team) {
        var coef, model, money;
        model = this.get('model');
        money = (this.get('money')) / 1;
        if (team === 1 && money) {
          coef = this.get('coef1');
          this.set('model.total', (model.total / 1 + money).toFixed(2));
          this.set('model.needtoPay1', (model.needtoPay1 / 1 + money * coef).toFixed(2));
          model.team1.pushObject({
            money: money,
            coef: coef
          });
        }
        if (team === 2 && money) {
          coef = this.get('coef2');
          this.set('model.total', (model.total / 1 + money).toFixed(2));
          this.set('model.needtoPay2', (model.needtoPay2 / 1 + money * coef).toFixed(2));
          model.team2.pushObject({
            money: money,
            coef: coef
          });
        }
        return this.set('model', model);
      }
    }
  });

}).call(this);
