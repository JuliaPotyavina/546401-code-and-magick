'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_GAP = 16;
var USER_GAP = 25;
var COLOR_PLAYER = 'rgba(255, 0, 0, 1)';

// Находим максимальное значение в массиве
var getMaxTime = function (arr) {
  var maxValue = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

// Функция определения рандомного синего цвета
var getRandomBlue = function () {
  return 'hsl(240,' + Math.floor(Math.random() * 101) + '%, 40%)';
};

// Облако методом line.to
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(320, 44);
  ctx.lineTo(530, 20);
  ctx.lineTo(530, 290);
  ctx.lineTo(320, 276);
  ctx.lineTo(110, 290);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 34);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 266);
  ctx.lineTo(100, 280);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // Текст внутри облака
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + USER_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + USER_GAP + FONT_GAP + GAP);

  var maxTime = getMaxTime(times);

  // Гистограмма
  for (var i = 0; i < names.length; i++) {
    var xCoordinate = CLOUD_X + BAR_GAP + GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentBarHeight = Math.floor(times[i] / maxTime * BAR_HEIGHT);
    if (names[i] !== 'Вы') {
      ctx.fillStyle = getRandomBlue();
    } else {
      ctx.fillStyle = COLOR_PLAYER;
    }
    ctx.fillText(names[i], xCoordinate, CLOUD_HEIGHT - USER_GAP + GAP);
    ctx.fillRect(xCoordinate, CLOUD_HEIGHT - USER_GAP, BAR_WIDTH, -currentBarHeight);
    ctx.fillText(Math.floor(times[i]), xCoordinate, CLOUD_HEIGHT - currentBarHeight - FONT_GAP - USER_GAP);
  }
};


