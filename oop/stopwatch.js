class Timer {
  second;
  constructor(sec) {
    this.second = sec;
  }

  tick() {
    return this.second++;
  }

  display() {
    console.log(this.second);
  }
}

const stopwatch = new Timer(10);

setInterval(() => {
  stopwatch.tick();
  console.clear();
  stopwatch.display();
}, 1000);
