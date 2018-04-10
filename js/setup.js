'use strict';

var NUMBER_OF_WIZARDS = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomIndex = function (array) {
  var random = Math.floor(Math.random() * array.length);

  return random;
};

var generateWizards = function (maxWizards, names, surnames, coats, eyes) {
  var wizards = [];

  for (var i = 0; i < maxWizards; i++) {
    var wizard = {
      wizardName: names[generateRandomIndex(names)],
      wizardSurname: surnames[generateRandomIndex(surnames)],
      wizardCoatColor: coats[generateRandomIndex(coats)],
      wizardEyeColor: eyes[generateRandomIndex(eyes)]
    };

    wizards.push(wizard);
  }

  return wizards;
};

var wizardCollection = generateWizards(NUMBER_OF_WIZARDS, wizardNames, wizardSurnames, coatColors, eyeColors);
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizards, index) {
  var wizard = template.cloneNode(true);
  var wizardInfo = '';
  if (Math.floor(Math.random() * 11) >= 5) {
    wizardInfo = wizards[index].wizardName + ' ' + wizards[index].wizardSurname;
  } else {
    wizardInfo = wizards[index].wizardSurname + ' ' + wizards[index].wizardName;
  }

  wizard.querySelector('.setup-similar-label').textContent = wizardInfo;
  wizard.querySelector('.wizard-coat').style.fill = wizards[index].wizardCoatColor;
  wizard.querySelector('.wizard-eyes').style.fill = wizards[index].wizardEyeColor;

  return wizard;
};

var displayWizardList = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardCollection.length; i++) {
    fragment.appendChild(renderWizard(wizardCollection, i));
  }

  var setupSimilarList = document.querySelector('.setup-similar-list');
  setupSimilarList.appendChild(fragment);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

displayWizardList();
