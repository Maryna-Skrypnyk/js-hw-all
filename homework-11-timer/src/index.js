class CountdownTimer {
  constructor({ selector, targetTime, onTick, onChangeLabel }) {
    this.selector = selector;
    this.intervalId = null;
    this.targetTime = targetTime;
    this.onTick = onTick;
    this.onChangeLabel = onChangeLabel;
  }

  startTimer() {
    this.start();
    this.intervalId = setInterval(() => {
      this.start();
    }, 1000);
  }

  start() {
    const currentTime = Date.now();
    const deltaTime = this.targetTime - currentTime;
    if (deltaTime <= 0) {
      clearInterval(this.intervalId);
      return;
    }
    const timeComponents = this.getTimeComponents(deltaTime);
    this.onTick(timeComponents);
    this.onChangeLabel(timeComponents);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const updateTimerFace = ({ days, hours, mins, secs }) => {
  // refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
  document.querySelector('[data-value="days"]').textContent = days;
  document.querySelector('[data-value="hours"]').textContent = hours;
  document.querySelector('[data-value="mins"]').textContent = mins;
  document.querySelector('[data-value="secs"]').textContent = secs;
};

function updateLabelFace({ days, hours, mins, secs }) {
  document.querySelector('[data-label="days"]').textContent =
    days == 1 ? 'Day' : 'Days';
  document.querySelector('[data-label="hours"]').textContent =
    hours == 1 ? 'Hour' : 'Hours';
  document.querySelector('[data-label="mins"]').textContent =
    mins == 1 ? 'Minute' : 'Minutes';
  document.querySelector('[data-label="secs"]').textContent =
    secs == 1 ? 'Second' : 'Seconds';
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetTime: new Date('Sep 27, 2022'),
  // targetDate: new Date('May 22, 2021 14:41:00'),
  onTick: updateTimerFace,
  onChangeLabel: updateLabelFace,
});

timer.startTimer();
