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

InstrumentInformation.prototype.render = function(intrument) {
  const instrumentHeading = document.createElement('h1');
  const instrumentInformation = document.createElement('p');
  instrumentHeading.textContent = intrument.name;
  instrumentInformation.textContent = intrument.description;
  this.container.innerHTML = " ";
  this.container.appendChild(instrumentHeading);
  this.container.appendChild(instrumentInformation);
  console.log(intrument);


};

module.exports = InstrumentInformation;
