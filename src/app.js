const InstrumentSelect = require('./views/instrumnet_select.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const element = document.querySelector('select#instrument-families');
const instrumentSelect = new InstrumentSelect(element);
instrumentSelect.bindEvents();

const instrumentFamilies = new InstrumentFamilies();
instrumentFamilies.bindEvents();


});
