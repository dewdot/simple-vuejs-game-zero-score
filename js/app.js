var vueApp = new Vue({
  el: "#vue-element",
  data: {
    healthYou: 100,
    healthCom: 100,
    startGame: true,
    logs: [],
  },
  methods: {
    startGame: function() {
      this
    },
    starNewtGame: function(){
      this.healthYou = 100,
      this.healthCom = 100,
      this.logs = []
    },
    attack: function() {
      var attackValueYou = Math.floor(Math.random()*10);
      var attackValueCom = Math.floor(Math.random()*10);
      this.healthYou = this.healthYou - attackValueYou;
      this.healthCom = this.healthCom - attackValueCom;
      if(this.healthYou <= 0) {
        alert('Sorry, you lost')
      };
      if(this.healthCom <= 0) {
        alert('Congratulation, you won!!')
      };
      this.logs.unshift("You lost " + attackValueYou + " points and computer lost " + attackValueCom + " points.");

    }
  },
})