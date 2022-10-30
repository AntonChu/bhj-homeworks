class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();

    this.timeId = null;

  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const action = document.querySelector('body');
    const word = document.getElementsByClassName('symbol');
    const time = document.getElementsByClassName('status__time');

    // time[0].textContent = word.length;
    time[0].textContent = word.length;

    this.timeId = setInterval(() => {
      time[0].textContent--;

      if(+time[0].textContent === 0){
        this.fail();
      }
    }, 1000);

    console.log(this.timeId);

    action.addEventListener('keydown', press => {
      if(press.shiftKey){
        console.log('stop');
        return;
      }

      let currentletter = this.currentSymbol.textContent;
      // time[0].textContent = word.length;

      // this.timeId = setInterval(() => {
      //   time[0].textContent--;

      //   if(+time[0].textContent === 0){
      //     this.fail();
      //   }
      // }, 1000);

      console.log(this.timeId);

      if(press.key === currentletter){
        this.success();
      }else{
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
   
    this.setNewWord();
    clearInterval(this.timeId);
  }

  fail() {
    clearInterval(this.timeId);

    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }

    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

