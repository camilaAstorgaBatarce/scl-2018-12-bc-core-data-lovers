global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/pokemon/pokemon.js')
require('../src/data.js');

//const assert = require("assert");

describe('window.pokemons.filterData', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.pokemons.filterData, 'function' );
  });
})

describe('window.pokemons.sortData', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.pokemons.sortData, 'function' );
  });
})

describe('window.pokemons', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.pokemons, 'object' );
  });
})