const InstrumentSelect = require('./views/instrument_select.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const element = document.querySelector('select#instrument-families');
const InstrumentSelect = new InstrumentSelect(element);
InstrumentSelect.bindEvents(); 


});
