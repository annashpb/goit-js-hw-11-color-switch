"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.switcherId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },
  stop() {
    clearInterval(this.switcherId);
    this.isActive = false;
  }
};

refs.startBtn.addEventListener("click", colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener("click", colorSwitch.stop.bind(colorSwitch));
