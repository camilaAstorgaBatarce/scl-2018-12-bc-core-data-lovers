global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/pokemon/pokemon.js')
require('../src/data.js');

describe('window.pokemons', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.pokemons, 'object' );
  })
})

describe('window.pokemons.computeStats', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.pokemons.computeStats, 'function');
  })
})
describe('window.pokemons.filterByType', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.pokemons.filterByType, 'function' );
})

describe('window.pokemons.filterByType', () => {
  it('debería devolver "Bulbasaur" al hacer click en "Poison', () => {
    window.assert.equal(window.pokemons.filterByType(window.POKEMON.pokemon, "Poison")[0].name, "Bulbasaur")
  })
})

describe('window.pokemons.filterByType', () => {
  it('debería devolver "Bulbasaur" al hacer click en "Grass', () => {
    window.assert.equal(window.pokemons.filterByType(window.POKEMON.pokemon, "Grass")[0].name, "Bulbasaur")
  })
})
});

describe('window.pokemons.sortData', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.pokemons.sortData, 'function' );
  })

  it ('deberia devolver los pokemones ordenados de la A a la Z', () =>{
    let orderAz = window.pokemons.sortData(window.POKEMON.pokemon,"name", true)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Abra", "Aerodactyl", "Alakazam"])  
  }) 

  it ('deberia devolver los pokemones ordenados de la Z a la A', () =>{
    let orderAz = window.pokemons.sortData(window.POKEMON.pokemon,"name", false)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Zubat", "Zapdos", "Wigglytuff"])  
  }) 
});