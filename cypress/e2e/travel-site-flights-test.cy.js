describe('The flight tab test will verify the flights funcionality', () => {

    const flights_tab = '[data-cy="Flight"]'
    // const origin_placeholder = '[placeholder="City or airport"][name="origin"]'
    const origin_placeholder = '[name="origin"]'
    const destination_placeholder = '[name="destination"]'

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })


    // it('navigate to the flights tab', () => {
    //     cy.get(origin_placeholder).should("be.visible")
    //     cy.get(flights_tab).invoke('attr', 'aria-expanded').should("eq", "true")
    //     cy.get(flights_tab).invoke('text').should("eq", "flight")

    // })

    it('populates origin and destination', () => {
        cy.get(origin_placeholder).type("Paris").invoke("val").should("eq", "Paris")
        cy.get(destination_placeholder).type("Berlin").invoke("val").should("eq", "Berlin")

        // cy.get(origin_placeholder).invoke("val").should("eq", "Paris")
        // cy.get(destination_placeholder).invoke("val").should("eq", "Berlin")

    })


})