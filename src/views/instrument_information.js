const PubSub = require('../helpers/pub_sub.js');

const InsturmentInformation = function(container){
  this.container = container;
}

InsturmentInformation.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument:instrument-information', (evt) => {
    const selectedInstrument = evt.detail;
    console.log(selectedInstrument);
    this.render(selectedInstrument);
  });

};

module.exports = InsturmentInformation;
