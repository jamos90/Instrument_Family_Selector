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

InstrumentInformation.prototype.render = function (intrument) {
  const instrumentHeading = document.createElement('h1');
  const instrumentInformation = document.createElement('p');
  instrumentHeading.textContent = instrument.name;
  instrumentInformation.textContent = instrument.description;
  container.appendChild(instrumentHeading);
  container.appendChild(instrumentInformation);
  container.innerHtml = "";
};

module.exports = InstrumentInformation;
