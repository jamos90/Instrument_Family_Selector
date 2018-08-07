const InstrumentSelect = function () {
  this.element = element;
}

InstrumentSelect.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-intruments-loaded' (evt) =>{
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
  insturmentData.forEach((instrument, index) => }{
     const item = document.createElement('option');
     option.textContent = instrument.name;
     option.value = index;
     this.element.appendChild(item);
  });
};

module.exports = InstrumentSelect;
