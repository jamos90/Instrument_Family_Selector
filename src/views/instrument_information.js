const PubSub = require('../helpers/pub_sub.js');

const InstrumentInformation = function(container){
  this.container = container;
}

InstrumentInformation.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument:instrument-information', (evt) => {
    const selectedInstrument = evt.detail;
    console.log(selectedInstrument);
    this.render(selectedInstrument);
  });
};

InstrumentInformation.prototype.createElements = function(intrument) {
  instrumentHeading = document.createElement('h1');
  instrumentInformation = document.createElement('p');
  instrumentsHolder = document.createElement('ul');
  instrumentHeading.textContent = intrument.name;
  instrumentInformation.textContent = intrument.description;

};


InstrumentInformation.prototype.render = function(intrument) {
  this.createElements(intrument);
  this.container.innerHTML = " ";
  this.container.appendChild(instrumentHeading);
  this.container.appendChild(instrumentInformation);
  this.container.appendChild(instrumentsHolder);
  intrument.instruments.forEach(information => {
    const infoPice = document.createElement('li');
    infoPice.textContent = information;
  instrumentsHolder.appendChild(infoPice);
  });

  console.log(intrument);


};

module.exports = InstrumentInformation;
