const InstrumentSelect = function () {
  this.element = element;
}

InstrumentSelect.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-intruments-loaded' (evt) =>{
    const allInstruments = evt.detail;
    console.log(allInstruments);
    this.populate(allInstruments);
  });

};
