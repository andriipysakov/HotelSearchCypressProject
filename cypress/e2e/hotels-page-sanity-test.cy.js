///<reference types = "Cypress"/>

describe('The sanity test suite for Hotels page', () => {
          
    it('verify elements of Hotels tab', () => {
      cy.visit('http://localhost:3000')
      cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
      cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should("be.visible")
      cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
      cy.get('#input-start').should("be.visible")
      cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
      cy.get('#input-end').should("be.visible")
      cy.get(':nth-child(3) > .label').should("be.visible")
      cy.get('#info').should("be.visible")
      cy.get('[data-cy="flight_chk"]').should("be.visible")
      cy.get('[data-cy="cars_chk"]').should("be.visible")
      cy.get('#tab1 > form > .btn-submit').should("be.visible")

      cy.contains('Going to').should("be.visible")
      cy.contains('check-in').should("be.visible")
      cy.contains('check-out').should("be.visible")
      cy.contains('travellers').should("be.visible")
      cy.contains('Add a flight').should("be.visible")
      cy.contains('Add a flight').should("be.visible")
      cy.contains('search').should("be.visible")
      
  
    })
  
  
  })