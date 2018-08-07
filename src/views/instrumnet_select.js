const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelect = function (element) {
  this.element = element;
}

InstrumentSelect.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-intruments-loaded', (evt) =>{
    const allInstruments = evt.detail;
    console.log(allInstruments);
    this.populate(allInstruments);
  });
  this.element.addEventListener("change", (evt) => {
    const selectedInstrument = evt.target.value;
    PubSub.publish('Instruments:selected-instrument', selectedInstrument);

  });
};

InstrumentSelect.prototype.populate = function (insturmentData) {
  insturmentData.forEach((instrument, index) => {
     const item = document.createElement('option');
     item.textContent = instrument.name;
     item.value = index;
     console.log(item.value);
     this.element.appendChild(item);
  });
};

module.exports = InstrumentSelect;
