/// <reference types="cypress" />

const { escapeSelector } = require("cypress/types/jquery");

it('Equality',  () => {
const a = 1;

expect(a).equal(1);
expect(a, 'Deveria ser 1').equal(1);
expect(a).to.be.equal(1);
expect('a').not.to.be.equal('b')

})

it('Truthy', () =>{
const a = true;
const b= null;
const c;

expect(a).to.be.true;
expect(true).to.be.true;
escapeSelector(b).to.be.null;


})